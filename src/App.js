import logo from './components/Images/Login_logo.png';
import './App.css';
import './LoginForm.js';
import LoginForm from './LoginForm';
//import Dashboard from './Dashboard';


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

   /*
  <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );*/
}

export default App; 
