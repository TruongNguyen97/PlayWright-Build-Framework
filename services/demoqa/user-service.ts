import { APIClient } from '../../core/api/api-client';
import { DataStorage } from '../../core/util/data-storage';
import { Account } from '../../data-objects/account';
import {API_DEMOQA_ENDPOINTS} from './api-constant';
import {UserRequestDto} from './objects/user-request-dto';

export class UserService {
    _client: APIClient;

    constructor(apiClient: APIClient) {
        this._client = apiClient;
    }

    async getDetailUser(userId, token) {
        return await this._client
            .setDefaultHeaders()
            .addAuthorizationHeader(token)
            .get(API_DEMOQA_ENDPOINTS.DETAIL_USER_ENDPOINT + userId);
    }

    async generateToken(account: UserRequestDto) {
        return await this._client
            .setDefaultHeaders()
            .post(API_DEMOQA_ENDPOINTS.GENERATE_TOKEN_ENDPOINT, account);
    }

    async storeAccessTokenOfAccount(account: Account){
        const response = await this.generateToken({userName: account.username, password: account.password})

        if (response.ok()){
            const token = (await response.json())["token"];
            console.log(`Access token:  Bearer ${token}`);
            DataStorage.setData(account.keyAccessToken, "Bearer " + token);
        }else{
            console.warn(`Can not get token of ${account.username}`);
        }
        
    }

}