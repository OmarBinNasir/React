import React, {useState} from 'react'
import authService from '../appwrite/Auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async(data) => {
        setError("")
        try {
            
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) 
                    dispatch(login(userData));
                console.log(userData)
                console.log("hitted signup")
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
<<<<<<< HEAD
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
                            {...register("password",{
                                required:true,
                            })}
=======
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
>>>>>>> 3e59670a7c5d05b72465e5b3dc94a9b651565014

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
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
                            required: true,})}
                        />
                        <Button type="submit" className="w-full bg-red-700">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup