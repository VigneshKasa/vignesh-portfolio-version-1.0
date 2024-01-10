import './App.css'
import TitleContainer from './components/Titlecontainer'
import Skills from './components/Skills'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'
import ProjectPreview from './components/ProjectPreview'
function App() {

  return (
    <>
      <div className='mainBox'>
        <TitleContainer />
        <Skills />
        <ProjectSection />
        <Footer />
        <ProjectPreview></ProjectPreview>
      </div>
    </>
  )
}

export default App
