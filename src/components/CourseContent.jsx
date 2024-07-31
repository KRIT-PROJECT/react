import { useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaRegSnowflake } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";
import courseData from "../utils/courseData.json";
// import { ImYoutube2 } from "react-icons/im";
const CourseContent = () => {
  const location = useLocation();
  const { title } = location.state;
  const filteredCourseData = courseData.filter(course => course.title === title);
  const [menuVisibility, setMenuVisibility] = useState({
    firstMenu: false,
    secondMenu: false,
    thirdMenu: false,
  });

  const toggleMenuVisibility = (menu) => {
    setMenuVisibility((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="flex h-screen">
      {filteredCourseData.map((data, index) => (
        <div key={index} className="w-3/5 bg-[#202767] p-5 relative flex flex-col justify-center ">
          <div className="absolute top-5 left-5">
            <Link to={"/courses"}>
              <IoChevronBackCircle color="white" size="2.7em" />
            </Link>
          </div>
          <div className="mt-16 mb-9">
            <h1 className="text-center font-bold text-4xl text-white">
              {data.title}
            </h1>
          </div>
          <div className="flex flex-col items-center gap-10">
            <div className="bg-[#0E1663] w-3/4 p-2 rounded-lg flex flex-col items-center">
              <button
                className="flex items-center w-full px-4 justify-center"
                onClick={() => toggleMenuVisibility("firstMenu")}
              >
                {menuVisibility.firstMenu ? (
                  <MdOutlineKeyboardArrowUp color="white" size="2em" />
                ) : (
                  <MdKeyboardArrowDown color="white" size="2em" />
                )}
                <h1 className="text-white text-lg font-bold">ABOUT {title}</h1>
              </button>
              {menuVisibility.firstMenu && (
                <div className="w-4/5 p-2 mt-2">
                  <p className="text-white text-center">
                   {data.content1}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-[#0E1663] w-3/4 p-2 rounded-lg flex flex-col items-center">
              <button
                className="flex items-center w-full px-4 justify-center"
                onClick={() => toggleMenuVisibility("secondMenu")}
              >
                {menuVisibility.secondMenu ? (
                  <MdOutlineKeyboardArrowUp color="white" size="2em" />
                ) : (
                  <MdKeyboardArrowDown color="white" size="2em" />
                )}
                <h1 className="text-white text-lg font-bold ml-2">
                  ANOTHER TOPIC
                </h1>
              </button>
              {menuVisibility.secondMenu && (
                <div className="w-4/5 p-2 mt-2">
                  <p className="text-white text-center">
                    {data.content2}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-[#0E1663] w-3/4 p-2 rounded-lg flex flex-col items-center">
              <button
                className="flex items-center w-full px-4 justify-center"
                onClick={() => toggleMenuVisibility("thirdMenu")}
              >
                {menuVisibility.thirdMenu ? (
                  <MdOutlineKeyboardArrowUp color="white" size="2em" />
                ) : (
                  <MdKeyboardArrowDown color="white" size="2em" />
                )}
                <h1 className="text-white text-lg font-bold ml-2">MORE INFO</h1>
              </button>
              {menuVisibility.thirdMenu && (
                <div className="w-4/5 p-2 mt-2">
                  <p className="text-white text-center">
                     {data.content3}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="w-2/5 p-8 flex flex-col gap-10 justify-center items-center">
        <div className=" p-3">
          <FaRegSnowflake color="43C0ED" size="12.5em" />
        </div>
        <div className="w-3/4 h-40 bg-[#202767] flex flex-col gap-10 justify-center items-center rounded-xl">
          <h1 className="text-white font-bold text-xl">FORM</h1>
          <button className="text-white font-bold texxt-lg bg-[#1E163B] py-2 px-8">
            LINK
          </button>
        </div>
        <div className="w-3/4 h-40 bg-[#202767] flex justify-center items-center rounded-xl">
          <button>
            {" "}
            <TfiYoutube size="8em" color="white" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
