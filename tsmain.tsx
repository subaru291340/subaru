// App.tsx
import React from "react";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#python">PYTHON</a>
          </li>
          <li>
            <a href="#csharp">C#</a>
          </li>
          <li>
            <a href="#tips">TIPS</a>
          </li>
          <li>
            <a href="#links">LINKS</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>従業員情報</h1>
        <form>
          <label htmlFor="name">名前：</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="gender">性別：</label>
          <div className="gender-options">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">男性</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">女性</label>
          </div>
          <label htmlFor="department">部署名：</label>
          <input type="text" id="department" name="department" />
          <input type="submit" value="送信" />
        </form>
      </div>
    </div>
  );
};

export default App;
