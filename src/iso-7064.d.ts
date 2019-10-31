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
export declare function compute(rawValue: string): number;

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
export declare function computeWithoutCheck(rawValue: string): number;
