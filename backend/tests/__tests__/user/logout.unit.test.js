import {
    connectDatabase,
    closeDatabaseConnection,
    createExampleUser,
    deleteExampleUser,
} from "../../databaseSetup.js";
import { login, logout } from "../../../resources/auth.js";

describe("logout", () => {
    beforeEach(async () => {
        await connectDatabase();
        await createExampleUser();
    });

    afterEach(async () => {
        await deleteExampleUser();
        await closeDatabaseConnection();
    });

    test('should log out "example@gmail.com" account', async () => {
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
                body: { email: "example@gmail.com", password: "passwd" },
            },
            user
        );
        const req = {
            body: { token: user.accessToken },
        };
        const res = {
            status(status) {
                expect(status).toBe(204);
                return this;
            },
            send(result) {},
        };
        await logout(req, res);
    });
});
