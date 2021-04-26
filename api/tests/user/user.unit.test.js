describe("Delete, update, findUser tests", () => {
    beforeEach(() => {
        initializeUserDatabase();
    });

    afterEach(() => {
        clearUserDatabase();
    });

    describe("findUser", () => {
        test('should find a user with "example@gmail.com" mail', async () => {
            expect.assertions(1);
            const user = await findUser("example@gmail.com");
            expect(user).not.toBeNull();
        });
    });

    describe("deleteUser", () => {
        test('should delete user with "example@gmail.com" mail', async () => {
            expect.assertions(2);
            const user = await findUser("example@gmail.com");
            await deleteUser(user.email);
            const deletedUser = await findUser(user.email);
            expect(deletedUser).toBeNull();
        });
    });

    describe("updatePassword"),
        () => {
            test("should update 'example2@gmail.com' account's password", async () => {
                expect.assertions(1);
                const mail = await findUser("example2@gmail.com").mail;
                await resetPassword(user.mail, "passwd");
                const user = await findUser("example2@gmail.com");
                expect(checkPassword(user, "passwd")).toBe(true);
            });
        };
});
