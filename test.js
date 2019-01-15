var test = require('tape');
var logic = require('./logic');
let to_dos_mark = [{
    id: 0,
    description: 'make tea',
    done: false
  },
  {
    id: 1,
    description: 'make eggs',
    done: true
  }
];

test('Example test for mark', function(t) {
  const actual = logic.markTodo(to_dos_mark, 0);
  const expect = [{
      id: 0,
      description: 'make tea',
      done: true
    },
    {
      id: 1,
      description: 'make eggs',
      done: true
    }];
  t.deepEqual(actual, expect, 'the done in index 0 must true');
  t.end();
});

test('Example test for mark', function(t) {
  const actual = logic.markTodo(to_dos_mark, 1);
  const expect = [{
      id: 0,
      description: 'make tea',
      done: false
    },
    {
      id: 1,
      description: 'make eggs',
      done: false
    }];
  t.deepEqual(actual, expect, 'the done in index 1 must false');
  t.end();
});
