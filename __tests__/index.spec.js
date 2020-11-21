(function () {
  require('../src');

  describe('api.basic test', () => {
    test('13x is ok', function () {
      for (let i = 0; i < 9; i++) {
        var phone = `13${i}07171608`;
        expect(nx.isPhone(phone)).toBe(true);
      }
    });
    test('14x is ok', function () {
      for (let i = 0; i < 9; i++) {
        var phone = `14${i}07171608`;
        expect(nx.isPhone(phone)).toBe(true);
      }
    });
    test('15x is ok', function () {
      for (let i = 0; i < 9; i++) {
        var phone = `15${i}07171608`;
        expect(nx.isPhone(phone)).toBe(true);
      }
    });
    test('17x is ok', function () {
      for (let i = 0; i < 9; i++) {
        var phone = `17${i}07171608`;
        expect(nx.isPhone(phone)).toBe(true);
      }
    });
    test('18x is ok', function () {
      for (let i = 0; i < 9; i++) {
        var phone = `18${i}07171608`;
        expect(nx.isPhone(phone)).toBe(true);
      }
    });
    test('19x is ok', function () {
      for (let i = 0; i < 9; i++) {
        var phone = `19${i}07171608`;
        expect(nx.isPhone(phone)).toBe(true);
      }
    });
  });
})();
