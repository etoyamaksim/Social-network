import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav-bar/Nav';
import Profile from './components/profile/Profile';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>

  );
}

export default App;
