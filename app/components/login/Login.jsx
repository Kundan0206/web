'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
  
    // Mock authentication function
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Simple form validation
      if (!email || !password) {
        setError('Both email and password are required.');
        return;
      }
  
      // Simple check for valid credentials
      if (email === 'admin@example.com' && password === 'admin123') {
        // On success, redirect to the dashboard
        router.push('/Dashboard');
      } else {
        // Show error if credentials are incorrect
        setError('Invalid credentials, please try again.');
      }
    };
  
    // Clear the error message when user types
    const handleInputChange = (setter) => (e) => {
      setter(e.target.value);
      setError(''); // Clear error message when typing
    };
  
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg mt-80 border-2 border-blue-500">
        <img
          className="mx-auto dark mt-4 mb-4 "
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={200}
          height={38}
        />
        <div className="px-6 py-8">
            <div className="font-bold text-xl mb-2 ml-20">
                Login Here
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" value={email} onChange={handleInputChange(setEmail)} placeholder="Enter Your Email"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="password">
                            Password
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" type="password" value={password} onChange={handleInputChange(setPassword)} placeholder="******************"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-Role">
                            Role
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-Role" type="text" placeholder="Designation"/>
                    </div>
                </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3 flex justify-center">
                            <button onClick={handleLogin} className=" shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded " type="button">
                                Sign In
                            </button>
                        </div>
                    </div>
            </form>
        </div>
    </div>
);
}