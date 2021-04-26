describe("getArticles", () => {
    beforeAll(() => {
        initializeSourceDatabase();
    });

    afterAll(() => {
        clearSourceDatabase();
    });

    test("should get articles from 'right' category", async () => {
        expect.assertions(1);
        await getArticles("right");
        await expect(getSources("center")).resolves.anything();
    });
});
