var test = require('tape');
var logic = require('./logic');
// markTodo Function test
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
// addTodo Function test
let array = [];
test('Test addTodo function', function(t) {
  let actual=logic.addTodo(array,'ayman');
  let expected= [{id:1 , description:'ayman', done:false}]
  t.deepEqual(actual,expected,'new todo is added to todos array');
  t.end();
});

test('Test addTodo function', function(t) {
  let actual=logic.addTodo(array,'');
  let expected= -1;
  t.deepEqual(actual,expected,'add empty description');
  t.end();
});

test('Test addTodo function', function(t) {
  let actual=logic.addTodo(array,null);
  let expected= -1;
  t.deepEqual(actual,expected,'add null description');
  t.end();
});

test('Test addTodo function', function(t) {
  let actual=logic.addTodo(array,2);
  let expected= -1;
  t.deepEqual(actual,expected,'add number description');
  t.end();
});

test('Test addTodo function', function(t) {
  let actual=logic.addTodo(array,' ');
  let expected= -1;
  t.deepEqual(actual,expected,'add space description');
  t.end();
});
