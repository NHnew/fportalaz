import React, { useState } from 'react';
import Logo from '../assets/fportal.webp';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";




const Login = () => {

    const [action, setAction] = useState('Qeydiyyatdan keç!');

    const actionChnage = () => action === 'Qeydiyyatdan keç!' ? setAction('Giriş et!') : setAction('Qeydiyyatdan keç!');

    return (
        <div className='sign flex w-full min-h-screen'>
            <div className='register flex flex justify-center items-center w-1/2 text-white bg-black px-10 py-5'>
                <div>
                    <img className='logo w-48' src={Logo} alt="" />
                    <h1 className='signtitle text-4xl mt-12 mb-10'>Futbol dünyasına <span className='samecolor text-fuchsia-600'>keçid et!</span></h1>
                    <form className='max-w-[410px]' action="Get">
                        {
                            action === 'Qeydiyyatdan keç!' ? <div>
                                <div className='mb-4'>
                                    <input className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="email" placeholder='istifadəçi adı və ya email' required />
                                </div>
                                <div>
                                    <input className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="password" placeholder='şifrə' required />
                                </div>
                            </div> : <div>
                                <div className='mb-4'>
                                    <input className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="text" placeholder='ad soyad' required />
                                </div>
                                <div className='mb-4'>
                                    <input className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="text" placeholder='istifadəçi adı' required />
                                </div>
                                <div className='mb-4'>
                                    <input className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="email" placeholder='email' required />
                                </div>
                                <div>
                                    <input className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="password" placeholder='şifrə' required />
                                </div>
                            </div>
                        }

                        <div className='mt-4 flex items-center justify-between'>
                            {
                                action === 'Qeydiyyatdan keç!' ? <button className='loginbtn bg-white text-black px-5 py-2 font-bold rounded-3xl'>giriş et</button> : <button className='loginbtn bg-white text-black px-5 py-2 font-bold rounded-3xl'>qeydiyyat</button>
                            }
                            {
                                action === 'Qeydiyyatdan keç!' ? <span className='samecolor parolforget text-fuchsia-600 text-sm cursor-pointer'>şifrəni unutdun?</span> : null
                            }
                        </div>
                    </form>
                    <div className='signfooter max-w-[410px] mt-16 border-t-2 border-gray-300'>
                        <div className='flex justify-center'>
                            <div className='otherway bg-black -mt-3 px-3'>Digər üsullar</div>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div className='googlebtn w-1/2 flex items-center justify-center bg-zinc-900 mr-2 px-7 py-2 rounded-3xl '>
                                <FcGoogle />
                                {
                                    action === 'Qeydiyyatdan keç!' ? <button className='ml-2 text-slate-400'>Google ilə giriş</button> : <button className='ml-2 text-slate-400'>Google ilə qeydiyyat</button>
                                }
                            </div>
                            <div className='applebtn w-1/2 ml-2 flex items-center justify-center bg-zinc-900 px-7 py-2 rounded-3xl'>
                                <FaApple />
                                {
                                    action === 'Qeydiyyatdan keç!' ? <button className='ml-2 text-slate-400'>Apple ilə giriş</button> : <button className='ml-2 text-slate-400'>Apple ilə qeydiyyat</button>
                                }
                            </div>
                        </div>
                        <div>
                            <p className='endtext text-sm mt-3'>
                                {
                                    action === 'Qeydiyyatdan keç!' ? <span className='mr-1'>Hesabın yoxdur?</span> : <span className='mr-1'>Hesabın var?</span>
                                }
                                <span onClick={actionChnage} className='samecolor text-fuchsia-600 cursor-pointer'>{action}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgbox w-1/2'></div>
        </div>

    );
};

export default Login;


