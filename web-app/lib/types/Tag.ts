import {Media} from "@/lib/types/Media";

export interface Tag {
    id: string;
    name: string;
    // Relations
    medias?: Media[];
}