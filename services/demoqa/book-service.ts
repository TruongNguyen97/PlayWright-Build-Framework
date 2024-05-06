import { APIClient } from '../../core/api/api-client';
import { DataStorage } from '../../core/util/data-storage';
import { Account } from '../../data-objects/account';
import { Book } from '../../data-objects/book';
import {API_DEMOQA_ENDPOINTS} from './api-constant';
import {BookDto, UserAddBookDto} from './objects/add-book-request-dto';
import {UserDeleteBookDto} from './objects/delete-book-request-dto';
import { UserService } from './user-service';

export class BookService {
    _client: APIClient;
    _userService: UserService;

    constructor(apiClient: APIClient) {
        this._client = apiClient;
        this._userService = new UserService(apiClient);
    }

    async postBookToCollection(data: UserAddBookDto, token) {
        return await this._client
            .setDefaultHeaders()
            .addAuthorizationHeader(token)
            .post(API_DEMOQA_ENDPOINTS.ADD_BOOKS_TO_COLLECTION_ENDPOINT, data);
    }

    async deleteBookFromCollection(data: UserDeleteBookDto, token) {
        return await this._client
            .setDefaultHeaders()
            .addAuthorizationHeader(token)
            .delete(API_DEMOQA_ENDPOINTS.DELETE_BOOKS_FROM_COLLECTION_ENDPOINT, {}, data);
    }

    async getBooks() {
        return await this._client
            .setDefaultHeaders()
            .get(API_DEMOQA_ENDPOINTS.GET_BOOKS_ENDPOINT);
    }

    async addBookFromUser(user: Account, book: Book){
        await this._userService.storeAccessTokenOfAccount(user);  
        const bookBody: UserAddBookDto = {
            userId: user.userId,
            collectionOfIsbns: [{isbn: book.isbn}]
        }
        const addBookResult = await this.postBookToCollection(bookBody, DataStorage.getData(user.keyAccessToken))
        DataStorage.setData("bookAdded", book);
        console.log(`Add Book Successfull:  ${DataStorage.getData("bookAdded")}`);
    }

    async deleteBookFromUser(user: Account, book: Book){
        console.log('Delete book by API')
        const deleteBookBody: UserDeleteBookDto = {
            userId: user.userId,
            isbn: book.isbn
        }
        await this._userService.storeAccessTokenOfAccount(user);  
        const result = await this.deleteBookFromCollection(deleteBookBody, DataStorage.getData(user.keyAccessToken))
        console.log('Delete book '+ book.title + ': ' + result.status())
    }
}