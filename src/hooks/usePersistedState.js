import React, { useState, useEffect } from "react";

const usePersistedState = (name, initialValue) => {
  const [value, setValue] = useState(() => {
    const persistedValue = window.localStorage.getItem();

    if (persistedValue !== null) {
      return persistedValue;
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    window.localStorage.setItem(name, value);
  }, [value]);
};

export default usePersistedState;
