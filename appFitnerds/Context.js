import React, { createContext, useState } from "react";

const FitnessItems = createContext();

const FitnessContext = ({ children }) => {
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [exportWorkout, setExportWorkout] = useState(0);
  const [exportCalories, setExportCalories] = useState(0);
  const [exportMinutes, setExportMinutes] = useState(0);
  const [userEmail, setUserEmail] = useState("");

  return (
    <FitnessItems.Provider
      value={{
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
        exportCalories,
        setExportCalories,
        exportMinutes,
        setExportMinutes,
        exportWorkout,
        setExportWorkout,
        userEmail,
        setUserEmail,
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
};

export { FitnessContext, FitnessItems };
