import './App.css';
import AddTask from './components/AddTask';
import { useReducer } from 'react';
import List from './components/List';

function App() {
  let [tasks,dispatch] = useReducer(taskReducer, null)

  let id
  if(tasks!==null){
     id = tasks.length
  }else{
    id = 0
  }
console.log(id)
  function handleAddTask(text){
      dispatch({
        type:'added',
        id: id++,
        text:text
      })


  }
  return (
    <div className="App">
      <h1>My List</h1>
      <AddTask handlAddTask ={handleAddTask}/>
      <List tasks ={tasks}/>
    </div>
  );
}

function taskReducer(tasks,action){
    switch (action.type) {
      case 'added':{ if(tasks!==null){
        return [...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          }
        ]
      }else{
        return [
          {
            id: action.id,
            text: action.text,
            done: false,
          }
        ]
      }

      }     
      default:
        throw Error('Unknown action: ' + action.type);
      }
}

export default App;
