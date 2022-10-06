import './App.css';

import { About, Contact, Header, Navigation, Projects, Skills, CTA, Footer, Background } from './containers';


function App() {
  return (
    <div className="App">
      <Background/>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
