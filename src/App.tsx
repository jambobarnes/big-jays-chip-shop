import Footer from './components/layouts/Footer';
import MainContent from './components/layouts/MainContent';
import NavBar from './components/layouts/NavBar';

export default function App() {

  return (
    
      <div className="app">
        <header id="header">
          <NavBar />
        </header>

        <main id="main-content">
          <MainContent />
        </main>

        <footer id="footer">
          <Footer />
        </footer>
      </div>
    
  );
  
};