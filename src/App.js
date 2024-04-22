import logo from './components/Images/Login_logo.png';
import './App.css';
import './LoginForm.js';
import LoginForm from './LoginForm';


function App() {
  return (
    
    <div className="App">
        <div className="left-section">
          <img src={logo} alt="Left section image" />
        </div>
        <div className="right">
          <LoginForm />
        </div>
      </div>
      
  
  );
}

export default App; 
