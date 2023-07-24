import { Link } from 'react-router-dom';
import { logo } from '../../assets/images';
import InputComponent from '../../components/form/InputComponent';

const Login = () => {

  
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
      <div>
        <Link to="/">
          <img src={logo} alt="book-club-logo" className="h-20 mb-5" />
        </Link>
      </div>

      <div className="w-full sm:max-w-md mt-6 px-8 py-10 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
        <form className=''>
          <InputComponent name='Email'/>
          <InputComponent name='Password'/>
        </form>
      </div>
    </div>
  );
};

export default Login;
