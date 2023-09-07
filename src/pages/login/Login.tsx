import { useContext, useEffect } from 'react'
import AuthContext from '../../context/AuthContext'
import InputComponent from '../../components/form/InputComponent'
import FormContainer from '../../containers/FormContainer'

const Login = () => {
  const { passwordRef, emailRef, handlePasswordState, handleEmailState } =
    useContext(AuthContext)

  return (
    <FormContainer>
      <form className="">
        <InputComponent
          htmlFor="Email"
          label="Email"
          type="email"
          inputId="Email"
          placeholder="Email"
          autoComplete="off"
          inputRef={emailRef}
          isRequired={true}
          onChangeState={handleEmailState}
        />
        <InputComponent
          htmlFor="Password"
          label="Password"
          type="password"
          inputId="Password"
          placeholder="Password"
          inputRef={passwordRef}
          isRequired={true}
          onChangeState={handlePasswordState}
        />
        <button className="border px-5 py-2 bg-teal-600 text-white font-semibold">
          Register
        </button>
      </form>
    </FormContainer>
  )
}

export default Login
