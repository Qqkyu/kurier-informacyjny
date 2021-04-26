describe("removeSource", () => {
    beforeAll(() => {
        initializeSourceDatabase();
    });

    afterAll(() => {
        clearSourceDatabase();
    });

    test("should remove 'xyz' source", async () => {
        expect.assertions(1);
        await removeSource("xyz");
        await expect(findSource("xyz")).resolves.toBeNull();
    });
});
