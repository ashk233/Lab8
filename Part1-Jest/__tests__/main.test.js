const { formatVolumeIconPath } = require('../assets/scripts/main');
describe('The volume icon path should be', () => {
    test('3', () => {
        expect(formatVolumeIconPath(80)).toMatch('3');
    });
    test('2', () => {
        expect(formatVolumeIconPath(50)).toMatch('2');
    });
    test('1', () => {
        expect(formatVolumeIconPath(23)).toMatch('1');
    });
    test('0', () => {
        expect(formatVolumeIconPath(0)).toMatch('0');
    });
});