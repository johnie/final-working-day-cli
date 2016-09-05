import test from 'ava';
import execa from 'execa';

test('main', t => {
	execa.shell('node ./cli.js').then(result => {
		if (typeof result.stdout === 'string') {
			t.pass();
		}
	});
});

test('next', t => {
	execa.shell('node ./cli.js --next').then(result => {
		if (typeof result.stdout === 'string') {
			t.pass();
		}
	});
});
