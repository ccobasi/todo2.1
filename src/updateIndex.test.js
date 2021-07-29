import tasklist from "../__mocks__/tasklist";
import updateIndex from "./updateIndex";

describe('updateIndex function test', () => {
    test('index updated properly', () => {

        const index1 = 0;
        const index2 = 2;

        updateIndex(tasklist, index1, index2);

        expect(tasklist[index1].description).toBe('Go swimming.');
        expect(tasklist[index2].description).toBe('Go to gym.');

    })
})