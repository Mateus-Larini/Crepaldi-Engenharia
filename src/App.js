import './App.css';
import HeaderPage from './components/header';
import AboutSection from './components/about';
import LaudosSection from './components/reports'
import ContactSection from './components/contats';
const App = () => {
  return (
    <>
      <HeaderPage />
      <AboutSection />
      <LaudosSection />
      <ContactSection />
    </>
  );
};

export default App;
