const TodoTitle = ({ title, count }) => {
  return (
    <div>
      <h1 className="lg:text-4xl text-center my-5">
        {title} <span>: {count}</span>
      </h1>
    </div>
  );
};

export default TodoTitle;
