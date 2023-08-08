import { useState } from "react";
import { Link } from "react-router-dom";
export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(event){
    event.preventDefault();
    const response = await fetch('http://localhost:4000/register',{
        method:'POST',
        body: JSON.stringify({username,password}),
        headers:{'Content-Type':'application/json'},
    });
    if(response.status===200){
        alert('Registration Successful');
    }else{
        alert('Registration Failed');
    }
  }
  return (
    <section class="bg-gray-50 rounded-2xl ">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <p class="flex items-center mb-6 text-4xl font-semibold text-gray-900  ">
          Sign Up
        </p>
        <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold justify-center flex leading-tight tracking-tight text-gray-900 md:text-2xl  ">
              Create New Account 
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={register}>
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Username
                </label>
                <input
                  type="username"
                  name="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter Username"
                  value={username}
                  required=""
                  onChange={e=>setUsername(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter Password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                  onChange={e=>setPassword(e.target.value)}
                />
              </div>

              <button
                class="w-full bg-black hover:bg-primary-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign Up
              </button>
              <p class="text-sm font-light text-gray-500 ">
                Already have an account{" "}
                <Link
                  to="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
}
