import './App.css';

import { About, Contact, Header, NavbarMobile, Projects, Skills, CTA, Footer, Background } from './containers';


function App() {
  return (
    <div className="App">
      <Background/>
      <Header />
      <NavbarMobile />
      <CTA />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
