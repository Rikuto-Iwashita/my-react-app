import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// 未完了TODOの一覧を表示するコンポーネント
const TodoList = ({ todos, onComplete, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

//propsの型チェック
TodoList.propTypes = {
  todos: PropTypes.arrayof(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ).isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoList;
