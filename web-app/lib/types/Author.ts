import {Media} from "@/lib/types/Media";

export type AuthorGender = 'WOMAN' | 'MAN' | 'NON_BINARY' | 'OTHER';

export interface Author {
    id: string;
    name: string;
    gender: AuthorGender | null;
    nationality: string | null;
    bio: string | null;
    birthDate: Date | null;
    deathDate: Date | null;
    note: string | null;
    // Relations
    medias?: Media[]; // Represents the many-to-many link
}