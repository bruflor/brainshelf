import {User} from "@/lib/types/User";

export interface ReadingGoal {
    id: string;
    year: number;
    target: number;
    userId: string;
    // Relations
    user?: User;
}