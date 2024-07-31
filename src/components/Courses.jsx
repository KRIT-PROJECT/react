import CourseCard from "./CourseCard";
const Courses = () =>{
  const CourseData = [
    {title:"SNOWFLAKE",Stars:4},
    {title:"SQL",Stars:3},
    {title:"PYTHON",Stars:5},
    {title:"JAVA",Stars:4},
    {title:"C++",Stars:3},
    {title:"REACT",Stars:2},
  ];
    return(
        <>
           <div>
             <div>
                <h1 className="flex justify-center items-center font-bold text-3xl text-white">TOP COURSES</h1>
             </div>
             <div className="flex justify-center items-center p-4 flex-wrap  w-[83%] m-auto gap-10">
              {CourseData.map((course,index)=>(
                <CourseCard key={index} title={course.title} Stars={course.Stars} />
              ))}
             </div>
           </div>
        </>
    )
}

export default Courses;