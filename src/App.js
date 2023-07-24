import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="App-header">
        <Navbar />
      </div>
      <div className="App-body">
        <About />
        <Contact />
        <Portfolio />
        <Skills />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
