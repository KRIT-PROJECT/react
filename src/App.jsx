// import './App.css';

// import Body from './components/Body';
// import CourseContent from './components/CourseContent';
// import Footer from './components/Footer';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Features from './components/Features'
// import Contact from './components/Contact';



// function App() {
//   // const [body,setBody] = useState(false);
//   return (
//     <BrowserRouter>
//       <div className="App bg-[#f7f7f7] h-screen">
//         <Routes>
//           <Route path="/" element={<Body />} />
//           <Route path='/info' element={<CourseContent />} />
//         </Routes>
//         <Footer />
//       </div>
//     </BrowserRouter>

//   );
// }

// export default App;




import './App.css';

import Body from './components/Body';
import CourseContent from './components/CourseContent';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-[#f7f7f7] h-screen">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/info" element={<CourseContent />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

