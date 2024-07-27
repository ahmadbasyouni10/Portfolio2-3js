import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Works, Hero, Navbar, Tech, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 min-h-screen overflow-hidden'>
        <StarsCanvas />
        <div className='relative z-10'>
          <Navbar />
          <Hero />
          <About />
          <Works /> 
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;