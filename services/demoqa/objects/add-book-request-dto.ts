export interface BookDto {
    isbn: string | undefined;
}


export interface UserAddBookDto {
    userId: string | undefined;
    collectionOfIsbns: BookDto[];
}