import { useState } from 'react';
import './index.css';
import { generateFortune } from './models/Fortune';
import FortuneCard from './components/FortuneCard';
import FortuneButton from './components/FortuneButton';
import ZaptBadge from './components/ZaptBadge';

const App = () => {
  const [fortune, setFortune] = useState({ message: '' });
  const [isFortuneVisible, setIsFortuneVisible] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGetFortune = () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    
    // Hide existing fortune first if one is displayed
    if (isFortuneVisible) {
      setIsFortuneVisible(false);
      setTimeout(() => {
        const newFortune = generateFortune();
        setFortune(newFortune);
        setIsFortuneVisible(true);
        setIsGenerating(false);
        console.log('Generated new fortune:', newFortune.message);
      }, 500); // Wait for fade out animation
    } else {
      // Generate fortune immediately if none is currently displayed
      const newFortune = generateFortune();
      setFortune(newFortune);
      setIsFortuneVisible(true);
      setIsGenerating(false);
      console.log('Generated first fortune:', newFortune.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-700 to-red-900 text-gray-900 p-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md w-full shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-amber-100">Fortune Cookie</h1>
          
          <div className="w-24 h-24 mx-auto mb-6">
            <img src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxpbGx1c3RyYXRpb24lMjBvZiUyMGElMjBmb3J0dW5lJTIwY29va2llJTJDJTIwc2ltcGxlJTJDJTIwY2xlYW4lMjBkZXNpZ258ZW58MHx8fHwxNzQwNzk5MTc2fDA&ixlib=rb-4.0.3&q=80&w=1080" 
               
              alt="Fortune Cookie" 
              data-image-request="illustration of a fortune cookie, simple, clean design"
              className="w-full h-full"
            />
          </div>
          
          <p className="text-xl text-amber-100 mb-4">
            Are you ready for a fortune cookie?
          </p>
          
          <FortuneButton 
            onClick={handleGetFortune}
            disabled={isGenerating}
          />
          
          {fortune.message && (
            <FortuneCard 
              message={fortune.message}
              isVisible={isFortuneVisible}
            />
          )}
        </div>
      </div>
      
      <ZaptBadge />
    </div>
  );
};

export default App;