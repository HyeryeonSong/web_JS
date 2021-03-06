import './App.scss';
import Button from './components/Button.js';

function App() {
  return (
    <div className="App">      
      <div className="buttons">
        <Button 
          size="large"
          // onClick={() => console.log('Click!!!')}
          // onMouseOver={() => console.log('hover')}
          // onMouseOut={() => console.log('OUT')}
        >BUTTON</Button>
        <Button
        >BUTTON</Button>
        <Button
          size="small"
        >BUTTON</Button>
      </div>
      <div className="buttons">
        <Button 
          size="large"
          color="gray"
        >BUTTON</Button>
        <Button
          color="gray"
        >BUTTON</Button>
        <Button
          size="small"
          color="gray"
        >BUTTON</Button>
      </div>
      <div className="buttons">
        <Button 
          size="large"
          color="pink"
        >BUTTON</Button>
        <Button
          color="pink"
        >BUTTON</Button>
        <Button
          size="small"
          color="pink"
        >BUTTON</Button>
      </div>
      <div className="buttons">
        <Button 
          size="large"
          color="gray"
          outline
        >BUTTON</Button>
        <Button
          color="pink"
          outline
        >BUTTON</Button>
        <Button
          size="small"          
          outline
        >BUTTON</Button>
      </div>
      <div className="buttons">
        <Button 
          size="large"
          color="gray"
          fullWidth
        >BUTTON</Button>
        <Button
          color="pink"
          fullWidth
          outline
        >BUTTON</Button>
        <Button
          size="small"          
          fullWidth          
        >BUTTON</Button>
      </div>
    </div>
  );  
}

export default App;