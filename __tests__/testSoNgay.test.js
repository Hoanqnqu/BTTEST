const { test, expect } = require('@jest/globals');

function soNgay(thang, nam) {
    if(nam < 1  || thang <1|| thang > 12) return -1
    if ([4, 6, 9, 11].includes(thang)) {
        return 30;
    } else if (thang === 2) {
        if (nam % 4 === 0 && (nam % 100 !== 0 || nam % 400 === 0)) {
            return 29;
        } else {
            return 28;
        }
    } else {
        return 31;
    }
}

describe('soNgay', () => {
    test('soNgayTest', () => {
        expect(soNgay(1, 2023)).toBe(31);
        expect(soNgay(2, 2023)).toBe(28);
        expect(soNgay(2, 2024)).toBe(29);
        expect(soNgay(3, 2023)).toBe(31);
        expect(soNgay(4, 2023)).toBe(30);

        expect(soNgay(1, -2022)).toBe(-1);
        expect(soNgay(0, 2022)).toBe(-1);
        expect(soNgay(0, 0)).toBe(-1);
        expect(soNgay(-1, -1)).toBe(-1);
        expect(soNgay(-1, 2023)).toBe(-1);
    });
});
