import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <StarsCanvas />
        <div className='relative z-10'>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;