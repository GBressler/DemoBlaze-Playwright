const {test, expect} = require('@playwright/test');
const {HomePage} = require('../pageObjects/HomePage');
//pageObjects\HomePage.js

test('User Sign Up', async ({page})=>
  {
    const username = "gregbezzler@fakemail.com";
    const password = "demoblaze"; 
    const homePage =  new HomePage(page);
    await homePage.goTo();
    //await page.waitForLoadState('networkidle');
    //console.log("Sign up displayed: " + await expect(page.locator("#signin2")).toBeVisible());
    await homePage.validSignUp(username, password);
    await page.waitForLoadState('networkidle');
  }

  
)