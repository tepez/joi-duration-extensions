'use strict';

// Load modules

const Joi = require('joi');
const Ms = require('ms');

module.exports = {

    name: 'number',

    base: Joi.number(),

    language: {
        msDuration: 'must be a valid ms duration'
    },

    coerce(value, state, options) {

        if (!value || typeof value === 'number') {
            return value;
        }

        if (options.convert) {
            const ms = Ms(value);

            if (!ms && ms !== 0) {
                return this.createError('number.msDuration', { value }, state, options);
            }

            return ms;
        }

        return value;
    },

    rules: [
        {
            name: 'msDuration',
            description: 'Should be a valid ms duration',
            params: {
            },
            setup(params) {
            },
            validate(params, value, state, options) {

                // No-op just to enable description
                return value;
            }
        }
    ]

};
