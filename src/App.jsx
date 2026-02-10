// . Import Components: 
// Import the Header and ToDoList components into App.jsx. 
// 2. Use Components: 
// ○ Place the Header at the top of the app. 
// ○ Add the ToDoList below the Header. 

import ToDoList from './components/ToDoList'
import Header from './components/Header'
import './App.css'

function App() {
    return (
    <>
    <div className="container">
    <Header></Header>
      <ToDoList></ToDoList>
      </div>
    </>
  );
}

export default App
