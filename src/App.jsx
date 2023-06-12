import { useState } from 'react';
import './App.css';
import Form from "./components/form/index.jsx";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState("activities", { defaultValue: [], });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }])
  }
  return (
    <>
      
      <Form onAddActivity={handleAddActivity}/> 
    </>
  )
}

export default App
/* TEST */