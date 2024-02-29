import { useState } from "react"
import { useCookies } from 'react-cookie'
import Nav from "../components/Nav";
import meal from "../Services/meal";

const Auth = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies()
  const [isLogged, setIsLogged] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  console.log(cookies);

  const viewLogin = (status) => {
    setError(null)
    setIsLogged(status)
  };
  const newObject = {
    email,
    password,
    username,
  }
  console.log(newObject);
  const handleSubmit = (e, endpoint) => {
    e.preventDefault()
    if (!isLogged && password !== confirmpassword) {
      setError('Make sure passwords Match')
      return
    }
    meal.auth(endpoint, newObject)
    .then(res => {
        setCookie('Email', res.email);
        setCookie('AuthToken', res.token);
        window.location.reload();
      })
      .catch(err => {
      console.error("Error:", err.response.data.error);
      setError(err.response.data.error);
    });
  }
  return (
    <div className="w-full overflow-hidden h-[100vh]">
        <Nav/>
        <div className="flex flex-col  gap-6 items-center">
              <div>
                  <h1 className="text-lime-600 mt-5">{isLogged?"Login": "Signup"}</h1>
              </div>
              <div className="border border-neutral-950 shadow-custom mx-4">
                <form action="" className="space-y-6 p-6 md:w-[548px] w-3/4" style={{ height: isLogged ? "175px" : "" }}>
            {!isLogged && (
              <div className="space-y-6">
                  <input type="text" 
                  className="border border-neutral-900 focus:outline-0 px-2 text-slate-950"
                  placeholder="Firstname"
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                />
                <input type="text"
                  className="border border-neutral-900 focus:outline-0 px-2"
                  placeholder="Lastname"
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                /> <br />
                <input type="text" className="border border-neutral-900 focus:outline-0 rounded w-full px-2" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/> <br />

              </div>
            )}
            <input type="email"
                  className="border border-neutral-900 focus:outline-0 rounded w-full px-2"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} /> <br />
            <input type="password" className="border border-neutral-900 focus:outline-0 rounded w-full px-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/> <br />
            <input type="password" className="border border-neutral-900 focus:outline-0 rounded w-full px-2" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword}/> <br />
                  <input type="submit" className="opacity-0"onClick={(e) => handleSubmit(e, isLogged ? "login" : "signup")}/>
                  {error && <p className="text-red-500">{error}</p>}
                </form>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => viewLogin(false)} className="bg-[#84c318] px-5 py-2 mt-5 rounded text-black button-style transition-color">Signup</button> <br />
                <button onClick={() => viewLogin(true)} className="bg-[#84c318] px-6 py-2 mt-5 rounded text-black button-style transition-colors">Login</button>
              </div>
        </div>
    </div>
  )
}

export default Auth