import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import CompletedList from './components/CompletedList';

//アプリ全体を管理する親コンポーネント
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  //新しいTODOを追加する関数
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]); // 既存のTODOリストに追加
  };

  //完了ボタンを押したときの処理(CompleteListに移動させる)
  const completeTodo = (id) => {
    const todo = todos.find((t) => t.id === id); //該当するTODOを取得
    setTodos(todos.filter((t) => t.id !== id)); //未完了リストから削除
    setCompleteTodos([...completedTodos, todo]); //完了リストに追加
  };

  //削除ボタンを押したときの処理
  const deleteTodo = (id, isCompleted = false) => {
    if (isCompleted) {
      //完了リストから削除
      setCompletedTodos(completedTodos.filter((t) => t.id !== id));
    } else {
      //未完了リストから削除
      setTodos(todos.filter((t) => t.id !== id));
    }
  };

  return (
    <div>
      <h1>TODOリスト</h1>

      <TodoInput odAdd={addTodo} />

      <h2>未完了のTODO</h2>
      <TodoList todos={todos} onComplete={completeTodo} onDelete={deleteTodo} />

      <h2>完了したTODO</h2>
      <CompletedList todos={completeTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default Todo;
