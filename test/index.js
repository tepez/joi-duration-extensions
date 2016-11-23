'use strict';

// Load modules

const Lab = require('lab');
const Code = require('code');
const Helper = require('./helper');
const BaseJoi = require('joi');
const Extension = require('../');
const Joi = BaseJoi.extend(Extension);


// Declare internals

const internals = {};


// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;


describe('number', () => {

    describe('msDuration()', () => {

        it('still validates a number', (done) => {

            Helper.validate(Joi.number().msDuration(), [
                [0, true, null, 0],
                [10, true, null, 10],
                [10.5, true, null, 10.5]
            ], done);

        });

        it('validates a falsey value', (done) => {

            const schema = Joi.number().msDuration();
            schema.validate(undefined, (err, value) => {

                expect(err).to.not.exist();
                done();
            });

        });

        it('valid ms duration', (done) => {

            Helper.validate(Joi.number().msDuration(), [
                ['2 days', true, null, 172800000],
                ['1d', true, null, 86400000],
                ['10h', true, null, 36000000],
                ['2.5 hrs', true, null, 9000000],
                ['2h', true, null, 7200000],
                ['1m', true, null, 60000],
                ['5s', true, null, 5000],
                ['1y', true, null, 31557600000],
                ['100', true, null, 100]
            ], done);

        });

        it('invalid ms duration', (done) => {

            Helper.validate(Joi.number().msDuration(), [
                ['1 xx', false, null, '"value" must be a valid ms duration'],
                ['yy', false, null, '"value" must be a valid ms duration'],
                ['days 2', false, null, '"value" must be a valid ms duration']
            ], done);
        });

        it('fails without convert', (done) => {

            const schema = Joi.number().msDuration();
            schema.validate('foo', { convert: false }, (err) => {

                expect(err).to.be.an.error('"value" must be a number');
                done();
            });
        });

        it('should be correctly described', (done) => {

            const schema = Joi.number().msDuration();
            expect(schema.describe()).to.equal({
                type: 'number',
                flags: {
                    msDuration: true
                },
                invalids: [
                    Infinity,
                    -Infinity
                ],
                rules: [
                    {
                        name: 'msDuration',
                        arg: {},
                        description: 'Should be a valid ms duration'
                    }
                ]
            });
            done();
        });

        it('should not interfere with normal Joi.number()', (done) => {

            Helper.validate(Joi.number(), [
                ['xxx', false, null, '"value" must be a number']
            ], done);
        });

    });
});
