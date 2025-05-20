export default TodoInput;

import React, { useState } from 'react';

//ユーザーが新しいTODOを入力する為のコンポーネント
const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState('');

  //追加ボタンの処理
  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text); //親に追加処理を依頼
      setText(''); //入力欄をクリア
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいTODOを入力"
      />
      <button onClick={handleAdd}>追加</button>
    </div>
  );
};
