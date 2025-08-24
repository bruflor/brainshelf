export interface Shelf{
    id:string;
    user_id:string;
    name:string;
    description:string;
    is_public:boolean;
    icon:string;
    rules:ShelfRule[]
}

interface ShelfRule{
    id:string;
    shelf_id:string;
    field:string
    value:string | string[]
    operator:Operator
}

enum Operator {
    IS = '$eq',
    IS_NOT = '$ne',
    CONTAINS = '$in',       // For arrays: "genre contains Fantasy"
    DOES_NOT_CONTAIN = '$nin', // For arrays: "genre does not contain Horror"
    GREATER_THAN = '$gt',
    LESS_THAN = '$lt',
    AFTER = '$gt',          // Alias for GREATER_THAN (for dates)
    BEFORE = '$lt',         // Alias for LESS_THAN (for dates)
}