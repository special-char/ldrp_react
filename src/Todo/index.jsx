import React, { Component, createRef } from 'react';

export default class Todo extends Component {
  state = {
    todoList: [],
    todoStatus: 'all',
  };

  inputRef = createRef();

  addTodo = (e) => {
    e.preventDefault();
    const todoText = this.inputRef.current;

    if (todoText) {
      this.setState(
        ({ todoList }) => ({
          todoList: [
            ...todoList,
            { text: todoText.value, id: new Date().valueOf(), isDone: false },
          ],
        }),
        () => {
          this.inputRef.current.value = '';
        },
      );
    }
  };

  toggleComplete = (item) => {
    this.setState(({ todoList }, props) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...item, isDone: !item.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = (item) => {
    this.setState(({ todoList }, props) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  changeTodoStatus = (state) => {
    this.setState({ todoStatus: state });
  };

  render() {
    const { todoList, todoStatus } = this.state;

    console.log('render');

    return (
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-2xl font-light my-4">Todo App</h1>
        <form className="flex" onSubmit={this.addTodo}>
          <div>
            <label htmlFor="todoText" className="sr-only">
              Todo Text
            </label>
            <input
              ref={this.inputRef}
              type="text"
              id="todoText"
              className="rounded-l-md"
            />
          </div>
          <button type="submit" className="btn rounded-l-none">
            Add Todo
          </button>
        </form>
        <div className="w-full my-4 flex-1">
          {todoList
            .filter((x) => {
              switch (todoStatus) {
                case 'completed':
                  return x.isDone === true;

                case 'pending':
                  return x.isDone === false;

                default:
                  return true;
              }
            })
            .map((item) => (
              <div key={item.id} className="flex items-center m-4">
                <div>
                  <label htmlFor="isCompleted" className="sr-only">
                    is Completed
                  </label>
                  <input
                    type="checkbox"
                    name="isCompleted"
                    id="isCompleted"
                    checked={item.isDone}
                    onChange={() => this.toggleComplete(item)}
                  />
                </div>
                <p className="flex-1 px-2">{item.text}</p>
                <button
                  type="button"
                  className="btn"
                  onClick={() => this.deleteTodo(item)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
        <div className="w-full flex">
          <button
            type="button"
            className="btn flex-1 rounded-none"
            onClick={() => this.changeTodoStatus('all')}
          >
            All
          </button>
          <button
            type="button"
            className="btn flex-1 rounded-none"
            onClick={() => this.changeTodoStatus('pending')}
          >
            Pending
          </button>
          <button
            type="button"
            className="btn flex-1 rounded-none"
            onClick={() => this.changeTodoStatus('completed')}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}
