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
        await createExampleUser();
    });

    afterAll(async () => {
        await deleteExampleUser();
        await closeDatabaseConnection();
    });

    describe("findUser", () => {
        test('should find a user with "example@gmail.com" mail', async () => {
            expect.assertions(1);
            const user = await findUser("example@gmail.com");
            expect(user).not.toBeNull();
        });
    });

    describe("updatePassword", () => {
        test("should update 'example@gmail.com' account's password", async () => {
            expect.assertions(1);
            await expect(
                await resetPassword("example@gmail.com", "password123")
            ).toBe(true);
        });
    });

    describe("deleteUser", () => {
        test('should delete user with "example@gmail.com" mail', async () => {
            expect.assertions(1);
            await deleteUser("example@gmail.com");
            const deletedUser = await findUser("example@gmail.com");
            expect(deletedUser).toBeNull();
        });
    });
});
