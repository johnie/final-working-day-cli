#!/usr/bin/env node
'use strict';

const meow = require('meow');
const finalWorkingDay = require('final-working-day');
const moment = require('moment');

const options = {
	alias: {
		n: 'next'
	}
};

const cli = meow(`
	Usage
		$ final-working-day

	Options
		--next, -n The next month

	Example
		$ final-working-day
		//=> Friday 30 September 2016
`, options);

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const next = month + 1;

const day = (cli.flags.next) ? finalWorkingDay(year, next) : finalWorkingDay();

console.log(moment(day).format('dddd DD MMMM YYYY'));
