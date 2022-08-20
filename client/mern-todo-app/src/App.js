import './App.css';

function App() {
  return (
    <div className="App">
     <h1> Sandipan Mondal's MERN ToDo List App! </h1>
     <form className = "form">
      <input type = "text" placeHolder = "Add your ToDo item here!"/>
      <button type = "submit"> Add </button>
     </form  >
     <div className = 'todo-listItems'>
      <div className = 'todo-item'>
        <p className = "item-content">Item 1</p>
        <button className = 'update-item'>Update</button>
        <button className = 'delete-item'>Delete</button>
      </div>
      <div className = 'todo-item'>
        <p className = "item-content" >Item 2</p>
        <button className = 'update-item'>Update</button>
        <button className = 'delete-item'>Delete</button>
      </div>
      <div className = 'todo-item'>
        <p className = "item-content">Item 3</p>
        <button className = 'update-item'>Update</button>
        <button className = 'delete-item'>Delete</button>
      </div>
     </div>
    </div>
  );
}

export default App;
