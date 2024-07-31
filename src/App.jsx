import './App.css';
import CourseContent from './components/CourseContent';
import Courses from './components/Courses';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App bg-[#0A0929] h-screen">
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path='/info' element={<CourseContent />} />
         {/* <CourseContent /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
