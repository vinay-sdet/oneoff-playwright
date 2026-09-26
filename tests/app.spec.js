const { test, expect } = require('@playwright/test');

test('the page title and visible text are correct', async ({ page }) => {
    const appUrl = process.env.APP_URL || 'http://localhost:8080';

    await page.goto(appUrl, { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle('First Project');
    await expect(page.getByRole('heading', { name: 'Hello World' })).toBeVisible();

    await expect(page.locator('body')).toContainText('Hello World');
});
