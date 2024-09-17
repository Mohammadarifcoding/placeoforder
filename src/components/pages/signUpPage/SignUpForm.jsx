import { useState } from "react"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="flex items-center justify-center flex-1 h-full p-6 bg-white md:w-1/2 md:p-10">
            <div className="w-full max-w-md p-10 space-y-4 rounded-lg shadow-2xl">
                <div className="space-y-3">
                    <h5 className="font-medium ">Sign in to</h5>
                    <h3 className="font-semibold">PLACE <span className="font-light">ORDER</span> </h3>
                    <p className="text-blue-gray-300">Don&apos;t have an account? <span className=" text-accent">Get Started</span> </p>
                </div>
                <form className="space-y-4">
                    <div className="space-y-4">
                        <Input type="text" label="User Name" className="w-full" />
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                label="Password"
                                className="w-full pr-10"
                            />
                            <button
                                type="button"
                                className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                    <div className="text-sm text-right ">
                        <Link to="#" className="border-b border-muted-foreground">Forgot password?</Link>
                    </div>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800">Login</Button>
                </form>

                <div className="flex items-center justify-between">
                    <div className="w-1/3 h-0.5 border" />
                    <p className="text-blue-gray-300 whitespace-nowrap">Or login with</p>
                    <div className="w-1/3 h-0.5 border" />
                </div>

                <div className="flex justify-evenly">
                    <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FcGoogle className=" size-4" /> <span className="hidden lg:block">Google</span></button>
                    <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FaFacebookF className="text-blue-700 size-4" /> <span className="hidden lg:block">Facebook</span></button>
                    <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FaLinkedinIn className="text-blue-700 size-4" /> <span className="hidden lg:block">Linkedin</span></button>
                </div>

            </div>
        </div>
    )
}

export default SignUpForm