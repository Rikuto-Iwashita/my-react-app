import React from 'react';
import PropTypes from 'prop-types';

//単一のTODO項目を表示するコンポーネント
const TodoItem = ({ todo, onComplete, onDelete, isCompleted }) => {
  return (
    <li>
      {todo.text}

      {/* 完了ボタン(未完了のみ表示) */}
      {isCompleted && <button onClick={() => onComplete(todo.id)}>完了</button>}

      {/* 削除ボタンどちらでも表示 */}
      <button onClick={() => onDelete(todo.id, isCompleted)}>削除</button>
    </li>
  );
};

//propsの型チェック
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool,
};

export default TodoItem;
