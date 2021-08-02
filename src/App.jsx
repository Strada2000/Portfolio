import Navbar from './components/navbar/Navbar.jsx';
import "./app.scss";
import Home from './components/home/Home.jsx'
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="section">
      <Home />
      <Skills />
      <Projects />
      
      </div>
    </div>
  );
}
