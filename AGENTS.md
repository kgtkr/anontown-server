# AI コーディングガイドライン & リポジトリ規約 (anontown-server)

このドキュメントは、当リポジトリ（`anontown-server`）のアーキテクチャ、設計パターン、コーディング規約、開発ワークフローをまとめたAIエージェント向けの指示書です。

---

## 1. 全体アーキテクチャ (Hexagonal / Clean Architecture)

コードベースは `packages/server/src` を中心に、責務ごとに明確にレイヤー分けされています。

```
src/
├── entities/    # ドメインエンティティ & ドメインロジック（最内層・ビジネスルール）
├── ports/       # インターフェース定義（リポジトリ、外部サービス等の抽象）
├── usecases/    # アプリケーション層ユースケース（プロトコル非依存の業務フロー）
├── adapters/    # Ports の具体実装（Prisma、Faktory、Logger等）
├── schema/      # GraphQL スキーマ定義・リゾルバ（外部インターフェース層）
├── jobs/        # バックグラウンドジョブ定義
├── at-error.ts  # ドメイン／アプリケーション共通エラー定義
└── createPorts.ts # 依存性の注入（DIコンテナの組み立て）
```

### 各レイヤーの責務とルール

1. **Entities (`src/entities/`)**:
   - ドメインのコアロジックをカプセル化。
   - `Immutable.js`（`Record`, `List` 等）やイミュータブルな設計（`Copyable` パターン）を採用。
   - `fp-ts` の `Option`（`Option<T>`）を内部状態のオプショナル値に活用。
   - **`I*API` (API表現型 / DTO)**:
     - 各エンティティに対応する外部公開用のプレーンなインターフェース（例: `IUserAPI`, `ITopicAPI`, `IResAPI`, `ITokenGeneralAPI` 等）を `src/entities/` 配下で定義する。
     - エンティティから `I*API` への変換は各エンティティの `toAPI(authToken?: Option<IAuthToken>)` メソッドが担う。
     - 認証状態に応じた値（`self: boolean` や投票状態など）の解決も `toAPI` 内で行う。

2. **Ports (`src/ports/`)**:
   - リポジトリや外部サービスのインターフェースを定義。
   - **クエリ型や引数の規約**: `undefined` ではなく `| null` を優先して定義する（例: `topic: string | null;`）。
   - **依存性注入パターン**: `PortPick<"resRepo" | "userRepo">` を使い、各ユースケースで必要な Port のみを型安全に要求する。

3. **Usecases (`src/usecases/`)**:
   - アプリケーションのビジネスフローを実装。
   - **戻り値型**: ドメインエンティティそのものではなく、`I*API`（またはプリミティブ/null）を返す。
   - **シグネチャの統一**:
     ```typescript
     export async function doSomething(
       args: { ... },
       ports: PortPick<"portA" | "portB">
     ): Promise<ResultType> {
       // ...
     }
     ```
   - プロトコル非依存（GraphQL, gRPC, CLI, Job 等から呼び出し可能）とする。
   - 新規作成したユースケースは必ず `src/usecases/index.ts` から export する。

4. **Schema & Resolvers (`src/schema/`)**:
   - GraphQL のリゾルバは**ビジネスロジックを持たず、薄いアダプターとして実装**する。
   - 引数のバリデーションやフォーマット変換（`convertDateQuery` 等）を行い、対応する Usecase を呼び出して結果を返す。
   - **`schema.mappers.ts`**:
     - GraphQL Code Generator (`@eddeee888/gcg-typescript-resolver-files`) のマッパーとして `I*API` を割り当てる：
       ```typescript
       export { IUserAPI as UserMapper } from "../../entities";
       ```
     - これにより GraphQL スキーマ型と `I*API` が型安全にバインドされる。

---

## 2. `I*API` (API表現型) パターン

- **定義場所**: 各ドメインエンティティのファイル内（`src/entities/**`）。
- **用途**:
  - エンティティの内部状態（Immutable.js、ハッシュ値、パスワード等の機密情報）を秘匿し、外部公開用DTOとして安全なプレーンオブジェクトを表現する。
  - Usecase の戻り値型として使用され、GraphQL リゾルバや将来の gRPC/REST エンドポイントへ渡される。
- **変換**:
  - `entity.toAPI(authContainer.getTokenOrNull())` または `entity.toAPI(some(token))` を経由して取得する。
- **GraphQL Mapper へのマッピング**:
  - 各スキーマディレクトリの `schema.mappers.ts` で `export { IFooAPI as FooMapper } from "../../entities";` のように対応付ける。

---

## 3. コーディング規約

### Null / Undefined の扱い
- ドメイン層、Ports層（特にリポジトリのクエリ型 `*RepoQuery` など）、DBとの境界では **`null` を `undefined` より優先**して使用する。
- リゾルバから Usecase / Ports にクエリを渡す際は、`args.query.foo ?? null` のように `null` へ正規化する。
- ドメインエンティティ内部のオプショナル値には `fp-ts/lib/Option`（`fromNullable`, `toNullable`, `some`, `none`, `isSome`, `isNone` 等）を使用する。

### エラーハンドリング
- アプリケーションエラーには `src/at-error.ts` で定義されている `AtError` 派生クラスを使用する：
  - `AtNotFoundError`: リソースが見つからない場合
  - `AtRightError`: 権限エラー・不正な操作（例: 自分自身への投票禁止）
  - `AtPrerequisiteError`: 前提条件違反（例: 既に投票済み）
  - `AtAuthenticationError`: 認証エラー

---

## 4. コード生成 (GraphQL Code Generator)

- スキーマ定義（`src/schema/**/schema.graphql`）を変更した場合は、必ずコード生成を実行する：
  ```bash
  npm --prefix packages/server run codegen
  ```
- **生成ファイル（`*.generated.ts`）は Git のコミット管理対象**。
- CI（GitHub Actions）で `git diff --exit-code` が実行されるため、スキーマ変更と生成結果のコミット漏れがないように注意する。

---

## 5. テストと型チェック

- **型チェック**:
  ```bash
  npm --prefix packages/server exec tsc -- --noEmit
  ```
- **テスト実行**:
  ```bash
  npm --prefix packages/server test
  ```
  - テストではトランザクションロールバック（`$transactionAfterRollback`）を利用してDBの整合性を維持している。