import { useState } from 'react';
import './App.css';
import Form from "./components/form/index.jsx";
import { uid } from "uid";
import List from "./components/list/index.jsx";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [], });
  
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather?.isGoodWeather
  );

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }])
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity}/> 
      <List activities={filteredActivities} isGoodWeather={weather?.isGoodWeather} />
    </>
  )
}

export default App
