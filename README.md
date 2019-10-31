[![npm version](https://badge.fury.io/js/iso-7064.svg)](https://badge.fury.io/js/iso-7064)
[![Build Status](https://travis-ci.org/EDumdum/iso-7064-js.svg?branch=master)](https://travis-ci.org/EDumdum/iso-7064-js)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/eec8eb49ac974397ac3f7f3722b6f218)](https://www.codacy.com/manual/EDumdum/iso-7064-js)
[![codecov](https://codecov.io/gh/EDumdum/iso-7064-js/branch/master/graph/badge.svg)](https://codecov.io/gh/EDumdum/iso-7064-js)
[![GitHub issues](https://img.shields.io/github/issues/EDumdum/iso-7064-js.svg)](https://github.com/EDumdum/iso-7064-js/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Edumdum/iso-7064-js/master/LICENSE)

# ISO-7064

Implementation of [ISO 7064](https://en.wikipedia.org/wiki/ISO_7064) used in validation of format like [IBAN](https://en.wikipedia.org/wiki/International_Bank_Account_Number), [LEI](https://en.wikipedia.org/wiki/Legal_Entity_Identifier), ..

## Installation

Install using [npm](http://npmjs.org/):

```bash
$ npm install iso-7064
```

## Usage

```js
var iso7064 = require('iso-7064');

iso7064.compute('969500KSV493XWY0PS'); // 54
iso7064.computeWithoutCheck('7245005WBNJAFHBD0S'); // 55
```

## API

### `compute(rawValue: String)` -> `Number`

Check requirements.  
Returns result of modulo 97 applied to the String input rawValue.

*Required*
- rawValue must be not `Null`
- rawValue must be of type `String`
- rawValue must respect format `^[0-9A-Z]{1,}$`    

### `computeWithtoutCheck(rawValue: String)`-> `Number`

Does **NOT** check requirements.  
Returns result of modulo 97 applied to the String input rawValue.

**Note:** Use this method for faster performance if you already did the requirements checks in your code.

*Required*
- rawValue must be not `Null`
- rawValue must be of type `String`
- rawValue must respect format `^[0-9A-Z]{1,}$`    