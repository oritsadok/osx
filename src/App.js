import logo from './logo.svg';
import './App.css';
import Login from './componants/login/login'
//import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route path="login" component={Login} />
        <Route />
      </Router> */}
      <Login />


    </div>

  );
}

export default App;
