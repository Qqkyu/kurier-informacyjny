import {
    addSource,
    getSourcesNames,
    removeSource,
} from "../../../resources/source/source.controllers.js";
import {
    connectDatabase,
    closeDatabaseConnection,
} from "../../databaseSetup.js";

describe("addSource", () => {
    beforeAll(async () => {
        await connectDatabase();
    });

    afterAll(async () => {
        await removeSource("xyz");
        await closeDatabaseConnection();
    });

    test("should add 'xyz' as a source", async () => {
        await addSource("xyz", "https://www.example.pl/", 1);
        await expect(await getSourcesNames(1)).toContain("xyz");
    });
});
