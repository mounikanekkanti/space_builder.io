import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import MyComponent from './components/screen1';
import Markets from './components/Markets';

import Widget from './components/Widget';
import Sipdc from './components/Sipdc';

function App() {
  return (
    
    <div className="App">
      
      <Router>
      <Routes>
          <Route path="/" element={<MyComponent />} />
          <Route path="/markets" element={<Markets />} />
          {/* <Route path="/sipdc" element={<Sipdc />} /> */}
          
          
          {/* <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} /> */}
          {/* Add more Route components for other pages */}
        </Routes>
        </Router>
    </div>
    
  );
}

export default App;
