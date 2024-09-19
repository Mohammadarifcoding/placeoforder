import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { handleFormData } from "@/lib/handleFormData";
import DynamicInput from "@/components/shared/form/DynamicInput";

const SignInForm = () => {
    const formRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = handleFormData(formRef, e);
        console.log(formData);

    }

    return (
        <div className="flex items-center justify-center flex-1 h-full bg-white sm:p-6 lg:w-1/2 md:p-10">
            <div className="w-full max-w-md p-10 space-y-4 rounded-lg shadow-2xl">
                <div className="space-y-3">
                    <h5 className="font-medium ">Sign in to</h5>
                    <h3 className="font-semibold">PLACE <span className="font-light">ORDER</span> </h3>
                    <p className="text-blue-gray-300">Don&apos;t have an account? <span className=" text-accent">Get Started</span> </p>
                </div>
                <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">

                    <div className="space-y-4">
                        {/* <DynamicInput type="text" placeholder="User Name" name="name" /> */}
                        <DynamicInput type="email" placeholder="Email" name="email" />
                        <DynamicInput type="password" placeholder="Password" name="password" />
                    </div>

                    <div className="text-sm text-right ">
                        <Link to="/reset-password" className="border-b border-muted-foreground">Forgot password?</Link>
                    </div>
                    <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800">Sign In</Button>
                </form>

                <div className="flex items-center justify-between">
                    <div className="w-1/3 h-0.5 border" />
                    <p className="text-blue-gray-300 whitespace-nowrap">Or Sign In with</p>
                    <div className="w-1/3 h-0.5 border" />
                </div>

                <div className="flex justify-evenly">
                    <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FcGoogle className=" size-4" /> <span className="hidden lg:block">Google</span></button>
                    <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FaFacebookF className="text-blue-700 size-4" /> <span className="hidden lg:block">Facebook</span></button>
                    <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FaLinkedinIn className="text-blue-700 size-4" /> <span className="hidden lg:block">Linkedin</span></button>
                </div>
                <p className="text-sm text-center">Don&apos;t have an account? <Link to="/sign-up" className="text-accent">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default SignInForm