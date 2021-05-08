describe("login", () => {
    beforeEach(() => {
        initializeUserDatabase();
    });

    afterEach(() => {
        clearUserDatabase();
    });

    test('should log in "example@gmail.com" account', async () => {
        expect.assertions(1);
        await logIn("example@gmail.com", "passwd");
        await expect(IsUserLoggedIn("example@gmail.com")).resolves.toBe(true);
    });
});
