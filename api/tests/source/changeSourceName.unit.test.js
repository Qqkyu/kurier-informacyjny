describe("changeSourceName", () => {
    beforeAll(() => {
        initializeSourceDatabase();
    });

    afterAll(() => {
        clearSourceDatabase();
    });

    test('should rename "xyz" source to "abc"', async () => {
        expect.assertions(1);
        await changeSourceName("xyz", "abc", "center");
        await expect(getSources("center")).resolves.toContain("abc");
    });
});
