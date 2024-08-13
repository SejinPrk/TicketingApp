function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

const blog = async () => {
  await sleep();
  return (
    <div>
      <h1>blog</h1>
    </div>
  );
};

export default blog;
