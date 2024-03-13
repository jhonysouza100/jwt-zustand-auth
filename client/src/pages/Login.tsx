import { loginRequest } from "../api/auth";

function Login() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();

    // aopcional usar states de React
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value

    console.log(email, password)

    const resLogin = await loginRequest(email, password)

    console.log(resLogin)
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      
      <input 
        type="email"
        name="" 
        id=""
        placeholder="ejample@gmail.com" />

      <input 
        type="password" 
        name="" 
        id=""
        placeholder="********" />

      <button>Login</button>

    </form>
  );
}

export default Login;