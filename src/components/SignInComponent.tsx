import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { authController } from '../services/api/controllers/auth-controller';

const SignInComponent = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const send = async () => {
        try {
            const response = await authController.login({
                login,
                password
            });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('username', response.data.username);

                navigate('/');
            }
        } catch (err) {
            console.log(err);
        }
    } 

    return [
        <div className="absolute  sm:w-md lg:w-lg bg-white px-16 py-6 rounded-2xl m-auto shadow-card">
            <div className="grid grid-cols-1 grid-rows-4 gap-6 font-jura font-bold">
                <p className=" text-[32px] text-shadow-chirp text-shadow-lg/30">sign in</p>
                <input onChange={(e) => setLogin(e.target.value)} 
                type="text" className="bg-input py-5 pl-4 w-full rounded-2xl text-xs" placeholder="nickname" />
                <input onChange={(e) => setPassword(e.target.value)} 
                type="password" className="bg-input py-5 pl-4 w-full rounded-2xl text-xs" placeholder="password" />
                <button onClick={send} 
                className="bg-chirp-red text-white py-5 pl-4 w-full rounded-2xl text-base hover:scale-102 transition-transform ease-out cursor-pointer">sign in</button>


            </div>
        </div>
    ]
}

export default SignInComponent;