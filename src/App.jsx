import './App.css';

import Body from './components/Body';
import CourseContent from './components/CourseContent';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  // const [body,setBody] = useState(false);
  return (
    <BrowserRouter>
      <div className="App bg-[#f7f7f7] h-screen">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path='/info' element={<CourseContent />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
