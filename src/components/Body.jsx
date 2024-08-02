import Courses from "./Courses";
import Demos from "./Demos";
import Features from './Features'
import Reviews from './Reviews'
import Contact from './Contact'
const Body = () => {
  return (
    <>
      <div>
        <Courses  />
        <Demos/>
        <Features/>
        <Reviews/>
        <Contact/>
      </div>
    </>
  );
};
export default Body;