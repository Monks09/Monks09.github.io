import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Statistics from './Components/Statistics/Statistics';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import GithubCalender from './Components/GithubCalender/GithubCalender';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      {/* <GithubCalender /> */}
      <Statistics />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
