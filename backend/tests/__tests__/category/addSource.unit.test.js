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
        await removeSource("qwe");
        await closeDatabaseConnection();
    });

    test("should add 'qwe' as a source", async () => {
        expect.assertions(1);
        await addSource("qwe", "https://www.example.pl/", 1);
        await expect(await getSourcesNames(1)).toContain("qwe");
    });
});
