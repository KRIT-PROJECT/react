import './App.css';
import Courses from './components/Courses';

import Demos from './components/Demos';

import Footer from './components/Footer';


function App() {
  return (
    <div className="App text-black h-screen">
      <Courses />

      <Demos/>

     
      <Footer/>

    </div>
  );
}

export default App;
