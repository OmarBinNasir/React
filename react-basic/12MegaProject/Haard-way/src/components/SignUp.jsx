import React from 'react'
import authService from '../store/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { Input, Button, Logo } from "./index"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'



function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = React.useState()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData))
                    navigate("/")
            } 
        } catch (error) {
            setError(error)
        }
    }

  return (
    <div
    className = "flex items-center justify-center ">
        <div className=" mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 ">
        <div className='mb-2 flex justify-center '>
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>

            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any accout ? &nbsp;
                    <Link to="/signup"
                    className='font-medium text-primary transition-all duration-200 hover:underline' >
                        Sign In
                    </Link>
                </p>
                { error && <p className="text-red-600 mt-8 text-center">{ error }</p>}
                <form onSubmit = { handleSubmit( create ) }>
                    <div className = "space-y-5 ">
                    <Input 
                        label = 'Full Name:'
                        placecholder = "Enter your full name"
                        {...register("name", {
                            required:true
                        })}
                    />
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
                            {...register("password"),{
                                required:true,
                            }}

                        />
                    </div>
                    <button type = "submit" className="w-full" >Create Account</button>
                </form>
        </div>
    </div>
  )
}

export default SignUp