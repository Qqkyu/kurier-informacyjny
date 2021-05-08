describe("createUser", () => {
    test('should create "example@gmail.com" account', async () => {
        expect.assertions(1);
        await createUser("example@gmail.com", "passwd");
        await expect(findUser("example@gmail.com")).resolves.not.toBeNull();
    });
});
