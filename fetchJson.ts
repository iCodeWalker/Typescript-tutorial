import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/2";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Interfaces in typescript is used to define structure of objects.

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  //const title = todo.Title;  Gives error as todo obj does not HAVE Title prop. it has title.
  const title = todo.title;
  const completed = todo.completed;

  //console.log(`ID : ${id}, title : ${title}, Is task finised : ${completed}}`);

  //logTodos(id,completed,title);  Gives error as 2nd argument expects string but we have provided boolean.
  logTodos(id, title, completed);
});

const logTodos = (id: number, title: string, completed: boolean) => {
  console.log(`ID : ${id}, title : ${title}, Is task finised : ${completed}}`);
};
