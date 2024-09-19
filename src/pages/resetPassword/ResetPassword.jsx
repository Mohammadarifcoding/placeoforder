import ChangePass from '@/components/pages/resetPassword/changePass/ChangePass';
import ResetComplete from '@/components/pages/resetPassword/resetComplete/ResetComplete';
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
            {/* <ChangePass setStep={setStep} /> */}
            <ResetComplete />
        </SignInLayout>
    )
}

export default ResetPassword