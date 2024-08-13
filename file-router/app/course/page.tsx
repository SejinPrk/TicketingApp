import CourseForm from "./CourseForm";

const course_data = [
  {name: "Next.js", hours: 7},
  {name: "Python", hours: 3},
  {name: "React", hours: 4},
  {name: "Tailwind", hours: 3},
  {name: "C++", hours: 4},

];

const course = () => {
  return (
    <div>
      <h1>All Courses!</h1>
      <div className="md:grid grid-cols-2 xl:grid-cols-4 gap-4"> 
        {course_data.map((course) => (
          <h2 key={course.name} className="card">{course.name}</h2>
        ))}
        </div>
      <CourseForm />
    </div>
  );
};

export default course;
