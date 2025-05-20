import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

完了済みのTODOの一覧を表示するコンポーネント;
const CompletedList = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          isCompleted={true}
        />
      ))}
    </ul>
  );
};

//propsの型チェック
CompletedList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CompletedList;
