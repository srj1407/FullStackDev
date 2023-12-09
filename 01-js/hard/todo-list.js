/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  lst = [];
  add(todo) {
    this.lst.push(todo);
  }
  remove(indexOfTodo) {
    if (indexOfTodo < this.lst.length) this.lst.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if (index < this.lst.length) this.lst[index] = updatedTodo;
  }
  getAll() {
    return this.lst;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= this.lst.length) {
      return null;
    }
    return this.lst[indexOfTodo];
  }
  clear() {
    this.lst = [];
  }
}

module.exports = Todo;
