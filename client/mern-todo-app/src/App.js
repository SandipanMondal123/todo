import './App.css';
import axios from 'axios'
import {useState} from 'react'
function App() {

  const [itemText, setItemText] = useState('')
  const addItem = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5500/api/item', {item: itemText});
      console.log(res)
    }catch(err)
    {
      console.log(err);
    }
  }










  return (
    <div className="App">
     <h1> Sandipan Mondal's MERN ToDo List App! </h1>
     <form className = "form" onSubmit = {e => addItem(e)}>
      <input type = "text" placeholder = "Add your ToDo item here!" onChange = {e => {setItemText(e.target.value)} } value = {itemText} />
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
