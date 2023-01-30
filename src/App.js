import React, {useState} from "react"
import "./App.css"
import { Button } from "semantic-ui-react";


function App(){

  const [count, setCount] = useState(0)
  return(
    <div className="App">
      <div className="kit">
      <header><h1><u>Counter app using states</u></h1></header>
      <h2>Current value of count is: [ {count} ]</h2><br/>
      <div className="btnclass">
      <button class="ui button" onClick={() => setCount(0)}>Reset counter</button><br/>
      <button class="ui button" onClick={() => (count <0 ? "" : setCount(count + 1))}>Increment</button>
      <button class="ui button" onClick={() => (count <= 0 ? "" : setCount(count - 1))}>Decrement</button>
      </div><br/>
      <h3>Done by:- Dhruva Arora . 12002597</h3>
      </div>
      </div>
  );
}
export default App;


