import {Author} from "@/lib/types/Author";
import {Favorite} from "@/lib/types/Favorite";
import {ReadingSession} from "@/lib/types/ReadingSession";
import {Tag} from "@/lib/types/Tag";

export type MediaType = 'BOOK' | 'AUDIOBOOK' | 'EBOOK' | 'PODCAST' | 'SCIENTIFIC_ARTICLE' | 'BLOG_POST' | 'SHORT_STORY' | 'ESSAY' | 'OTHER';

export interface Genre {
    id: string;
    name: string;
    // Relations
    medias?: Media[];
}

export interface Media {
    id: string;
    title: string;
    type: MediaType;
    description: string | null; // Optional fields are nullable in the DB
    language: string;
    country: string | null;
    publisher: string | null;
    publishedDate: Date | null;
    isbn: string | null;
    url: string | null;
    pageCount: number | null;
    duration: number | null;
    coverImageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    // RELATIONS - These are Promises that resolve to the related objects.
    // You use 'include' in your queries to populate them.
    authors?: Author[]; // Optional because it's a relation, not a database column
    genres?: Genre[];
    tags?: Tag[];
    readingSessions?: ReadingSession[];
    favorites?: Favorite[];
}