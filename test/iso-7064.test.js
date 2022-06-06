'use strict';

const iso7064 = require('../src/iso-7064');

test('iso-7064.compute - invalid parameter type', () => {
    expect(() => iso7064.compute(null)).toThrow('Expecting \'rawValue\' of type \'string\', found: \'null\'');
    expect(() => iso7064.compute(undefined)).toThrow('Expecting \'rawValue\' of type \'string\', found: \'undefined\'');
    expect(() => iso7064.compute([])).toThrow('Expecting \'rawValue\' of type \'string\', found: \'object\'');
});

test('iso-7064.compute - invalid parameter format', () => {
    expect(() => iso7064.compute('')).toThrow('Invalid data format; expecting: \'/^[0-9A-Z]{1,}$/\', found: \'\'');
    expect(() => iso7064.compute('012?456')).toThrow('Invalid data format; expecting: \'/^[0-9A-Z]{1,}$/\', found: \'012?456\'');
    expect(() => iso7064.compute('abc')).toThrow('Invalid data format; expecting: \'/^[0-9A-Z]{1,}$/\', found: \'abc\'');
    expect(() => iso7064.compute('969500T3M-BS4SQAMHJ4A')).toThrow('Invalid data format; expecting: \'/^[0-9A-Z]{1,}$/\', found: \'969500T3M-BS4SQAMHJ4A\'');
});

test('iso-7064.compute - valid  parameter', () => {
    expect(iso7064.compute('0')).toBe(0);
    expect(iso7064.compute('96')).toBe(96);
    expect(iso7064.compute('97')).toBe(0);
    expect(iso7064.compute('A')).toBe(10);
    expect(iso7064.compute('F')).toBe(15);
    expect(iso7064.compute('A0')).toBe(3);
    expect(iso7064.compute('F3')).toBe(56);
    expect(iso7064.compute('73RSY1B0Y45D9WU')).toBe(43);
    expect(iso7064.compute('X5T2VBF6SB89')).toBe(1);
    expect(iso7064.compute('969500T3M8S4SQAMHJ')).toBe(50);
    expect(iso7064.compute('4OD84MFXFHP6VMBET34PJD')).toBe(79);
    expect(iso7064.compute('Q27GGRHG8F8EH8JVHFK00IL2XWWJOGK0NQR')).toBe(83);
    expect(iso7064.compute('724500VKKSH9QOLTFR')).toBe(38);
    expect(iso7064.compute('4563546Q27287857GGRHG8758678F8EH8J4857485VHFK08740IL2XWWJOG987987897K0N8725867QR128')).toBe(49);
    expect(iso7064.compute('969500T3M8S4SQAMHJ')).toBe(50);
    expect(iso7064.compute('969500KSV493XWY0PS')).toBe(54);
    expect(iso7064.compute('7245005WBNJAFHBD0S')).toBe(55);
    expect(iso7064.compute('724500VKKSH9QOLTFR')).toBe(38);
    expect(iso7064.compute('724500884QS64MG71N')).toBe(76);
    expect(iso7064.compute('724500884QS64MG71N64')).toBe(1);
});

test('iso-7064.computeWithoutCheck - invalid parameter type', () => {
    expect(() => iso7064.computeWithoutCheck(null)).toThrow('Cannot read properties of null (reading \'length\')');
    expect(() => iso7064.computeWithoutCheck(undefined)).toThrow('Cannot read properties of undefined (reading \'length\')');
    expect(iso7064.computeWithoutCheck([])).toBe(0);
});

test('iso-7064.computeWithoutCheck - invalid parameter format (no error but funny result)', () => {
    expect(iso7064.computeWithoutCheck('')).toBe(0);
    expect(iso7064.computeWithoutCheck('012?456')).toBe(44);
    expect(iso7064.computeWithoutCheck('abc')).toBe(66);
    expect(iso7064.computeWithoutCheck('969500T3M-BS4SQAMHJ4A')).toBe(78);
});

test('iso-7064.computeWithoutCheck - valid parameter', () => {
    expect(iso7064.computeWithoutCheck('0')).toBe(0);
    expect(iso7064.computeWithoutCheck('96')).toBe(96);
    expect(iso7064.computeWithoutCheck('97')).toBe(0);
    expect(iso7064.computeWithoutCheck('A')).toBe(10);
    expect(iso7064.computeWithoutCheck('F')).toBe(15);
    expect(iso7064.computeWithoutCheck('A0')).toBe(3);
    expect(iso7064.computeWithoutCheck('F3')).toBe(56);
    expect(iso7064.computeWithoutCheck('73RSY1B0Y45D9WU')).toBe(43);
    expect(iso7064.computeWithoutCheck('X5T2VBF6SB89')).toBe(1);
    expect(iso7064.computeWithoutCheck('969500T3M8S4SQAMHJ')).toBe(50);
    expect(iso7064.computeWithoutCheck('4OD84MFXFHP6VMBET34PJD')).toBe(79);
    expect(iso7064.computeWithoutCheck('Q27GGRHG8F8EH8JVHFK00IL2XWWJOGK0NQR')).toBe(83);
    expect(iso7064.computeWithoutCheck('724500VKKSH9QOLTFR')).toBe(38);
    expect(iso7064.computeWithoutCheck('4563546Q27287857GGRHG8758678F8EH8J4857485VHFK08740IL2XWWJOG987987897K0N8725867QR128')).toBe(49);
    expect(iso7064.computeWithoutCheck('969500T3M8S4SQAMHJ')).toBe(50);
    expect(iso7064.computeWithoutCheck('969500KSV493XWY0PS')).toBe(54);
    expect(iso7064.computeWithoutCheck('7245005WBNJAFHBD0S')).toBe(55);
    expect(iso7064.computeWithoutCheck('724500VKKSH9QOLTFR')).toBe(38);
    expect(iso7064.computeWithoutCheck('724500884QS64MG71N')).toBe(76);
    expect(iso7064.computeWithoutCheck('724500884QS64MG71N64')).toBe(1);
});