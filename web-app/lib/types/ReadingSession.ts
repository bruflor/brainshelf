
enum ReadingSessionStatus{
    'WANT_TO_READY' = 'WANT_TO_READY',
    'READING' = 'READING',
    'FINISHED' = 'FINISHED',
    'PAUSED' = 'PAUSED',
    'ABANDONED' = 'ABANDONED',
}

export interface ReadingSession {
    id: string;
    media_id: string;
    user_id:string;
    status:ReadingSessionStatus;
    date_started?:string;
    date_finished?:string
    current_page?:number;
    rating?:number;
    notes?:note[];
    tags?:string[]
}

type note = {
    id:string;
    title?:string;
    content?:string;
    tags:string[];
}