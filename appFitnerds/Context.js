import React, { createContext, useState } from "react";
import { db } from "./firebase";
import { collectio, getDocs, getDoc } from "firebase/firestore";

const FitnessItems = createContext();

const FitnessContext = ({ children }) => {
  const fetchDataByIdAndField = async (
    collectionName,
    documentId,
    fieldName
  ) => {
    try {
      const documentRef = doc(db, collectionName, documentId);
      const documentSnapshot = await getDoc(documentRef);
      const [storeData, setStoreData] = useState(null);

      if (documentSnapshot.exists()) {
        const fieldValue = documentSnapshot.data()[fieldName];
        setStoreData(fieldValue);
        console.log("Field value:", fieldValue);
      } else {
        console.log("Document not found.");
      }
      return storeData;
    } catch (error) {
      console.log("Error fetching document:", error);
    }
  };

  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);

  return (
    <FitnessItems.Provider
      value={{
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
};

export { FitnessContext, FitnessItems };
