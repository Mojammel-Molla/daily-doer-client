const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage:
          'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="md:max-w-4xl ">
          <h1 className="mb-5 lg:text-4xl font-bold">
            Your Ultimate Task Management Companion
          </h1>
          <p className="mb-5">
            Unlock productivity with DailyDoer, the intuitive task management
            app designed to simplify your daily life. Stay organized, prioritize
            tasks effortlessly, and achieve your goals seamlessly. Experience a
            smarter way to manage your to-dos, boost efficiency, and make every
            day a success. Start your journey to a more productive you with
            DailyDoer!
          </p>
          <button className="btn btn-primary">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
