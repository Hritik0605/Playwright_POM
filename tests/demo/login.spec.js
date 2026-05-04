import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { log } from 'node:console';

test('login test',{tag:['@PlaywrightWithJenkins']}, async ({ page }) => {
 
  const loginPage = new LoginPage(page);
  await loginPage.navigate(); // Navigate to the login page
  log('Navigated to login page');

  
  await loginPage.login('testuser', 'SuperSecretPassword!');

  // Assert successful login (replace with actual assertion, e.g., check for dashboard element)
 // await expect(page).toHaveURL(); // Example assertion
  await page.waitForTimeout(2000);
   // Wait for 2 seconds to observe the result (optional)
});