
enum MediaType {
    'NONE' = 'NONE',
    'BOOK' = 'BOOK',
    'EBOOK' = 'EBOOK',
    'AUDIOBOOK' = 'AUDIOBOOK',
    'PODCAST' = 'PODCAST',
    'SCIENTIFIC_ARTICLES' = 'SCIENTIFIC_ARTICLES',
    'BLOG_POSTS' = 'BLOG_POSTS',
    'SHORT_STORY' = 'SHORT_STORY',
    'ESSAY' = 'ESSAY',
    'OTHER' = 'OTHER',
}

export interface Media {
    id:string,
    title:string,
    type:MediaType,
    author:string,
    authors:string[],
    description?:string,
    genre:string[],
    tags?:string[],
    language:string,
    publisher?:string,
    published_date?:string,
    isbn?:string,
    url?:string,
    page_count?:number,
    duration?:number,
    cover_image_url?:string,
    is_favorite?:boolean
}