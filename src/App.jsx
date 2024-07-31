import './App.css';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
function App() {
  return (
    <div className="App bg-[#0A0929] h-screen">
      <Courses />
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
