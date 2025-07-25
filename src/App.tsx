import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import Profile from './features/profile/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/profile" element={<Profile /> }/>
      </Routes>
    </Router>
  );
}

export default App;
