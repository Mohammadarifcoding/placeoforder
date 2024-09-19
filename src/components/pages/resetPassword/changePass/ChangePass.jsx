import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { handleFormData } from "@/lib/handleFormData";
import { IoIosArrowBack } from "react-icons/io";
import Lock from '@/assets/icons/roket.svg'
import DynamicInput from "@/components/shared/form/DynamicInput";

const ChangePass = ({ setStep }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const formRef = useRef();


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Handler for the confirm password input
    const handleConfirmPasswordChange = (e) => {
        const confirmValue = e.target.value;
        setConfirmPassword(confirmValue);

        // Check if the confirm password matches up to the length of confirmValue
        if (password.startsWith(confirmValue)) {
            setError('');  // No error if confirmPassword is following the pattern
        } else {
            setError('Passwords do not match');
        }
    };

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
                    <h3 className="font-semibold">Update your password?</h3>
                </div>
                <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">


                    <DynamicInput value={password}
                        onChange={handlePasswordChange} type="password" placeholder="Password" name="password" note="Use a strong password" error={''} />
                    <DynamicInput value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" placeholder="Confirm Password" name="confirmPassword" error={error} />

                    <Button type="submit" className="w-full">Reset Password</Button>
                </form>


                <Link to='/sign-in' className="text-sm text-center flex justify-center items-center font-medium"><IoIosArrowBack /> Return to sign in</Link>
            </div>
        </div>
    )
}

export default ChangePass