import logo from './logo.svg';
import './App.css';
import {Button} from './component/Button.jsx'


function App() {
  return (
    <div className="App">
      
      <Button bg={"primary"}>Primary Button</Button>
      <Button children={"Default Button"}/>
      <Button children={"Dashed Button"}/>
      <br/>
      <Button bg1={"text"} children={"Text Button"}/>
      <Button bg1={"link"}children={"Link Button"}/>

      
    </div>
  );
}

export default App;
