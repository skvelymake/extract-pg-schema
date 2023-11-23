declare module "pgsql-parser" {
  export function parse(sql: string): ParseResult;

  export type ParseResult = Array<{
    RawStmt: RawStmt;
  }>;

  export type Node = {
    Alias?: Alias;
    RangeVar?: RangeVar;
    TableFunc?: TableFunc;
    Expr?: Expr;
    PbVar?: Var;
    Param?: Param;
    Aggref?: Aggref;
    GroupingFunc?: GroupingFunc;
    WindowFunc?: WindowFunc;
    SubscriptingRef?: SubscriptingRef;
    FuncExpr?: FuncExpr;
    NamedArgExpr?: NamedArgExpr;
    OpExpr?: OpExpr;
    DistinctExpr?: DistinctExpr;
    NullIfExpr?: NullIfExpr;
    ScalarArrayOpExpr?: ScalarArrayOpExpr;
    BoolExpr?: BoolExpr;
    SubLink?: SubLink;
    SubPlan?: SubPlan;
    AlternativeSubPlan?: AlternativeSubPlan;
    FieldSelect?: FieldSelect;
    FieldStore?: FieldStore;
    RelabelType?: RelabelType;
    CoerceViaIo?: CoerceViaIO;
    ArrayCoerceExpr?: ArrayCoerceExpr;
    ConvertRowtypeExpr?: ConvertRowtypeExpr;
    CollateExpr?: CollateExpr;
    CaseExpr?: CaseExpr;
    CaseWhen?: CaseWhen;
    CaseTestExpr?: CaseTestExpr;
    ArrayExpr?: ArrayExpr;
    RowExpr?: RowExpr;
    RowCompareExpr?: RowCompareExpr;
    CoalesceExpr?: CoalesceExpr;
    MinMaxExpr?: MinMaxExpr;
    SqlvalueFunction?: SQLValueFunction;
    XmlExpr?: XmlExpr;
    NullTest?: NullTest;
    BooleanTest?: BooleanTest;
    CoerceToDomain?: CoerceToDomain;
    CoerceToDomainValue?: CoerceToDomainValue;
    SetToDefault?: SetToDefault;
    CurrentOfExpr?: CurrentOfExpr;
    NextValueExpr?: NextValueExpr;
    InferenceElem?: InferenceElem;
    TargetEntry?: TargetEntry;
    RangeTblRef?: RangeTblRef;
    JoinExpr?: JoinExpr;
    FromExpr?: FromExpr;
    OnConflictExpr?: OnConflictExpr;
    IntoClause?: IntoClause;
    RawStmt?: RawStmt;
    Query?: Query;
    InsertStmt?: InsertStmt;
    DeleteStmt?: DeleteStmt;
    UpdateStmt?: UpdateStmt;
    SelectStmt?: SelectStmt;
    AlterTableStmt?: AlterTableStmt;
    AlterTableCmd?: AlterTableCmd;
    AlterDomainStmt?: AlterDomainStmt;
    SetOperationStmt?: SetOperationStmt;
    GrantStmt?: GrantStmt;
    GrantRoleStmt?: GrantRoleStmt;
    AlterDefaultPrivilegesStmt?: AlterDefaultPrivilegesStmt;
    ClosePortalStmt?: ClosePortalStmt;
    ClusterStmt?: ClusterStmt;
    CopyStmt?: CopyStmt;
    CreateStmt?: CreateStmt;
    DefineStmt?: DefineStmt;
    DropStmt?: DropStmt;
    TruncateStmt?: TruncateStmt;
    CommentStmt?: CommentStmt;
    FetchStmt?: FetchStmt;
    IndexStmt?: IndexStmt;
    CreateFunctionStmt?: CreateFunctionStmt;
    AlterFunctionStmt?: AlterFunctionStmt;
    DoStmt?: DoStmt;
    RenameStmt?: RenameStmt;
    RuleStmt?: RuleStmt;
    NotifyStmt?: NotifyStmt;
    ListenStmt?: ListenStmt;
    UnlistenStmt?: UnlistenStmt;
    TransactionStmt?: TransactionStmt;
    ViewStmt?: ViewStmt;
    LoadStmt?: LoadStmt;
    CreateDomainStmt?: CreateDomainStmt;
    CreatedbStmt?: CreatedbStmt;
    DropdbStmt?: DropdbStmt;
    VacuumStmt?: VacuumStmt;
    ExplainStmt?: ExplainStmt;
    CreateTableAsStmt?: CreateTableAsStmt;
    CreateSeqStmt?: CreateSeqStmt;
    AlterSeqStmt?: AlterSeqStmt;
    VariableSetStmt?: VariableSetStmt;
    VariableShowStmt?: VariableShowStmt;
    DiscardStmt?: DiscardStmt;
    CreateTrigStmt?: CreateTrigStmt;
    CreatePlangStmt?: CreatePLangStmt;
    CreateRoleStmt?: CreateRoleStmt;
    AlterRoleStmt?: AlterRoleStmt;
    DropRoleStmt?: DropRoleStmt;
    LockStmt?: LockStmt;
    ConstraintsSetStmt?: ConstraintsSetStmt;
    ReindexStmt?: ReindexStmt;
    CheckPointStmt?: CheckPointStmt;
    CreateSchemaStmt?: CreateSchemaStmt;
    AlterDatabaseStmt?: AlterDatabaseStmt;
    AlterDatabaseSetStmt?: AlterDatabaseSetStmt;
    AlterRoleSetStmt?: AlterRoleSetStmt;
    CreateConversionStmt?: CreateConversionStmt;
    CreateCastStmt?: CreateCastStmt;
    CreateOpClassStmt?: CreateOpClassStmt;
    CreateOpFamilyStmt?: CreateOpFamilyStmt;
    AlterOpFamilyStmt?: AlterOpFamilyStmt;
    PrepareStmt?: PrepareStmt;
    ExecuteStmt?: ExecuteStmt;
    DeallocateStmt?: DeallocateStmt;
    DeclareCursorStmt?: DeclareCursorStmt;
    CreateTableSpaceStmt?: CreateTableSpaceStmt;
    DropTableSpaceStmt?: DropTableSpaceStmt;
    AlterObjectDependsStmt?: AlterObjectDependsStmt;
    AlterObjectSchemaStmt?: AlterObjectSchemaStmt;
    AlterOwnerStmt?: AlterOwnerStmt;
    AlterOperatorStmt?: AlterOperatorStmt;
    AlterTypeStmt?: AlterTypeStmt;
    DropOwnedStmt?: DropOwnedStmt;
    ReassignOwnedStmt?: ReassignOwnedStmt;
    CompositeTypeStmt?: CompositeTypeStmt;
    CreateEnumStmt?: CreateEnumStmt;
    CreateRangeStmt?: CreateRangeStmt;
    AlterEnumStmt?: AlterEnumStmt;
    AlterTsdictionaryStmt?: AlterTSDictionaryStmt;
    AlterTsconfigurationStmt?: AlterTSConfigurationStmt;
    CreateFdwStmt?: CreateFdwStmt;
    AlterFdwStmt?: AlterFdwStmt;
    CreateForeignServerStmt?: CreateForeignServerStmt;
    AlterForeignServerStmt?: AlterForeignServerStmt;
    CreateUserMappingStmt?: CreateUserMappingStmt;
    AlterUserMappingStmt?: AlterUserMappingStmt;
    DropUserMappingStmt?: DropUserMappingStmt;
    AlterTableSpaceOptionsStmt?: AlterTableSpaceOptionsStmt;
    AlterTableMoveAllStmt?: AlterTableMoveAllStmt;
    SecLabelStmt?: SecLabelStmt;
    CreateForeignTableStmt?: CreateForeignTableStmt;
    ImportForeignSchemaStmt?: ImportForeignSchemaStmt;
    CreateExtensionStmt?: CreateExtensionStmt;
    AlterExtensionStmt?: AlterExtensionStmt;
    AlterExtensionContentsStmt?: AlterExtensionContentsStmt;
    CreateEventTrigStmt?: CreateEventTrigStmt;
    AlterEventTrigStmt?: AlterEventTrigStmt;
    RefreshMatViewStmt?: RefreshMatViewStmt;
    ReplicaIdentityStmt?: ReplicaIdentityStmt;
    AlterSystemStmt?: AlterSystemStmt;
    CreatePolicyStmt?: CreatePolicyStmt;
    AlterPolicyStmt?: AlterPolicyStmt;
    CreateTransformStmt?: CreateTransformStmt;
    CreateAmStmt?: CreateAmStmt;
    CreatePublicationStmt?: CreatePublicationStmt;
    AlterPublicationStmt?: AlterPublicationStmt;
    CreateSubscriptionStmt?: CreateSubscriptionStmt;
    AlterSubscriptionStmt?: AlterSubscriptionStmt;
    DropSubscriptionStmt?: DropSubscriptionStmt;
    CreateStatsStmt?: CreateStatsStmt;
    AlterCollationStmt?: AlterCollationStmt;
    CallStmt?: CallStmt;
    AlterStatsStmt?: AlterStatsStmt;
    AExpr?: A_Expr;
    ColumnRef?: ColumnRef;
    ParamRef?: ParamRef;
    AConst?: A_Const;
    FuncCall?: FuncCall;
    AStar?: A_Star;
    AIndices?: A_Indices;
    AIndirection?: A_Indirection;
    AArrayExpr?: A_ArrayExpr;
    ResTarget?: ResTarget;
    MultiAssignRef?: MultiAssignRef;
    TypeCast?: TypeCast;
    CollateClause?: CollateClause;
    SortBy?: SortBy;
    WindowDef?: WindowDef;
    RangeSubselect?: RangeSubselect;
    RangeFunction?: RangeFunction;
    RangeTableSample?: RangeTableSample;
    RangeTableFunc?: RangeTableFunc;
    RangeTableFuncCol?: RangeTableFuncCol;
    TypeName?: TypeName;
    ColumnDef?: ColumnDef;
    IndexElem?: IndexElem;
    Constraint?: Constraint;
    DefElem?: DefElem;
    RangeTblEntry?: RangeTblEntry;
    RangeTblFunction?: RangeTblFunction;
    TableSampleClause?: TableSampleClause;
    WithCheckOption?: WithCheckOption;
    SortGroupClause?: SortGroupClause;
    GroupingSet?: GroupingSet;
    WindowClause?: WindowClause;
    ObjectWithArgs?: ObjectWithArgs;
    AccessPriv?: AccessPriv;
    CreateOpClassItem?: CreateOpClassItem;
    TableLikeClause?: TableLikeClause;
    FunctionParameter?: FunctionParameter;
    LockingClause?: LockingClause;
    RowMarkClause?: RowMarkClause;
    XmlSerialize?: XmlSerialize;
    WithClause?: WithClause;
    InferClause?: InferClause;
    OnConflictClause?: OnConflictClause;
    CommonTableExpr?: CommonTableExpr;
    RoleSpec?: RoleSpec;
    TriggerTransition?: TriggerTransition;
    PartitionElem?: PartitionElem;
    PartitionSpec?: PartitionSpec;
    PartitionBoundSpec?: PartitionBoundSpec;
    PartitionRangeDatum?: PartitionRangeDatum;
    PartitionCmd?: PartitionCmd;
    VacuumRelation?: VacuumRelation;
    InlineCodeBlock?: InlineCodeBlock;
    CallContext?: CallContext;
    Integer?: Integer;
    PbFloat?: Float;
    String?: PlainString;
    BitString?: BitString;
    PbNull?: Null;
    List?: List;
    IntList?: IntList;
    OidList?: OidList;
  };

  // Some Node aliases

  export type StringNode = Required<Pick<Node, "String">>;

  export type SelectStmtNode = Required<Pick<Node, "SelectStmt">>;

  export type Integer = {
    ival: number;
  };

  export type Float = {
    str: string;
  };

  export type PlainString = {
    str: string;
  };

  export type BitString = {
    str: string;
  };

  export type Null = Record<string, never>;

  export type List = {
    items?: Array<Node>;
  };

  export type OidList = {
    items?: Array<Node>;
  };

  export type IntList = {
    items?: Array<Node>;
  };

  export type Alias = {
    aliasname: string;
    colnames?: Array<Node>;
  };

  export type RangeVar = {
    catalogname: string;
    schemaname: string;
    relname: string;
    inh: boolean;
    relpersistence: string;
    alias?: Alias;
    location: number;
  };

  export type TableFunc = {
    nsUris?: Array<Node>;
    nsNames?: Array<Node>;
    docexpr?: Node;
    rowexpr?: Node;
    colnames?: Array<Node>;
    coltypes?: Array<Node>;
    coltypmods?: Array<Node>;
    colcollations?: Array<Node>;
    colexprs?: Array<Node>;
    coldefexprs?: Array<Node>;
    notnulls?: Array<number>;
    ordinalitycol: number;
    location: number;
  };

  export type Expr = Record<string, never>;

  export type Var = {
    xpr?: Node;
    varno: number;
    varattno: number;
    vartype: number;
    vartypmod: number;
    varcollid: number;
    varlevelsup: number;
    varnosyn: number;
    varattnosyn: number;
    location: number;
  };

  export type Param = {
    xpr?: Node;
    paramkind: keyof ParamKindMap;
    paramid: number;
    paramtype: number;
    paramtypmod: number;
    paramcollid: number;
    location: number;
  };

  export type Aggref = {
    xpr?: Node;
    aggfnoid: number;
    aggtype: number;
    aggcollid: number;
    inputcollid: number;
    aggtranstype: number;
    aggargtypes?: Array<Node>;
    aggdirectargs?: Array<Node>;
    args?: Array<Node>;
    aggorder?: Array<Node>;
    aggdistinct?: Array<Node>;
    aggfilter?: Node;
    aggstar: boolean;
    aggvariadic: boolean;
    aggkind: string;
    agglevelsup: number;
    aggsplit: keyof AggSplitMap;
    location: number;
  };

  export type GroupingFunc = {
    xpr?: Node;
    args?: Array<Node>;
    refs?: Array<Node>;
    cols?: Array<Node>;
    agglevelsup: number;
    location: number;
  };

  export type WindowFunc = {
    xpr?: Node;
    winfnoid: number;
    wintype: number;
    wincollid: number;
    inputcollid: number;
    args?: Array<Node>;
    aggfilter?: Node;
    winref: number;
    winstar: boolean;
    winagg: boolean;
    location: number;
  };

  export type SubscriptingRef = {
    xpr?: Node;
    refcontainertype: number;
    refelemtype: number;
    reftypmod: number;
    refcollid: number;
    refupperindexpr?: Array<Node>;
    reflowerindexpr?: Array<Node>;
    refexpr?: Node;
    refassgnexpr?: Node;
  };

  export type FuncExpr = {
    xpr?: Node;
    funcid: number;
    funcresulttype: number;
    funcretset: boolean;
    funcvariadic: boolean;
    funcformat: keyof CoercionFormMap;
    funccollid: number;
    inputcollid: number;
    args?: Array<Node>;
    location: number;
  };

  export type NamedArgExpr = {
    xpr?: Node;
    arg?: Node;
    name: string;
    argnumber: number;
    location: number;
  };

  export type OpExpr = {
    xpr?: Node;
    opno: number;
    opfuncid: number;
    opresulttype: number;
    opretset: boolean;
    opcollid: number;
    inputcollid: number;
    args?: Array<Node>;
    location: number;
  };

  export type DistinctExpr = {
    xpr?: Node;
    opno: number;
    opfuncid: number;
    opresulttype: number;
    opretset: boolean;
    opcollid: number;
    inputcollid: number;
    args?: Array<Node>;
    location: number;
  };

  export type NullIfExpr = {
    xpr?: Node;
    opno: number;
    opfuncid: number;
    opresulttype: number;
    opretset: boolean;
    opcollid: number;
    inputcollid: number;
    args?: Array<Node>;
    location: number;
  };

  export type ScalarArrayOpExpr = {
    xpr?: Node;
    opno: number;
    opfuncid: number;
    useOr: boolean;
    inputcollid: number;
    args?: Array<Node>;
    location: number;
  };

  export type BoolExpr = {
    xpr?: Node;
    boolop: keyof BoolExprTypeMap;
    args?: Array<Node>;
    location: number;
  };

  export type SubLink = {
    xpr?: Node;
    subLinkType: keyof SubLinkTypeMap;
    subLinkId: number;
    testexpr?: Node;
    operName?: Array<Node>;
    subselect?: SelectStmtNode;
    location: number;
  };

  export type SubPlan = {
    xpr?: Node;
    subLinkType: keyof SubLinkTypeMap;
    testexpr?: Node;
    paramIds?: Array<Node>;
    planId: number;
    planName: string;
    firstColType: number;
    firstColTypmod: number;
    firstColCollation: number;
    useHashTable: boolean;
    unknownEqFalse: boolean;
    parallelSafe: boolean;
    setParam?: Array<Node>;
    parParam?: Array<Node>;
    args?: Array<Node>;
    startupCost: number;
    perCallCost: number;
  };

  export type AlternativeSubPlan = {
    xpr?: Node;
    subplans?: Array<Node>;
  };

  export type FieldSelect = {
    xpr?: Node;
    arg?: Node;
    fieldnum: number;
    resulttype: number;
    resulttypmod: number;
    resultcollid: number;
  };

  export type FieldStore = {
    xpr?: Node;
    arg?: Node;
    newvals?: Array<Node>;
    fieldnums?: Array<Node>;
    resulttype: number;
  };

  export type RelabelType = {
    xpr?: Node;
    arg?: Node;
    resulttype: number;
    resulttypmod: number;
    resultcollid: number;
    relabelformat: keyof CoercionFormMap;
    location: number;
  };

  export type CoerceViaIO = {
    xpr?: Node;
    arg?: Node;
    resulttype: number;
    resultcollid: number;
    coerceformat: keyof CoercionFormMap;
    location: number;
  };

  export type ArrayCoerceExpr = {
    xpr?: Node;
    arg?: Node;
    elemexpr?: Node;
    resulttype: number;
    resulttypmod: number;
    resultcollid: number;
    coerceformat: keyof CoercionFormMap;
    location: number;
  };

  export type ConvertRowtypeExpr = {
    xpr?: Node;
    arg?: Node;
    resulttype: number;
    convertformat: keyof CoercionFormMap;
    location: number;
  };

  export type CollateExpr = {
    xpr?: Node;
    arg?: Node;
    collOid: number;
    location: number;
  };

  export type CaseExpr = {
    xpr?: Node;
    casetype: number;
    casecollid: number;
    arg?: Node;
    args?: Array<Node>;
    defresult?: Node;
    location: number;
  };

  export type CaseWhen = {
    xpr?: Node;
    expr?: Node;
    result?: Node;
    location: number;
  };

  export type CaseTestExpr = {
    xpr?: Node;
    typeId: number;
    typeMod: number;
    collation: number;
  };

  export type ArrayExpr = {
    xpr?: Node;
    arrayTypeid: number;
    arrayCollid: number;
    elementTypeid: number;
    elements?: Array<Node>;
    multidims: boolean;
    location: number;
  };

  export type RowExpr = {
    xpr?: Node;
    args?: Array<Node>;
    rowTypeid: number;
    rowFormat: keyof CoercionFormMap;
    colnames?: Array<Node>;
    location: number;
  };

  export type RowCompareExpr = {
    xpr?: Node;
    rctype: keyof RowCompareTypeMap;
    opnos?: Array<Node>;
    opfamilies?: Array<Node>;
    inputcollids?: Array<Node>;
    largs?: Array<Node>;
    rargs?: Array<Node>;
  };

  export type CoalesceExpr = {
    xpr?: Node;
    coalescetype: number;
    coalescecollid: number;
    args?: Array<Node>;
    location: number;
  };

  export type MinMaxExpr = {
    xpr?: Node;
    minmaxtype: number;
    minmaxcollid: number;
    inputcollid: number;
    op: keyof MinMaxOpMap;
    args?: Array<Node>;
    location: number;
  };

  export type SQLValueFunction = {
    xpr?: Node;
    op: keyof SQLValueFunctionOpMap;
    type: number;
    typmod: number;
    location: number;
  };

  export type XmlExpr = {
    xpr?: Node;
    op: keyof XmlExprOpMap;
    name: string;
    namedArgs?: Array<Node>;
    argNames?: Array<Node>;
    args?: Array<Node>;
    xmloption: keyof XmlOptionTypeMap;
    type: number;
    typmod: number;
    location: number;
  };

  export type NullTest = {
    xpr?: Node;
    arg?: Node;
    nulltesttype: keyof NullTestTypeMap;
    argisrow: boolean;
    location: number;
  };

  export type BooleanTest = {
    xpr?: Node;
    arg?: Node;
    booltesttype: keyof BoolTestTypeMap;
    location: number;
  };

  export type CoerceToDomain = {
    xpr?: Node;
    arg?: Node;
    resulttype: number;
    resulttypmod: number;
    resultcollid: number;
    coercionformat: keyof CoercionFormMap;
    location: number;
  };

  export type CoerceToDomainValue = {
    xpr?: Node;
    typeId: number;
    typeMod: number;
    collation: number;
    location: number;
  };

  export type SetToDefault = {
    xpr?: Node;
    typeId: number;
    typeMod: number;
    collation: number;
    location: number;
  };

  export type CurrentOfExpr = {
    xpr?: Node;
    cvarno: number;
    cursorName: string;
    cursorParam: number;
  };

  export type NextValueExpr = {
    xpr?: Node;
    seqid: number;
    typeId: number;
  };

  export type InferenceElem = {
    xpr?: Node;
    expr?: Node;
    infercollid: number;
    inferopclass: number;
  };

  export type TargetEntry = {
    xpr?: Node;
    expr?: Node;
    resno: number;
    resname: string;
    ressortgroupref: number;
    resorigtbl: number;
    resorigcol: number;
    resjunk: boolean;
  };

  export type RangeTblRef = {
    rtindex: number;
  };

  export type JoinExpr = {
    jointype: keyof JoinTypeMap;
    isNatural: boolean;
    larg?: Node;
    rarg?: Node;
    usingClause?: Array<Node>;
    quals?: Node;
    alias?: Alias;
    rtindex: number;
  };

  export type FromExpr = {
    fromlist?: Array<Node>;
    quals?: Node;
  };

  export type OnConflictExpr = {
    action: keyof OnConflictActionMap;
    arbiterElems?: Array<Node>;
    arbiterWhere?: Node;
    constraint: number;
    onConflictSet?: Array<Node>;
    onConflictWhere?: Node;
    exclRelIndex: number;
    exclRelTlist?: Array<Node>;
  };

  export type IntoClause = {
    rel?: RangeVar;
    colNames?: Array<Node>;
    accessMethod: string;
    options?: Array<Node>;
    onCommit: keyof OnCommitActionMap;
    tableSpaceName: string;
    viewQuery?: Node;
    skipData: boolean;
  };

  export type RawStmt = {
    stmt?: Node;
    stmt_location: number;
    stmt_len: number;
  };

  export type Query = {
    commandType: keyof CmdTypeMap;
    querySource: keyof QuerySourceMap;
    canSetTag: boolean;
    utilityStmt?: Node;
    resultRelation: number;
    hasAggs: boolean;
    hasWindowFuncs: boolean;
    hasTargetSrfs: boolean;
    hasSubLinks: boolean;
    hasDistinctOn: boolean;
    hasRecursive: boolean;
    hasModifyingCte: boolean;
    hasForUpdate: boolean;
    hasRowSecurity: boolean;
    cteList?: Array<Node>;
    rtable?: Array<Node>;
    jointree?: FromExpr;
    targetList?: Array<Node>;
    override: keyof OverridingKindMap;
    onConflict?: OnConflictExpr;
    returningList?: Array<Node>;
    groupClause?: Array<Node>;
    groupingSets?: Array<Node>;
    havingQual?: Node;
    windowClause?: Array<Node>;
    distinctClause?: Array<Node>;
    sortClause?: Array<Node>;
    limitOffset?: Node;
    limitCount?: Node;
    limitOption: keyof LimitOptionMap;
    rowMarks?: Array<Node>;
    setOperations?: Node;
    constraintDeps?: Array<Node>;
    withCheckOptions?: Array<Node>;
    stmtLocation: number;
    stmtLen: number;
  };

  export type InsertStmt = {
    relation?: RangeVar;
    cols?: Array<Node>;
    selectStmt?: Node;
    onConflictClause?: OnConflictClause;
    returningList?: Array<Node>;
    withClause?: WithClause;
    override: keyof OverridingKindMap;
  };

  export type DeleteStmt = {
    relation?: RangeVar;
    usingClause?: Array<Node>;
    whereClause?: Node;
    returningList?: Array<Node>;
    withClause?: WithClause;
  };

  export type UpdateStmt = {
    relation?: RangeVar;
    targetList?: Array<Node>;
    whereClause?: Node;
    fromClause?: Array<Node>;
    returningList?: Array<Node>;
    withClause?: WithClause;
  };

  export type SelectStmt = {
    distinctClause?: Array<Node>;
    intoClause?: IntoClause;
    targetList?: Array<Node>;
    fromClause?: Array<Node>;
    whereClause?: Node;
    groupClause?: Array<Node>;
    havingClause?: Node;
    windowClause?: Array<Node>;
    valuesLists?: Array<Node>;
    sortClause?: Array<Node>;
    limitOffset?: Node;
    limitCount?: Node;
    limitOption: keyof LimitOptionMap;
    lockingClause?: Array<Node>;
    withClause?: WithClause;
    op: keyof SetOperationMap;
    all: boolean;
    larg?: SelectStmt;
    rarg?: SelectStmt;
  };

  export type AlterTableStmt = {
    relation?: RangeVar;
    cmds?: Array<Node>;
    relkind: keyof ObjectTypeMap;
    missingOk: boolean;
  };

  export type AlterTableCmd = {
    subtype: keyof AlterTableTypeMap;
    name: string;
    num: number;
    newowner?: RoleSpec;
    def?: Node;
    behavior: keyof DropBehaviorMap;
    missingOk: boolean;
    recurse: boolean;
  };

  export type AlterDomainStmt = {
    subtype: string;
    typeName?: Array<Node>;
    name: string;
    def?: Node;
    behavior: keyof DropBehaviorMap;
    missingOk: boolean;
  };

  export type SetOperationStmt = {
    op: keyof SetOperationMap;
    all: boolean;
    larg?: Node;
    rarg?: Node;
    colTypes?: Array<Node>;
    colTypmods?: Array<Node>;
    colCollations?: Array<Node>;
    groupClauses?: Array<Node>;
  };

  export type GrantStmt = {
    isGrant: boolean;
    targtype: keyof GrantTargetTypeMap;
    objtype: keyof ObjectTypeMap;
    objects?: Array<Node>;
    privileges?: Array<Node>;
    grantees?: Array<Node>;
    grantOption: boolean;
    behavior: keyof DropBehaviorMap;
  };

  export type GrantRoleStmt = {
    grantedRoles?: Array<Node>;
    granteeRoles?: Array<Node>;
    isGrant: boolean;
    adminOpt: boolean;
    grantor?: RoleSpec;
    behavior: keyof DropBehaviorMap;
  };

  export type AlterDefaultPrivilegesStmt = {
    options?: Array<Node>;
    action?: GrantStmt;
  };

  export type ClosePortalStmt = {
    portalname: string;
  };

  export type ClusterStmt = {
    relation?: RangeVar;
    indexname: string;
    options: number;
  };

  export type CopyStmt = {
    relation?: RangeVar;
    query?: Node;
    attlist?: Array<Node>;
    isFrom: boolean;
    isProgram: boolean;
    filename: string;
    options?: Array<Node>;
    whereClause?: Node;
  };

  export type CreateStmt = {
    relation?: RangeVar;
    tableElts?: Array<Node>;
    inhRelations?: Array<Node>;
    partbound?: PartitionBoundSpec;
    partspec?: PartitionSpec;
    ofTypename?: TypeName;
    constraints?: Array<Node>;
    options?: Array<Node>;
    oncommit: keyof OnCommitActionMap;
    tablespacename: string;
    accessMethod: string;
    ifNotExists: boolean;
  };

  export type DefineStmt = {
    kind: keyof ObjectTypeMap;
    oldstyle: boolean;
    defnames?: Array<Node>;
    args?: Array<Node>;
    definition?: Array<Node>;
    ifNotExists: boolean;
    replace: boolean;
  };

  export type DropStmt = {
    objects?: Array<Node>;
    removeType: keyof ObjectTypeMap;
    behavior: keyof DropBehaviorMap;
    missingOk: boolean;
    concurrent: boolean;
  };

  export type TruncateStmt = {
    relations?: Array<Node>;
    restartSeqs: boolean;
    behavior: keyof DropBehaviorMap;
  };

  export type CommentStmt = {
    objtype: keyof ObjectTypeMap;
    object?: Node;
    comment: string;
  };

  export type FetchStmt = {
    direction: keyof FetchDirectionMap;
    howMany: number;
    portalname: string;
    ismove: boolean;
  };

  export type IndexStmt = {
    idxname: string;
    relation?: RangeVar;
    accessMethod: string;
    tableSpace: string;
    indexParams?: Array<Node>;
    indexIncludingParams?: Array<Node>;
    options?: Array<Node>;
    whereClause?: Node;
    excludeOpNames?: Array<Node>;
    idxcomment: string;
    indexOid: number;
    oldNode: number;
    oldCreateSubid: number;
    oldFirstRelfilenodeSubid: number;
    unique: boolean;
    primary: boolean;
    isconstraint: boolean;
    deferrable: boolean;
    initdeferred: boolean;
    transformed: boolean;
    concurrent: boolean;
    ifNotExists: boolean;
    resetDefaultTblspc: boolean;
  };

  export type CreateFunctionStmt = {
    isProcedure: boolean;
    replace: boolean;
    funcname?: Array<Node>;
    parameters?: Array<Node>;
    returnType?: TypeName;
    options?: Array<Node>;
  };

  export type AlterFunctionStmt = {
    objtype: keyof ObjectTypeMap;
    func?: ObjectWithArgs;
    actions?: Array<Node>;
  };

  export type DoStmt = {
    args?: Array<Node>;
  };

  export type RenameStmt = {
    renameType: keyof ObjectTypeMap;
    relationType: keyof ObjectTypeMap;
    relation?: RangeVar;
    object?: Node;
    subname: string;
    newname: string;
    behavior: keyof DropBehaviorMap;
    missingOk: boolean;
  };

  export type RuleStmt = {
    relation?: RangeVar;
    rulename: string;
    whereClause?: Node;
    event: keyof CmdTypeMap;
    instead: boolean;
    actions?: Array<Node>;
    replace: boolean;
  };

  export type NotifyStmt = {
    conditionname: string;
    payload: string;
  };

  export type ListenStmt = {
    conditionname: string;
  };

  export type UnlistenStmt = {
    conditionname: string;
  };

  export type TransactionStmt = {
    kind: keyof TransactionStmtKindMap;
    options?: Array<Node>;
    savepointName: string;
    gid: string;
    chain: boolean;
  };

  export type ViewStmt = {
    view?: RangeVar;
    aliases?: Array<Node>;
    query?: Node;
    replace: boolean;
    options?: Array<Node>;
    withCheckOption: keyof ViewCheckOptionMap;
  };

  export type LoadStmt = {
    filename: string;
  };

  export type CreateDomainStmt = {
    domainname?: Array<Node>;
    typeName?: TypeName;
    collClause?: CollateClause;
    constraints?: Array<Node>;
  };

  export type CreatedbStmt = {
    dbname: string;
    options?: Array<Node>;
  };

  export type DropdbStmt = {
    dbname: string;
    missingOk: boolean;
    options?: Array<Node>;
  };

  export type VacuumStmt = {
    options?: Array<Node>;
    rels?: Array<Node>;
    isVacuumcmd: boolean;
  };

  export type ExplainStmt = {
    query?: Node;
    options?: Array<Node>;
  };

  export type CreateTableAsStmt = {
    query?: Node;
    into?: IntoClause;
    relkind: keyof ObjectTypeMap;
    isSelectInto: boolean;
    ifNotExists: boolean;
  };

  export type CreateSeqStmt = {
    sequence?: RangeVar;
    options?: Array<Node>;
    ownerId: number;
    forIdentity: boolean;
    ifNotExists: boolean;
  };

  export type AlterSeqStmt = {
    sequence?: RangeVar;
    options?: Array<Node>;
    forIdentity: boolean;
    missingOk: boolean;
  };

  export type VariableSetStmt = {
    kind: keyof VariableSetKindMap;
    name: string;
    args?: Array<Node>;
    isLocal: boolean;
  };

  export type VariableShowStmt = {
    name: string;
  };

  export type DiscardStmt = {
    target: keyof DiscardModeMap;
  };

  export type CreateTrigStmt = {
    trigname: string;
    relation?: RangeVar;
    funcname?: Array<Node>;
    args?: Array<Node>;
    row: boolean;
    timing: number;
    events: number;
    columns?: Array<Node>;
    whenClause?: Node;
    isconstraint: boolean;
    transitionRels?: Array<Node>;
    deferrable: boolean;
    initdeferred: boolean;
    constrrel?: RangeVar;
  };

  export type CreatePLangStmt = {
    replace: boolean;
    plname: string;
    plhandler?: Array<Node>;
    plinline?: Array<Node>;
    plvalidator?: Array<Node>;
    pltrusted: boolean;
  };

  export type CreateRoleStmt = {
    stmtType: keyof RoleStmtTypeMap;
    role: string;
    options?: Array<Node>;
  };

  export type AlterRoleStmt = {
    role?: RoleSpec;
    options?: Array<Node>;
    action: number;
  };

  export type DropRoleStmt = {
    roles?: Array<Node>;
    missingOk: boolean;
  };

  export type LockStmt = {
    relations?: Array<Node>;
    mode: number;
    nowait: boolean;
  };

  export type ConstraintsSetStmt = {
    constraints?: Array<Node>;
    deferred: boolean;
  };

  export type ReindexStmt = {
    kind: keyof ReindexObjectTypeMap;
    relation?: RangeVar;
    name: string;
    options: number;
    concurrent: boolean;
  };

  export type CheckPointStmt = Record<string, never>;

  export type CreateSchemaStmt = {
    schemaname: string;
    authrole?: RoleSpec;
    schemaElts?: Array<Node>;
    ifNotExists: boolean;
  };

  export type AlterDatabaseStmt = {
    dbname: string;
    options?: Array<Node>;
  };

  export type AlterDatabaseSetStmt = {
    dbname: string;
    setstmt?: VariableSetStmt;
  };

  export type AlterRoleSetStmt = {
    role?: RoleSpec;
    database: string;
    setstmt?: VariableSetStmt;
  };

  export type CreateConversionStmt = {
    conversionName?: Array<Node>;
    forEncodingName: string;
    toEncodingName: string;
    funcName?: Array<Node>;
    def: boolean;
  };

  export type CreateCastStmt = {
    sourcetype?: TypeName;
    targettype?: TypeName;
    func?: ObjectWithArgs;
    context: keyof CoercionContextMap;
    inout: boolean;
  };

  export type CreateOpClassStmt = {
    opclassname?: Array<Node>;
    opfamilyname?: Array<Node>;
    amname: string;
    datatype?: TypeName;
    items?: Array<Node>;
    isDefault: boolean;
  };

  export type CreateOpFamilyStmt = {
    opfamilyname?: Array<Node>;
    amname: string;
  };

  export type AlterOpFamilyStmt = {
    opfamilyname?: Array<Node>;
    amname: string;
    isDrop: boolean;
    items?: Array<Node>;
  };

  export type PrepareStmt = {
    name: string;
    argtypes?: Array<Node>;
    query?: Node;
  };

  export type ExecuteStmt = {
    name: string;
    params?: Array<Node>;
  };

  export type DeallocateStmt = {
    name: string;
  };

  export type DeclareCursorStmt = {
    portalname: string;
    options: number;
    query?: Node;
  };

  export type CreateTableSpaceStmt = {
    tablespacename: string;
    owner?: RoleSpec;
    location: string;
    options?: Array<Node>;
  };

  export type DropTableSpaceStmt = {
    tablespacename: string;
    missingOk: boolean;
  };

  export type AlterObjectDependsStmt = {
    objectType: keyof ObjectTypeMap;
    relation?: RangeVar;
    object?: Node;
    extname?: Node;
    remove: boolean;
  };

  export type AlterObjectSchemaStmt = {
    objectType: keyof ObjectTypeMap;
    relation?: RangeVar;
    object?: Node;
    newschema: string;
    missingOk: boolean;
  };

  export type AlterOwnerStmt = {
    objectType: keyof ObjectTypeMap;
    relation?: RangeVar;
    object?: Node;
    newowner?: RoleSpec;
  };

  export type AlterOperatorStmt = {
    opername?: ObjectWithArgs;
    options?: Array<Node>;
  };

  export type AlterTypeStmt = {
    typeName?: Array<Node>;
    options?: Array<Node>;
  };

  export type DropOwnedStmt = {
    roles?: Array<Node>;
    behavior: keyof DropBehaviorMap;
  };

  export type ReassignOwnedStmt = {
    roles?: Array<Node>;
    newrole?: RoleSpec;
  };

  export type CompositeTypeStmt = {
    typevar?: RangeVar;
    coldeflist?: Array<Node>;
  };

  export type CreateEnumStmt = {
    typeName?: Array<Node>;
    vals?: Array<Node>;
  };

  export type CreateRangeStmt = {
    typeName?: Array<Node>;
    params?: Array<Node>;
  };

  export type AlterEnumStmt = {
    typeName?: Array<Node>;
    oldVal: string;
    newVal: string;
    newValNeighbor: string;
    newValIsAfter: boolean;
    skipIfNewValExists: boolean;
  };

  export type AlterTSDictionaryStmt = {
    dictname?: Array<Node>;
    options?: Array<Node>;
  };

  export type AlterTSConfigurationStmt = {
    kind: keyof AlterTSConfigTypeMap;
    cfgname?: Array<Node>;
    tokentype?: Array<Node>;
    dicts?: Array<Node>;
    override: boolean;
    replace: boolean;
    missingOk: boolean;
  };

  export type CreateFdwStmt = {
    fdwname: string;
    funcOptions?: Array<Node>;
    options?: Array<Node>;
  };

  export type AlterFdwStmt = {
    fdwname: string;
    funcOptions?: Array<Node>;
    options?: Array<Node>;
  };

  export type CreateForeignServerStmt = {
    servername: string;
    servertype: string;
    version: string;
    fdwname: string;
    ifNotExists: boolean;
    options?: Array<Node>;
  };

  export type AlterForeignServerStmt = {
    servername: string;
    version: string;
    options?: Array<Node>;
    hasVersion: boolean;
  };

  export type CreateUserMappingStmt = {
    user?: RoleSpec;
    servername: string;
    ifNotExists: boolean;
    options?: Array<Node>;
  };

  export type AlterUserMappingStmt = {
    user?: RoleSpec;
    servername: string;
    options?: Array<Node>;
  };

  export type DropUserMappingStmt = {
    user?: RoleSpec;
    servername: string;
    missingOk: boolean;
  };

  export type AlterTableSpaceOptionsStmt = {
    tablespacename: string;
    options?: Array<Node>;
    isReset: boolean;
  };

  export type AlterTableMoveAllStmt = {
    origTablespacename: string;
    objtype: keyof ObjectTypeMap;
    roles?: Array<Node>;
    newTablespacename: string;
    nowait: boolean;
  };

  export type SecLabelStmt = {
    objtype: keyof ObjectTypeMap;
    object?: Node;
    provider: string;
    label: string;
  };

  export type CreateForeignTableStmt = {
    baseStmt?: CreateStmt;
    servername: string;
    options?: Array<Node>;
  };

  export type ImportForeignSchemaStmt = {
    serverName: string;
    remoteSchema: string;
    localSchema: string;
    listType: keyof ImportForeignSchemaTypeMap;
    tableList?: Array<Node>;
    options?: Array<Node>;
  };

  export type CreateExtensionStmt = {
    extname: string;
    ifNotExists: boolean;
    options?: Array<Node>;
  };

  export type AlterExtensionStmt = {
    extname: string;
    options?: Array<Node>;
  };

  export type AlterExtensionContentsStmt = {
    extname: string;
    action: number;
    objtype: keyof ObjectTypeMap;
    object?: Node;
  };

  export type CreateEventTrigStmt = {
    trigname: string;
    eventname: string;
    whenclause?: Array<Node>;
    funcname?: Array<Node>;
  };

  export type AlterEventTrigStmt = {
    trigname: string;
    tgenabled: string;
  };

  export type RefreshMatViewStmt = {
    concurrent: boolean;
    skipData: boolean;
    relation?: RangeVar;
  };

  export type ReplicaIdentityStmt = {
    identityType: string;
    name: string;
  };

  export type AlterSystemStmt = {
    setstmt?: VariableSetStmt;
  };

  export type CreatePolicyStmt = {
    policyName: string;
    table?: RangeVar;
    cmdName: string;
    permissive: boolean;
    roles?: Array<Node>;
    qual?: Node;
    withCheck?: Node;
  };

  export type AlterPolicyStmt = {
    policyName: string;
    table?: RangeVar;
    roles?: Array<Node>;
    qual?: Node;
    withCheck?: Node;
  };

  export type CreateTransformStmt = {
    replace: boolean;
    typeName?: TypeName;
    lang: string;
    fromsql?: ObjectWithArgs;
    tosql?: ObjectWithArgs;
  };

  export type CreateAmStmt = {
    amname: string;
    handlerName?: Array<Node>;
    amtype: string;
  };

  export type CreatePublicationStmt = {
    pubname: string;
    options?: Array<Node>;
    tables?: Array<Node>;
    forAllTables: boolean;
  };

  export type AlterPublicationStmt = {
    pubname: string;
    options?: Array<Node>;
    tables?: Array<Node>;
    forAllTables: boolean;
    tableAction: keyof DefElemActionMap;
  };

  export type CreateSubscriptionStmt = {
    subname: string;
    conninfo: string;
    publication?: Array<Node>;
    options?: Array<Node>;
  };

  export type AlterSubscriptionStmt = {
    kind: keyof AlterSubscriptionTypeMap;
    subname: string;
    conninfo: string;
    publication?: Array<Node>;
    options?: Array<Node>;
  };

  export type DropSubscriptionStmt = {
    subname: string;
    missingOk: boolean;
    behavior: keyof DropBehaviorMap;
  };

  export type CreateStatsStmt = {
    defnames?: Array<Node>;
    statTypes?: Array<Node>;
    exprs?: Array<Node>;
    relations?: Array<Node>;
    stxcomment: string;
    ifNotExists: boolean;
  };

  export type AlterCollationStmt = {
    collname?: Array<Node>;
  };

  export type CallStmt = {
    funccall?: FuncCall;
    funcexpr?: FuncExpr;
  };

  export type AlterStatsStmt = {
    defnames?: Array<Node>;
    stxstattarget: number;
    missingOk: boolean;
  };

  export type A_Expr = {
    kind: keyof A_Expr_KindMap;
    name?: Array<Node>;
    lexpr?: Node;
    rexpr?: Node;
    location: number;
  };

  export type ColumnRef = {
    fields:
      | [schema: StringNode, table: StringNode, column: StringNode]
      | [table: StringNode, column: StringNode]
      | [column: StringNode];
    location: number;
  };

  export type ParamRef = {
    number: number;
    location: number;
  };

  export type A_Const = {
    val?: Node;
    location: number;
  };

  export type FuncCall = {
    funcname?: Array<Node>;
    args?: Array<Node>;
    aggOrder?: Array<Node>;
    aggFilter?: Node;
    aggWithinGroup: boolean;
    aggStar: boolean;
    aggDistinct: boolean;
    funcVariadic: boolean;
    over?: WindowDef;
    location: number;
  };

  export type A_Star = Record<string, never>;

  export type A_Indices = {
    isSlice: boolean;
    lidx?: Node;
    uidx?: Node;
  };

  export type A_Indirection = {
    arg?: Node;
    indirection?: Array<Node>;
  };

  export type A_ArrayExpr = {
    elements?: Array<Node>;
    location: number;
  };

  export type ResTarget = {
    name?: string;
    indirection?: Array<Node>;
    val?: Node;
    location: number;
  };

  export type MultiAssignRef = {
    source?: Node;
    colno: number;
    ncolumns: number;
  };

  export type TypeCast = {
    arg?: Node;
    typeName?: TypeName;
    location: number;
  };

  export type CollateClause = {
    arg?: Node;
    collname?: Array<Node>;
    location: number;
  };

  export type SortBy = {
    node?: Node;
    sortbyDir: keyof SortByDirMap;
    sortbyNulls: keyof SortByNullsMap;
    useOp?: Array<Node>;
    location: number;
  };

  export type WindowDef = {
    name: string;
    refname: string;
    partitionClause?: Array<Node>;
    orderClause?: Array<Node>;
    frameOptions: number;
    startOffset?: Node;
    endOffset?: Node;
    location: number;
  };

  export type RangeSubselect = {
    lateral: boolean;
    subquery?: Node;
    alias?: Alias;
  };

  export type RangeFunction = {
    lateral: boolean;
    ordinality: boolean;
    isRowsfrom: boolean;
    functions?: Array<Node>;
    alias?: Alias;
    coldeflist?: Array<Node>;
  };

  export type RangeTableSample = {
    relation?: Node;
    method?: Array<Node>;
    args?: Array<Node>;
    repeatable?: Node;
    location: number;
  };

  export type RangeTableFunc = {
    lateral: boolean;
    docexpr?: Node;
    rowexpr?: Node;
    namespaces?: Array<Node>;
    columns?: Array<Node>;
    alias?: Alias;
    location: number;
  };

  export type RangeTableFuncCol = {
    colname: string;
    typeName?: TypeName;
    forOrdinality: boolean;
    isNotNull: boolean;
    colexpr?: Node;
    coldefexpr?: Node;
    location: number;
  };

  export type TypeName = {
    names?: Array<Node>;
    typeOid: number;
    setof: boolean;
    pctType: boolean;
    typmods?: Array<Node>;
    typemod: number;
    arrayBounds?: Array<Node>;
    location: number;
  };

  export type ColumnDef = {
    colname: string;
    typeName?: TypeName;
    inhcount: number;
    isLocal: boolean;
    isNotNull: boolean;
    isFromType: boolean;
    storage: string;
    rawDefault?: Node;
    cookedDefault?: Node;
    identity: string;
    identitySequence?: RangeVar;
    generated: string;
    collClause?: CollateClause;
    collOid: number;
    constraints?: Array<Node>;
    fdwoptions?: Array<Node>;
    location: number;
  };

  export type IndexElem = {
    name: string;
    expr?: Node;
    indexcolname: string;
    collation?: Array<Node>;
    opclass?: Array<Node>;
    opclassopts?: Array<Node>;
    ordering: keyof SortByDirMap;
    nullsOrdering: keyof SortByNullsMap;
  };

  export type Constraint = {
    contype: keyof ConstrTypeMap;
    conname: string;
    deferrable: boolean;
    initdeferred: boolean;
    location: number;
    isNoInherit: boolean;
    rawExpr?: Node;
    cookedExpr: string;
    generatedWhen: string;
    keys?: Array<Node>;
    including?: Array<Node>;
    exclusions?: Array<Node>;
    options?: Array<Node>;
    indexname: string;
    indexspace: string;
    resetDefaultTblspc: boolean;
    accessMethod: string;
    whereClause?: Node;
    pktable?: RangeVar;
    fkAttrs?: Array<Node>;
    pkAttrs?: Array<Node>;
    fkMatchtype: string;
    fkUpdAction: string;
    fkDelAction: string;
    oldConpfeqop?: Array<Node>;
    oldPktableOid: number;
    skipValidation: boolean;
    initiallyValid: boolean;
  };

  export type DefElem = {
    defnamespace: string;
    defname: string;
    arg?: Node;
    defaction: keyof DefElemActionMap;
    location: number;
  };

  export type RangeTblEntry = {
    rtekind: keyof RTEKindMap;
    relid: number;
    relkind: string;
    rellockmode: number;
    tablesample?: TableSampleClause;
    subquery?: Query;
    securityBarrier: boolean;
    jointype: keyof JoinTypeMap;
    joinmergedcols: number;
    joinaliasvars?: Array<Node>;
    joinleftcols?: Array<Node>;
    joinrightcols?: Array<Node>;
    functions?: Array<Node>;
    funcordinality: boolean;
    tablefunc?: TableFunc;
    valuesLists?: Array<Node>;
    ctename: string;
    ctelevelsup: number;
    selfReference: boolean;
    coltypes?: Array<Node>;
    coltypmods?: Array<Node>;
    colcollations?: Array<Node>;
    enrname: string;
    enrtuples: number;
    alias?: Alias;
    eref?: Alias;
    lateral: boolean;
    inh: boolean;
    inFromCl: boolean;
    requiredPerms: number;
    checkAsUser: number;
    selectedCols?: Array<number>;
    insertedCols?: Array<number>;
    updatedCols?: Array<number>;
    extraUpdatedCols?: Array<number>;
    securityQuals?: Array<Node>;
  };

  export type RangeTblFunction = {
    funcexpr?: Node;
    funccolcount: number;
    funccolnames?: Array<Node>;
    funccoltypes?: Array<Node>;
    funccoltypmods?: Array<Node>;
    funccolcollations?: Array<Node>;
    funcparams?: Array<number>;
  };

  export type TableSampleClause = {
    tsmhandler: number;
    args?: Array<Node>;
    repeatable?: Node;
  };

  export type WithCheckOption = {
    kind: keyof WCOKindMap;
    relname: string;
    polname: string;
    qual?: Node;
    cascaded: boolean;
  };

  export type SortGroupClause = {
    tleSortGroupRef: number;
    eqop: number;
    sortop: number;
    nullsFirst: boolean;
    hashable: boolean;
  };

  export type GroupingSet = {
    kind: keyof GroupingSetKindMap;
    content?: Array<Node>;
    location: number;
  };

  export type WindowClause = {
    name: string;
    refname: string;
    partitionClause?: Array<Node>;
    orderClause?: Array<Node>;
    frameOptions: number;
    startOffset?: Node;
    endOffset?: Node;
    startInRangeFunc: number;
    endInRangeFunc: number;
    inRangeColl: number;
    inRangeAsc: boolean;
    inRangeNullsFirst: boolean;
    winref: number;
    copiedOrder: boolean;
  };

  export type ObjectWithArgs = {
    objname?: Array<Node>;
    objargs?: Array<Node>;
    argsUnspecified: boolean;
  };

  export type AccessPriv = {
    privName: string;
    cols?: Array<Node>;
  };

  export type CreateOpClassItem = {
    itemtype: number;
    name?: ObjectWithArgs;
    number: number;
    orderFamily?: Array<Node>;
    classArgs?: Array<Node>;
    storedtype?: TypeName;
  };

  export type TableLikeClause = {
    relation?: RangeVar;
    options: number;
    relationOid: number;
  };

  export type FunctionParameter = {
    name: string;
    argType?: TypeName;
    mode: keyof FunctionParameterModeMap;
    defexpr?: Node;
  };

  export type LockingClause = {
    lockedRels?: Array<Node>;
    strength: keyof LockClauseStrengthMap;
    waitPolicy: keyof LockWaitPolicyMap;
  };

  export type RowMarkClause = {
    rti: number;
    strength: keyof LockClauseStrengthMap;
    waitPolicy: keyof LockWaitPolicyMap;
    pushedDown: boolean;
  };

  export type XmlSerialize = {
    xmloption: keyof XmlOptionTypeMap;
    expr?: Node;
    typeName?: TypeName;
    location: number;
  };

  export type WithClause = {
    ctes?: Array<Node>;
    recursive: boolean;
    location: number;
  };

  export type InferClause = {
    indexElems?: Array<Node>;
    whereClause?: Node;
    conname: string;
    location: number;
  };

  export type OnConflictClause = {
    action: keyof OnConflictActionMap;
    infer?: InferClause;
    targetList?: Array<Node>;
    whereClause?: Node;
    location: number;
  };

  export type CommonTableExpr = {
    ctename: string;
    aliascolnames?: Array<Node>;
    ctematerialized: keyof CTEMaterializeMap;
    ctequery?: Node;
    location: number;
    cterecursive: boolean;
    cterefcount: number;
    ctecolnames?: Array<Node>;
    ctecoltypes?: Array<Node>;
    ctecoltypmods?: Array<Node>;
    ctecolcollations?: Array<Node>;
  };

  export type RoleSpec = {
    roletype: keyof RoleSpecTypeMap;
    rolename: string;
    location: number;
  };

  export type TriggerTransition = {
    name: string;
    isNew: boolean;
    isTable: boolean;
  };

  export type PartitionElem = {
    name: string;
    expr?: Node;
    collation?: Array<Node>;
    opclass?: Array<Node>;
    location: number;
  };

  export type PartitionSpec = {
    strategy: string;
    partParams?: Array<Node>;
    location: number;
  };

  export type PartitionBoundSpec = {
    strategy: string;
    isDefault: boolean;
    modulus: number;
    remainder: number;
    listdatums?: Array<Node>;
    lowerdatums?: Array<Node>;
    upperdatums?: Array<Node>;
    location: number;
  };

  export type PartitionRangeDatum = {
    kind: keyof PartitionRangeDatumKindMap;
    value?: Node;
    location: number;
  };

  export type PartitionCmd = {
    name?: RangeVar;
    bound?: PartitionBoundSpec;
  };

  export type VacuumRelation = {
    relation?: RangeVar;
    oid: number;
    vaCols?: Array<Node>;
  };

  export type InlineCodeBlock = {
    sourceText: string;
    langOid: number;
    langIsTrusted: boolean;
    atomic: boolean;
  };

  export type CallContext = {
    atomic: boolean;
  };

  export type ScanToken = {
    start: number;
    end: number;
    token: keyof TokenMap;
    keywordKind: keyof KeywordKindMap;
  };

  export interface OverridingKindMap {
    OVERRIDING_KIND_UNDEFINED: 0;
    OVERRIDING_NOT_SET: 1;
    OVERRIDING_USER_VALUE: 2;
    OVERRIDING_SYSTEM_VALUE: 3;
  }

  export interface QuerySourceMap {
    QUERY_SOURCE_UNDEFINED: 0;
    QSRC_ORIGINAL: 1;
    QSRC_PARSER: 2;
    QSRC_INSTEAD_RULE: 3;
    QSRC_QUAL_INSTEAD_RULE: 4;
    QSRC_NON_INSTEAD_RULE: 5;
  }

  export interface SortByDirMap {
    SORT_BY_DIR_UNDEFINED: 0;
    SORTBY_DEFAULT: 1;
    SORTBY_ASC: 2;
    SORTBY_DESC: 3;
    SORTBY_USING: 4;
  }

  export interface SortByNullsMap {
    SORT_BY_NULLS_UNDEFINED: 0;
    SORTBY_NULLS_DEFAULT: 1;
    SORTBY_NULLS_FIRST: 2;
    SORTBY_NULLS_LAST: 3;
  }

  export interface A_Expr_KindMap {
    A_EXPR_KIND_UNDEFINED: 0;
    AEXPR_OP: 1;
    AEXPR_OP_ANY: 2;
    AEXPR_OP_ALL: 3;
    AEXPR_DISTINCT: 4;
    AEXPR_NOT_DISTINCT: 5;
    AEXPR_NULLIF: 6;
    AEXPR_OF: 7;
    AEXPR_IN: 8;
    AEXPR_LIKE: 9;
    AEXPR_ILIKE: 10;
    AEXPR_SIMILAR: 11;
    AEXPR_BETWEEN: 12;
    AEXPR_NOT_BETWEEN: 13;
    AEXPR_BETWEEN_SYM: 14;
    AEXPR_NOT_BETWEEN_SYM: 15;
    AEXPR_PAREN: 16;
  }

  export interface RoleSpecTypeMap {
    ROLE_SPEC_TYPE_UNDEFINED: 0;
    ROLESPEC_CSTRING: 1;
    ROLESPEC_CURRENT_USER: 2;
    ROLESPEC_SESSION_USER: 3;
    ROLESPEC_PUBLIC: 4;
  }

  export interface TableLikeOptionMap {
    TABLE_LIKE_OPTION_UNDEFINED: 0;
    CREATE_TABLE_LIKE_COMMENTS: 1;
    CREATE_TABLE_LIKE_CONSTRAINTS: 2;
    CREATE_TABLE_LIKE_DEFAULTS: 3;
    CREATE_TABLE_LIKE_GENERATED: 4;
    CREATE_TABLE_LIKE_IDENTITY: 5;
    CREATE_TABLE_LIKE_INDEXES: 6;
    CREATE_TABLE_LIKE_STATISTICS: 7;
    CREATE_TABLE_LIKE_STORAGE: 8;
    CREATE_TABLE_LIKE_ALL: 9;
  }

  export interface DefElemActionMap {
    DEF_ELEM_ACTION_UNDEFINED: 0;
    DEFELEM_UNSPEC: 1;
    DEFELEM_SET: 2;
    DEFELEM_ADD: 3;
    DEFELEM_DROP: 4;
  }

  export interface PartitionRangeDatumKindMap {
    PARTITION_RANGE_DATUM_KIND_UNDEFINED: 0;
    PARTITION_RANGE_DATUM_MINVALUE: 1;
    PARTITION_RANGE_DATUM_VALUE: 2;
    PARTITION_RANGE_DATUM_MAXVALUE: 3;
  }

  export interface RTEKindMap {
    RTEKIND_UNDEFINED: 0;
    RTE_RELATION: 1;
    RTE_SUBQUERY: 2;
    RTE_JOIN: 3;
    RTE_FUNCTION: 4;
    RTE_TABLEFUNC: 5;
    RTE_VALUES: 6;
    RTE_CTE: 7;
    RTE_NAMEDTUPLESTORE: 8;
    RTE_RESULT: 9;
  }

  export interface WCOKindMap {
    WCOKIND_UNDEFINED: 0;
    WCO_VIEW_CHECK: 1;
    WCO_RLS_INSERT_CHECK: 2;
    WCO_RLS_UPDATE_CHECK: 3;
    WCO_RLS_CONFLICT_CHECK: 4;
  }

  export interface GroupingSetKindMap {
    GROUPING_SET_KIND_UNDEFINED: 0;
    GROUPING_SET_EMPTY: 1;
    GROUPING_SET_SIMPLE: 2;
    GROUPING_SET_ROLLUP: 3;
    GROUPING_SET_CUBE: 4;
    GROUPING_SET_SETS: 5;
  }

  export interface CTEMaterializeMap {
    CTEMATERIALIZE_UNDEFINED: 0;
    CTEMATERIALIZEDEFAULT: 1;
    CTEMATERIALIZEALWAYS: 2;
    CTEMATERIALIZENEVER: 3;
  }

  export interface SetOperationMap {
    SET_OPERATION_UNDEFINED: 0;
    SETOP_NONE: 1;
    SETOP_UNION: 2;
    SETOP_INTERSECT: 3;
    SETOP_EXCEPT: 4;
  }

  export interface ObjectTypeMap {
    OBJECT_TYPE_UNDEFINED: 0;
    OBJECT_ACCESS_METHOD: 1;
    OBJECT_AGGREGATE: 2;
    OBJECT_AMOP: 3;
    OBJECT_AMPROC: 4;
    OBJECT_ATTRIBUTE: 5;
    OBJECT_CAST: 6;
    OBJECT_COLUMN: 7;
    OBJECT_COLLATION: 8;
    OBJECT_CONVERSION: 9;
    OBJECT_DATABASE: 10;
    OBJECT_DEFAULT: 11;
    OBJECT_DEFACL: 12;
    OBJECT_DOMAIN: 13;
    OBJECT_DOMCONSTRAINT: 14;
    OBJECT_EVENT_TRIGGER: 15;
    OBJECT_EXTENSION: 16;
    OBJECT_FDW: 17;
    OBJECT_FOREIGN_SERVER: 18;
    OBJECT_FOREIGN_TABLE: 19;
    OBJECT_FUNCTION: 20;
    OBJECT_INDEX: 21;
    OBJECT_LANGUAGE: 22;
    OBJECT_LARGEOBJECT: 23;
    OBJECT_MATVIEW: 24;
    OBJECT_OPCLASS: 25;
    OBJECT_OPERATOR: 26;
    OBJECT_OPFAMILY: 27;
    OBJECT_POLICY: 28;
    OBJECT_PROCEDURE: 29;
    OBJECT_PUBLICATION: 30;
    OBJECT_PUBLICATION_REL: 31;
    OBJECT_ROLE: 32;
    OBJECT_ROUTINE: 33;
    OBJECT_RULE: 34;
    OBJECT_SCHEMA: 35;
    OBJECT_SEQUENCE: 36;
    OBJECT_SUBSCRIPTION: 37;
    OBJECT_STATISTIC_EXT: 38;
    OBJECT_TABCONSTRAINT: 39;
    OBJECT_TABLE: 40;
    OBJECT_TABLESPACE: 41;
    OBJECT_TRANSFORM: 42;
    OBJECT_TRIGGER: 43;
    OBJECT_TSCONFIGURATION: 44;
    OBJECT_TSDICTIONARY: 45;
    OBJECT_TSPARSER: 46;
    OBJECT_TSTEMPLATE: 47;
    OBJECT_TYPE: 48;
    OBJECT_USER_MAPPING: 49;
    OBJECT_VIEW: 50;
  }

  export interface DropBehaviorMap {
    DROP_BEHAVIOR_UNDEFINED: 0;
    DROP_RESTRICT: 1;
    DROP_CASCADE: 2;
  }

  export interface AlterTableTypeMap {
    ALTER_TABLE_TYPE_UNDEFINED: 0;
    AT_ADDCOLUMN: 1;
    AT_ADDCOLUMNRECURSE: 2;
    AT_ADDCOLUMNTOVIEW: 3;
    AT_COLUMNDEFAULT: 4;
    AT_COOKEDCOLUMNDEFAULT: 5;
    AT_DROPNOTNULL: 6;
    AT_SETNOTNULL: 7;
    AT_DROPEXPRESSION: 8;
    AT_CHECKNOTNULL: 9;
    AT_SETSTATISTICS: 10;
    AT_SETOPTIONS: 11;
    AT_RESETOPTIONS: 12;
    AT_SETSTORAGE: 13;
    AT_DROPCOLUMN: 14;
    AT_DROPCOLUMNRECURSE: 15;
    AT_ADDINDEX: 16;
    AT_READDINDEX: 17;
    AT_ADDCONSTRAINT: 18;
    AT_ADDCONSTRAINTRECURSE: 19;
    AT_READDCONSTRAINT: 20;
    AT_READDDOMAINCONSTRAINT: 21;
    AT_ALTERCONSTRAINT: 22;
    AT_VALIDATECONSTRAINT: 23;
    AT_VALIDATECONSTRAINTRECURSE: 24;
    AT_ADDINDEXCONSTRAINT: 25;
    AT_DROPCONSTRAINT: 26;
    AT_DROPCONSTRAINTRECURSE: 27;
    AT_READDCOMMENT: 28;
    AT_ALTERCOLUMNTYPE: 29;
    AT_ALTERCOLUMNGENERICOPTIONS: 30;
    AT_CHANGEOWNER: 31;
    AT_CLUSTERON: 32;
    AT_DROPCLUSTER: 33;
    AT_SETLOGGED: 34;
    AT_SETUNLOGGED: 35;
    AT_DROPOIDS: 36;
    AT_SETTABLESPACE: 37;
    AT_SETRELOPTIONS: 38;
    AT_RESETRELOPTIONS: 39;
    AT_REPLACERELOPTIONS: 40;
    AT_ENABLETRIG: 41;
    AT_ENABLEALWAYSTRIG: 42;
    AT_ENABLEREPLICATRIG: 43;
    AT_DISABLETRIG: 44;
    AT_ENABLETRIGALL: 45;
    AT_DISABLETRIGALL: 46;
    AT_ENABLETRIGUSER: 47;
    AT_DISABLETRIGUSER: 48;
    AT_ENABLERULE: 49;
    AT_ENABLEALWAYSRULE: 50;
    AT_ENABLEREPLICARULE: 51;
    AT_DISABLERULE: 52;
    AT_ADDINHERIT: 53;
    AT_DROPINHERIT: 54;
    AT_ADDOF: 55;
    AT_DROPOF: 56;
    AT_REPLICAIDENTITY: 57;
    AT_ENABLEROWSECURITY: 58;
    AT_DISABLEROWSECURITY: 59;
    AT_FORCEROWSECURITY: 60;
    AT_NOFORCEROWSECURITY: 61;
    AT_GENERICOPTIONS: 62;
    AT_ATTACHPARTITION: 63;
    AT_DETACHPARTITION: 64;
    AT_ADDIDENTITY: 65;
    AT_SETIDENTITY: 66;
    AT_DROPIDENTITY: 67;
  }

  export interface GrantTargetTypeMap {
    GRANT_TARGET_TYPE_UNDEFINED: 0;
    ACL_TARGET_OBJECT: 1;
    ACL_TARGET_ALL_IN_SCHEMA: 2;
    ACL_TARGET_DEFAULTS: 3;
  }

  export interface VariableSetKindMap {
    VARIABLE_SET_KIND_UNDEFINED: 0;
    VAR_SET_VALUE: 1;
    VAR_SET_DEFAULT: 2;
    VAR_SET_CURRENT: 3;
    VAR_SET_MULTI: 4;
    VAR_RESET: 5;
    VAR_RESET_ALL: 6;
  }

  export interface ConstrTypeMap {
    CONSTR_TYPE_UNDEFINED: 0;
    CONSTR_NULL: 1;
    CONSTR_NOTNULL: 2;
    CONSTR_DEFAULT: 3;
    CONSTR_IDENTITY: 4;
    CONSTR_GENERATED: 5;
    CONSTR_CHECK: 6;
    CONSTR_PRIMARY: 7;
    CONSTR_UNIQUE: 8;
    CONSTR_EXCLUSION: 9;
    CONSTR_FOREIGN: 10;
    CONSTR_ATTR_DEFERRABLE: 11;
    CONSTR_ATTR_NOT_DEFERRABLE: 12;
    CONSTR_ATTR_DEFERRED: 13;
    CONSTR_ATTR_IMMEDIATE: 14;
  }

  export interface ImportForeignSchemaTypeMap {
    IMPORT_FOREIGN_SCHEMA_TYPE_UNDEFINED: 0;
    FDW_IMPORT_SCHEMA_ALL: 1;
    FDW_IMPORT_SCHEMA_LIMIT_TO: 2;
    FDW_IMPORT_SCHEMA_EXCEPT: 3;
  }

  export interface RoleStmtTypeMap {
    ROLE_STMT_TYPE_UNDEFINED: 0;
    ROLESTMT_ROLE: 1;
    ROLESTMT_USER: 2;
    ROLESTMT_GROUP: 3;
  }

  export interface FetchDirectionMap {
    FETCH_DIRECTION_UNDEFINED: 0;
    FETCH_FORWARD: 1;
    FETCH_BACKWARD: 2;
    FETCH_ABSOLUTE: 3;
    FETCH_RELATIVE: 4;
  }

  export interface FunctionParameterModeMap {
    FUNCTION_PARAMETER_MODE_UNDEFINED: 0;
    FUNC_PARAM_IN: 1;
    FUNC_PARAM_OUT: 2;
    FUNC_PARAM_INOUT: 3;
    FUNC_PARAM_VARIADIC: 4;
    FUNC_PARAM_TABLE: 5;
  }

  export interface TransactionStmtKindMap {
    TRANSACTION_STMT_KIND_UNDEFINED: 0;
    TRANS_STMT_BEGIN: 1;
    TRANS_STMT_START: 2;
    TRANS_STMT_COMMIT: 3;
    TRANS_STMT_ROLLBACK: 4;
    TRANS_STMT_SAVEPOINT: 5;
    TRANS_STMT_RELEASE: 6;
    TRANS_STMT_ROLLBACK_TO: 7;
    TRANS_STMT_PREPARE: 8;
    TRANS_STMT_COMMIT_PREPARED: 9;
    TRANS_STMT_ROLLBACK_PREPARED: 10;
  }

  export interface ViewCheckOptionMap {
    VIEW_CHECK_OPTION_UNDEFINED: 0;
    NO_CHECK_OPTION: 1;
    LOCAL_CHECK_OPTION: 2;
    CASCADED_CHECK_OPTION: 3;
  }

  export interface ClusterOptionMap {
    CLUSTER_OPTION_UNDEFINED: 0;
    CLUOPT_RECHECK: 1;
    CLUOPT_VERBOSE: 2;
  }

  export interface DiscardModeMap {
    DISCARD_MODE_UNDEFINED: 0;
    DISCARD_ALL: 1;
    DISCARD_PLANS: 2;
    DISCARD_SEQUENCES: 3;
    DISCARD_TEMP: 4;
  }

  export interface ReindexObjectTypeMap {
    REINDEX_OBJECT_TYPE_UNDEFINED: 0;
    REINDEX_OBJECT_INDEX: 1;
    REINDEX_OBJECT_TABLE: 2;
    REINDEX_OBJECT_SCHEMA: 3;
    REINDEX_OBJECT_SYSTEM: 4;
    REINDEX_OBJECT_DATABASE: 5;
  }

  export interface AlterTSConfigTypeMap {
    ALTER_TSCONFIG_TYPE_UNDEFINED: 0;
    ALTER_TSCONFIG_ADD_MAPPING: 1;
    ALTER_TSCONFIG_ALTER_MAPPING_FOR_TOKEN: 2;
    ALTER_TSCONFIG_REPLACE_DICT: 3;
    ALTER_TSCONFIG_REPLACE_DICT_FOR_TOKEN: 4;
    ALTER_TSCONFIG_DROP_MAPPING: 5;
  }

  export interface AlterSubscriptionTypeMap {
    ALTER_SUBSCRIPTION_TYPE_UNDEFINED: 0;
    ALTER_SUBSCRIPTION_OPTIONS: 1;
    ALTER_SUBSCRIPTION_CONNECTION: 2;
    ALTER_SUBSCRIPTION_PUBLICATION: 3;
    ALTER_SUBSCRIPTION_REFRESH: 4;
    ALTER_SUBSCRIPTION_ENABLED: 5;
  }

  export interface OnCommitActionMap {
    ON_COMMIT_ACTION_UNDEFINED: 0;
    ONCOMMIT_NOOP: 1;
    ONCOMMIT_PRESERVE_ROWS: 2;
    ONCOMMIT_DELETE_ROWS: 3;
    ONCOMMIT_DROP: 4;
  }

  export interface ParamKindMap {
    PARAM_KIND_UNDEFINED: 0;
    PARAM_EXTERN: 1;
    PARAM_EXEC: 2;
    PARAM_SUBLINK: 3;
    PARAM_MULTIEXPR: 4;
  }

  export interface CoercionContextMap {
    COERCION_CONTEXT_UNDEFINED: 0;
    COERCION_IMPLICIT: 1;
    COERCION_ASSIGNMENT: 2;
    COERCION_EXPLICIT: 3;
  }

  export interface CoercionFormMap {
    COERCION_FORM_UNDEFINED: 0;
    COERCE_EXPLICIT_CALL: 1;
    COERCE_EXPLICIT_CAST: 2;
    COERCE_IMPLICIT_CAST: 3;
  }

  export interface BoolExprTypeMap {
    BOOL_EXPR_TYPE_UNDEFINED: 0;
    AND_EXPR: 1;
    OR_EXPR: 2;
    NOT_EXPR: 3;
  }

  export interface SubLinkTypeMap {
    SUB_LINK_TYPE_UNDEFINED: 0;
    EXISTS_SUBLINK: 1;
    ALL_SUBLINK: 2;
    ANY_SUBLINK: 3;
    ROWCOMPARE_SUBLINK: 4;
    EXPR_SUBLINK: 5;
    MULTIEXPR_SUBLINK: 6;
    ARRAY_SUBLINK: 7;
    CTE_SUBLINK: 8;
  }

  export interface RowCompareTypeMap {
    ROW_COMPARE_TYPE_UNDEFINED: 0;
    ROWCOMPARE_LT: 1;
    ROWCOMPARE_LE: 2;
    ROWCOMPARE_EQ: 3;
    ROWCOMPARE_GE: 4;
    ROWCOMPARE_GT: 5;
    ROWCOMPARE_NE: 6;
  }

  export interface MinMaxOpMap {
    MIN_MAX_OP_UNDEFINED: 0;
    IS_GREATEST: 1;
    IS_LEAST: 2;
  }

  export interface SQLValueFunctionOpMap {
    SQLVALUE_FUNCTION_OP_UNDEFINED: 0;
    SVFOP_CURRENT_DATE: 1;
    SVFOP_CURRENT_TIME: 2;
    SVFOP_CURRENT_TIME_N: 3;
    SVFOP_CURRENT_TIMESTAMP: 4;
    SVFOP_CURRENT_TIMESTAMP_N: 5;
    SVFOP_LOCALTIME: 6;
    SVFOP_LOCALTIME_N: 7;
    SVFOP_LOCALTIMESTAMP: 8;
    SVFOP_LOCALTIMESTAMP_N: 9;
    SVFOP_CURRENT_ROLE: 10;
    SVFOP_CURRENT_USER: 11;
    SVFOP_USER: 12;
    SVFOP_SESSION_USER: 13;
    SVFOP_CURRENT_CATALOG: 14;
    SVFOP_CURRENT_SCHEMA: 15;
  }

  export interface XmlExprOpMap {
    XML_EXPR_OP_UNDEFINED: 0;
    IS_XMLCONCAT: 1;
    IS_XMLELEMENT: 2;
    IS_XMLFOREST: 3;
    IS_XMLPARSE: 4;
    IS_XMLPI: 5;
    IS_XMLROOT: 6;
    IS_XMLSERIALIZE: 7;
    IS_DOCUMENT: 8;
  }

  export interface XmlOptionTypeMap {
    XML_OPTION_TYPE_UNDEFINED: 0;
    XMLOPTION_DOCUMENT: 1;
    XMLOPTION_CONTENT: 2;
  }

  export interface NullTestTypeMap {
    NULL_TEST_TYPE_UNDEFINED: 0;
    IS_NULL: 1;
    IS_NOT_NULL: 2;
  }

  export interface BoolTestTypeMap {
    BOOL_TEST_TYPE_UNDEFINED: 0;
    IS_TRUE: 1;
    IS_NOT_TRUE: 2;
    IS_FALSE: 3;
    IS_NOT_FALSE: 4;
    IS_UNKNOWN: 5;
    IS_NOT_UNKNOWN: 6;
  }

  export interface CmdTypeMap {
    CMD_TYPE_UNDEFINED: 0;
    CMD_UNKNOWN: 1;
    CMD_SELECT: 2;
    CMD_UPDATE: 3;
    CMD_INSERT: 4;
    CMD_DELETE: 5;
    CMD_UTILITY: 6;
    CMD_NOTHING: 7;
  }

  export interface JoinTypeMap {
    JOIN_TYPE_UNDEFINED: 0;
    JOIN_INNER: 1;
    JOIN_LEFT: 2;
    JOIN_FULL: 3;
    JOIN_RIGHT: 4;
    JOIN_SEMI: 5;
    JOIN_ANTI: 6;
    JOIN_UNIQUE_OUTER: 7;
    JOIN_UNIQUE_INNER: 8;
  }

  export interface AggStrategyMap {
    AGG_STRATEGY_UNDEFINED: 0;
    AGG_PLAIN: 1;
    AGG_SORTED: 2;
    AGG_HASHED: 3;
    AGG_MIXED: 4;
  }

  export interface AggSplitMap {
    AGG_SPLIT_UNDEFINED: 0;
    AGGSPLIT_SIMPLE: 1;
    AGGSPLIT_INITIAL_SERIAL: 2;
    AGGSPLIT_FINAL_DESERIAL: 3;
  }

  export interface SetOpCmdMap {
    SET_OP_CMD_UNDEFINED: 0;
    SETOPCMD_INTERSECT: 1;
    SETOPCMD_INTERSECT_ALL: 2;
    SETOPCMD_EXCEPT: 3;
    SETOPCMD_EXCEPT_ALL: 4;
  }

  export interface SetOpStrategyMap {
    SET_OP_STRATEGY_UNDEFINED: 0;
    SETOP_SORTED: 1;
    SETOP_HASHED: 2;
  }

  export interface OnConflictActionMap {
    ON_CONFLICT_ACTION_UNDEFINED: 0;
    ONCONFLICT_NONE: 1;
    ONCONFLICT_NOTHING: 2;
    ONCONFLICT_UPDATE: 3;
  }

  export interface LimitOptionMap {
    LIMIT_OPTION_UNDEFINED: 0;
    LIMIT_OPTION_DEFAULT: 1;
    LIMIT_OPTION_COUNT: 2;
    LIMIT_OPTION_WITH_TIES: 3;
  }

  export interface LockClauseStrengthMap {
    LOCK_CLAUSE_STRENGTH_UNDEFINED: 0;
    LCS_NONE: 1;
    LCS_FORKEYSHARE: 2;
    LCS_FORSHARE: 3;
    LCS_FORNOKEYUPDATE: 4;
    LCS_FORUPDATE: 5;
  }

  export interface LockWaitPolicyMap {
    LOCK_WAIT_POLICY_UNDEFINED: 0;
    LOCKWAITBLOCK: 1;
    LOCKWAITSKIP: 2;
    LOCKWAITERROR: 3;
  }

  export interface LockTupleModeMap {
    LOCK_TUPLE_MODE_UNDEFINED: 0;
    LOCKTUPLEKEYSHARE: 1;
    LOCKTUPLESHARE: 2;
    LOCKTUPLENOKEYEXCLUSIVE: 3;
    LOCKTUPLEEXCLUSIVE: 4;
  }

  export interface KeywordKindMap {
    NO_KEYWORD: 0;
    UNRESERVED_KEYWORD: 1;
    COL_NAME_KEYWORD: 2;
    TYPE_FUNC_NAME_KEYWORD: 3;
    RESERVED_KEYWORD: 4;
  }

  export interface TokenMap {
    NUL: 0;
    ASCII_37: 37;
    ASCII_40: 40;
    ASCII_41: 41;
    ASCII_42: 42;
    ASCII_43: 43;
    ASCII_44: 44;
    ASCII_45: 45;
    ASCII_46: 46;
    ASCII_47: 47;
    ASCII_58: 58;
    ASCII_59: 59;
    ASCII_60: 60;
    ASCII_61: 61;
    ASCII_62: 62;
    ASCII_63: 63;
    ASCII_91: 91;
    ASCII_92: 92;
    ASCII_93: 93;
    ASCII_94: 94;
    IDENT: 258;
    UIDENT: 259;
    FCONST: 260;
    SCONST: 261;
    USCONST: 262;
    BCONST: 263;
    XCONST: 264;
    OP: 265;
    ICONST: 266;
    PARAM: 267;
    TYPECAST: 268;
    DOT_DOT: 269;
    COLON_EQUALS: 270;
    EQUALS_GREATER: 271;
    LESS_EQUALS: 272;
    GREATER_EQUALS: 273;
    NOT_EQUALS: 274;
    SQL_COMMENT: 275;
    C_COMMENT: 276;
    ABORT_P: 277;
    ABSOLUTE_P: 278;
    ACCESS: 279;
    ACTION: 280;
    ADD_P: 281;
    ADMIN: 282;
    AFTER: 283;
    AGGREGATE: 284;
    ALL: 285;
    ALSO: 286;
    ALTER: 287;
    ALWAYS: 288;
    ANALYSE: 289;
    ANALYZE: 290;
    AND: 291;
    ANY: 292;
    ARRAY: 293;
    AS: 294;
    ASC: 295;
    ASSERTION: 296;
    ASSIGNMENT: 297;
    ASYMMETRIC: 298;
    AT: 299;
    ATTACH: 300;
    ATTRIBUTE: 301;
    AUTHORIZATION: 302;
    BACKWARD: 303;
    BEFORE: 304;
    BEGIN_P: 305;
    BETWEEN: 306;
    BIGINT: 307;
    BINARY: 308;
    BIT: 309;
    BOOLEAN_P: 310;
    BOTH: 311;
    BY: 312;
    CACHE: 313;
    CALL: 314;
    CALLED: 315;
    CASCADE: 316;
    CASCADED: 317;
    CASE: 318;
    CAST: 319;
    CATALOG_P: 320;
    CHAIN: 321;
    CHAR_P: 322;
    CHARACTER: 323;
    CHARACTERISTICS: 324;
    CHECK: 325;
    CHECKPOINT: 326;
    CLASS: 327;
    CLOSE: 328;
    CLUSTER: 329;
    COALESCE: 330;
    COLLATE: 331;
    COLLATION: 332;
    COLUMN: 333;
    COLUMNS: 334;
    COMMENT: 335;
    COMMENTS: 336;
    COMMIT: 337;
    COMMITTED: 338;
    CONCURRENTLY: 339;
    CONFIGURATION: 340;
    CONFLICT: 341;
    CONNECTION: 342;
    CONSTRAINT: 343;
    CONSTRAINTS: 344;
    CONTENT_P: 345;
    CONTINUE_P: 346;
    CONVERSION_P: 347;
    COPY: 348;
    COST: 349;
    CREATE: 350;
    CROSS: 351;
    CSV: 352;
    CUBE: 353;
    CURRENT_P: 354;
    CURRENT_CATALOG: 355;
    CURRENT_DATE: 356;
    CURRENT_ROLE: 357;
    CURRENT_SCHEMA: 358;
    CURRENT_TIME: 359;
    CURRENT_TIMESTAMP: 360;
    CURRENT_USER: 361;
    CURSOR: 362;
    CYCLE: 363;
    DATA_P: 364;
    DATABASE: 365;
    DAY_P: 366;
    DEALLOCATE: 367;
    DEC: 368;
    DECIMAL_P: 369;
    DECLARE: 370;
    DEFAULT: 371;
    DEFAULTS: 372;
    DEFERRABLE: 373;
    DEFERRED: 374;
    DEFINER: 375;
    DELETE_P: 376;
    DELIMITER: 377;
    DELIMITERS: 378;
    DEPENDS: 379;
    DESC: 380;
    DETACH: 381;
    DICTIONARY: 382;
    DISABLE_P: 383;
    DISCARD: 384;
    DISTINCT: 385;
    DO: 386;
    DOCUMENT_P: 387;
    DOMAIN_P: 388;
    DOUBLE_P: 389;
    DROP: 390;
    EACH: 391;
    ELSE: 392;
    ENABLE_P: 393;
    ENCODING: 394;
    ENCRYPTED: 395;
    END_P: 396;
    ENUM_P: 397;
    ESCAPE: 398;
    EVENT: 399;
    EXCEPT: 400;
    EXCLUDE: 401;
    EXCLUDING: 402;
    EXCLUSIVE: 403;
    EXECUTE: 404;
    EXISTS: 405;
    EXPLAIN: 406;
    EXPRESSION: 407;
    EXTENSION: 408;
    EXTERNAL: 409;
    EXTRACT: 410;
    FALSE_P: 411;
    FAMILY: 412;
    FETCH: 413;
    FILTER: 414;
    FIRST_P: 415;
    FLOAT_P: 416;
    FOLLOWING: 417;
    FOR: 418;
    FORCE: 419;
    FOREIGN: 420;
    FORWARD: 421;
    FREEZE: 422;
    FROM: 423;
    FULL: 424;
    FUNCTION: 425;
    FUNCTIONS: 426;
    GENERATED: 427;
    GLOBAL: 428;
    GRANT: 429;
    GRANTED: 430;
    GREATEST: 431;
    GROUP_P: 432;
    GROUPING: 433;
    GROUPS: 434;
    HANDLER: 435;
    HAVING: 436;
    HEADER_P: 437;
    HOLD: 438;
    HOUR_P: 439;
    IDENTITY_P: 440;
    IF_P: 441;
    ILIKE: 442;
    IMMEDIATE: 443;
    IMMUTABLE: 444;
    IMPLICIT_P: 445;
    IMPORT_P: 446;
    IN_P: 447;
    INCLUDE: 448;
    INCLUDING: 449;
    INCREMENT: 450;
    INDEX: 451;
    INDEXES: 452;
    INHERIT: 453;
    INHERITS: 454;
    INITIALLY: 455;
    INLINE_P: 456;
    INNER_P: 457;
    INOUT: 458;
    INPUT_P: 459;
    INSENSITIVE: 460;
    INSERT: 461;
    INSTEAD: 462;
    INT_P: 463;
    INTEGER: 464;
    INTERSECT: 465;
    INTERVAL: 466;
    INTO: 467;
    INVOKER: 468;
    IS: 469;
    ISNULL: 470;
    ISOLATION: 471;
    JOIN: 472;
    KEY: 473;
    LABEL: 474;
    LANGUAGE: 475;
    LARGE_P: 476;
    LAST_P: 477;
    LATERAL_P: 478;
    LEADING: 479;
    LEAKPROOF: 480;
    LEAST: 481;
    LEFT: 482;
    LEVEL: 483;
    LIKE: 484;
    LIMIT: 485;
    LISTEN: 486;
    LOAD: 487;
    LOCAL: 488;
    LOCALTIME: 489;
    LOCALTIMESTAMP: 490;
    LOCATION: 491;
    LOCK_P: 492;
    LOCKED: 493;
    LOGGED: 494;
    MAPPING: 495;
    MATCH: 496;
    MATERIALIZED: 497;
    MAXVALUE: 498;
    METHOD: 499;
    MINUTE_P: 500;
    MINVALUE: 501;
    MODE: 502;
    MONTH_P: 503;
    MOVE: 504;
    NAME_P: 505;
    NAMES: 506;
    NATIONAL: 507;
    NATURAL: 508;
    NCHAR: 509;
    NEW: 510;
    NEXT: 511;
    NFC: 512;
    NFD: 513;
    NFKC: 514;
    NFKD: 515;
    NO: 516;
    NONE: 517;
    NORMALIZE: 518;
    NORMALIZED: 519;
    NOT: 520;
    NOTHING: 521;
    NOTIFY: 522;
    NOTNULL: 523;
    NOWAIT: 524;
    NULL_P: 525;
    NULLIF: 526;
    NULLS_P: 527;
    NUMERIC: 528;
    OBJECT_P: 529;
    OF: 530;
    OFF: 531;
    OFFSET: 532;
    OIDS: 533;
    OLD: 534;
    ON: 535;
    ONLY: 536;
    OPERATOR: 537;
    OPTION: 538;
    OPTIONS: 539;
    OR: 540;
    ORDER: 541;
    ORDINALITY: 542;
    OTHERS: 543;
    OUT_P: 544;
    OUTER_P: 545;
    OVER: 546;
    OVERLAPS: 547;
    OVERLAY: 548;
    OVERRIDING: 549;
    OWNED: 550;
    OWNER: 551;
    PARALLEL: 552;
    PARSER: 553;
    PARTIAL: 554;
    PARTITION: 555;
    PASSING: 556;
    PASSWORD: 557;
    PLACING: 558;
    PLANS: 559;
    POLICY: 560;
    POSITION: 561;
    PRECEDING: 562;
    PRECISION: 563;
    PRESERVE: 564;
    PREPARE: 565;
    PREPARED: 566;
    PRIMARY: 567;
    PRIOR: 568;
    PRIVILEGES: 569;
    PROCEDURAL: 570;
    PROCEDURE: 571;
    PROCEDURES: 572;
    PROGRAM: 573;
    PUBLICATION: 574;
    QUOTE: 575;
    RANGE: 576;
    READ: 577;
    REAL: 578;
    REASSIGN: 579;
    RECHECK: 580;
    RECURSIVE: 581;
    REF_P: 582;
    REFERENCES: 583;
    REFERENCING: 584;
    REFRESH: 585;
    REINDEX: 586;
    RELATIVE_P: 587;
    RELEASE: 588;
    RENAME: 589;
    REPEATABLE: 590;
    REPLACE: 591;
    REPLICA: 592;
    RESET: 593;
    RESTART: 594;
    RESTRICT: 595;
    RETURNING: 596;
    RETURNS: 597;
    REVOKE: 598;
    RIGHT: 599;
    ROLE: 600;
    ROLLBACK: 601;
    ROLLUP: 602;
    ROUTINE: 603;
    ROUTINES: 604;
    ROW: 605;
    ROWS: 606;
    RULE: 607;
    SAVEPOINT: 608;
    SCHEMA: 609;
    SCHEMAS: 610;
    SCROLL: 611;
    SEARCH: 612;
    SECOND_P: 613;
    SECURITY: 614;
    SELECT: 615;
    SEQUENCE: 616;
    SEQUENCES: 617;
    SERIALIZABLE: 618;
    SERVER: 619;
    SESSION: 620;
    SESSION_USER: 621;
    SET: 622;
    SETS: 623;
    SETOF: 624;
    SHARE: 625;
    SHOW: 626;
    SIMILAR: 627;
    SIMPLE: 628;
    SKIP: 629;
    SMALLINT: 630;
    SNAPSHOT: 631;
    SOME: 632;
    SQL_P: 633;
    STABLE: 634;
    STANDALONE_P: 635;
    START: 636;
    STATEMENT: 637;
    STATISTICS: 638;
    STDIN: 639;
    STDOUT: 640;
    STORAGE: 641;
    STORED: 642;
    STRICT_P: 643;
    STRIP_P: 644;
    SUBSCRIPTION: 645;
    SUBSTRING: 646;
    SUPPORT: 647;
    SYMMETRIC: 648;
    SYSID: 649;
    SYSTEM_P: 650;
    TABLE: 651;
    TABLES: 652;
    TABLESAMPLE: 653;
    TABLESPACE: 654;
    TEMP: 655;
    TEMPLATE: 656;
    TEMPORARY: 657;
    TEXT_P: 658;
    THEN: 659;
    TIES: 660;
    TIME: 661;
    TIMESTAMP: 662;
    TO: 663;
    TRAILING: 664;
    TRANSACTION: 665;
    TRANSFORM: 666;
    TREAT: 667;
    TRIGGER: 668;
    TRIM: 669;
    TRUE_P: 670;
    TRUNCATE: 671;
    TRUSTED: 672;
    TYPE_P: 673;
    TYPES_P: 674;
    UESCAPE: 675;
    UNBOUNDED: 676;
    UNCOMMITTED: 677;
    UNENCRYPTED: 678;
    UNION: 679;
    UNIQUE: 680;
    UNKNOWN: 681;
    UNLISTEN: 682;
    UNLOGGED: 683;
    UNTIL: 684;
    UPDATE: 685;
    USER: 686;
    USING: 687;
    VACUUM: 688;
    VALID: 689;
    VALIDATE: 690;
    VALIDATOR: 691;
    VALUE_P: 692;
    VALUES: 693;
    VARCHAR: 694;
    VARIADIC: 695;
    VARYING: 696;
    VERBOSE: 697;
    VERSION_P: 698;
    VIEW: 699;
    VIEWS: 700;
    VOLATILE: 701;
    WHEN: 702;
    WHERE: 703;
    WHITESPACE_P: 704;
    WINDOW: 705;
    WITH: 706;
    WITHIN: 707;
    WITHOUT: 708;
    WORK: 709;
    WRAPPER: 710;
    WRITE: 711;
    XML_P: 712;
    XMLATTRIBUTES: 713;
    XMLCONCAT: 714;
    XMLELEMENT: 715;
    XMLEXISTS: 716;
    XMLFOREST: 717;
    XMLNAMESPACES: 718;
    XMLPARSE: 719;
    XMLPI: 720;
    XMLROOT: 721;
    XMLSERIALIZE: 722;
    XMLTABLE: 723;
    YEAR_P: 724;
    YES_P: 725;
    ZONE: 726;
    NOT_LA: 727;
    NULLS_LA: 728;
    WITH_LA: 729;
    POSTFIXOP: 730;
    UMINUS: 731;
  }
}
