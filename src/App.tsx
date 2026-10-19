import Projects from './components/Projects'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import AboutPage from './components/AboutPage'

function App() {
  const isAboutPage = new URLSearchParams(window.location.search).get('pagina') === 'chi-siamo'

  return (
    <>
      <Header />

      <main>
        {isAboutPage ? <AboutPage /> : <>
        <Hero />
        <About />
        <Services />
        <Projects />
        </>}
      </main>
      <Footer />
    </>
  )
}

export default App
