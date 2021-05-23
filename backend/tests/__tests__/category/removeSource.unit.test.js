import {
    removeSource,
    getSourcesNames,
    addSource,
} from "../../../resources/source/source.controllers.js";
import {
    connectDatabase,
    closeDatabaseConnection,
} from "../../databaseSetup.js";

describe("removeSource", () => {
    beforeAll(async () => {
        await connectDatabase();
        await addSource("xyz", "https://www.example.pl/", 1);
    });

    afterAll(async () => {
        await closeDatabaseConnection();
    });
    test("should remove 'xyz' source", async () => {
        expect.assertions(1);
        await removeSource("xyz");
        await expect(await getSourcesNames(1)).not.toContain("xyz");
    });
});
