import { getArticles } from "../../../resources/article/display.articles.js";
import {
    connectDatabase,
    closeDatabaseConnection,
} from "../../databaseSetup.js";

export default describe("getArticles", () => {
    beforeAll(async () => {
        await connectDatabase();
    });

    afterAll(async () => {
        await closeDatabaseConnection();
    });

    test("should get articles from 'right' category", async () => {
        expect.assertions(3);
        const req = { body: { category_id: 2 } };

        const res = {
            status(status) {
                expect(status).toBe(200);
                return this;
            },
            send(result) {
                expect(typeof result[0]).toBe("object");
                expect(typeof result[1]).toBe("object");
            },
        };
        await getArticles(req, res);
    });
});
