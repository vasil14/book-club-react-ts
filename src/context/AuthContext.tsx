import { createContext, useRef, useState } from 'react'
import axios from '../api/axios'

interface AuthContextValue {
  user: string
  email: string
  password: string
  confPass: string
  userRef: React.RefObject<HTMLInputElement>
  emailRef: React.RefObject<HTMLInputElement>
  passwordRef: React.RefObject<HTMLInputElement>
  confPasswordRef: React.RefObject<HTMLInputElement>
  handleUserState: (value: string) => void
  handleEmailState: (value: string) => void
  handlePasswordState: (value: string) => void
  handleConfPasswordState: (value: string) => void
  register: any
  registerMessage: {}
}

const AuthContext = createContext<AuthContextValue>({
  user: '',
  email: '',
  password: '',
  confPass: '',
  userRef: {} as React.RefObject<HTMLInputElement>,
  emailRef: {} as React.RefObject<HTMLInputElement>,
  passwordRef: {} as React.RefObject<HTMLInputElement>,
  confPasswordRef: {} as React.RefObject<HTMLInputElement>,
  handleUserState: () => {},
  handleEmailState: () => {},
  handlePasswordState: () => {},
  handleConfPasswordState: () => {},
  register: () => {},
  registerMessage: {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPass, setConfPassword] = useState('')
  const [registerMessage, setRegisterMessage] = useState({})


  const userRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confPasswordRef = useRef<HTMLInputElement>(null)

  const handleUserState = (value: string) => {
    setUser(value)
  }

  const handleEmailState = (value: string) => {
    setEmail(value)
  }
  const handlePasswordState = (value: string) => {
    setPassword(value)
  }
  const handleConfPasswordState = (value: string) => {
    setConfPassword(value)
  }

  const register = async (payload: any) => {
    const result = await axios.post('/register', payload)
    setRegisterMessage(result.data.message)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        email,
        password,
        confPass,
        userRef,
        emailRef,
        passwordRef,
        confPasswordRef,
        handleUserState,
        handleEmailState,
        handlePasswordState,
        handleConfPasswordState,
        register,
        registerMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
