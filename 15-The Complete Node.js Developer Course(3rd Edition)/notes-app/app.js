const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs')

//add
yargs.command({
    command: 'add',
    describe: 'Add New Note',
    handler: function () {
        console.log('Add note')
    }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: function () {
        console.log('remove note')
    }
})

//list
yargs.command({
    command: 'list',
    describe: 'list note',
    handler: function () {
        console.log('list note')
    }
})

//read
yargs.command({
    command: 'read',
    describe: 'read note',
    handler: function () {
        console.log('read note')
    }
})

console.log(yargs.argv)