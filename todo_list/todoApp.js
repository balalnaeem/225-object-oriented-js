var Todo = (function() {
  var code = 1000;

  var uniqueCode = function() {
    code += 1;
    return String(code);
  };

  function Todo(todoData) {
    this.title = todoData.title;
    this.month = todoData.month;
    this.year = todoData.year;
    this.description = todoData.description;
    this.completed = false;
    this.id = uniqueCode();
  }

  Todo.prototype.isWithinMonthYear = function(month, year) {
    return String(month) === this.month && String(year) === this.year;
  };

  return Todo;
})();



var todoList = (function() {
  var todos = [];
  var VALID_PROPS = ['title', 'month', 'year', 'description', 'completed', 'id'];


  var getTodoIndex = function(id) {
    for (var i = 0; i < todos.length; i += 1) {
      var todo = todos[i];
      if (todo.id === String(id)) {
        return i;
      }
    }

    return -1;
  };

  var isValidTodo = function(todo) {
    var validity = true;
    var todoProps = Object.keys(todo);

    VALID_PROPS.forEach(function(prop) {
      if (todoProps.indexOf(prop) === -1) {
        validity = false;
      }
    });

    if (todoProps.length > VALID_PROPS.length) {
      validity = false;
    }

    return validity;
  }

  var isValidUpdate = function(dataObj) {
    var props = Object.keys(dataObj);
    var validity = props.every(key => VALID_PROPS.includes(key));
    if (props.includes('id')) {
      validity = false;
    }

    return validity;
  }

  // todoList object
  return {
    add: function(todo) {
      if (isValidTodo(todo)) {
        todos.push(todo);
        return true;
      } else {
        return 'Invalid Todo Data';
      }
    },

    delete: function(id) {
      var targetIndex = getTodoIndex(id);
      if (targetIndex === -1) {
        return 'Todo does not exist';
      }

      todos.splice(targetIndex, 1);
      return 'Todo is deleted';
    },

    update: function(props, id) {
      if (!isValidUpdate(props)) {
        return 'Invalid Todo Properties';
      }

      var targetTodo = todos[getTodoIndex(id)];
      if (!targetTodo) {
        return 'Todo does not exist';
      }

      for (var prop in props) {
        targetTodo[prop] = props[prop];
      }
      return 'Todo is updated';
    },

    getTodo: function(id) {
      var targetTodo = todos[getTodoIndex(id)];
      if (!targetTodo) {
        return 'Todo does not exist';
      }

      return Object.assign({}, targetTodo);
    },

    init: function(todoSet) {
      todoSet.forEach(function(todoData) {
        todos.push(new Todo(todoData));
      }, this);

      return todos.length;
    },

    getAllTodos: function() {
      var copy = [];
      todos.forEach(function(todo) {
        copy.push(Object.assign({}, todo));
      });
      return copy;
    },
  };
})();

var todoManager = function(list) {
  return {
    all: function() {
      return list.getAllTodos();
    },

    completed: function() {
      return this.all().filter(function(todo) {
        return todo.completed;
      });
    },

    withinMonthYear: function(month, year) {
      return this.all().filter(function(todo) {
        return Todo.prototype.isWithinMonthYear.call(todo, month, year);
      });
    },

    completedWithinMonthYear: function(month, year) {
      return this.all().filter(function(todo) {
        return todo.completed && Todo.prototype.isWithinMonthYear.call(todo, month, year);
      });
    },
  };
}

var todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

var todoData2 = {
  title: 'Buy Apples',
  month: '2',
  year: '2018',
  description: 'An apple a day keeps the doctor away',
};

var todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '2017',
  description: 'For the cheat day',
};

var todoData4 = {
  title: 'Buy Veggies',
  month: '4',
  year: '2019',
  description: 'For the daily fiber needs',
};

var todoData5 = {
  title: 'Wash car',
  month: '6',
  year: '2019',
  description: 'Your car is dirty',
};

