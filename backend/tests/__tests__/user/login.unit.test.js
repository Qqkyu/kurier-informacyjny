import {
    connectDatabase,
    closeDatabaseConnection,
    createExampleUser,
    deleteExampleUser,
} from "../../databaseSetup.js";
import { login } from "../../../resources/auth.js";
describe("login", () => {
    beforeEach(async () => {
        await connectDatabase();
        await createExampleUser();
    });

    afterEach(async () => {
        await deleteExampleUser();
        await closeDatabaseConnection();
    });

    test('should log in "example@gmail.com" account', async () => {
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
                expect(result.accessToken).toEqual(expect.anything());
            },
        };
        await login(req, res);
    });
});
