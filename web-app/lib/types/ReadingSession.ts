import {Media} from "@/lib/types/Media";
import {User} from "@/lib/types/User";
import {Note} from "@/lib/types/Note";

enum ReadingStatus{
    'WANT_TO_READY' = 'WANT_TO_READY',
    'READING' = 'READING',
    'FINISHED' = 'FINISHED',
    'PAUSED' = 'PAUSED',
    'ABANDONED' = 'ABANDONED',
}

export type FormatType = 'PHYSICAL' | 'DIGITAL' | 'AUDIO';

export interface ReadingSession {
    id: string;
    status: ReadingStatus;
    dateStarted: Date | null;
    dateFinished: Date | null;
    currentPage: number | null;
    progress: number | null;
    rating: number | null;
    notes: Note[] | null;
    format: FormatType | null;
    mediaId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    // Relations
    media?: Media;
    user?: User;
}