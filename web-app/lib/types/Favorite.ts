export interface Favorite {
    id: string;
    userId: string;
    mediaId: string;
    addedAt: Date;
    // Relations
    user?: User;
    media?: Media;
}