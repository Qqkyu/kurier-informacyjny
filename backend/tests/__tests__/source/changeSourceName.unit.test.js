import {
    connectDatabase,
    closeDatabaseConnection,
} from "../../databaseSetup.js";
import {
    changeSourceName,
    addSource,
    removeSource,
    getSourcesNames,
} from "../../../resources/source/source.controllers.js";

describe("changeSourceName", () => {
    beforeAll(async () => {
        await connectDatabase();
        await addSource("xyz", "https://www.example.pl/", 0);
    });

    afterAll(async () => {
        await removeSource("abc");
        await closeDatabaseConnection();
    });

    test('should rename "xyz" source to "abc"', async () => {
        expect.assertions(1);
        await changeSourceName("xyz", "abc");
        await expect(await getSourcesNames(0)).toContain("abc");
    });
});
