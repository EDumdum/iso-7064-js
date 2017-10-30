'use strict';

var iso7064 = {
    /**
     * Check requirements.  
     * Returns result of modulo 97 applied to the String input rawValue.
     *
     * Requirements:
     * - rawValue must be not `Null`
     * - rawValue must be of type `String`
     * - rawValue must respect format `^[0-9A-Z]{1,}$`
     * 
     * @param {*} rawValue 
     */
    compute(rawValue) {
        const value = stringifyInput(rawValue);

        if (!value.match(FORMAT)) {
            throw new Error('Invalid data format; expecting: \'' + FORMAT + '\', found: \'' + value + '\'');
        }

        return mod97(value);
    },

    /**
     * Does NOT check requirements.  
     * Returns result of modulo 97 applied to the String input rawValue.
     *
     * Requirements:
     * - rawValue must be not `Null`
     * - rawValue must be of type `String`
     * - rawValue must respect format `^[0-9A-Z]{1,}$`
     * 
     * @param {*} rawValue 
     */
    computeWithoutCheck(rawValue) {
        return mod97(rawValue);
    }
};

const CHARCODE_A = 'A'.charCodeAt(0);
const CHARCODE_0 = '0'.charCodeAt(0);

const FORMAT = /^[0-9A-Z]{1,}$/;

function mod97(value) {
    var buffer = 0;
    var charCode;

    for (var i = 0; i < value.length; ++i) {
        charCode = value.charCodeAt(i);

        buffer = charCode + (charCode >= CHARCODE_A ? buffer * 100 - CHARCODE_A + 10 : buffer * 10 - CHARCODE_0);
        
        if (buffer > 1000000) {
            buffer %= 97;
        }
    }

    return buffer % 97;
}

function stringifyInput(rawValue, valueName = 'rawValue') {
    if (rawValue === null || rawValue === undefined) {
        throw new Error('Expecting ' + valueName + ' of type \'string\', found: \'' + rawValue + '\'');
    }

    if (typeof rawValue !== 'string') {
        throw new Error('Expecting ' + valueName + ' of type \'string\', found: \'' + (typeof rawValue) + '\'');
    }

    return rawValue;    
}

module.exports = iso7064;