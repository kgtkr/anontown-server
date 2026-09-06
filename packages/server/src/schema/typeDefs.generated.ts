import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 7, end: 15 } },
      directives: [],
      loc: { start: 0, end: 15 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: { kind: "Name", value: "DateQuery", loc: { start: 23, end: 32 } },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "date", loc: { start: 37, end: 41 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 43, end: 51 },
              },
              loc: { start: 43, end: 51 },
            },
            loc: { start: 43, end: 52 },
          },
          directives: [],
          loc: { start: 37, end: 52 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "type", loc: { start: 55, end: 59 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateType",
                loc: { start: 61, end: 69 },
              },
              loc: { start: 61, end: 69 },
            },
            loc: { start: 61, end: 70 },
          },
          directives: [],
          loc: { start: 55, end: 70 },
        },
      ],
      loc: { start: 17, end: 72 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "DateType", loc: { start: 79, end: 87 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "gt", loc: { start: 92, end: 94 } },
          directives: [],
          loc: { start: 92, end: 94 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "gte", loc: { start: 97, end: 100 } },
          directives: [],
          loc: { start: 97, end: 100 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "lt", loc: { start: 103, end: 105 } },
          directives: [],
          loc: { start: 103, end: 105 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "lte", loc: { start: 108, end: 111 } },
          directives: [],
          loc: { start: 108, end: 111 },
        },
      ],
      loc: { start: 74, end: 113 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "CharType", loc: { start: 120, end: 128 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "lc", loc: { start: 133, end: 135 } },
          directives: [],
          loc: { start: 133, end: 135 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "uc", loc: { start: 138, end: 140 } },
          directives: [],
          loc: { start: 138, end: 140 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "d", loc: { start: 143, end: 144 } },
          directives: [],
          loc: { start: 143, end: 144 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ub", loc: { start: 147, end: 149 } },
          directives: [],
          loc: { start: 147, end: 149 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "hy", loc: { start: 152, end: 154 } },
          directives: [],
          loc: { start: 152, end: 154 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "hira", loc: { start: 157, end: 161 } },
          directives: [],
          loc: { start: 157, end: 161 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "kana", loc: { start: 164, end: 168 } },
          directives: [],
          loc: { start: 164, end: 168 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "han", loc: { start: 171, end: 174 } },
          directives: [],
          loc: { start: 171, end: 174 },
        },
      ],
      loc: { start: 115, end: 176 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ValidateData",
        loc: { start: 183, end: 195 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "char", loc: { start: 200, end: 204 } },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CharType",
                loc: { start: 207, end: 215 },
              },
              loc: { start: 207, end: 215 },
            },
            loc: { start: 206, end: 216 },
          },
          directives: [],
          loc: { start: 200, end: 216 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "min", loc: { start: 219, end: 222 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Int", loc: { start: 224, end: 227 } },
            loc: { start: 224, end: 227 },
          },
          directives: [],
          loc: { start: 219, end: 227 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "max", loc: { start: 230, end: 233 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Int", loc: { start: 235, end: 238 } },
            loc: { start: 235, end: 238 },
          },
          directives: [],
          loc: { start: 230, end: 238 },
        },
      ],
      loc: { start: 178, end: 240 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 247, end: 252 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "query", loc: { start: 257, end: 262 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Query",
                loc: { start: 264, end: 269 },
              },
              loc: { start: 264, end: 269 },
            },
            loc: { start: 264, end: 270 },
          },
          directives: [],
          loc: { start: 257, end: 270 },
        },
      ],
      loc: { start: 242, end: 272 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 279, end: 287 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "resisterPushSubscription",
            loc: { start: 292, end: 316 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "endpoint",
                loc: { start: 317, end: 325 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 327, end: 333 },
                  },
                  loc: { start: 327, end: 333 },
                },
                loc: { start: 327, end: 334 },
              },
              directives: [],
              loc: { start: 317, end: 334 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "p256dh",
                loc: { start: 336, end: 342 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 344, end: 350 },
                  },
                  loc: { start: 344, end: 350 },
                },
                loc: { start: 344, end: 351 },
              },
              directives: [],
              loc: { start: 336, end: 351 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "auth",
                loc: { start: 353, end: 357 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 359, end: 365 },
                  },
                  loc: { start: 359, end: 365 },
                },
                loc: { start: 359, end: 366 },
              },
              directives: [],
              loc: { start: 353, end: 366 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 369, end: 376 },
            },
            loc: { start: 369, end: 376 },
          },
          directives: [],
          loc: { start: 292, end: 376 },
        },
      ],
      loc: { start: 274, end: 378 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Subscription",
        loc: { start: 385, end: 397 },
      },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 380, end: 397 },
    },
    {
      kind: "SchemaDefinition",
      directives: [],
      operationTypes: [
        {
          kind: "OperationTypeDefinition",
          operation: "query",
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Query",
              loc: { start: 417, end: 422 },
            },
            loc: { start: 417, end: 422 },
          },
          loc: { start: 410, end: 422 },
        },
        {
          kind: "OperationTypeDefinition",
          operation: "mutation",
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Mutation",
              loc: { start: 435, end: 443 },
            },
            loc: { start: 435, end: 443 },
          },
          loc: { start: 425, end: 443 },
        },
        {
          kind: "OperationTypeDefinition",
          operation: "subscription",
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Subscription",
              loc: { start: 460, end: 472 },
            },
            loc: { start: 460, end: 472 },
          },
          loc: { start: 446, end: 472 },
        },
      ],
      loc: { start: 399, end: 474 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Client", loc: { start: 480, end: 486 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 491, end: 493 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 495, end: 497 },
              },
              loc: { start: 495, end: 497 },
            },
            loc: { start: 495, end: 498 },
          },
          directives: [],
          loc: { start: 491, end: 498 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 501, end: 505 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 507, end: 513 },
              },
              loc: { start: 507, end: 513 },
            },
            loc: { start: 507, end: 514 },
          },
          directives: [],
          loc: { start: 501, end: 514 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 517, end: 520 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 522, end: 528 },
              },
              loc: { start: 522, end: 528 },
            },
            loc: { start: 522, end: 529 },
          },
          directives: [],
          loc: { start: 517, end: 529 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "self", loc: { start: 532, end: 536 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 538, end: 545 },
            },
            loc: { start: 538, end: 545 },
          },
          directives: [],
          loc: { start: 532, end: 545 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "date", loc: { start: 548, end: 552 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 554, end: 562 },
              },
              loc: { start: 554, end: 562 },
            },
            loc: { start: 554, end: 563 },
          },
          directives: [],
          loc: { start: 548, end: 563 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "update",
            loc: { start: 566, end: 572 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 574, end: 582 },
              },
              loc: { start: 574, end: 582 },
            },
            loc: { start: 574, end: 583 },
          },
          directives: [],
          loc: { start: 566, end: 583 },
        },
      ],
      loc: { start: 475, end: 585 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ClientQuery",
        loc: { start: 593, end: 604 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 609, end: 611 } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 614, end: 616 },
                },
                loc: { start: 614, end: 616 },
              },
              loc: { start: 614, end: 617 },
            },
            loc: { start: 613, end: 618 },
          },
          directives: [],
          loc: { start: 609, end: 618 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "self", loc: { start: 621, end: 625 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 627, end: 634 },
            },
            loc: { start: 627, end: 634 },
          },
          directives: [],
          loc: { start: 621, end: 634 },
        },
      ],
      loc: { start: 587, end: 636 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateClientResponseError",
        loc: { start: 643, end: 668 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 673, end: 677 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ValidateData",
                loc: { start: 679, end: 691 },
              },
              loc: { start: 679, end: 691 },
            },
            loc: { start: 679, end: 692 },
          },
          directives: [],
          loc: { start: 673, end: 692 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 695, end: 698 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 700, end: 707 },
              },
              loc: { start: 700, end: 707 },
            },
            loc: { start: 700, end: 708 },
          },
          directives: [],
          loc: { start: 695, end: 708 },
        },
      ],
      loc: { start: 638, end: 710 },
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateClientResponse",
        loc: { start: 718, end: 738 },
      },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Client",
            loc: { start: 741, end: 747 },
          },
          loc: { start: 741, end: 747 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "CreateClientResponseError",
            loc: { start: 750, end: 775 },
          },
          loc: { start: 750, end: 775 },
        },
      ],
      loc: { start: 712, end: 775 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 789, end: 797 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createClient",
            loc: { start: 802, end: 814 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 815, end: 819 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 821, end: 827 },
                  },
                  loc: { start: 821, end: 827 },
                },
                loc: { start: 821, end: 828 },
              },
              directives: [],
              loc: { start: 815, end: 828 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "url",
                loc: { start: 830, end: 833 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 835, end: 841 },
                  },
                  loc: { start: 835, end: 841 },
                },
                loc: { start: 835, end: 842 },
              },
              directives: [],
              loc: { start: 830, end: 842 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Client",
                loc: { start: 845, end: 851 },
              },
              loc: { start: 845, end: 851 },
            },
            loc: { start: 845, end: 852 },
          },
          directives: [],
          loc: { start: 802, end: 852 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateClient",
            loc: { start: 855, end: 867 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 868, end: 870 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 872, end: 874 },
                  },
                  loc: { start: 872, end: 874 },
                },
                loc: { start: 872, end: 875 },
              },
              directives: [],
              loc: { start: 868, end: 875 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 877, end: 881 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 883, end: 889 },
                },
                loc: { start: 883, end: 889 },
              },
              directives: [],
              loc: { start: 877, end: 889 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "url",
                loc: { start: 891, end: 894 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 896, end: 902 },
                },
                loc: { start: 896, end: 902 },
              },
              directives: [],
              loc: { start: 891, end: 902 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Client",
                loc: { start: 905, end: 911 },
              },
              loc: { start: 905, end: 911 },
            },
            loc: { start: 905, end: 912 },
          },
          directives: [],
          loc: { start: 855, end: 912 },
        },
      ],
      loc: { start: 777, end: 914 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 928, end: 933 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "clients",
            loc: { start: 938, end: 945 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "query",
                loc: { start: 946, end: 951 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ClientQuery",
                    loc: { start: 953, end: 964 },
                  },
                  loc: { start: 953, end: 964 },
                },
                loc: { start: 953, end: 965 },
              },
              directives: [],
              loc: { start: 946, end: 965 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Client",
                    loc: { start: 969, end: 975 },
                  },
                  loc: { start: 969, end: 975 },
                },
                loc: { start: 969, end: 976 },
              },
              loc: { start: 968, end: 977 },
            },
            loc: { start: 968, end: 978 },
          },
          directives: [],
          loc: { start: 938, end: 978 },
        },
      ],
      loc: { start: 916, end: 980 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "History", loc: { start: 986, end: 993 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 998, end: 1000 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1002, end: 1004 },
              },
              loc: { start: 1002, end: 1004 },
            },
            loc: { start: 1002, end: 1005 },
          },
          directives: [],
          loc: { start: 998, end: 1005 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "topic",
            loc: { start: 1008, end: 1013 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TopicNormal",
                loc: { start: 1015, end: 1026 },
              },
              loc: { start: 1015, end: 1026 },
            },
            loc: { start: 1015, end: 1027 },
          },
          directives: [],
          loc: { start: 1008, end: 1027 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1030, end: 1035 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1037, end: 1043 },
              },
              loc: { start: 1037, end: 1043 },
            },
            loc: { start: 1037, end: 1044 },
          },
          directives: [],
          loc: { start: 1030, end: 1044 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 1047, end: 1051 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1054, end: 1060 },
                  },
                  loc: { start: 1054, end: 1060 },
                },
                loc: { start: 1054, end: 1061 },
              },
              loc: { start: 1053, end: 1062 },
            },
            loc: { start: 1053, end: 1063 },
          },
          directives: [],
          loc: { start: 1047, end: 1063 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "text",
            loc: { start: 1066, end: 1070 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1072, end: 1078 },
              },
              loc: { start: 1072, end: 1078 },
            },
            loc: { start: 1072, end: 1079 },
          },
          directives: [],
          loc: { start: 1066, end: 1079 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 1082, end: 1086 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 1088, end: 1096 },
              },
              loc: { start: 1088, end: 1096 },
            },
            loc: { start: 1088, end: 1097 },
          },
          directives: [],
          loc: { start: 1082, end: 1097 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "hash",
            loc: { start: 1100, end: 1104 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1106, end: 1112 },
              },
              loc: { start: 1106, end: 1112 },
            },
            loc: { start: 1106, end: 1113 },
          },
          directives: [],
          loc: { start: 1100, end: 1113 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "self",
            loc: { start: 1116, end: 1120 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1122, end: 1129 },
            },
            loc: { start: 1122, end: 1129 },
          },
          directives: [],
          loc: { start: 1116, end: 1129 },
        },
      ],
      loc: { start: 981, end: 1131 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "HistoryQuery",
        loc: { start: 1139, end: 1151 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1156, end: 1158 } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 1161, end: 1163 },
                },
                loc: { start: 1161, end: 1163 },
              },
              loc: { start: 1161, end: 1164 },
            },
            loc: { start: 1160, end: 1165 },
          },
          directives: [],
          loc: { start: 1156, end: 1165 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "topic",
            loc: { start: 1168, end: 1173 },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 1176, end: 1178 },
                },
                loc: { start: 1176, end: 1178 },
              },
              loc: { start: 1176, end: 1179 },
            },
            loc: { start: 1175, end: 1180 },
          },
          directives: [],
          loc: { start: 1168, end: 1180 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 1183, end: 1187 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateQuery",
              loc: { start: 1189, end: 1198 },
            },
            loc: { start: 1189, end: 1198 },
          },
          directives: [],
          loc: { start: 1183, end: 1198 },
        },
      ],
      loc: { start: 1133, end: 1200 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1214, end: 1219 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "histories",
            loc: { start: 1224, end: 1233 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "query",
                loc: { start: 1234, end: 1239 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "HistoryQuery",
                    loc: { start: 1241, end: 1253 },
                  },
                  loc: { start: 1241, end: 1253 },
                },
                loc: { start: 1241, end: 1254 },
              },
              directives: [],
              loc: { start: 1234, end: 1254 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 1256, end: 1261 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 1263, end: 1266 },
                  },
                  loc: { start: 1263, end: 1266 },
                },
                loc: { start: 1263, end: 1267 },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
                loc: { start: 1270, end: 1273 },
              },
              directives: [],
              loc: { start: 1256, end: 1273 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "History",
                    loc: { start: 1277, end: 1284 },
                  },
                  loc: { start: 1277, end: 1284 },
                },
                loc: { start: 1277, end: 1285 },
              },
              loc: { start: 1276, end: 1286 },
            },
            loc: { start: 1276, end: 1287 },
          },
          directives: [],
          loc: { start: 1224, end: 1287 },
        },
      ],
      loc: { start: 1202, end: 1289 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Profile", loc: { start: 1295, end: 1302 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1307, end: 1309 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1311, end: 1313 },
              },
              loc: { start: 1311, end: 1313 },
            },
            loc: { start: 1311, end: 1314 },
          },
          directives: [],
          loc: { start: 1307, end: 1314 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "self",
            loc: { start: 1317, end: 1321 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1323, end: 1330 },
            },
            loc: { start: 1323, end: 1330 },
          },
          directives: [],
          loc: { start: 1317, end: 1330 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1333, end: 1337 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1339, end: 1345 },
              },
              loc: { start: 1339, end: 1345 },
            },
            loc: { start: 1339, end: 1346 },
          },
          directives: [],
          loc: { start: 1333, end: 1346 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "text",
            loc: { start: 1349, end: 1353 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1355, end: 1361 },
              },
              loc: { start: 1355, end: 1361 },
            },
            loc: { start: 1355, end: 1362 },
          },
          directives: [],
          loc: { start: 1349, end: 1362 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 1365, end: 1369 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 1371, end: 1379 },
              },
              loc: { start: 1371, end: 1379 },
            },
            loc: { start: 1371, end: 1380 },
          },
          directives: [],
          loc: { start: 1365, end: 1380 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "update",
            loc: { start: 1383, end: 1389 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 1391, end: 1399 },
              },
              loc: { start: 1391, end: 1399 },
            },
            loc: { start: 1391, end: 1400 },
          },
          directives: [],
          loc: { start: 1383, end: 1400 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "sn", loc: { start: 1403, end: 1405 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1407, end: 1413 },
              },
              loc: { start: 1407, end: 1413 },
            },
            loc: { start: 1407, end: 1414 },
          },
          directives: [],
          loc: { start: 1403, end: 1414 },
        },
      ],
      loc: { start: 1290, end: 1416 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProfileQuery",
        loc: { start: 1424, end: 1436 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1441, end: 1443 } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 1446, end: 1448 },
                },
                loc: { start: 1446, end: 1448 },
              },
              loc: { start: 1446, end: 1449 },
            },
            loc: { start: 1445, end: 1450 },
          },
          directives: [],
          loc: { start: 1441, end: 1450 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "self",
            loc: { start: 1453, end: 1457 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1459, end: 1466 },
            },
            loc: { start: 1459, end: 1466 },
          },
          directives: [],
          loc: { start: 1453, end: 1466 },
        },
      ],
      loc: { start: 1418, end: 1468 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1482, end: 1490 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createProfile",
            loc: { start: 1495, end: 1508 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 1509, end: 1513 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1515, end: 1521 },
                  },
                  loc: { start: 1515, end: 1521 },
                },
                loc: { start: 1515, end: 1522 },
              },
              directives: [],
              loc: { start: 1509, end: 1522 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "text",
                loc: { start: 1524, end: 1528 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1530, end: 1536 },
                  },
                  loc: { start: 1530, end: 1536 },
                },
                loc: { start: 1530, end: 1537 },
              },
              directives: [],
              loc: { start: 1524, end: 1537 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sn",
                loc: { start: 1539, end: 1541 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1543, end: 1549 },
                  },
                  loc: { start: 1543, end: 1549 },
                },
                loc: { start: 1543, end: 1550 },
              },
              directives: [],
              loc: { start: 1539, end: 1550 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Profile",
                loc: { start: 1553, end: 1560 },
              },
              loc: { start: 1553, end: 1560 },
            },
            loc: { start: 1553, end: 1561 },
          },
          directives: [],
          loc: { start: 1495, end: 1561 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProfile",
            loc: { start: 1564, end: 1577 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1578, end: 1580 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1582, end: 1584 },
                  },
                  loc: { start: 1582, end: 1584 },
                },
                loc: { start: 1582, end: 1585 },
              },
              directives: [],
              loc: { start: 1578, end: 1585 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 1587, end: 1591 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1593, end: 1599 },
                },
                loc: { start: 1593, end: 1599 },
              },
              directives: [],
              loc: { start: 1587, end: 1599 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "text",
                loc: { start: 1601, end: 1605 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1607, end: 1613 },
                },
                loc: { start: 1607, end: 1613 },
              },
              directives: [],
              loc: { start: 1601, end: 1613 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sn",
                loc: { start: 1615, end: 1617 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1619, end: 1625 },
                },
                loc: { start: 1619, end: 1625 },
              },
              directives: [],
              loc: { start: 1615, end: 1625 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Profile",
                loc: { start: 1628, end: 1635 },
              },
              loc: { start: 1628, end: 1635 },
            },
            loc: { start: 1628, end: 1636 },
          },
          directives: [],
          loc: { start: 1564, end: 1636 },
        },
      ],
      loc: { start: 1470, end: 1638 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1652, end: 1657 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profiles",
            loc: { start: 1662, end: 1670 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "query",
                loc: { start: 1671, end: 1676 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProfileQuery",
                    loc: { start: 1678, end: 1690 },
                  },
                  loc: { start: 1678, end: 1690 },
                },
                loc: { start: 1678, end: 1691 },
              },
              directives: [],
              loc: { start: 1671, end: 1691 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Profile",
                    loc: { start: 1695, end: 1702 },
                  },
                  loc: { start: 1695, end: 1702 },
                },
                loc: { start: 1695, end: 1703 },
              },
              loc: { start: 1694, end: 1704 },
            },
            loc: { start: 1694, end: 1705 },
          },
          directives: [],
          loc: { start: 1662, end: 1705 },
        },
      ],
      loc: { start: 1640, end: 1707 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "VoteFlag",
        loc: { start: 1713, end: 1721 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "uv", loc: { start: 1726, end: 1728 } },
          directives: [],
          loc: { start: 1726, end: 1728 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "dv", loc: { start: 1731, end: 1733 } },
          directives: [],
          loc: { start: 1731, end: 1733 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "not", loc: { start: 1736, end: 1739 } },
          directives: [],
          loc: { start: 1736, end: 1739 },
        },
      ],
      loc: { start: 1708, end: 1741 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "ResDeleteFlag",
        loc: { start: 1748, end: 1761 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "self",
            loc: { start: 1766, end: 1770 },
          },
          directives: [],
          loc: { start: 1766, end: 1770 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "freeze",
            loc: { start: 1773, end: 1779 },
          },
          directives: [],
          loc: { start: 1773, end: 1779 },
        },
      ],
      loc: { start: 1743, end: 1781 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: { kind: "Name", value: "Res", loc: { start: 1793, end: 1796 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1801, end: 1803 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1805, end: 1807 },
              },
              loc: { start: 1805, end: 1807 },
            },
            loc: { start: 1805, end: 1808 },
          },
          directives: [],
          loc: { start: 1801, end: 1808 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "topic",
            loc: { start: 1811, end: 1816 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Topic",
                loc: { start: 1818, end: 1823 },
              },
              loc: { start: 1818, end: 1823 },
            },
            loc: { start: 1818, end: 1824 },
          },
          directives: [],
          loc: { start: 1811, end: 1824 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 1827, end: 1831 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 1833, end: 1841 },
              },
              loc: { start: 1833, end: 1841 },
            },
            loc: { start: 1833, end: 1842 },
          },
          directives: [],
          loc: { start: 1827, end: 1842 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "self",
            loc: { start: 1845, end: 1849 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1851, end: 1858 },
            },
            loc: { start: 1851, end: 1858 },
          },
          directives: [],
          loc: { start: 1845, end: 1858 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "uv", loc: { start: 1861, end: 1863 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1865, end: 1868 },
              },
              loc: { start: 1865, end: 1868 },
            },
            loc: { start: 1865, end: 1869 },
          },
          directives: [],
          loc: { start: 1861, end: 1869 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "dv", loc: { start: 1872, end: 1874 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1876, end: 1879 },
              },
              loc: { start: 1876, end: 1879 },
            },
            loc: { start: 1876, end: 1880 },
          },
          directives: [],
          loc: { start: 1872, end: 1880 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "hash",
            loc: { start: 1883, end: 1887 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1889, end: 1895 },
              },
              loc: { start: 1889, end: 1895 },
            },
            loc: { start: 1889, end: 1896 },
          },
          directives: [],
          loc: { start: 1883, end: 1896 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "replyCount",
            loc: { start: 1899, end: 1909 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1911, end: 1914 },
              },
              loc: { start: 1911, end: 1914 },
            },
            loc: { start: 1911, end: 1915 },
          },
          directives: [],
          loc: { start: 1899, end: 1915 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "voteFlag",
            loc: { start: 1918, end: 1926 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "VoteFlag",
              loc: { start: 1928, end: 1936 },
            },
            loc: { start: 1928, end: 1936 },
          },
          directives: [],
          loc: { start: 1918, end: 1936 },
        },
      ],
      loc: { start: 1783, end: 1938 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ResNormal",
        loc: { start: 1945, end: 1954 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: { kind: "Name", value: "Res", loc: { start: 1966, end: 1969 } },
          loc: { start: 1966, end: 1969 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1974, end: 1976 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1978, end: 1980 },
              },
              loc: { start: 1978, end: 1980 },
            },
            loc: { start: 1978, end: 1981 },
          },
          directives: [],
          loc: { start: 1974, end: 1981 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "topic",
            loc: { start: 1984, end: 1989 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Topic",
                loc: { start: 1991, end: 1996 },
              },
              loc: { start: 1991, end: 1996 },
            },
            loc: { start: 1991, end: 1997 },
          },
          directives: [],
          loc: { start: 1984, end: 1997 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 2000, end: 2004 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 2006, end: 2014 },
              },
              loc: { start: 2006, end: 2014 },
            },
            loc: { start: 2006, end: 2015 },
          },
          directives: [],
          loc: { start: 2000, end: 2015 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "self",
            loc: { start: 2018, end: 2022 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2024, end: 2031 },
            },
            loc: { start: 2024, end: 2031 },
          },
          directives: [],
          loc: { start: 2018, end: 2031 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "uv", loc: { start: 2034, end: 2036 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2038, end: 2041 },
              },
              loc: { start: 2038, end: 2041 },
            },
            loc: { start: 2038, end: 2042 },
          },
          directives: [],
          loc: { start: 2034, end: 2042 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "dv", loc: { start: 2045, end: 2047 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2049, end: 2052 },
              },
              loc: { start: 2049, end: 2052 },
            },
            loc: { start: 2049, end: 2053 },
          },
          directives: [],
          loc: { start: 2045, end: 2053 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "hash",
            loc: { start: 2056, end: 2060 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2062, end: 2068 },
              },
              loc: { start: 2062, end: 2068 },
            },
            loc: { start: 2062, end: 2069 },
          },
          directives: [],
          loc: { start: 2056, end: 2069 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "replyCount",
            loc: { start: 2072, end: 2082 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2084, end: 2087 },
              },
              loc: { start: 2084, end: 2087 },
            },
            loc: { start: 2084, end: 2088 },
          },
          directives: [],
          loc: { start: 2072, end: 2088 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "voteFlag",
            loc: { start: 2091, end: 2099 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "VoteFlag",
              loc: { start: 2101, end: 2109 },
            },
            loc: { start: 2101, end: 2109 },
          },
          directives: [],
          loc: { start: 2091, end: 2109 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2112, end: 2116 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2118, end: 2124 },
            },
            loc: { start: 2118, end: 2124 },
          },
          directives: [],
          loc: { start: 2112, end: 2124 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "text",
            loc: { start: 2127, end: 2131 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2133, end: 2139 },
              },
              loc: { start: 2133, end: 2139 },
            },
            loc: { start: 2133, end: 2140 },
          },
          directives: [],
          loc: { start: 2127, end: 2140 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reply",
            loc: { start: 2143, end: 2148 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Res",
              loc: { start: 2150, end: 2153 },
            },
            loc: { start: 2150, end: 2153 },
          },
          directives: [],
          loc: { start: 2143, end: 2153 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profile",
            loc: { start: 2156, end: 2163 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Profile",
              loc: { start: 2165, end: 2172 },
            },
            loc: { start: 2165, end: 2172 },
          },
          directives: [],
          loc: { start: 2156, end: 2172 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isReply",
            loc: { start: 2175, end: 2182 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2184, end: 2191 },
            },
            loc: { start: 2184, end: 2191 },
          },
          directives: [],
          loc: { start: 2175, end: 2191 },
        },
      ],
      loc: { start: 1940, end: 2193 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ResHistory",
        loc: { start: 2200, end: 2210 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: { kind: "Name", value: "Res", loc: { start: 2222, end: 2225 } },
          loc: { start: 2222, end: 2225 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2230, end: 2232 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2234, end: 2236 },
              },
              loc: { start: 2234, end: 2236 },
            },
            loc: { start: 2234, end: 2237 },
          },
          directives: [],
          loc: { start: 2230, end: 2237 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "topic",
            loc: { start: 2240, end: 2245 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Topic",
                loc: { start: 2247, end: 2252 },
              },
              loc: { start: 2247, end: 2252 },
            },
            loc: { start: 2247, end: 2253 },
          },
          directives: [],
          loc: { start: 2240, end: 2253 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 2256, end: 2260 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 2262, end: 2270 },
              },
              loc: { start: 2262, end: 2270 },
            },
            loc: { start: 2262, end: 2271 },
          },
          directives: [],
          loc: { start: 2256, end: 2271 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "self",
            loc: { start: 2274, end: 2278 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2280, end: 2287 },
            },
            loc: { start: 2280, end: 2287 },
          },
          directives: [],
          loc: { start: 2274, end: 2287 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "uv", loc: { start: 2290, end: 2292 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2294, end: 2297 },
              },
              loc: { start: 2294, end: 2297 },
            },
            loc: { start: 2294, end: 2298 },
          },
          directives: [],
          loc: { start: 2290, end: 2298 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "dv", loc: { start: 2301, end: 2303 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2305, end: 2308 },
              },
              loc: { start: 2305, end: 2308 },
            },
            loc: { start: 2305, end: 2309 },
          },
          directives: [],
          loc: { start: 2301, end: 2309 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "hash",
            loc: { start: 2312, end: 2316 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2318, end: 2324 },
              },
              loc: { start: 2318, end: 2324 },
            },
            loc: { start: 2318, end: 2325 },
          },
          directives: [],
          loc: { start: 2312, end: 2325 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "replyCount",
            loc: { start: 2328, end: 2338 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2340, end: 2343 },
              },
              loc: { start: 2340, end: 2343 },
            },
            loc: { start: 2340, end: 2344 },
          },
          directives: [],
          loc: { start: 2328, end: 2344 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "voteFlag",
            loc: { start: 2347, end: 2355 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "VoteFlag",
              loc: { start: 2357, end: 2365 },
            },
            loc: { start: 2357, end: 2365 },
          },
          directives: [],
          loc: { start: 2347, end: 2365 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "history",
            loc: { start: 2368, end: 2375 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "History",
                loc: { start: 2377, end: 2384 },
              },
              loc: { start: 2377, end: 2384 },
            },
            loc: { start: 2377, end: 2385 },
          },
          directives: [],
          loc: { start: 2368, end: 2385 },
        },
      ],
      loc: { start: 2195, end: 2387 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ResTopic",
        loc: { start: 2394, end: 2402 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: { kind: "Name", value: "Res", loc: { start: 2414, end: 2417 } },
          loc: { start: 2414, end: 2417 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2422, end: 2424 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2426, end: 2428 },
              },
              loc: { start: 2426, end: 2428 },
            },
            loc: { start: 2426, end: 2429 },
          },
          directives: [],
          loc: { start: 2422, end: 2429 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "topic",
            loc: { start: 2432, end: 2437 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Topic",
                loc: { start: 2439, end: 2444 },
              },
              loc: { start: 2439, end: 2444 },
            },
            loc: { start: 2439, end: 2445 },
          },
          directives: [],
          loc: { start: 2432, end: 2445 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 2448, end: 2452 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 2454, end: 2462 },
              },
              loc: { start: 2454, end: 2462 },
            },
            loc: { start: 2454, end: 2463 },
          },
          directives: [],
          loc: { start: 2448, end: 2463 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "self",
            loc: { start: 2466, end: 2470 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2472, end: 2479 },
            },
            loc: { start: 2472, end: 2479 },
          },
          directives: [],
          loc: { start: 2466, end: 2479 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "uv", loc: { start: 2482, end: 2484 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2486, end: 2489 },
              },
              loc: { start: 2486, end: 2489 },
            },
            loc: { start: 2486, end: 2490 },
          },
          directives: [],
          loc: { start: 2482, end: 2490 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "dv", loc: { start: 2493, end: 2495 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2497, end: 2500 },
              },
              loc: { start: 2497, end: 2500 },
            },
            loc: { start: 2497, end: 2501 },
          },
          directives: [],
          loc: { start: 2493, end: 2501 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "hash",
            loc: { start: 2504, end: 2508 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2510, end: 2516 },
              },
              loc: { start: 2510, end: 2516 },
            },
            loc: { start: 2510, end: 2517 },
          },
          directives: [],
          loc: { start: 2504, end: 2517 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "replyCount",
            loc: { start: 2520, end: 2530 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2532, end: 2535 },
              },
              loc: { start: 2532, end: 2535 },
            },
            loc: { start: 2532, end: 2536 },
          },
          directives: [],
          loc: { start: 2520, end: 2536 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "voteFlag",
            loc: { start: 2539, end: 2547 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "VoteFlag",
              loc: { start: 2549, end: 2557 },
            },
            loc: { start: 2549, end: 2557 },
          },
          directives: [],
          loc: { start: 2539, end: 2557 },
        },
      ],
      loc: { start: 2389, end: 2559 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ResFork", loc: { start: 2566, end: 2573 } },
      interfaces: [
        {
          kind: "NamedType",
          name: { kind: "Name", value: "Res", loc: { start: 2585, end: 2588 } },
          loc: { start: 2585, end: 2588 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2593, end: 2595 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2597, end: 2599 },
              },
              loc: { start: 2597, end: 2599 },
            },
            loc: { start: 2597, end: 2600 },
          },
          directives: [],
          loc: { start: 2593, end: 2600 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "topic",
            loc: { start: 2603, end: 2608 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Topic",
                loc: { start: 2610, end: 2615 },
              },
              loc: { start: 2610, end: 2615 },
            },
            loc: { start: 2610, end: 2616 },
          },
          directives: [],
          loc: { start: 2603, end: 2616 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 2619, end: 2623 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 2625, end: 2633 },
              },
              loc: { start: 2625, end: 2633 },
            },
            loc: { start: 2625, end: 2634 },
          },
          directives: [],
          loc: { start: 2619, end: 2634 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "self",
            loc: { start: 2637, end: 2641 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2643, end: 2650 },
            },
            loc: { start: 2643, end: 2650 },
          },
          directives: [],
          loc: { start: 2637, end: 2650 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "uv", loc: { start: 2653, end: 2655 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2657, end: 2660 },
              },
              loc: { start: 2657, end: 2660 },
            },
            loc: { start: 2657, end: 2661 },
          },
          directives: [],
          loc: { start: 2653, end: 2661 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "dv", loc: { start: 2664, end: 2666 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2668, end: 2671 },
              },
              loc: { start: 2668, end: 2671 },
            },
            loc: { start: 2668, end: 2672 },
          },
          directives: [],
          loc: { start: 2664, end: 2672 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "hash",
            loc: { start: 2675, end: 2679 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2681, end: 2687 },
              },
              loc: { start: 2681, end: 2687 },
            },
            loc: { start: 2681, end: 2688 },
          },
          directives: [],
          loc: { start: 2675, end: 2688 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "replyCount",
            loc: { start: 2691, end: 2701 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2703, end: 2706 },
              },
              loc: { start: 2703, end: 2706 },
            },
            loc: { start: 2703, end: 2707 },
          },
          directives: [],
          loc: { start: 2691, end: 2707 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "voteFlag",
            loc: { start: 2710, end: 2718 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "VoteFlag",
              loc: { start: 2720, end: 2728 },
            },
            loc: { start: 2720, end: 2728 },
          },
          directives: [],
          loc: { start: 2710, end: 2728 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fork",
            loc: { start: 2731, end: 2735 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TopicFork",
                loc: { start: 2737, end: 2746 },
              },
              loc: { start: 2737, end: 2746 },
            },
            loc: { start: 2737, end: 2747 },
          },
          directives: [],
          loc: { start: 2731, end: 2747 },
        },
      ],
      loc: { start: 2561, end: 2749 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ResDelete",
        loc: { start: 2756, end: 2765 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: { kind: "Name", value: "Res", loc: { start: 2777, end: 2780 } },
          loc: { start: 2777, end: 2780 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2785, end: 2787 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2789, end: 2791 },
              },
              loc: { start: 2789, end: 2791 },
            },
            loc: { start: 2789, end: 2792 },
          },
          directives: [],
          loc: { start: 2785, end: 2792 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "topic",
            loc: { start: 2795, end: 2800 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Topic",
                loc: { start: 2802, end: 2807 },
              },
              loc: { start: 2802, end: 2807 },
            },
            loc: { start: 2802, end: 2808 },
          },
          directives: [],
          loc: { start: 2795, end: 2808 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 2811, end: 2815 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 2817, end: 2825 },
              },
              loc: { start: 2817, end: 2825 },
            },
            loc: { start: 2817, end: 2826 },
          },
          directives: [],
          loc: { start: 2811, end: 2826 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "self",
            loc: { start: 2829, end: 2833 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2835, end: 2842 },
            },
            loc: { start: 2835, end: 2842 },
          },
          directives: [],
          loc: { start: 2829, end: 2842 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "uv", loc: { start: 2845, end: 2847 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2849, end: 2852 },
              },
              loc: { start: 2849, end: 2852 },
            },
            loc: { start: 2849, end: 2853 },
          },
          directives: [],
          loc: { start: 2845, end: 2853 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "dv", loc: { start: 2856, end: 2858 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2860, end: 2863 },
              },
              loc: { start: 2860, end: 2863 },
            },
            loc: { start: 2860, end: 2864 },
          },
          directives: [],
          loc: { start: 2856, end: 2864 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "hash",
            loc: { start: 2867, end: 2871 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2873, end: 2879 },
              },
              loc: { start: 2873, end: 2879 },
            },
            loc: { start: 2873, end: 2880 },
          },
          directives: [],
          loc: { start: 2867, end: 2880 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "replyCount",
            loc: { start: 2883, end: 2893 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2895, end: 2898 },
              },
              loc: { start: 2895, end: 2898 },
            },
            loc: { start: 2895, end: 2899 },
          },
          directives: [],
          loc: { start: 2883, end: 2899 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "voteFlag",
            loc: { start: 2902, end: 2910 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "VoteFlag",
              loc: { start: 2912, end: 2920 },
            },
            loc: { start: 2912, end: 2920 },
          },
          directives: [],
          loc: { start: 2902, end: 2920 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "flag",
            loc: { start: 2923, end: 2927 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ResDeleteFlag",
                loc: { start: 2929, end: 2942 },
              },
              loc: { start: 2929, end: 2942 },
            },
            loc: { start: 2929, end: 2943 },
          },
          directives: [],
          loc: { start: 2923, end: 2943 },
        },
      ],
      loc: { start: 2751, end: 2945 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ResQuery",
        loc: { start: 2953, end: 2961 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2966, end: 2968 } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 2971, end: 2973 },
                },
                loc: { start: 2971, end: 2973 },
              },
              loc: { start: 2971, end: 2974 },
            },
            loc: { start: 2970, end: 2975 },
          },
          directives: [],
          loc: { start: 2966, end: 2975 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "topic",
            loc: { start: 2978, end: 2983 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2985, end: 2987 },
            },
            loc: { start: 2985, end: 2987 },
          },
          directives: [],
          loc: { start: 2978, end: 2987 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "notice",
            loc: { start: 2990, end: 2996 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2998, end: 3005 },
            },
            loc: { start: 2998, end: 3005 },
          },
          directives: [],
          loc: { start: 2990, end: 3005 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "hash",
            loc: { start: 3008, end: 3012 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3014, end: 3020 },
            },
            loc: { start: 3014, end: 3020 },
          },
          directives: [],
          loc: { start: 3008, end: 3020 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "reply",
            loc: { start: 3023, end: 3028 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3030, end: 3032 },
            },
            loc: { start: 3030, end: 3032 },
          },
          directives: [],
          loc: { start: 3023, end: 3032 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profile",
            loc: { start: 3035, end: 3042 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3044, end: 3046 },
            },
            loc: { start: 3044, end: 3046 },
          },
          directives: [],
          loc: { start: 3035, end: 3046 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "self",
            loc: { start: 3049, end: 3053 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 3055, end: 3062 },
            },
            loc: { start: 3055, end: 3062 },
          },
          directives: [],
          loc: { start: 3049, end: 3062 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "text",
            loc: { start: 3065, end: 3069 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3071, end: 3077 },
            },
            loc: { start: 3071, end: 3077 },
          },
          directives: [],
          loc: { start: 3065, end: 3077 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 3080, end: 3084 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateQuery",
              loc: { start: 3086, end: 3095 },
            },
            loc: { start: 3086, end: 3095 },
          },
          directives: [],
          loc: { start: 3080, end: 3095 },
        },
      ],
      loc: { start: 2947, end: 3097 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "VoteType",
        loc: { start: 3104, end: 3112 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "uv", loc: { start: 3117, end: 3119 } },
          directives: [],
          loc: { start: 3117, end: 3119 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "dv", loc: { start: 3122, end: 3124 } },
          directives: [],
          loc: { start: 3122, end: 3124 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "cv", loc: { start: 3127, end: 3129 } },
          directives: [],
          loc: { start: 3127, end: 3129 },
        },
      ],
      loc: { start: 3099, end: 3131 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3145, end: 3150 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reses",
            loc: { start: 3155, end: 3160 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "query",
                loc: { start: 3161, end: 3166 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ResQuery",
                    loc: { start: 3168, end: 3176 },
                  },
                  loc: { start: 3168, end: 3176 },
                },
                loc: { start: 3168, end: 3177 },
              },
              directives: [],
              loc: { start: 3161, end: 3177 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 3179, end: 3184 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 3186, end: 3189 },
                  },
                  loc: { start: 3186, end: 3189 },
                },
                loc: { start: 3186, end: 3190 },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
                loc: { start: 3193, end: 3196 },
              },
              directives: [],
              loc: { start: 3179, end: 3196 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Res",
                    loc: { start: 3200, end: 3203 },
                  },
                  loc: { start: 3200, end: 3203 },
                },
                loc: { start: 3200, end: 3204 },
              },
              loc: { start: 3199, end: 3205 },
            },
            loc: { start: 3199, end: 3206 },
          },
          directives: [],
          loc: { start: 3155, end: 3206 },
        },
      ],
      loc: { start: 3133, end: 3208 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3222, end: 3230 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createRes",
            loc: { start: 3235, end: 3244 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "topic",
                loc: { start: 3245, end: 3250 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3252, end: 3258 },
                  },
                  loc: { start: 3252, end: 3258 },
                },
                loc: { start: 3252, end: 3259 },
              },
              directives: [],
              loc: { start: 3245, end: 3259 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3261, end: 3265 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3267, end: 3273 },
                },
                loc: { start: 3267, end: 3273 },
              },
              directives: [],
              loc: { start: 3261, end: 3273 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "text",
                loc: { start: 3275, end: 3279 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3281, end: 3287 },
                  },
                  loc: { start: 3281, end: 3287 },
                },
                loc: { start: 3281, end: 3288 },
              },
              directives: [],
              loc: { start: 3275, end: 3288 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "reply",
                loc: { start: 3290, end: 3295 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3297, end: 3303 },
                },
                loc: { start: 3297, end: 3303 },
              },
              directives: [],
              loc: { start: 3290, end: 3303 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "profile",
                loc: { start: 3305, end: 3312 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3314, end: 3320 },
                },
                loc: { start: 3314, end: 3320 },
              },
              directives: [],
              loc: { start: 3305, end: 3320 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "age",
                loc: { start: 3322, end: 3325 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Boolean",
                    loc: { start: 3327, end: 3334 },
                  },
                  loc: { start: 3327, end: 3334 },
                },
                loc: { start: 3327, end: 3335 },
              },
              directives: [],
              loc: { start: 3322, end: 3335 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ResNormal",
                loc: { start: 3338, end: 3347 },
              },
              loc: { start: 3338, end: 3347 },
            },
            loc: { start: 3338, end: 3348 },
          },
          directives: [],
          loc: { start: 3235, end: 3348 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "voteRes",
            loc: { start: 3351, end: 3358 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "res",
                loc: { start: 3359, end: 3362 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3364, end: 3366 },
                  },
                  loc: { start: 3364, end: 3366 },
                },
                loc: { start: 3364, end: 3367 },
              },
              directives: [],
              loc: { start: 3359, end: 3367 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "type",
                loc: { start: 3369, end: 3373 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "VoteType",
                    loc: { start: 3375, end: 3383 },
                  },
                  loc: { start: 3375, end: 3383 },
                },
                loc: { start: 3375, end: 3384 },
              },
              directives: [],
              loc: { start: 3369, end: 3384 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Res",
                loc: { start: 3387, end: 3390 },
              },
              loc: { start: 3387, end: 3390 },
            },
            loc: { start: 3387, end: 3391 },
          },
          directives: [],
          loc: { start: 3351, end: 3391 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "delRes",
            loc: { start: 3394, end: 3400 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "res",
                loc: { start: 3401, end: 3404 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3406, end: 3408 },
                  },
                  loc: { start: 3406, end: 3408 },
                },
                loc: { start: 3406, end: 3409 },
              },
              directives: [],
              loc: { start: 3401, end: 3409 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ResDelete",
                loc: { start: 3412, end: 3421 },
              },
              loc: { start: 3412, end: 3421 },
            },
            loc: { start: 3412, end: 3422 },
          },
          directives: [],
          loc: { start: 3394, end: 3422 },
        },
      ],
      loc: { start: 3210, end: 3424 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ResSubscript",
        loc: { start: 3431, end: 3443 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "res", loc: { start: 3448, end: 3451 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Res",
                loc: { start: 3453, end: 3456 },
              },
              loc: { start: 3453, end: 3456 },
            },
            loc: { start: 3453, end: 3457 },
          },
          directives: [],
          loc: { start: 3448, end: 3457 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "count",
            loc: { start: 3460, end: 3465 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 3467, end: 3470 },
              },
              loc: { start: 3467, end: 3470 },
            },
            loc: { start: 3467, end: 3471 },
          },
          directives: [],
          loc: { start: 3460, end: 3471 },
        },
      ],
      loc: { start: 3426, end: 3473 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Subscription",
        loc: { start: 3487, end: 3499 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "resAdded",
            loc: { start: 3504, end: 3512 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "topic",
                loc: { start: 3513, end: 3518 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3520, end: 3522 },
                  },
                  loc: { start: 3520, end: 3522 },
                },
                loc: { start: 3520, end: 3523 },
              },
              directives: [],
              loc: { start: 3513, end: 3523 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ResSubscript",
                loc: { start: 3526, end: 3538 },
              },
              loc: { start: 3526, end: 3538 },
            },
            loc: { start: 3526, end: 3539 },
          },
          directives: [],
          loc: { start: 3504, end: 3539 },
        },
      ],
      loc: { start: 3475, end: 3541 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Storage", loc: { start: 3547, end: 3554 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "key", loc: { start: 3559, end: 3562 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3564, end: 3570 },
              },
              loc: { start: 3564, end: 3570 },
            },
            loc: { start: 3564, end: 3571 },
          },
          directives: [],
          loc: { start: 3559, end: 3571 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "value",
            loc: { start: 3574, end: 3579 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3581, end: 3587 },
              },
              loc: { start: 3581, end: 3587 },
            },
            loc: { start: 3581, end: 3588 },
          },
          directives: [],
          loc: { start: 3574, end: 3588 },
        },
      ],
      loc: { start: 3542, end: 3590 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "StorageQuery",
        loc: { start: 3598, end: 3610 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "key", loc: { start: 3615, end: 3618 } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3621, end: 3627 },
                },
                loc: { start: 3621, end: 3627 },
              },
              loc: { start: 3621, end: 3628 },
            },
            loc: { start: 3620, end: 3629 },
          },
          directives: [],
          loc: { start: 3615, end: 3629 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "keyPrefix",
            loc: { start: 3632, end: 3641 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3643, end: 3649 },
            },
            loc: { start: 3643, end: 3649 },
          },
          directives: [],
          loc: { start: 3632, end: 3649 },
        },
      ],
      loc: { start: 3592, end: 3651 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3665, end: 3670 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "storages",
            loc: { start: 3675, end: 3683 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "query",
                loc: { start: 3684, end: 3689 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "StorageQuery",
                    loc: { start: 3691, end: 3703 },
                  },
                  loc: { start: 3691, end: 3703 },
                },
                loc: { start: 3691, end: 3704 },
              },
              directives: [],
              loc: { start: 3684, end: 3704 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Storage",
                    loc: { start: 3708, end: 3715 },
                  },
                  loc: { start: 3708, end: 3715 },
                },
                loc: { start: 3708, end: 3716 },
              },
              loc: { start: 3707, end: 3717 },
            },
            loc: { start: 3707, end: 3718 },
          },
          directives: [],
          loc: { start: 3675, end: 3718 },
        },
      ],
      loc: { start: 3653, end: 3720 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "SetStoragesInput",
        loc: { start: 3728, end: 3744 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "storages",
            loc: { start: 3749, end: 3757 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "StorageInput",
                    loc: { start: 3760, end: 3772 },
                  },
                  loc: { start: 3760, end: 3772 },
                },
                loc: { start: 3760, end: 3773 },
              },
              loc: { start: 3759, end: 3774 },
            },
            loc: { start: 3759, end: 3775 },
          },
          directives: [],
          loc: { start: 3749, end: 3775 },
        },
      ],
      loc: { start: 3722, end: 3777 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "StorageInput",
        loc: { start: 3785, end: 3797 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "key", loc: { start: 3802, end: 3805 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3807, end: 3813 },
              },
              loc: { start: 3807, end: 3813 },
            },
            loc: { start: 3807, end: 3814 },
          },
          directives: [],
          loc: { start: 3802, end: 3814 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value",
            loc: { start: 3817, end: 3822 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3824, end: 3830 },
              },
              loc: { start: 3824, end: 3830 },
            },
            loc: { start: 3824, end: 3831 },
          },
          directives: [],
          loc: { start: 3817, end: 3831 },
        },
      ],
      loc: { start: 3779, end: 3833 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "SetStoragesPayload",
        loc: { start: 3840, end: 3858 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "storages",
            loc: { start: 3863, end: 3871 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Storage",
                    loc: { start: 3874, end: 3881 },
                  },
                  loc: { start: 3874, end: 3881 },
                },
                loc: { start: 3874, end: 3882 },
              },
              loc: { start: 3873, end: 3883 },
            },
            loc: { start: 3873, end: 3884 },
          },
          directives: [],
          loc: { start: 3863, end: 3884 },
        },
      ],
      loc: { start: 3835, end: 3886 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3900, end: 3908 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "setStorages",
            loc: { start: 3913, end: 3924 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 3925, end: 3930 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "SetStoragesInput",
                    loc: { start: 3932, end: 3948 },
                  },
                  loc: { start: 3932, end: 3948 },
                },
                loc: { start: 3932, end: 3949 },
              },
              directives: [],
              loc: { start: 3925, end: 3949 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SetStoragesPayload",
                loc: { start: 3952, end: 3970 },
              },
              loc: { start: 3952, end: 3970 },
            },
            loc: { start: 3952, end: 3971 },
          },
          directives: [],
          loc: { start: 3913, end: 3971 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "delStorage",
            loc: { start: 3974, end: 3984 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "key",
                loc: { start: 3985, end: 3988 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3990, end: 3996 },
                  },
                  loc: { start: 3990, end: 3996 },
                },
                loc: { start: 3990, end: 3997 },
              },
              directives: [],
              loc: { start: 3985, end: 3997 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 4000, end: 4007 },
            },
            loc: { start: 4000, end: 4007 },
          },
          directives: [],
          loc: { start: 3974, end: 4007 },
        },
      ],
      loc: { start: 3888, end: 4009 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TokenReq",
        loc: { start: 4015, end: 4023 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4028, end: 4033 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4035, end: 4037 },
              },
              loc: { start: 4035, end: 4037 },
            },
            loc: { start: 4035, end: 4038 },
          },
          directives: [],
          loc: { start: 4028, end: 4038 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "key", loc: { start: 4041, end: 4044 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4046, end: 4052 },
              },
              loc: { start: 4046, end: 4052 },
            },
            loc: { start: 4046, end: 4053 },
          },
          directives: [],
          loc: { start: 4041, end: 4053 },
        },
      ],
      loc: { start: 4010, end: 4055 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: { kind: "Name", value: "Token", loc: { start: 4067, end: 4072 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4077, end: 4079 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4081, end: 4083 },
              },
              loc: { start: 4081, end: 4083 },
            },
            loc: { start: 4081, end: 4084 },
          },
          directives: [],
          loc: { start: 4077, end: 4084 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "key", loc: { start: 4087, end: 4090 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4092, end: 4098 },
              },
              loc: { start: 4092, end: 4098 },
            },
            loc: { start: 4092, end: 4099 },
          },
          directives: [],
          loc: { start: 4087, end: 4099 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 4102, end: 4106 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 4108, end: 4116 },
              },
              loc: { start: 4108, end: 4116 },
            },
            loc: { start: 4108, end: 4117 },
          },
          directives: [],
          loc: { start: 4102, end: 4117 },
        },
      ],
      loc: { start: 4057, end: 4119 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TokenMaster",
        loc: { start: 4126, end: 4137 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Token",
            loc: { start: 4149, end: 4154 },
          },
          loc: { start: 4149, end: 4154 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4159, end: 4161 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4163, end: 4165 },
              },
              loc: { start: 4163, end: 4165 },
            },
            loc: { start: 4163, end: 4166 },
          },
          directives: [],
          loc: { start: 4159, end: 4166 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "key", loc: { start: 4169, end: 4172 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4174, end: 4180 },
              },
              loc: { start: 4174, end: 4180 },
            },
            loc: { start: 4174, end: 4181 },
          },
          directives: [],
          loc: { start: 4169, end: 4181 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 4184, end: 4188 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 4190, end: 4198 },
              },
              loc: { start: 4190, end: 4198 },
            },
            loc: { start: 4190, end: 4199 },
          },
          directives: [],
          loc: { start: 4184, end: 4199 },
        },
      ],
      loc: { start: 4121, end: 4201 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TokenGeneral",
        loc: { start: 4208, end: 4220 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Token",
            loc: { start: 4232, end: 4237 },
          },
          loc: { start: 4232, end: 4237 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4242, end: 4244 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4246, end: 4248 },
              },
              loc: { start: 4246, end: 4248 },
            },
            loc: { start: 4246, end: 4249 },
          },
          directives: [],
          loc: { start: 4242, end: 4249 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "key", loc: { start: 4252, end: 4255 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4257, end: 4263 },
              },
              loc: { start: 4257, end: 4263 },
            },
            loc: { start: 4257, end: 4264 },
          },
          directives: [],
          loc: { start: 4252, end: 4264 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 4267, end: 4271 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 4273, end: 4281 },
              },
              loc: { start: 4273, end: 4281 },
            },
            loc: { start: 4273, end: 4282 },
          },
          directives: [],
          loc: { start: 4267, end: 4282 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "client",
            loc: { start: 4285, end: 4291 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Client",
                loc: { start: 4293, end: 4299 },
              },
              loc: { start: 4293, end: 4299 },
            },
            loc: { start: 4293, end: 4300 },
          },
          directives: [],
          loc: { start: 4285, end: 4300 },
        },
      ],
      loc: { start: 4203, end: 4302 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 4316, end: 4321 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4326, end: 4331 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Token",
                loc: { start: 4333, end: 4338 },
              },
              loc: { start: 4333, end: 4338 },
            },
            loc: { start: 4333, end: 4339 },
          },
          directives: [],
          loc: { start: 4326, end: 4339 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tokens",
            loc: { start: 4342, end: 4348 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Token",
                    loc: { start: 4351, end: 4356 },
                  },
                  loc: { start: 4351, end: 4356 },
                },
                loc: { start: 4351, end: 4357 },
              },
              loc: { start: 4350, end: 4358 },
            },
            loc: { start: 4350, end: 4359 },
          },
          directives: [],
          loc: { start: 4342, end: 4359 },
        },
      ],
      loc: { start: 4304, end: 4361 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateTokenGeneralResponse",
        loc: { start: 4368, end: 4394 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4399, end: 4404 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TokenGeneral",
                loc: { start: 4406, end: 4418 },
              },
              loc: { start: 4406, end: 4418 },
            },
            loc: { start: 4406, end: 4419 },
          },
          directives: [],
          loc: { start: 4399, end: 4419 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "req", loc: { start: 4422, end: 4425 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TokenReq",
                loc: { start: 4427, end: 4435 },
              },
              loc: { start: 4427, end: 4435 },
            },
            loc: { start: 4427, end: 4436 },
          },
          directives: [],
          loc: { start: 4422, end: 4436 },
        },
      ],
      loc: { start: 4363, end: 4438 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 4452, end: 4460 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "delTokenClient",
            loc: { start: 4465, end: 4479 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "client",
                loc: { start: 4480, end: 4486 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4488, end: 4490 },
                  },
                  loc: { start: 4488, end: 4490 },
                },
                loc: { start: 4488, end: 4491 },
              },
              directives: [],
              loc: { start: 4480, end: 4491 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 4494, end: 4501 },
            },
            loc: { start: 4494, end: 4501 },
          },
          directives: [],
          loc: { start: 4465, end: 4501 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createTokenGeneral",
            loc: { start: 4504, end: 4522 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "client",
                loc: { start: 4523, end: 4529 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4531, end: 4533 },
                  },
                  loc: { start: 4531, end: 4533 },
                },
                loc: { start: 4531, end: 4534 },
              },
              directives: [],
              loc: { start: 4523, end: 4534 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CreateTokenGeneralResponse",
                loc: { start: 4537, end: 4563 },
              },
              loc: { start: 4537, end: 4563 },
            },
            loc: { start: 4537, end: 4564 },
          },
          directives: [],
          loc: { start: 4504, end: 4564 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createTokenReq",
            loc: { start: 4567, end: 4581 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TokenReq",
                loc: { start: 4583, end: 4591 },
              },
              loc: { start: 4583, end: 4591 },
            },
            loc: { start: 4583, end: 4592 },
          },
          directives: [],
          loc: { start: 4567, end: 4592 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createTokenMaster",
            loc: { start: 4595, end: 4612 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "auth",
                loc: { start: 4613, end: 4617 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "AuthUser",
                    loc: { start: 4619, end: 4627 },
                  },
                  loc: { start: 4619, end: 4627 },
                },
                loc: { start: 4619, end: 4628 },
              },
              directives: [],
              loc: { start: 4613, end: 4628 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TokenMaster",
                loc: { start: 4631, end: 4642 },
              },
              loc: { start: 4631, end: 4642 },
            },
            loc: { start: 4631, end: 4643 },
          },
          directives: [],
          loc: { start: 4595, end: 4643 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "authTokenReq",
            loc: { start: 4646, end: 4658 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4659, end: 4661 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4663, end: 4665 },
                  },
                  loc: { start: 4663, end: 4665 },
                },
                loc: { start: 4663, end: 4666 },
              },
              directives: [],
              loc: { start: 4659, end: 4666 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "key",
                loc: { start: 4668, end: 4671 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4673, end: 4679 },
                  },
                  loc: { start: 4673, end: 4679 },
                },
                loc: { start: 4673, end: 4680 },
              },
              directives: [],
              loc: { start: 4668, end: 4680 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TokenGeneral",
                loc: { start: 4683, end: 4695 },
              },
              loc: { start: 4683, end: 4695 },
            },
            loc: { start: 4683, end: 4696 },
          },
          directives: [],
          loc: { start: 4646, end: 4696 },
        },
      ],
      loc: { start: 4440, end: 4698 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: { kind: "Name", value: "Topic", loc: { start: 4709, end: 4714 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4719, end: 4721 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4723, end: 4725 },
              },
              loc: { start: 4723, end: 4725 },
            },
            loc: { start: 4723, end: 4726 },
          },
          directives: [],
          loc: { start: 4719, end: 4726 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 4729, end: 4734 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4736, end: 4742 },
              },
              loc: { start: 4736, end: 4742 },
            },
            loc: { start: 4736, end: 4743 },
          },
          directives: [],
          loc: { start: 4729, end: 4743 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "update",
            loc: { start: 4746, end: 4752 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 4754, end: 4762 },
              },
              loc: { start: 4754, end: 4762 },
            },
            loc: { start: 4754, end: 4763 },
          },
          directives: [],
          loc: { start: 4746, end: 4763 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 4766, end: 4770 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 4772, end: 4780 },
              },
              loc: { start: 4772, end: 4780 },
            },
            loc: { start: 4772, end: 4781 },
          },
          directives: [],
          loc: { start: 4766, end: 4781 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "resCount",
            loc: { start: 4784, end: 4792 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 4794, end: 4797 },
              },
              loc: { start: 4794, end: 4797 },
            },
            loc: { start: 4794, end: 4798 },
          },
          directives: [],
          loc: { start: 4784, end: 4798 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "active",
            loc: { start: 4801, end: 4807 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 4809, end: 4816 },
              },
              loc: { start: 4809, end: 4816 },
            },
            loc: { start: 4809, end: 4817 },
          },
          directives: [],
          loc: { start: 4801, end: 4817 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "subscribe",
            loc: { start: 4820, end: 4829 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 4831, end: 4838 },
            },
            loc: { start: 4831, end: 4838 },
          },
          directives: [],
          loc: { start: 4820, end: 4838 },
        },
      ],
      loc: { start: 4699, end: 4840 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: {
        kind: "Name",
        value: "TopicSearch",
        loc: { start: 4852, end: 4863 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4868, end: 4870 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4872, end: 4874 },
              },
              loc: { start: 4872, end: 4874 },
            },
            loc: { start: 4872, end: 4875 },
          },
          directives: [],
          loc: { start: 4868, end: 4875 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 4878, end: 4883 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4885, end: 4891 },
              },
              loc: { start: 4885, end: 4891 },
            },
            loc: { start: 4885, end: 4892 },
          },
          directives: [],
          loc: { start: 4878, end: 4892 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "update",
            loc: { start: 4895, end: 4901 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 4903, end: 4911 },
              },
              loc: { start: 4903, end: 4911 },
            },
            loc: { start: 4903, end: 4912 },
          },
          directives: [],
          loc: { start: 4895, end: 4912 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 4915, end: 4919 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 4921, end: 4929 },
              },
              loc: { start: 4921, end: 4929 },
            },
            loc: { start: 4921, end: 4930 },
          },
          directives: [],
          loc: { start: 4915, end: 4930 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "resCount",
            loc: { start: 4933, end: 4941 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 4943, end: 4946 },
              },
              loc: { start: 4943, end: 4946 },
            },
            loc: { start: 4943, end: 4947 },
          },
          directives: [],
          loc: { start: 4933, end: 4947 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "active",
            loc: { start: 4950, end: 4956 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 4958, end: 4965 },
              },
              loc: { start: 4958, end: 4965 },
            },
            loc: { start: 4958, end: 4966 },
          },
          directives: [],
          loc: { start: 4950, end: 4966 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "subscribe",
            loc: { start: 4969, end: 4978 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 4980, end: 4987 },
            },
            loc: { start: 4980, end: 4987 },
          },
          directives: [],
          loc: { start: 4969, end: 4987 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 4990, end: 4994 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4997, end: 5003 },
                  },
                  loc: { start: 4997, end: 5003 },
                },
                loc: { start: 4997, end: 5004 },
              },
              loc: { start: 4996, end: 5005 },
            },
            loc: { start: 4996, end: 5006 },
          },
          directives: [],
          loc: { start: 4990, end: 5006 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "text",
            loc: { start: 5009, end: 5013 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5015, end: 5021 },
              },
              loc: { start: 5015, end: 5021 },
            },
            loc: { start: 5015, end: 5022 },
          },
          directives: [],
          loc: { start: 5009, end: 5022 },
        },
      ],
      loc: { start: 4842, end: 5024 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TopicNormal",
        loc: { start: 5031, end: 5042 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Topic",
            loc: { start: 5054, end: 5059 },
          },
          loc: { start: 5054, end: 5059 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "TopicSearch",
            loc: { start: 5062, end: 5073 },
          },
          loc: { start: 5062, end: 5073 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 5078, end: 5080 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5082, end: 5084 },
              },
              loc: { start: 5082, end: 5084 },
            },
            loc: { start: 5082, end: 5085 },
          },
          directives: [],
          loc: { start: 5078, end: 5085 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 5088, end: 5093 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5095, end: 5101 },
              },
              loc: { start: 5095, end: 5101 },
            },
            loc: { start: 5095, end: 5102 },
          },
          directives: [],
          loc: { start: 5088, end: 5102 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "update",
            loc: { start: 5105, end: 5111 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 5113, end: 5121 },
              },
              loc: { start: 5113, end: 5121 },
            },
            loc: { start: 5113, end: 5122 },
          },
          directives: [],
          loc: { start: 5105, end: 5122 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 5125, end: 5129 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 5131, end: 5139 },
              },
              loc: { start: 5131, end: 5139 },
            },
            loc: { start: 5131, end: 5140 },
          },
          directives: [],
          loc: { start: 5125, end: 5140 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "resCount",
            loc: { start: 5143, end: 5151 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 5153, end: 5156 },
              },
              loc: { start: 5153, end: 5156 },
            },
            loc: { start: 5153, end: 5157 },
          },
          directives: [],
          loc: { start: 5143, end: 5157 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "active",
            loc: { start: 5160, end: 5166 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 5168, end: 5175 },
              },
              loc: { start: 5168, end: 5175 },
            },
            loc: { start: 5168, end: 5176 },
          },
          directives: [],
          loc: { start: 5160, end: 5176 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "subscribe",
            loc: { start: 5179, end: 5188 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 5190, end: 5197 },
            },
            loc: { start: 5190, end: 5197 },
          },
          directives: [],
          loc: { start: 5179, end: 5197 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 5200, end: 5204 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 5207, end: 5213 },
                  },
                  loc: { start: 5207, end: 5213 },
                },
                loc: { start: 5207, end: 5214 },
              },
              loc: { start: 5206, end: 5215 },
            },
            loc: { start: 5206, end: 5216 },
          },
          directives: [],
          loc: { start: 5200, end: 5216 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "text",
            loc: { start: 5219, end: 5223 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5225, end: 5231 },
              },
              loc: { start: 5225, end: 5231 },
            },
            loc: { start: 5225, end: 5232 },
          },
          directives: [],
          loc: { start: 5219, end: 5232 },
        },
      ],
      loc: { start: 5026, end: 5234 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TopicOne",
        loc: { start: 5241, end: 5249 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Topic",
            loc: { start: 5261, end: 5266 },
          },
          loc: { start: 5261, end: 5266 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "TopicSearch",
            loc: { start: 5269, end: 5280 },
          },
          loc: { start: 5269, end: 5280 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 5285, end: 5287 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5289, end: 5291 },
              },
              loc: { start: 5289, end: 5291 },
            },
            loc: { start: 5289, end: 5292 },
          },
          directives: [],
          loc: { start: 5285, end: 5292 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 5295, end: 5300 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5302, end: 5308 },
              },
              loc: { start: 5302, end: 5308 },
            },
            loc: { start: 5302, end: 5309 },
          },
          directives: [],
          loc: { start: 5295, end: 5309 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "update",
            loc: { start: 5312, end: 5318 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 5320, end: 5328 },
              },
              loc: { start: 5320, end: 5328 },
            },
            loc: { start: 5320, end: 5329 },
          },
          directives: [],
          loc: { start: 5312, end: 5329 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 5332, end: 5336 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 5338, end: 5346 },
              },
              loc: { start: 5338, end: 5346 },
            },
            loc: { start: 5338, end: 5347 },
          },
          directives: [],
          loc: { start: 5332, end: 5347 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "resCount",
            loc: { start: 5350, end: 5358 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 5360, end: 5363 },
              },
              loc: { start: 5360, end: 5363 },
            },
            loc: { start: 5360, end: 5364 },
          },
          directives: [],
          loc: { start: 5350, end: 5364 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "active",
            loc: { start: 5367, end: 5373 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 5375, end: 5382 },
              },
              loc: { start: 5375, end: 5382 },
            },
            loc: { start: 5375, end: 5383 },
          },
          directives: [],
          loc: { start: 5367, end: 5383 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "subscribe",
            loc: { start: 5386, end: 5395 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 5397, end: 5404 },
            },
            loc: { start: 5397, end: 5404 },
          },
          directives: [],
          loc: { start: 5386, end: 5404 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 5407, end: 5411 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 5414, end: 5420 },
                  },
                  loc: { start: 5414, end: 5420 },
                },
                loc: { start: 5414, end: 5421 },
              },
              loc: { start: 5413, end: 5422 },
            },
            loc: { start: 5413, end: 5423 },
          },
          directives: [],
          loc: { start: 5407, end: 5423 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "text",
            loc: { start: 5426, end: 5430 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5432, end: 5438 },
              },
              loc: { start: 5432, end: 5438 },
            },
            loc: { start: 5432, end: 5439 },
          },
          directives: [],
          loc: { start: 5426, end: 5439 },
        },
      ],
      loc: { start: 5236, end: 5441 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TopicFork",
        loc: { start: 5448, end: 5457 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Topic",
            loc: { start: 5469, end: 5474 },
          },
          loc: { start: 5469, end: 5474 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 5479, end: 5481 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5483, end: 5485 },
              },
              loc: { start: 5483, end: 5485 },
            },
            loc: { start: 5483, end: 5486 },
          },
          directives: [],
          loc: { start: 5479, end: 5486 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 5489, end: 5494 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5496, end: 5502 },
              },
              loc: { start: 5496, end: 5502 },
            },
            loc: { start: 5496, end: 5503 },
          },
          directives: [],
          loc: { start: 5489, end: 5503 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "update",
            loc: { start: 5506, end: 5512 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 5514, end: 5522 },
              },
              loc: { start: 5514, end: 5522 },
            },
            loc: { start: 5514, end: 5523 },
          },
          directives: [],
          loc: { start: 5506, end: 5523 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 5526, end: 5530 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 5532, end: 5540 },
              },
              loc: { start: 5532, end: 5540 },
            },
            loc: { start: 5532, end: 5541 },
          },
          directives: [],
          loc: { start: 5526, end: 5541 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "resCount",
            loc: { start: 5544, end: 5552 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 5554, end: 5557 },
              },
              loc: { start: 5554, end: 5557 },
            },
            loc: { start: 5554, end: 5558 },
          },
          directives: [],
          loc: { start: 5544, end: 5558 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "active",
            loc: { start: 5561, end: 5567 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 5569, end: 5576 },
              },
              loc: { start: 5569, end: 5576 },
            },
            loc: { start: 5569, end: 5577 },
          },
          directives: [],
          loc: { start: 5561, end: 5577 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "subscribe",
            loc: { start: 5580, end: 5589 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 5591, end: 5598 },
            },
            loc: { start: 5591, end: 5598 },
          },
          directives: [],
          loc: { start: 5580, end: 5598 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "parent",
            loc: { start: 5601, end: 5607 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TopicNormal",
                loc: { start: 5609, end: 5620 },
              },
              loc: { start: 5609, end: 5620 },
            },
            loc: { start: 5609, end: 5621 },
          },
          directives: [],
          loc: { start: 5601, end: 5621 },
        },
      ],
      loc: { start: 5443, end: 5623 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Tags", loc: { start: 5630, end: 5634 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 5639, end: 5643 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5645, end: 5651 },
              },
              loc: { start: 5645, end: 5651 },
            },
            loc: { start: 5645, end: 5652 },
          },
          directives: [],
          loc: { start: 5639, end: 5652 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "count",
            loc: { start: 5655, end: 5660 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 5662, end: 5665 },
              },
              loc: { start: 5662, end: 5665 },
            },
            loc: { start: 5662, end: 5666 },
          },
          directives: [],
          loc: { start: 5655, end: 5666 },
        },
      ],
      loc: { start: 5625, end: 5668 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TopicQuery",
        loc: { start: 5676, end: 5686 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 5691, end: 5693 } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 5696, end: 5698 },
                },
                loc: { start: 5696, end: 5698 },
              },
              loc: { start: 5696, end: 5699 },
            },
            loc: { start: 5695, end: 5700 },
          },
          directives: [],
          loc: { start: 5691, end: 5700 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 5703, end: 5708 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5710, end: 5716 },
            },
            loc: { start: 5710, end: 5716 },
          },
          directives: [],
          loc: { start: 5703, end: 5716 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 5719, end: 5723 },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 5726, end: 5732 },
                },
                loc: { start: 5726, end: 5732 },
              },
              loc: { start: 5726, end: 5733 },
            },
            loc: { start: 5725, end: 5734 },
          },
          directives: [],
          loc: { start: 5719, end: 5734 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "activeOnly",
            loc: { start: 5737, end: 5747 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 5749, end: 5756 },
            },
            loc: { start: 5749, end: 5756 },
          },
          directives: [],
          loc: { start: 5737, end: 5756 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "parent",
            loc: { start: 5759, end: 5765 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 5767, end: 5769 },
            },
            loc: { start: 5767, end: 5769 },
          },
          directives: [],
          loc: { start: 5759, end: 5769 },
        },
      ],
      loc: { start: 5670, end: 5771 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 5785, end: 5793 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createTopicNormal",
            loc: { start: 5798, end: 5815 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "title",
                loc: { start: 5816, end: 5821 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 5823, end: 5829 },
                  },
                  loc: { start: 5823, end: 5829 },
                },
                loc: { start: 5823, end: 5830 },
              },
              directives: [],
              loc: { start: 5816, end: 5830 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "tags",
                loc: { start: 5832, end: 5836 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "ListType",
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: {
                        kind: "Name",
                        value: "String",
                        loc: { start: 5839, end: 5845 },
                      },
                      loc: { start: 5839, end: 5845 },
                    },
                    loc: { start: 5839, end: 5846 },
                  },
                  loc: { start: 5838, end: 5847 },
                },
                loc: { start: 5838, end: 5848 },
              },
              directives: [],
              loc: { start: 5832, end: 5848 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "text",
                loc: { start: 5850, end: 5854 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 5856, end: 5862 },
                  },
                  loc: { start: 5856, end: 5862 },
                },
                loc: { start: 5856, end: 5863 },
              },
              directives: [],
              loc: { start: 5850, end: 5863 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TopicNormal",
                loc: { start: 5866, end: 5877 },
              },
              loc: { start: 5866, end: 5877 },
            },
            loc: { start: 5866, end: 5878 },
          },
          directives: [],
          loc: { start: 5798, end: 5878 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createTopicOne",
            loc: { start: 5881, end: 5895 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "title",
                loc: { start: 5896, end: 5901 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 5903, end: 5909 },
                  },
                  loc: { start: 5903, end: 5909 },
                },
                loc: { start: 5903, end: 5910 },
              },
              directives: [],
              loc: { start: 5896, end: 5910 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "tags",
                loc: { start: 5912, end: 5916 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "ListType",
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: {
                        kind: "Name",
                        value: "String",
                        loc: { start: 5919, end: 5925 },
                      },
                      loc: { start: 5919, end: 5925 },
                    },
                    loc: { start: 5919, end: 5926 },
                  },
                  loc: { start: 5918, end: 5927 },
                },
                loc: { start: 5918, end: 5928 },
              },
              directives: [],
              loc: { start: 5912, end: 5928 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "text",
                loc: { start: 5930, end: 5934 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 5936, end: 5942 },
                  },
                  loc: { start: 5936, end: 5942 },
                },
                loc: { start: 5936, end: 5943 },
              },
              directives: [],
              loc: { start: 5930, end: 5943 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TopicOne",
                loc: { start: 5946, end: 5954 },
              },
              loc: { start: 5946, end: 5954 },
            },
            loc: { start: 5946, end: 5955 },
          },
          directives: [],
          loc: { start: 5881, end: 5955 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createTopicFork",
            loc: { start: 5958, end: 5973 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "title",
                loc: { start: 5974, end: 5979 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 5981, end: 5987 },
                  },
                  loc: { start: 5981, end: 5987 },
                },
                loc: { start: 5981, end: 5988 },
              },
              directives: [],
              loc: { start: 5974, end: 5988 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "parent",
                loc: { start: 5990, end: 5996 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 5998, end: 6000 },
                  },
                  loc: { start: 5998, end: 6000 },
                },
                loc: { start: 5998, end: 6001 },
              },
              directives: [],
              loc: { start: 5990, end: 6001 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TopicFork",
                loc: { start: 6004, end: 6013 },
              },
              loc: { start: 6004, end: 6013 },
            },
            loc: { start: 6004, end: 6014 },
          },
          directives: [],
          loc: { start: 5958, end: 6014 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateTopic",
            loc: { start: 6017, end: 6028 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 6029, end: 6031 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 6033, end: 6035 },
                  },
                  loc: { start: 6033, end: 6035 },
                },
                loc: { start: 6033, end: 6036 },
              },
              directives: [],
              loc: { start: 6029, end: 6036 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "title",
                loc: { start: 6038, end: 6043 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 6045, end: 6051 },
                },
                loc: { start: 6045, end: 6051 },
              },
              directives: [],
              loc: { start: 6038, end: 6051 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "tags",
                loc: { start: 6053, end: 6057 },
              },
              type: {
                kind: "ListType",
                type: {
                  kind: "NonNullType",
                  type: {
                    kind: "NamedType",
                    name: {
                      kind: "Name",
                      value: "String",
                      loc: { start: 6060, end: 6066 },
                    },
                    loc: { start: 6060, end: 6066 },
                  },
                  loc: { start: 6060, end: 6067 },
                },
                loc: { start: 6059, end: 6068 },
              },
              directives: [],
              loc: { start: 6053, end: 6068 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "text",
                loc: { start: 6070, end: 6074 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 6076, end: 6082 },
                },
                loc: { start: 6076, end: 6082 },
              },
              directives: [],
              loc: { start: 6070, end: 6082 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TopicNormal",
                loc: { start: 6085, end: 6096 },
              },
              loc: { start: 6085, end: 6096 },
            },
            loc: { start: 6085, end: 6097 },
          },
          directives: [],
          loc: { start: 6017, end: 6097 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "subscribeTopic",
            loc: { start: 6100, end: 6114 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "topic",
                loc: { start: 6115, end: 6120 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 6122, end: 6124 },
                  },
                  loc: { start: 6122, end: 6124 },
                },
                loc: { start: 6122, end: 6125 },
              },
              directives: [],
              loc: { start: 6115, end: 6125 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 6128, end: 6135 },
            },
            loc: { start: 6128, end: 6135 },
          },
          directives: [],
          loc: { start: 6100, end: 6135 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "unsubscribeTopic",
            loc: { start: 6138, end: 6154 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "topic",
                loc: { start: 6155, end: 6160 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 6162, end: 6164 },
                  },
                  loc: { start: 6162, end: 6164 },
                },
                loc: { start: 6162, end: 6165 },
              },
              directives: [],
              loc: { start: 6155, end: 6165 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 6168, end: 6175 },
            },
            loc: { start: 6168, end: 6175 },
          },
          directives: [],
          loc: { start: 6138, end: 6175 },
        },
      ],
      loc: { start: 5773, end: 6177 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 6191, end: 6196 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "topics",
            loc: { start: 6201, end: 6207 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "query",
                loc: { start: 6208, end: 6213 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "TopicQuery",
                    loc: { start: 6215, end: 6225 },
                  },
                  loc: { start: 6215, end: 6225 },
                },
                loc: { start: 6215, end: 6226 },
              },
              directives: [],
              loc: { start: 6208, end: 6226 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
                loc: { start: 6228, end: 6232 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 6234, end: 6237 },
                  },
                  loc: { start: 6234, end: 6237 },
                },
                loc: { start: 6234, end: 6238 },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
                loc: { start: 6241, end: 6242 },
              },
              directives: [],
              loc: { start: 6228, end: 6242 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 6244, end: 6249 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 6251, end: 6254 },
                  },
                  loc: { start: 6251, end: 6254 },
                },
                loc: { start: 6251, end: 6255 },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
                loc: { start: 6258, end: 6261 },
              },
              directives: [],
              loc: { start: 6244, end: 6261 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Topic",
                    loc: { start: 6265, end: 6270 },
                  },
                  loc: { start: 6265, end: 6270 },
                },
                loc: { start: 6265, end: 6271 },
              },
              loc: { start: 6264, end: 6272 },
            },
            loc: { start: 6264, end: 6273 },
          },
          directives: [],
          loc: { start: 6201, end: 6273 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "topicTags",
            loc: { start: 6276, end: 6285 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 6286, end: 6291 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 6293, end: 6296 },
                  },
                  loc: { start: 6293, end: 6296 },
                },
                loc: { start: 6293, end: 6297 },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
                loc: { start: 6300, end: 6303 },
              },
              directives: [],
              loc: { start: 6286, end: 6303 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Tags",
                    loc: { start: 6307, end: 6311 },
                  },
                  loc: { start: 6307, end: 6311 },
                },
                loc: { start: 6307, end: 6312 },
              },
              loc: { start: 6306, end: 6313 },
            },
            loc: { start: 6306, end: 6314 },
          },
          directives: [],
          loc: { start: 6276, end: 6314 },
        },
      ],
      loc: { start: 6179, end: 6316 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 6322, end: 6326 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 6331, end: 6333 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 6335, end: 6337 },
              },
              loc: { start: 6335, end: 6337 },
            },
            loc: { start: 6335, end: 6338 },
          },
          directives: [],
          loc: { start: 6331, end: 6338 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "sn", loc: { start: 6341, end: 6343 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6345, end: 6351 },
              },
              loc: { start: 6345, end: 6351 },
            },
            loc: { start: 6345, end: 6352 },
          },
          directives: [],
          loc: { start: 6341, end: 6352 },
        },
      ],
      loc: { start: 6317, end: 6354 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthUser",
        loc: { start: 6362, end: 6370 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 6375, end: 6377 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6379, end: 6385 },
            },
            loc: { start: 6379, end: 6385 },
          },
          directives: [],
          loc: { start: 6375, end: 6385 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "sn", loc: { start: 6388, end: 6390 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6392, end: 6398 },
            },
            loc: { start: 6392, end: 6398 },
          },
          directives: [],
          loc: { start: 6388, end: 6398 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "pass",
            loc: { start: 6401, end: 6405 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6407, end: 6413 },
              },
              loc: { start: 6407, end: 6413 },
            },
            loc: { start: 6407, end: 6414 },
          },
          directives: [],
          loc: { start: 6401, end: 6414 },
        },
      ],
      loc: { start: 6356, end: 6416 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 6430, end: 6435 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userID",
            loc: { start: 6440, end: 6446 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sn",
                loc: { start: 6447, end: 6449 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 6451, end: 6457 },
                  },
                  loc: { start: 6451, end: 6457 },
                },
                loc: { start: 6451, end: 6458 },
              },
              directives: [],
              loc: { start: 6447, end: 6458 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 6461, end: 6463 },
              },
              loc: { start: 6461, end: 6463 },
            },
            loc: { start: 6461, end: 6464 },
          },
          directives: [],
          loc: { start: 6440, end: 6464 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userSN",
            loc: { start: 6467, end: 6473 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 6474, end: 6476 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 6478, end: 6480 },
                  },
                  loc: { start: 6478, end: 6480 },
                },
                loc: { start: 6478, end: 6481 },
              },
              directives: [],
              loc: { start: 6474, end: 6481 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6484, end: 6490 },
              },
              loc: { start: 6484, end: 6490 },
            },
            loc: { start: 6484, end: 6491 },
          },
          directives: [],
          loc: { start: 6467, end: 6491 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 6494, end: 6498 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 6500, end: 6504 },
              },
              loc: { start: 6500, end: 6504 },
            },
            loc: { start: 6500, end: 6505 },
          },
          directives: [],
          loc: { start: 6494, end: 6505 },
        },
      ],
      loc: { start: 6418, end: 6507 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UpdateUserResponse",
        loc: { start: 6514, end: 6532 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 6537, end: 6541 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 6543, end: 6547 },
              },
              loc: { start: 6543, end: 6547 },
            },
            loc: { start: 6543, end: 6548 },
          },
          directives: [],
          loc: { start: 6537, end: 6548 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 6551, end: 6556 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TokenMaster",
                loc: { start: 6558, end: 6569 },
              },
              loc: { start: 6558, end: 6569 },
            },
            loc: { start: 6558, end: 6570 },
          },
          directives: [],
          loc: { start: 6551, end: 6570 },
        },
      ],
      loc: { start: 6509, end: 6572 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateUserResponse",
        loc: { start: 6579, end: 6597 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 6602, end: 6606 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 6608, end: 6612 },
              },
              loc: { start: 6608, end: 6612 },
            },
            loc: { start: 6608, end: 6613 },
          },
          directives: [],
          loc: { start: 6602, end: 6613 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 6616, end: 6621 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "TokenMaster",
                loc: { start: 6623, end: 6634 },
              },
              loc: { start: 6623, end: 6634 },
            },
            loc: { start: 6623, end: 6635 },
          },
          directives: [],
          loc: { start: 6616, end: 6635 },
        },
      ],
      loc: { start: 6574, end: 6637 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 6651, end: 6659 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createUser",
            loc: { start: 6664, end: 6674 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sn",
                loc: { start: 6675, end: 6677 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 6679, end: 6685 },
                  },
                  loc: { start: 6679, end: 6685 },
                },
                loc: { start: 6679, end: 6686 },
              },
              directives: [],
              loc: { start: 6675, end: 6686 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "pass",
                loc: { start: 6688, end: 6692 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 6694, end: 6700 },
                  },
                  loc: { start: 6694, end: 6700 },
                },
                loc: { start: 6694, end: 6701 },
              },
              directives: [],
              loc: { start: 6688, end: 6701 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "recaptcha",
                loc: { start: 6703, end: 6712 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 6714, end: 6720 },
                  },
                  loc: { start: 6714, end: 6720 },
                },
                loc: { start: 6714, end: 6721 },
              },
              directives: [],
              loc: { start: 6703, end: 6721 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CreateUserResponse",
                loc: { start: 6724, end: 6742 },
              },
              loc: { start: 6724, end: 6742 },
            },
            loc: { start: 6724, end: 6743 },
          },
          directives: [],
          loc: { start: 6664, end: 6743 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateUser",
            loc: { start: 6746, end: 6756 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sn",
                loc: { start: 6757, end: 6759 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 6761, end: 6767 },
                },
                loc: { start: 6761, end: 6767 },
              },
              directives: [],
              loc: { start: 6757, end: 6767 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "pass",
                loc: { start: 6769, end: 6773 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 6775, end: 6781 },
                },
                loc: { start: 6775, end: 6781 },
              },
              directives: [],
              loc: { start: 6769, end: 6781 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "auth",
                loc: { start: 6783, end: 6787 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "AuthUser",
                    loc: { start: 6789, end: 6797 },
                  },
                  loc: { start: 6789, end: 6797 },
                },
                loc: { start: 6789, end: 6798 },
              },
              directives: [],
              loc: { start: 6783, end: 6798 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "UpdateUserResponse",
                loc: { start: 6801, end: 6819 },
              },
              loc: { start: 6801, end: 6819 },
            },
            loc: { start: 6801, end: 6820 },
          },
          directives: [],
          loc: { start: 6746, end: 6820 },
        },
      ],
      loc: { start: 6639, end: 6822 },
    },
  ],
  loc: { start: 0, end: 6823 },
} as unknown as DocumentNode;
