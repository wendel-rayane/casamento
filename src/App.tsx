import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Footer from './components/footer/footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div style={{ backgroundColor: '#FFFBF7' }}>
        {isLoading ? (
          <div className="heart-loader" id="loading">
            <div>
              <FaHeart
                style={{
                  fontSize: '50px',
                  color: 'red',
                  animation: 'pulse 1.5s infinite',
                }}
              />
            </div>
          </div>
        ) : (
          <>
            <Header />
            <Main />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
