import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import InputComponent from '../../components/form/InputComponent'

const UserRegistrationForm = () => {
  const {
    user,
    email,
    password,
    userRef,
    emailRef,
    passwordRef,
    confPasswordRef,
    handleUserState,
    handleEmailState,
    handlePasswordState,
    handleConfPasswordState,
    register,
  } = useContext(AuthContext)

  const onSubmit = (e: any) => {
    e.preventDefault()
    register({
      name: user,
      email,
      password,
    })
  }
  return (
    <form onSubmit={onSubmit}>
      <InputComponent
        htmlFor="Username"
        label="Username"
        type="text"
        inputId="Username"
        placeholder="Username"
        autoComplete="off"
        inputRef={userRef}
        onChangeState={handleUserState}
      />
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
      {/* <InputComponent
          htmlFor="ConfPassword"
          label="Confirmation Password"
          type="password"
          inputId="ConfPassword"
          inputRef={confPasswordRef}
          placeholder="Confirmation Password"
          isRequired={true}
          onChangeState={handleConfPasswordState}
        /> */}
      <button className="border px-5 py-2 bg-teal-600 text-white font-semibold">
        Register
      </button>
    </form>
  )
}

export default UserRegistrationForm
