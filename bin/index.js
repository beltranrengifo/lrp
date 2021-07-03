#!/usr/bin/env node

/* order matters */

const { program } = require('../lib/program')

require('../lib/commands')

program.parse(process.argv)
