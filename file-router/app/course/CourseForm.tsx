"use client";

const CourseForm = () => {
  function onSubmit() {
    console.log("Hello World.");
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" className="border" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CourseForm;
