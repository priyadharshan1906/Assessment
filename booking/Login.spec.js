const { test, expect } = require('@playwright/test');

// -----------------------------
// Test Data
// -----------------------------
const BASE_URL =
    'https://dev.outlet.natureland.hipster-virtual.com/login';
    const HOME_URL =
    'https://dev.outlet.natureland.hipster-virtual.com/';

const USERNAME = 'tan@natureland.com';
const PASSWORD = 'Hello@123';

test.describe('Login with Captcha', () => {

    test('should login successfully and land on Home page', async ({ page }) => {

        // 1. Navigate to Login Page
        await page.goto(BASE_URL, {
            waitUntil: 'domcontentloaded'
        });

        // 2. Verify Login Page
        await expect(page).toHaveURL(/\/login/);

        // 3. Enter Username
        const usernameInput = page.getByPlaceholder('Enter Email');

        await expect(usernameInput).toBeVisible();
        await usernameInput.fill(USERNAME);

        // 4. Enter Password
        const passwordInput = page.getByPlaceholder('Enter Password');

        await expect(passwordInput).toBeVisible();
        await passwordInput.fill(PASSWORD);

        // 5. Complete CAPTCHA manually
        console.log('-----------------------------------------');
        console.log('Please complete the CAPTCHA manually.');
        console.log('-----------------------------------------');

        await page.pause();

        // 6. Click Login
        const loginButton = page.getByRole('button', {
            name: /login|sign in/i
        });

        await expect(loginButton).toBeVisible();
        await expect(loginButton).toBeEnabled();

        await loginButton.click();

        // 7. Validate Home Page
        await expect(page).toHaveURL(HOME_URL, {
            timeout: 5000   
        });

        console.log('Login successful.');
        console.log('User successfully landed on Calendar page.');

    });

});