import React from 'react';

import '../../assets/styles/Global.css'
import '../../assets/styles/App.css'

import CreateTodo from '../components/CreateTodo';

function App() {
  return (
    <div className="outer-box">
      <CreateTodo />
    </div>
  );
}

export default App;
