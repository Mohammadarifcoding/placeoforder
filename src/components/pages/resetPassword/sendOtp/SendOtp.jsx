import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { handleFormData } from "@/lib/handleFormData";
import { IoIosArrowBack } from "react-icons/io";
import Lock from '@/assets/icons/lock.svg'
import DynamicInput from "@/components/shared/form/DynamicInput";

const SendOtp = ({ setStep }) => {
    const formRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = handleFormData(formRef, e);
        console.log(formData);
        setStep((prev) => prev + 1)
    }

    return (
        <div className="flex items-center justify-center flex-1 h-full bg-white sm:p-6 lg:w-1/2 md:p-10">

            <div className="w-full max-w-md p-10 space-y-4 rounded-lg shadow-2xl">
                <img className=" mx-auto" src={Lock} />
                <div className="space-y-3 text-center">
                    <h3 className="font-semibold">Forgot your password?</h3>
                    <p className="text-blue-gray-300">Please enter the email address associated with your account, and we&apos;ll email you a link to reset your password.</p>
                </div>
                <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="space-y-4">
                        <DynamicInput type="email" placeholder="Email" name="email" />
                    </div>

                    <Button type="submit" className="w-full">Reset Password</Button>
                </form>


                <Link to='/sign-in' className="text-sm text-center flex justify-center items-center font-medium"><IoIosArrowBack /> Return to sign in</Link>
            </div>
        </div>
    )
}

export default SendOtp