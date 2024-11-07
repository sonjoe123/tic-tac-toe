import "../blocks/dictionary";
import "../blocks/update_dict";
import "../blocks/merge_dict";
import "../blocks/quad_dictionary";
import "../blocks/update_quad_dict";
import "../blocks/key_value";
import "../blocks/quad_pair";
import "../blocks/key_block";
import "../blocks/value_block";
import "../blocks/dictionary_block";
import "../blocks/const_block";
import "../blocks/board_length";
import "../blocks/check_index";
import "../blocks/for_loop";
import "../blocks/key_pair";
import "../blocks/function";
import "../blocks/board";
import "../blocks/winning_combinations";
import "../blocks/check_game_status";
import "../blocks/return";
import "../blocks/board_array";
import "../blocks/board_not_empty";
import "../blocks/create_qubo_for_single_move";
import "../blocks/array_of";
import "../blocks/define_array";
import "../blocks/if_do";
import "../blocks/compare";
import "../blocks/range_of";
import "../blocks/function_definition";
import "../blocks/full_code";
import "../blocks/setquantumVarHterm"
import "../blocks/setquantumVarXterm"
import "../blocks/getquantumVarXterm"
import "../blocks/getquantumVarHterm"
import "../blocks/quantumVarXterm"
import "../blocks/quantumVarHterm"

export const toolbox = {

  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Logic",
      categorystyle: "logic_category",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_negate",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
        {
          kind: "block",
          type: "logic_null",
        },
        {
          kind: "block",
          type: "logic_ternary",
        },
      ],
    },
    {
      kind: "category",
      name: "Quantum Variables",
      categorystyle: "variable_category",
      contents: [
        {
          kind: "block",
          type: "setquantumVarHterm", // Custom block to set a variable's value
        },
        {
          kind: "block",
          type: "setquantumVarXterm", // Custom block to get a variable's value
        },
        {
          kind: "block",
          type: "getquantumVarXterm", // Custom block to set a variable's value
        },
        {
          kind: "block",
          type: "getquantumVarHterm", // Custom block to get a variable's value
        },
        {
          kind: "block",
          type: "quantumVarXterm", // Custom block to set a variable's value
        },
        {
          kind: "block",
          type: "quantumVarHterm", // Custom block to get a variable's value
        },
      ],
    },
    {
      kind: "category",
      name: "Game Code",
      categorystyle: "logic_category",
      contents: [
        {
          kind: "block",
          type: "full_code",
        },
        {
          kind: "block",
          type: "if_do",
        },
        {
          kind: "block",
          type: "function_definition",
        },
        {
          kind: "block",
          type: "compare",
        },
        {
          kind: "block",
          type: "winning_combinations",
        },
        {
          kind: "block",
          type: "check_game_status",
        },
        {
          kind: "block",
          type: "return",
        },
        {
          kind: "block",
          type: "board",
        },
        {
          kind: "block",
          type: "board_array",
        },
        {
          kind: "block",
          type: "board_not_empty",
        },
        {
          kind: "block",
          type: "create_qubo_for_single_move",
        },
        {
          kind: "block",
          type: "array_of",
        },
        {
          kind: "block",
          type: "define_array",
        },
        {
          kind: "block",
          type: "range_of",
        },
      ],
    },

    {
      kind: "category",
      name: "Loops",
      categorystyle: "loop_category",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
          inputs: {
            TIMES: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_whileUntil",
        },
        {
          kind: "block",
          type: "controls_for",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
            BY: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_forEach",
        },
        {
          kind: "block",
          type: "controls_flow_statements",
        },
      ],
    },
    {
      kind: "category",
      name: "Math",
      categorystyle: "math_category",
      contents: [
        {
          kind: "block",
          type: "math_number",
          fields: {
            NUM: 123,
          },
        },
        {
          kind: "block",
          type: "math_arithmetic",
          inputs: {
            A: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            B: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_single",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 9,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_trig",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 45,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_constant",
        },
        {
          kind: "block",
          type: "math_number_property",
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_round",
          fields: {
            OP: "ROUND",
          },
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 3.1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_on_list",
          fields: {
            OP: "SUM",
          },
        },
        {
          kind: "block",
          type: "math_modulo",
          inputs: {
            DIVIDEND: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 64,
                },
              },
            },
            DIVISOR: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_constrain",
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 50,
                },
              },
            },
            LOW: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            HIGH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_int",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_float",
        },
        {
          kind: "block",
          type: "math_atan2",
          inputs: {
            X: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            Y: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Text",
      categorystyle: "text_category",
      contents: [
        {
          kind: "block",
          type: "text",
        },
        // {
        //   kind: "block",
        //   type: "text_multiline",
        // },
        {
          kind: "block",
          type: "text_join",
        },
        {
          kind: "block",
          type: "text_append",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_length",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_isEmpty",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_indexOf",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
            FIND: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_charAt",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_getSubstring",
          inputs: {
            STRING: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_changeCase",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_trim",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_count",
          inputs: {
            SUB: {
              shadow: {
                type: "text",
              },
            },
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_replace",
          inputs: {
            FROM: {
              shadow: {
                type: "text",
              },
            },
            TO: {
              shadow: {
                type: "text",
              },
            },
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_reverse",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_print",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_prompt_ext",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Lists",
      categorystyle: "list_category",
      contents: [
        {
          kind: "block",
          type: "lists_create_with",
        },
        {
          kind: "block",
          type: "lists_create_with",
        },
        {
          kind: "block",
          type: "lists_repeat",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_length",
        },
        {
          kind: "block",
          type: "lists_isEmpty",
        },
        {
          kind: "block",
          type: "lists_indexOf",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_getIndex",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_setIndex",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_getSublist",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_split",
          inputs: {
            DELIM: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: ",",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_sort",
        },
        {
          kind: "block",
          type: "lists_reverse",
        },
      ],
    },

    {
      kind: "sep",
    },
    {
      kind: "category",
      name: "Variables",
      categorystyle: "variable_category",
      custom: "VARIABLE",
    },
    {
      "kind": "category",
      "name": "Quantum Variables",
      "custom": "List"
    },
    {
      kind: "category",
      name: "Functions",
      categorystyle: "procedure_category",
      custom: "PROCEDURE",
    },
    
    {
      kind: "category",
      name: "Quantum",
      colour: "245",
      contents: [
        {
          kind: "block",
          type: "dictionary",
        },
        {
          kind: "block",
          type: "update_dict",
        },
        {
          kind: "block",
          type: "quad_dictionary",
        },
        {
          kind: "block",
          type: "update_quad_dict",
        },
        {
          kind: "block",
          type: "merge_dict",
        },
        {
          kind: "block",
          type: "key_value",
        },
        {
          kind: "block",
          type: "quad_pair",
        },
        {
          kind: "block",
          type: "key_block",
        },
        {
          kind: "block",
          type: "value_block",
        },
        {
          kind: "block",
          type: "dictionary_block",
        },
        {
          kind: "block",
          type: "const_block",
        },
        {
          kind: "block",
          type: "board_length",
        },
        {
          kind: "block",
          type: "check_index",
          inputs: {
            INDEX: {
              shadow: {
                type: "variables_get",
              },
            },
            VALUE: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "key_pair",
        },
        {
          kind: "block",
          type: "function",
        },
        {
          kind: "block",
          type: "board",
        },
      ],
    },
  ],
};
