import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Works, Hero, Navbar, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 min-h-screen overflow-hidden'>
        <StarsCanvas />
        <div className='relative z-10'>
          <Navbar />
          <Hero />
          <Works />
          <About />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;