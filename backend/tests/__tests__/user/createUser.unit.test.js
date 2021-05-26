import { signup } from "../../../resources/auth.js";
import {
    connectDatabase,
    closeDatabaseConnection,
    deleteExampleUser,
} from "../../databaseSetup.js";

describe("createUser", () => {
    beforeAll(async () => {
        await connectDatabase();
    });

    afterAll(async () => {
        await deleteExampleUser();
        await closeDatabaseConnection();
    });

    test('should create "example@gmail.com" account', async () => {
        expect.assertions(2);
        const req = {
            body: { email: "example@gmail.com", password: "passwd" },
        };
        const res = {
            status(status) {
                expect(status).toBe(200);
                return this;
            },
            send(result) {
                expect(result.hashedPassword).toEqual(expect.anything());
            },
        };
        await signup(req, res);
    });
});
