import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch, useSelector} from "react-redux"
import authService from "../appwrite/Auth"
import {useForm} from "react-hook-form"

function Login() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                    if(userData){
                        dispatch(authLogin({userData}));
                        console.log("1 :  ",userData)   
                        const authStatus = useSelector(state => state.auth.status);
                        console.log("2 : ",authStatus)
                    }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
<<<<<<< HEAD
                </p>
                { error && <p className="text-red-600 mt-8 text-center">{ error }</p>}

                <form onSubmit = { handleSubmit( login )} className='mt-8' >
                    <div className='space-y-5'>
                        <Input label="Email:"
                            placeholder = "enter your email"
                            type = "email"
                            {...register("email", {
                                required:true,
                                validate:{
                                    matchPattern : (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                                    "email address must be valid email address",       // regular expression regEx checks if email is in correct format
                                }
                            }) }
                        />
                        <Input 
                            label = "Password: "
                            type = "password"
                            placeHolder = "Enter your password"
                            { ...register("password",{
                                required:true,
                            })}

                        />
                        <Button children = "Sign In"
                            type = "submit"
                            className='w-full'
                        />
                    </div>
                </form>

=======
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full bg-red-700"
                >Sign in</Button>
            </div>
        </form>
>>>>>>> 3e59670a7c5d05b72465e5b3dc94a9b651565014
        </div>
    </div>
  )
}

export default Login