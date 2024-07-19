import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios";
import * as SecureStore from "expo-secure-store";

interface AuthProps{
  authState? : { token: string | null, authenticated: boolean | null };
  onRegister? : (email: string, password: string) => Promise<any>;
  onLogin? : (email: string, password: string) => Promise<any>;
  onLogout? : () => Promise<any>;
}

const TOKEN_KEY = "token";
export const API_URL = "https://api.developbetterapps.com/api";
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  })

  useEffect(() => {
    const loadToken = async () =>{
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      cnsole.log(`stored: `,token)

      if(token){
        axios.defaults.header.common["Authorization"] = `Bearer ${result.data.token}`
      }
      setAuthState({
        token: token,
        authenticated: true,
      })
    }

    loadToken();
  },[])

  const register = async (email: string, password: string) => {
  try {
    return await axios.post(`${API_URL}/users`, {
      email,
      password,
    })
  } catch (error) {
    return { error: true, message: (error as any).response.data.msg }
  }
  }

  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/auth`, {
        email,
        password,
      })

      console.log(`~ file: AuthContext.tsx: 47 ~ login ~ result: ${result}`)

      setAuthState({
      token: result.data.token,
        auhtenticated: true,
      })

      axios.defaults.header.common["Authorization"] = `Bearer ${result.data.token}`

      await SecureStore.setItemAsync(TOKEN_KEY, result.data.token)

      return result
      
    } catch (error) {
      return { error: true, message: (error as any).response.data.msg }
    }
    }

  const logout = async () => {
    //Delete token from storage
    await SecureStore.deleteItemAsync(TOKEN_KEY)

    //Update HTTP Headers
    axios.defaults.header.common["Authorization"] = ""

    //Reset Auth State
    setAuthState({
      token: null,
      authenticated: false,
    })
  }
  
  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState
  }
  return <AuthContext.Provider value={value}>{children}</  AuthContext.Provider>
}