React has a built-in hook called useMemo that allows us to memoize expensive functions so that we can avoid calling them on every render. 

import "./styles.css";
import { useState, useMemo } from "react";


export default function App() {
  const [grade, setGrade] = useState(5);
  const countPopulation = ((grade) => {
    return grade ** 2;
  });

 
  const memoizedVal = useMemo(() => countPopulation(grade), []);

  return (
    <div className="App">
      <p>Current Grade: {grade}</p>
      <p>Current Population: {memoizedVal}</p>
    </div>
  );
}
