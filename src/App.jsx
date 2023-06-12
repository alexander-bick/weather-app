import { useState } from 'react';
import './App.css';
import Form from "./components/form/index.jsx";
import { uid } from "uid";
import List from "./components/list/index.jsx";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [], });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }])
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity}/> 
      <List activities={activities} />
    </>
  )
}

export default App
