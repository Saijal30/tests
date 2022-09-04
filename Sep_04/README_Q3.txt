1.Importing external stylesheets:
import "./style.css";

2.Write inline styles :
  const styles = {
    main: {
      backgroundColor: "#f1f1f1",
      width: "100%",
    }
   
  };
  return (
    <div className="main" style={styles.main}></div>
    );
    
    
3. Use CSS Modules :
Create a file with .module.css as the extension.
Import that module into the React app 

import styles from "./styles.module.css";
function App() {
  return (
    <h1 className={styles.heading}>Hello World</h1>
  );
}

