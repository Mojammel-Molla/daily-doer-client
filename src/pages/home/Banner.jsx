import { useContext } from 'react';
import BannerImg from '../../assets/Banner-BG.png';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="hero min-h-[77vh] bg-gradient-to-r from-[#0073f0] via-purple-500 to-[#62238c]">
      <div className="hero-content w-full flex-col lg:flex-row lg:justify-between">
        <div className="text-white">
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
          {user ? (
            <Link to="/dashboard">
              <button className="btn text-white bg-[#ee9949] hover:bg-[#62238c]">
                Explore more
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn text-white bg-[#ee9949] hover:bg-[#62238c]">
                Explore more
              </button>
            </Link>
          )}
        </div>
        <img
          src={BannerImg}
          className="lg:max-w-3xl min-h-[50vh] rounded-lg "
        />
      </div>
    </div>
  );
};

export default Banner;
