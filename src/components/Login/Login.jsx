import React from 'react';
import Logo from '../assets/BIGfavicon.png';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";




const Login = () => {
    return (
        <div className='sign flex w-full min-h-screen'>
            <div className='register w-1/2 text-white bg-black px-10 py-5'>
                <img className='logo w-28' src={Logo} alt="" />
                <h1 className='signtitle text-4xl mt-12 mb-10'>Futbol dünyasına <span className='text-fuchsia-600'>keçid et!</span></h1>
                <form className='max-w-[410px]' action="Get">
                    <div className='mb-5'>
                        <input className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="email" placeholder='username or email' required />
                    </div>
                    <div>
                        <input className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="password" placeholder='password' required />
                    </div>
                    <div className='mt-5 flex items-center justify-between'>
                        <button className='loginbtn bg-white text-black px-5 py-2 font-bold rounded-3xl'>giriş et</button>
                        <span className='parolforget text-fuchsia-600 text-sm cursor-pointer'>şifrəni unutdun?</span>
                    </div>
                </form>
                <div className='signfooter max-w-[410px] mt-16 border-t-2 border-gray-300'>
                    <div className='flex justify-center'>
                        <div className='otherway bg-black -mt-3 px-3'>Digər üsullar</div>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <div className='googlebtn flex items-center justify-center bg-zinc-900 px-7 py-1 rounded-3xl '>
                            <FcGoogle />
                            <button className='ml-2 text-slate-400'>Google ilə giriş</button>
                        </div>
                        <div className='applebtn flex items-center justify-center bg-zinc-900 px-7 py-1 rounded-3xl'>
                            <FaApple />
                            <button className='ml-2 text-slate-400'>Apple ilə giriş</button>
                        </div>
                    </div>
                    <div>
                        <p className='endtext text-sm mt-4'>Hesabınız yoxdur? <span className='text-fuchsia-600 cursor-pointer'>Qeydiyyatdan keç!</span> </p>
                    </div>
                </div>
            </div>
            <div className='imgbox w-1/2'></div>
        </div>

    );
};

export default Login;