'use strict'

module.exports = {
    require: ['ts-node/register', 'source-map-support/register'],
    recursive: true,
    // spec: '*/*-test.ts',
    spec: ['*/*-test.ts'],
}
