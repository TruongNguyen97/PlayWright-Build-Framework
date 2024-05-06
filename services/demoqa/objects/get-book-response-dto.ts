export interface DetailBookDto {
    isbn: string | undefined;
    title: string | undefined;
    subTitle: string | undefined;
    author: string | undefined;
    publish_date: string | undefined;
    publisher: string | undefined;
    pages: number | undefined;
    description: string | undefined;
    website: string | undefined;
}


export interface GetResponseBooksDto {
    books: DetailBookDto[];
}