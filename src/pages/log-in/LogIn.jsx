import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from './../../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa6';
const LogIn = () => {
  const navigate = useNavigate();
  const { logInUser, googleLogIn, githubLogIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    logInUser(data.email, data.password)
      .then(res => {
        console.log(res.user);
        navigate('/');
      })
      .catch(err => console.log(err));
  };
  const handleGoogleLogin = () => {
    googleLogIn()
      .then(res => {
        console.log(res.user);
        navigate('/');
      })
      .catch(err => console.log(err));
  };
  const handleGithubLogin = () => {
    githubLogIn()
      .then(res => {
        console.log(res.user);
        navigate('/');
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Login </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register('password')}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div className="flex justify-around">
              <button onClick={handleGoogleLogin} className="btn">
                <FcGoogle />
                Google
              </button>
              <button onClick={handleGithubLogin} className="btn">
                <FaGithub />
                GitHub
              </button>
            </div>
            <p className=" ">
              Don't Have an Account? Please{' '}
              <Link to="/register" className="text-blue-600 font-bold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