var invalidTodo = {
  title: 'Fix the freezer',
  month: '6',
  year: '2019',
};

var todoSet = [todoData1, todoData2, todoData3, todoData4];

// TESTS //

// initializing todoList with n number of todos
console.log(todoList.init(todoSet) === todoSet.length);

// checking if all todo objects were added safely with the `id` properties
console.log(todoList.getAllTodos()[0].title === 'Buy Milk');
console.log(todoList.getAllTodos()[3].title === 'Buy Veggies');
console.log(todoList.getAllTodos()[0].id === '1001');
console.log(todoList.getAllTodos()[3].id === '1004');

// adding a single todo to the todoList
var todo5 = new Todo(todoData5);
console.log(todoList.add(todo5) === true);

// checking if the latest todo was added with the unique code
console.log(todoList.getAllTodos()[4].id === '1005');

// checking if todo with invalid data does not get added
console.log(todoList.getAllTodos().length === 5);
console.log(todoList.add(invalidTodo) === 'Invalid Todo Data');
console.log(todoList.getAllTodos().length === 5);

// deleting a todo
console.log(todoList.delete('1005') === 'Todo is deleted');
console.log(todoList.getAllTodos().length === 4);

// trying to delete a todo that does not exist
console.log(todoList.delete('1009') === 'Todo does not exist');

// updating the properties of a todo
console.log(todoList.update({completed: true}, '1001') === 'Todo is updated');

// checking if the property was successfully updated
console.log(todoList.getAllTodos()[0].completed === true);

// updating multiple properties
console.log(todoList.update({completed: true, month: '3'}, '1002') === 'Todo is updated');

// checking if both properties were successfully updated
console.log(todoList.getAllTodos()[1].completed === true);
console.log(todoList.getAllTodos()[1].month === '3');

// trying to update a todo that does not exist
console.log(todoList.update({completed: true, month: '3'}, '1010') === 'Todo does not exist');

// todoList only returns copy of an object
var todoObj = todoList.getTodo('1004');      // return the object with `id` equal to 1004
todoList.update({completed: true}, '1004');  // update the same object's `completed` property to true
console.log(todoObj.completed === false);    // returned object's `completed`` property is still false

todoList.update({completed: false}, '1004'); // update the completed property back to false

// trying to return a todo with an id that does not exist
console.log(todoList.getTodo('1012') === 'Todo does not exist');


// todoManager only has access to the copies of the todo Objects
var copyTodoObj1 = todoManager(todoList).all()[0];
todoList.update({title: 'Buy Milk and Yogurt'}, '1001');  // update the title of first todo

// copyTodoObj1 still has the old description
console.log(copyTodoObj1.title === 'Buy Milk');

// only completed Todo objects are returned
var completedTodos = todoManager(todoList).completed();
console.log(completedTodos.length === 2);
console.log(completedTodos[0].completed === true);
console.log(completedTodos[1].completed === true);

// all todo objects in a certain month and year are returned
var inJan2017 = todoManager(todoList).withinMonthYear('1', '2017');
console.log(inJan2017.length === 2);
console.log(inJan2017[0].month === '1');
console.log(inJan2017[0].year === '2017');
console.log(inJan2017[1].month === '1');
console.log(inJan2017[1].year === '2017');

// all completed todo objects in a certain month and year are returned
var completedInJan2017 = todoManager(todoList).completedWithinMonthYear('1', '2017');
console.log(completedInJan2017.length === 1);
console.log(completedInJan2017[0].completed === true);
console.log(completedInJan2017[0].month === '1');
console.log(completedInJan2017[0].year === '2017');

// updating with invalid data
console.log(todoList.update({id: '1002', newProp: 'newValue'}, 1001) === 'Invalid Todo Properties');
console.log(todoList.update({id: '1001'}, 1002) === 'Invalid Todo Properties');
console.log(todoList.update({day: 'monday'}, 1003) === 'Invalid Todo Properties');














