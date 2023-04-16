// Reactのインポート
import React, { useState, useEffect } from 'react';

// タスク管理アプリのメインコンポーネント
const TaskManagerApp = () => {
  // タスク一覧のステート
  const [tasks, setTasks] = useState([]);
  // 新しいタスクのタイトルのステート
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // タスク一覧を取得する関数
  const fetchTasks = async () => {
    try {
      // タスク一覧をAPIから取得する処理
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  // コンポーネントがマウントされたときにタスク一覧を取得する
  useEffect(() => {
    fetchTasks();
  }, []);

  // 新しいタスクを作成する関数
  const createTask = async () => {
    try {
      // 新しいタスクをAPIに送信する処理
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: newTaskTitle })
      });
      const data = await response.json();
      // タスク一覧を更新する
      setTasks([...tasks, data]);
      // 新しいタスクのタイトルをリセットする
      setNewTaskTitle('');
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  return (
    <div>
      <h1>タスク管理アプリ</h1>
      {/* タスク一覧の表示 */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      {/* 新しいタスクの入力フォーム */}
      <input
        type="text"
        value={newTaskTitle}
        onChange={e => setNewTaskTitle(e.target.value)}
      />
      <button onClick={createTask}>タスク作成</button>
    </div>
  );
};

export default TaskManagerApp;
