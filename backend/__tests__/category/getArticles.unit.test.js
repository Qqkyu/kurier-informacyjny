import { getArticles } from "../resources/user/user.controllers.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

export default describe("getArticles", () => {
    beforeAll(async () => {
        dotenv.config();
        await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
    });

    afterAll(() => {
        mongoose.connection.close();
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
