import {
    connectDatabase,
    closeDatabaseConnection,
    createExampleUser,
    deleteExampleUser,
} from "../../databaseSetup.js";
import { login, logout } from "../../../resources/auth/auth.js";

describe("logout", () => {
    beforeAll(async () => {
        await connectDatabase();
        await createExampleUser("kkk@gmail.com");
    });

    afterAll(async () => {
        await deleteExampleUser("kkk@gmail.com");
        await closeDatabaseConnection();
    });

    test('should log out "kkk@gmail.com" account', async () => {
        expect.assertions(2);
        var user = {};
        var user = {
            status(status) {
                expect(status).toBe(200);
                return this;
            },
            send(result) {},
        };
        await login(
            {
                body: { email: "kkk@gmail.com", password: "passwd" },
            },
            user
        );
        const req = {
            body: { token: user.accessToken },
        };
        const res = {
            status(status) {
                expect(status).toBe(200);
                return this;
            },
            send(result) {},
        };
        await logout(req, res);
    });
});
