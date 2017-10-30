'use strict';

const chai = require('chai');
const expect = chai.expect;

/** @namespace describe */
/** @namespace it */

const iso7064 = require('../src/iso-7064');

describe('iso-7064-computeWithoutCheck', function() {
    it('Check return with elligible value', function() {
        expect(iso7064.computeWithoutCheck('969500T3M8S4SQAMHJ')).eq(50);
        expect(iso7064.computeWithoutCheck('969500KSV493XWY0PS')).eq(54);
        expect(iso7064.computeWithoutCheck('7245005WBNJAFHBD0S')).eq(55);
        expect(iso7064.computeWithoutCheck('724500VKKSH9QOLTFR')).eq(38);
        expect(iso7064.computeWithoutCheck('724500884QS64MG71N')).eq(76);
        expect(iso7064.computeWithoutCheck('724500884QS64MG71N64')).eq(1);
    });
});
