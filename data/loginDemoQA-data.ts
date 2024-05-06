import { Account } from '../data-objects/account'
import dotenv from 'dotenv';
dotenv.config();


export const LOGIN_DEMOQA_DATA : {[key: string]: Account} = {
    "valid_user_01": {
        username: process.env.DEMOQA_ACCOUNT_USER_01,
        password: process.env.DEMOQA_ACCOUNT_PASSWORD_01,
        userId: "15868515-1e4a-4166-b2aa-22e754c04b8e",
        keyAccessToken: "valid_user_01"
    }
}