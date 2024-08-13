"use client";

const CourseForm = () => {
  function onSubmit() {
    console.log("Hello World.");
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col p-12 gap-4">
      <input type="text" name="name" className="border" />
      <button type="submit" className = "btn">Submit</button>
    </form>
  );
};

export default CourseForm;
