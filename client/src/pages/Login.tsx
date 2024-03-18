import { loginRequest, profileRequest } from "../api/auth";
import { useAuthstore } from "../store/auth";

function Login() {

  const setToken = useAuthstore( state => state.setToken)

  const setProfile = useAuthstore( state => state.setProfile)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();

    // aopcional usar states de React
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value

    console.log(email, password)

    // al loguearse se obtiene un "token" como respuesta
    const resLogin = await loginRequest(email, password)

    console.log(resLogin)

    // se guarda el "token" en el store
    setToken(resLogin.data.token)

    // se obtienen los "datos de usuario"
    const resProfile = await profileRequest()

    // se guardan los "datos de usuario" en el store
    setProfile(resProfile.data.profile)
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      
      <input 
        type="email"
        placeholder="ejample@gmail.com" />

      <input 
        type="password" 
        placeholder="********" />

      <button>Login</button>

    </form>
  );
}

export default Login;