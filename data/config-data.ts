import dotenv from 'dotenv';
dotenv.config();

//  URL
export const DEMOQA_WEB_URL = process.env.DEMOQA_WEB_URL
export const DEMOQA_API_URL = process.env.DEMOQA_API_URL

export const CONFIG_APP = {
    DEMOQA_WEB_URL: process.env.DEMOQA_WEB_URL || 'https://demoqa.com',
    DEMOQA_API_URL: process.env.DEMOQA_API_URL || 'https://demoqa.com'
};