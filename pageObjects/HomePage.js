class HomePage {
    constructor(page)
    {
        this.page = page;
        this.aboutUs = page.locator("link").filter({hasText: 'About us'}).getByRole("link");
        this.signUpNav = page.locator("#signin2");
        this.userName = page.locator("#sign-username");
        this.passWord = page.locator("#sign-password");
        this.signUpButton = page.locator("button").filter({hasText: 'Sign Up'}).getByRole("button");
        this.signUpModal = page.locator("#signInModal");
    }

    //ACTIONS
    async goTo()
    {
        await this.page.goto("https://www.demoblaze.com");
    }

    async validSignUp(username, password){
        await this.signUpNav.click();
        await this.userName.pressSequentially(username, {delay: 90});
        await this.passWord.pressSequentially(password, {delay: 50});
        await this.page.pause();
       // await this.signUpButton.click();
    }
}

module.exports = {HomePage};