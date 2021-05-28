import {
    connectDatabase,
    closeDatabaseConnection,
    createExampleUser,
    deleteExampleUser,
} from "../../databaseSetup.js";
import {
    findUser,
    deleteUser,
    resetPassword,
} from "../../../resources/user/user.controllers.js";

describe("Delete, update, findUser tests", () => {
    beforeAll(async () => {
        await connectDatabase();
        await createExampleUser("xxx@gmail.com");
    });

    afterAll(async () => {
        await deleteExampleUser("xxx@gmail.com");
        await closeDatabaseConnection();
    });

    describe("findUser", () => {
        test('should find a user with "xxx@gmail.com" mail', async () => {
            expect.assertions(1);
            const user = await findUser("xxx@gmail.com");
            expect(user).not.toBeNull();
        });
    });

    describe("updatePassword", () => {
        test("should update 'xxx@gmail.com' account's password", async () => {
            expect.assertions(1);
            await expect(
                await resetPassword("xxx@gmail.com", "password123")
            ).toBe(true);
        });
    });

    describe("deleteUser", () => {
        test('should delete user with "xxx@gmail.com" mail', async () => {
            expect.assertions(1);
            await deleteUser("xxx@gmail.com");
            const deletedUser = await findUser("xxx@gmail.com");
            expect(deletedUser).toBeNull();
        });
    });
});
