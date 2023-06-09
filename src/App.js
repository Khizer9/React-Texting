import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState ('light')
  const [alert, setAlert] = useState (null)

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  const toggleGreenMode = () => {
    if(mode === 'light'){
      setMode('green');
      document.body.style.backgroundColor = 'green'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
   <>
    <Router>
    <Navbar title="TextingText" aboutText="About" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
        </Routes>
      
    </div>
    </Router>
   </>
  );
}

export default App;
