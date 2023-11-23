declare module "pgsql-parser" {
  export function parseFunction(functionDefinition: string): PLpgSQL_function[];

  export type PLpgSQL_type = {
    PLpgSQL_type: {
      typname: string;
    };
  };

  export type PLpgSQL_variable = PLpgSQL_rec | PLpgSQL_row | PLpgSQL_var;

  export type PLpgSQL_var = {
    PLpgSQL_var: {
      refname: string;
      datatype: PLpgSQL_type;
      isconst?: boolean;
      notnull?: boolean;
      default_val?: PLpgSQL_expr;
      cursor_explicit_expr?: PLpgSQL_expr;
      cursor_explicit_argrow?: number;
      cursor_options?: number;
    };
  };

  export type PLpgSQL_row = {
    PLpgSQL_row: {
      refname: string;
      lineno: number;
      fields: Array<{ name: string; varno: number }>;
    };
  };

  export type PLpgSQL_rec = {
    PLpgSQL_rec: {
      refname: string;
      dno: number;
      lineno: number;
    };
  };

  export type PLpgSQL_recfield = {
    PLpgSQL_recfield: {
      refname: string;
      recparentno: number;
    };
  };

  export type PLpgSQL_arrayelem = {
    PLpgSQL_arrayelem: {
      refname: string;
      arrayparentno: number;
    };
  };

  export type PLpgSQL_condition = {
    PLpgSQL_condition: {
      condname: string;
    };
  };

  export type PLpgSQL_exception = {
    PLpgSQL_exception: {
      conditions: Array<PLpgSQL_condition>;
      action: PLpgSQL_stmt_block;
    };
  };

  export type PLpgSQL_exception_block = {
    PLpgSQL_exception_block: {
      exc_list: Array<PLpgSQL_exception>;
    };
  };

  export type PLpgSQL_stmt_assign = {
    PLpgSQL_stmt_assign: {
      lineno: number;
      varno: number;
      expr: PLpgSQL_expr;
    };
  };

  export type PLpgSQL_if_elsif = {
    PLpgSQL_if_elsif: {
      lineno: number;
      cond: PLpgSQL_expr;
      stmts: PLpgSQL_stmt[];
    };
  };

  export type PLpgSQL_stmt_if = {
    PLpgSQL_stmt_if: {
      lineno: number;
      cond: PLpgSQL_expr;
      then_body: PLpgSQL_stmt[];
      elsif_list: PLpgSQL_if_elsif[];
      else_body: PLpgSQL_stmt[];
    };
  };

  export type PLpgSQL_case_when = {
    PLpgSQL_case_when: {
      lineno: number;
      expr: PLpgSQL_expr;
      stmts: PLpgSQL_stmt[];
    };
  };

  export type PLpgSQL_stmt_case = {
    PLpgSQL_stmt_case: {
      lineno: number;
      t_expr: PLpgSQL_expr;
      t_varno: number;
      case_when_list: PLpgSQL_case_when[];
      have_else: boolean;
      else_stmts: PLpgSQL_stmt[];
    };
  };

  export type PLpgSQL_stmt_loop = {
    PLpgSQL_stmt_loop: {
      lineno: number;
      label?: string;
      body: PLpgSQL_stmt[];
    };
  };

  export type PLpgSQL_stmt_while = {
    PLpgSQL_stmt_while: {
      lineno: number;
      label?: string;
      cond: PLpgSQL_expr;
      body: PLpgSQL_stmt[];
    };
  };

  export type PLpgSQL_stmt_fori = {
    PLpgSQL_stmt_fori: {
      lineno: number;
      label?: string;
      var: PLpgSQL_var;
      lower: PLpgSQL_expr;
      upper: PLpgSQL_expr;
      step: PLpgSQL_expr;
      reverse: boolean;
      body: PLpgSQL_stmt[];
    };
  };

  export type PLpgSQL_stmt_fors = {
    PLpgSQL_stmt_fors: {
      lineno: number;
      label?: string;
      var: PLpgSQL_variable;
      query: PLpgSQL_expr;
      body: PLpgSQL_stmt[];
    };
  };

  export type PLpgSQL_stmt_forc = {
    PLpgSQL_stmt_forc: {
      lineno: number;
      label?: string;
      var: PLpgSQL_variable;
      body: PLpgSQL_stmt[];
      curvar: number;
      argquery: PLpgSQL_expr;
    };
  };

  export type PLpgSQL_stmt_foreach_a = {
    PLpgSQL_stmt_foreach_a: {
      lineno: number;
      label?: string;
      varno: number;
      slice: number;
      expr: PLpgSQL_expr;
      body: PLpgSQL_stmt[];
    };
  };

  export type PLpgSQL_stmt_exit = {
    PLpgSQL_stmt_exit: {
      lineno: number;
      is_exit: boolean;
      label?: string;
      cond: PLpgSQL_expr;
    };
  };

  export type PLpgSQL_stmt_return = {
    PLpgSQL_stmt_return: {
      lineno?: number;
      expr?: PLpgSQL_expr;
    };
  };

  export type PLpgSQL_stmt_return_next = {
    PLpgSQL_stmt_return_next: {
      lineno?: number;
      expr?: PLpgSQL_expr;
    };
  };

  export type PLpgSQL_stmt_return_query = {
    PLpgSQL_stmt_return_query: {
      lineno?: number;
      query: PLpgSQL_expr;
      dynquery?: PLpgSQL_expr;
      params?: Array<PLpgSQL_expr>;
    };
  };

  export type PLpgSQL_raise_option = {
    PLpgSQL_raise_option: {
      lineno?: number;
      opt_type: number;
      expr: PLpgSQL_expr;
    };
  };

  export type PLpgSQL_stmt_raise = {
    PLpgSQL_stmt_raise: {
      lineno?: number;
      elog_level: number;
      condname?: string;
      message?: string;
      params?: Array<PLpgSQL_expr>;
      options?: PLpgSQL_raise_option[];
    };
  };

  export type PLpgSQL_stmt_assert = {
    PLpgSQL_stmt_assert: {
      lineno?: number;
      cond: PLpgSQL_expr;
      message?: PLpgSQL_expr;
    };
  };

  export type PLpgSQL_stmt_execsql = {
    PLpgSQL_stmt_execsql:
      | {
          lineno: number;
          sqlstmt: PLpgSQL_expr;
          into: true;
          strict?: boolean;
          target: PLpgSQL_variable;
        }
      | {
          lineno: number;
          sqlstmt: PLpgSQL_expr;
          into?: false;
          strict?: boolean;
          target?: null;
        };
  };

  export type PLpgSQL_stmt_dynexecute = {
    PLpgSQL_stmt_dynexecute: {
      lineno: number;
      query: PLpgSQL_expr;
      into: boolean;
      strict?: boolean;
      target?: PLpgSQL_variable;
      params?: Array<PLpgSQL_expr>;
    };
  };

  export type PLpgSQL_stmt_dynfors = {
    PLpgSQL_stmt_dynfors: {
      lineno: number;
      label?: string;
      var: PLpgSQL_variable;
      query: PLpgSQL_expr;
      body: PLpgSQL_stmt[];
    };
  };

  export type PLpgSQL_diag_item = {
    PLpgSQL_diag_item: {
      kind:
        | "ROW_COUNT"
        | "PG_CONTEXT"
        | "PG_EXCEPTION_CONTEXT"
        | "PG_EXCEPTION_DETAIL"
        | "PG_EXCEPTION_HINT"
        | "RETURNED_SQLSTATE"
        | "COLUMN_NAME"
        | "CONSTRAINT_NAME"
        | "PG_DATATYPE_NAME"
        | "MESSAGE_TEXT"
        | "TABLE_NAME"
        | "SCHEMA_NAME"
        | "unknown";
      target: number;
    };
  };

  export type PLpgSQL_stmt_getdiag = {
    PLpgSQL_stmt_getdiag: {
      lineno: number;
      is_stacked?: boolean;
      diag_items: PLpgSQL_diag_item[];
    };
  };

  export type PLpgSQL_stmt_open = {
    PLpgSQL_stmt_open: {
      lineno: number;
      curvar: number;
      cursor_options: number;
      argquery: PLpgSQL_expr;
      query: PLpgSQL_expr;
      dynquery?: PLpgSQL_expr;
      params?: Array<PLpgSQL_expr>;
    };
  };

  export type PLpgSQL_stmt_fetch = {
    PLpgSQL_stmt_fetch: {
      lineno: number;
      target: PLpgSQL_variable;
      curvar: number;
      direction: number;
      how_many: number;
      expr?: PLpgSQL_expr;
      is_move?: boolean;
      returns_multiple_rows?: boolean;
    };
  };

  export type PLpgSQL_stmt_close = {
    PLpgSQL_stmt_close: {
      lineno: number;
      curvar: number;
    };
  };

  export type PLpgSQL_stmt_perform = {
    PLpgSQL_stmt_perform: {
      lineno: number;
      expr: PLpgSQL_expr;
    };
  };

  export type PLpgSQL_stmt_call = {
    PLpgSQL_stmt_call: {
      lineno: number;
      expr: PLpgSQL_expr;
      is_call?: boolean;
      target?: PLpgSQL_variable;
    };
  };

  export type PLpgSQL_stmt_commit = {
    PLpgSQL_stmt_commit: {
      lineno: number;
      chain?: boolean;
    };
  };

  export type PLpgSQL_stmt_rollback = {
    PLpgSQL_stmt_rollback: {
      lineno: number;
      chain?: boolean;
    };
  };

  export type PLpgSQL_stmt_set = {
    PLpgSQL_stmt_set: {
      lineno: number;
      expr: PLpgSQL_expr;
    };
  };

  export type PLpgSQL_stmt =
    | PLpgSQL_stmt_block
    | PLpgSQL_stmt_assign
    | PLpgSQL_stmt_if
    | PLpgSQL_stmt_case
    | PLpgSQL_stmt_loop
    | PLpgSQL_stmt_while
    | PLpgSQL_stmt_fori
    | PLpgSQL_stmt_fors
    | PLpgSQL_stmt_forc
    | PLpgSQL_stmt_foreach_a
    | PLpgSQL_stmt_exit
    | PLpgSQL_stmt_return
    | PLpgSQL_stmt_return_next
    | PLpgSQL_stmt_return_query
    | PLpgSQL_stmt_raise
    | PLpgSQL_stmt_assert
    | PLpgSQL_stmt_execsql
    | PLpgSQL_stmt_dynexecute
    | PLpgSQL_stmt_dynfors
    | PLpgSQL_stmt_getdiag
    | PLpgSQL_stmt_open
    | PLpgSQL_stmt_fetch
    | PLpgSQL_stmt_close
    | PLpgSQL_stmt_perform
    | PLpgSQL_stmt_call
    | PLpgSQL_stmt_commit
    | PLpgSQL_stmt_rollback
    | PLpgSQL_stmt_set;

  export type PLpgSQL_stmt_block = {
    PLpgSQL_stmt_block: {
      lineno?: number;
      body?: Array<PLpgSQL_stmt>;
      label?: string;
      exceptions?: PLpgSQL_exception_block;
    };
  };

  export type PLpgSQL_expr = {
    PLpgSQL_expr: {
      query: string;
    };
  };

  export type PLpgSQL_function = {
    PLpgSQL_function: {
      datums: Array<
        | PLpgSQL_var
        | PLpgSQL_row
        | PLpgSQL_rec
        | PLpgSQL_recfield
        | PLpgSQL_arrayelem
      >;
      action: PLpgSQL_stmt_block;
    };
  };
}
