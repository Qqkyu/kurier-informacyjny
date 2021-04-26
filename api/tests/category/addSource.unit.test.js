describe("addSource", () => {
    test("should add 'xyz' as a source", async () => {
        expect.assertions(1);
        await addSource("xyz", "https://www.example.pl/", "center");
        await expect(getSources("center")).resolves.toContain("xyz");
    });
});
