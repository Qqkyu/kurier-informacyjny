import { changeAssignment } from "../../../resources/user/user.controllers";
import {
    connectDatabase,
    closeDatabaseConnection,
    createExampleUser,
    deleteExampleUser,
} from "../../databaseSetup.js";

describe("changeAssignment", () => {
    beforeAll(async () => {
        await connectDatabase();
        await createExampleUser();
    });

    afterAll(async () => {
        await deleteExampleUser();
        await closeDatabaseConnection();
    });

    test("should change tvn's assignment", async () => {
        expect.assertions(1);
        const req = {
            body: { email: "example@gmail.com", source_id: 0, category_id: 0 },
        };
        const res = {
            status(status) {
                expect(status).toBe(200);
                return this;
            },
            send(result) {},
        };
        await changeAssignment(req, res);
    });
});
