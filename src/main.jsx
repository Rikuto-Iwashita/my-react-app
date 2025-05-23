import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './Todo.jsx'; // ✅ あなたのメインコンポーネント

// Reactアプリのエントリーポイント
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
