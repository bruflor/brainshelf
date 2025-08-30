import {Author} from "@/lib/types/Author";
import {ReadingSession} from "@/lib/types/ReadingSession";

export interface Note {
    id: string;
    title? : string | null;
    content: string;

    authors?:Author[];
    readingSessions?: ReadingSession[];

}