import CourseForm from "./CourseForm";

const course_data = [
  {name: "Next.js", hours: 7},
  {name: "Python", hours: 3},
  {name: "React", hours: 4},
];

const course = () => {
  return (
    <div>
      <h1>All Courses</h1>
      {course_data.map((course) => (
        <h2 key={course.name}>{course.name}</h2>
      ))}

      <CourseForm />
    </div>
  );
};

export default course;
