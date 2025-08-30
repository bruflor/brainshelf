import {ReadingSession} from "@/lib/types/ReadingSession";
import {Shelf} from "@/lib/types/Shelf";
import {ReadingGoal} from "@/lib/types/ReadingGoal";

export interface User {
    id: string;
    email: string;
    name: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    // Relations
    readings?: ReadingSession[];
    shelves?: Shelf[];
    goals?: ReadingGoal[];
}