import logo from './logo.svg';
import './App.css';
import React from 'react'
import studentsArr from './studentsArr'
import Students from './Students'

function App() {
  const students = studentsArr.map((ele, index)=>{
    return(
      <Students
      name={ele.name}
      bio={ele.bio}
      scores={ele.scores}
      key={index}
      />
    )
  })
    
  return (
    <div className="App">
      {students}
    </div>
  );
}

export default App;
