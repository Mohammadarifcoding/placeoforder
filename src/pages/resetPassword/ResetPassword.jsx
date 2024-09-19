import ChangePass from '@/components/pages/resetPassword/changePass/ChangePass';
import SendOtp from '@/components/pages/resetPassword/sendOtp/SendOtp'
import VerifyOtp from '@/components/pages/resetPassword/verifyOtp/VerifyOtp';
import SignInLayout from '@/components/shared/signInLayout/SignInLayout'
import { useState } from 'react';

const ResetPassword = () => {
    const [step, setStep] = useState(0);

    return (
        <SignInLayout>
            {/* <SendOtp setStep={setStep} /> */}
            {/* <VerifyOtp setStep={setStep} /> */}
            <ChangePass setStep={setStep} />
        </SignInLayout>
    )
}

export default ResetPassword