import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Loader, Navbar, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='relative z-0 '>
        <About />
        <Experience />
        <StarsCanvas />
        </div>
        <Works />
      </div>
    </BrowserRouter>
  );
}

export default App;
