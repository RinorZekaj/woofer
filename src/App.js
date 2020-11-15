import { Switch, Route } from 'react-router-dom'

import './App.css';
import DashboardPage from './pages/dashboard/dashboard.component';
import LoginPage from './pages/login/login.component';
import ProfilePage from './pages/profile/profile.component';
import SignUpPage from './pages/signup/signup.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={DashboardPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/profile/:userId' component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
