import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Checkbox, Typography } from "@material-tailwind/react";
import { handleFormData } from "@/lib/handleFormData";
import DynamicInput from "@/components/shared/form/DynamicInput";

const SignUpForm = () => {
    const formRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = handleFormData(formRef, e);
        console.log(formData);

    }

    return (
        <div className="flex items-center justify-center flex-1 h-full bg-white sm:p-6 lg:w-1/2 md:p-10">
            <div className="w-full max-w-lg p-5 space-y-4 rounded-lg shadow-2xl sm:p-10">
                <div className="space-y-3">
                    <h3 className="font-medium">Create your ID</h3>
                </div>
                <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-x-4 xl:grid-cols-2">
                        <DynamicInput type="text" placeholder="First Name" name="firstName" />
                        <DynamicInput type="text" placeholder="Last Name" name="lastName" />
                        <DynamicInput type="text" placeholder="Business Name" name="businessName" />
                        <DynamicInput type="number" placeholder="Mobile Number" name="phone" />
                        <DynamicInput type="email" placeholder="Email" name="email" />
                        <DynamicInput type="password" placeholder="Password" name="password" />

                    </div>

                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="items-center font-normal"
                            >
                                By proceeding, you agree to the
                                <Link
                                    to="#"
                                    className="font-medium transition-colors text-accent hover:text-primary"
                                >
                                    &nbsp;Terms and Conditions
                                </Link>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />

                    <Button type='submit' className="block px-20 bg-gray-900 hover:bg-gray-800">Sign Up</Button>

                </form>

                <div className="flex items-center justify-between">
                    <div className="w-1/3 h-0.5 border" />
                    <p className="text-blue-gray-300 whitespace-nowrap">Or Sign Up with</p>
                    <div className="w-1/3 h-0.5 border" />
                </div>

                <div className="flex justify-evenly">
                    <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FcGoogle className=" size-4" /> <span className="hidden lg:block">Google</span></button>
                    <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FaFacebookF className="text-blue-700 size-4" /> <span className="hidden lg:block">Facebook</span></button>
                    <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FaLinkedinIn className="text-blue-700 size-4" /> <span className="hidden lg:block">Linkedin</span></button>
                </div>
                <p className="text-sm text-center">Already have an account? <Link to="/sign-in" className="text-accent">Sign In</Link></p>
            </div>
        </div>
    )
}

export default SignUpForm