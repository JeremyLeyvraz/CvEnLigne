import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Formation from './components/Formation';





function App() {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
    //   <h1 className="text-white text-4xl font-bold">Bienvenue sur mon CV en ligne !! 🚀</h1>
    // </div>
  <div>
    <Header />
    <About />
    <Skills />
    <Experience />
    <Formation />
    <Contact />
    
  </div>
  )
}

export default App
