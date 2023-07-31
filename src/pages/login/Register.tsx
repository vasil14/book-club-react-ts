import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../assets/images'
import InputComponent from '../../components/form/InputComponent'

const Register = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef('');
  const confPasswordRef = useRef();

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
      <Link to="/">
        <img src={logo} alt="book-club-logo" className="h-20 mb-5" />
      </Link>
      <div className="w-full sm:max-w-md mt-6 px-8 py-10 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
        <form className="">
          <InputComponent
            htmlFor="Username"
            label="Username"
            type="text"
            id="Username"
            placeholder="Username"
            autoComplete="off"
            ref={usernameRef}
            state={setUser}
          />
           <InputComponent
            htmlFor="Email"
            label="Email"
            type="email"
            id="Email"
            placeholder="Email"
            autoComplete="off"
            required={true}
            state={setEmail}
          />
         {/* <InputComponent
            htmlFor="Password"
            label="Password"
            type="password"
            id="Password"
            placeholder="Password"
            required={true}
          />
          <InputComponent
            htmlFor="ConfPassword"
            label="Confirmation Password"
            type="password"
            id="ConfPassword"
            placeholder="Confirmation Password"
            required={true}
          /> */}
        </form>
      </div>
    </div>
  )
}

export default Register
