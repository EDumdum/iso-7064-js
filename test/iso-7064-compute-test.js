'use strict';

const chai = require('chai');
const expect = chai.expect;

/** @namespace describe */
/** @namespace it */

const iso7064 = require('../src/iso-7064');

describe('iso-7064-compute', function() {
    it('Check inelligible input (null, undefined, not a string or number)', function() {
        expect(function() { 
            iso7064.compute(null); 
        }).to.throw('Expecting \'rawValue\' of type \'string\', found: \'null\'');
        expect(function() { 
            iso7064.compute(undefined); 
        }).to.throw('Expecting \'rawValue\' of type \'string\', found: \'undefined\'');
        expect(function() { 
            iso7064.compute([]); 
        }).to.throw('Expecting \'rawValue\' of type \'string\', found: \'object\'');
    });

    it('Check input value format, excepted /^[0-9A-Z]{1,}$/', function() {
        expect(function() {
            iso7064.compute('');
        }).to.throw('Invalid data format; expecting: \'/^[0-9A-Z]{1,}$/\', found: \'\'');
        expect(function() {
            iso7064.compute('012?456');
        }).to.throw('Invalid data format; expecting: \'/^[0-9A-Z]{1,}$/\', found: \'012?456\'');
        expect(function() {
            iso7064.compute('abc');
        }).to.throw('Invalid data format; expecting: \'/^[0-9A-Z]{1,}$/\', found: \'abc\'');
        expect(function() {
            iso7064.compute('969500T3M-BS4SQAMHJ4A');
        }).to.throw('Invalid data format; expecting: \'/^[0-9A-Z]{1,}$/\', found: \'969500T3M-BS4SQAMHJ4A\'');
    });

    it('Check return with elligible value', function() {
        expect(iso7064.compute('969500T3M8S4SQAMHJ')).eq(50);
        expect(iso7064.compute('969500KSV493XWY0PS')).eq(54);
        expect(iso7064.compute('7245005WBNJAFHBD0S')).eq(55);
        expect(iso7064.compute('724500VKKSH9QOLTFR')).eq(38);
        expect(iso7064.compute('724500884QS64MG71N')).eq(76);
        expect(iso7064.compute('724500884QS64MG71N64')).eq(1);
    });
});
