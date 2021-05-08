describe("logout", () => {
    beforeEach(() => {
        initializeUserDatabase();
    });

    afterEach(() => {
        clearUserDatabase();
    });

    test('should log out "example@gmail.com" account', async () => {
        expect.assertions(1);
        await logIn("example@gmail.com", "passwd");
        await logOut("example@gmail.com");
        await expect(IsUserLoggedIn("example@gmail.com")).resolves.toBe(false);
    });
});
