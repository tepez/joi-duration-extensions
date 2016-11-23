
# joi-duration-extensions

Joi extensions for durations.

[![npm version](https://badge.fury.io/js/joi-duration-extensions.svg)](http://badge.fury.io/js/joi-duration-extensions)
[![Build Status](https://secure.travis-ci.org/tepez/joi-duration-extensions.svg?branch=master)](http://travis-ci.org/tepez/joi-duration-extensions)
<!--

Remove those badges until they work properly on semver.

[![Dependencies Status](https://david-dm.org/hapijs/joi-duration-extensions.svg)](https://david-dm.org/hapijs/joi-duration-extensions)
[![DevDependencies Status](https://david-dm.org/hapijs/joi-duration-extensions/dev-status.svg)](https://david-dm.org/hapijs/joi-duration-extensions#info=devDependencies)

-->
<!--

Maybe add this in the future

[![NSP Status](https://nodesecurity.io/orgs/hapijs/projects/0394bf83-b5bc-410b-878c-e8cf1b92033e/badge)](https://nodesecurity.io/orgs/hapijs/projects/0394bf83-b5bc-410b-878c-e8cf1b92033e)

-->
[![Known Vulnerabilities](https://snyk.io/test/npm/joi-duration-extensions/badge.svg)](https://snyk.io/test/npm/joi-duration-extensions)

Lead Maintainer: [Tom Yam](https://github.com/tepez)

Durations are parsed with [zeit/ms](https://github.com/zeit/ms).
All issues regarding parsing should be opened there.

# Usage

Usage is a two steps process. First, a schema is constructed using the provided types and constraints:

```js
const BaseJoi = require('joi');
const Extension = require('joi-duration-extensions');
const Joi = BaseJoi.extend(Extension);

Joi.validate('1y', Joi.number().msDuration()).value         // 31557600000
Joi.validate('2 days', Joi.number().msDuration()).value     // 172800000
Joi.validate('1d', Joi.number().msDuration()).value         // 86400000
Joi.validate('10h', Joi.number().msDuration()).value        // 36000000
Joi.validate('2.5 hrs', Joi.number().msDuration()).value    // 9000000
Joi.validate('100', Joi.number().msDuration()).value        // 100

// If value cannot be parsed it's an error
Joi.validate('1 XX', Joi.number().msDuration()).error.message   // "value" must be a valid ms duration'
```

# API
See the [API Reference](https://github.com/tepez/joi-duration-extensions/blob/v1.0.0/API.md).

Based on [hapijs/joi-date-extensions](https://github.com/hapijs/joi-date-extensions)