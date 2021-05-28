import { signup } from "../../../resources/auth/auth.js";
import {
    connectDatabase,
    closeDatabaseConnection,
    deleteExampleUser,
} from "../../databaseSetup.js";

describe("createUser", () => {
    beforeAll(async () => {
        await connectDatabase();
        await deleteExampleUser("example12@gmail.com");
    });

    afterAll(async () => {
        await deleteExampleUser("example12@gmail.com");
        await closeDatabaseConnection();
    });

    test('should create "example12@gmail.com" account', async () => {
        expect.assertions(1);
        const req = {
            body: { email: "example12@gmail.com", password: "passwd" },
        };
        const res = {
            status(status) {
                expect(status).toBe(200);
                return this;
            },
            send(result) {},
        };
        await signup(req, res);
    });
});
