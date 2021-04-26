describe("changeAssignment", () => {
    beforeAll(() => {
        initializeUserDatabase();
    });

    afterAll(() => {
        clearUserDatabase();
    });

    test("should change onet's assignment", async () => {
        expect.assertions(1);
        await addSource("onet", "https://www.onet.pl/", "center");
        await changeAssignment("example@gmail.com", "onet", "left");
        await expect(
            getUserAssigments("example@gmail.com", "left")
        ).resolves.toContain("onet");
    });
});
