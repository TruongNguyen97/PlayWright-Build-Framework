import dotenv from 'dotenv';
dotenv.config();
                
export const CONFIG_TIMEOUT = {
    TEST_BASE_TIMEOUT: parseInt(process.env.TEST_BASE_TIMEOUT || '30000', 10), // # timeout for each test, default: 30s
    GLOBAL_TIMEOUT: parseInt(process.env.GLOBAL_TIMEOUT || '0', 10), // # maximum timeout for whole test suite, default: 0s (disabled)
    EXPECT_BASE_TIMEOUT: parseInt(process.env.EXPECT_BASE_TIMEOUT || '30000', 10), // # timeout for expect matchers, default: 30s
    PAGE_TIMEOUT: parseInt(process.env.PAGE_TIMEOUT || '30000', 10) // # timeout for all function in page, default: 30s
};