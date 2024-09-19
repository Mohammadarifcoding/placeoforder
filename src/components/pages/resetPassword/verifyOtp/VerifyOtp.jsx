import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { handleFormData } from "@/lib/handleFormData";
import { IoIosArrowBack } from "react-icons/io";
import Lock from '@/assets/icons/message.svg'
import { OtpField } from "@/components/shared/form/OtpField";

const VerifyOtp = ({ setStep }) => {
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
                    <h3 className="font-semibold">Please check your email</h3>
                    <p className="text-blue-gray-300">We&apos;ve emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email.</p>
                </div>
                <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">

                    {/* <OtpField /> */}
                    <OtpField
                        name="otp"
                        className="flex justify-between"
                        onChange={(otp) => console.log("OTP entered:", otp)} // Optional callback to handle OTP change
                    />

                    <Button type="submit" className="w-full">Verify</Button>
                </form>

                <p className="text-sm text-center">Don&apos;t have a code? <span className="text-accent">Resend code</span></p>

                <Link to='/sign-in' className="text-sm text-center flex justify-center items-center font-medium"><IoIosArrowBack /> Return to sign in</Link>
            </div>
        </div>
    )
}

export default VerifyOtp