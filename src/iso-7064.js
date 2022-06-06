'use strict';

const CHARCODE_0 = '0'.charCodeAt(0);
const CHARCODE_0_MULTIPLIER = 10;
const CHARCODE_0_OFFSET = CHARCODE_0;
const CHARCODE_A = 'A'.charCodeAt(0);
const CHARCODE_A_MULTIPLIER = 100;
const CHARCODE_A_OFFSET = CHARCODE_A - 10;

const BUFFER_INITIAL_VALUE = 0;
const MODULATOR_97 = 97;

const FORMAT = /^[0-9A-Z]{1,}$/;

function mod97(value) {
    const length = value.length;
    var buffer = BUFFER_INITIAL_VALUE;

    for (var i = 0; i < length; ++i) {
        const charCode = value.charCodeAt(i);
        let multiplier;
        let offset;

        if (charCode >= CHARCODE_A) {
            multiplier = CHARCODE_A_MULTIPLIER;
            offset = CHARCODE_A_OFFSET;
        } else {
            multiplier = CHARCODE_0_MULTIPLIER;
            offset = CHARCODE_0_OFFSET;
        }

        buffer *= multiplier;
        buffer -= offset;
        buffer += charCode;
        buffer %= MODULATOR_97;
    }

    return buffer;
}

function stringifyInput(rawValue) {
    if (rawValue === null || rawValue === undefined) {
        throw new Error('Expecting \'rawValue\' of type \'string\', found: \'' + rawValue + '\'');
    }

    if (typeof rawValue !== 'string') {
        throw new Error('Expecting \'rawValue\' of type \'string\', found: \'' + (typeof rawValue) + '\'');
    }

    return rawValue;
}

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
    compute: function (rawValue) {
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
    computeWithoutCheck: function (rawValue) {
        return mod97(rawValue);
    }
};

module.exports = iso7064;
