import {useState} from 'react'
import Button from "./components/Button";
import Alert from "./components/Alert";
function App() {
  const[alertVisible, SetAlertVisibility] = useState(false);

  return (
  <div>
    {alertVisible && <Alert onClose={() => SetAlertVisibility(false)}> My Alert</Alert>}
    <Button color = "secondary" onClick={()=>SetAlertVisibility(true)}>
      My Button
      </Button> 
  </div>
  );
}

export default App;
