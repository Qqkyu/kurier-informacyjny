import {
    connectDatabase,
    closeDatabaseConnection,
    createExampleUser,
    deleteExampleUser,
} from "../../databaseSetup.js";
import { login } from "../../../resources/auth/auth.js";

describe("login", () => {
    beforeEach(async () => {
        await connectDatabase();
        await deleteExampleUser("e@gmail.com");
        await createExampleUser("e@gmail.com");
    });

    afterEach(async () => {
        await deleteExampleUser("e@gmail.com");
        await closeDatabaseConnection();
    });

    test('should log in "e@gmail.com" account', async () => {
        expect.assertions(2);
        const req = {
            body: { email: "e@gmail.com", password: "passwd" },
        };
        const res = {
            status(status) {
                expect(status).toBe(200);
                return this;
            },
            send(result) {
                expect(result.token).toEqual(expect.anything());
            },
        };
        await login(req, res);
    });
});
