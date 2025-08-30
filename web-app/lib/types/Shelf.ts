import {User} from "@/lib/types/User";

export interface Shelf {
    id: string;
    name: string;
    description: string | null;
    isPublic: boolean;
    icon: string | null;
    color: string | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    // Relations
    user?: User;
    rules?: ShelfRule[];
}

export interface ShelfRule {
    id: string;
    field: string;
    operator: Operator;
    value: string;
    shelfId: string;
    // Relations
    shelf?: Shelf;
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