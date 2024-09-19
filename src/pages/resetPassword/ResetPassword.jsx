import ForgotPasswordForm from '@/components/pages/resetPassword/forgotPassword/ForgotPasswordForm'
import SignInLayout from '@/components/shared/signInLayout/SignInLayout'

const ResetPassword = () => {
    return (
        <SignInLayout>
            <ForgotPasswordForm />
        </SignInLayout>
    )
}

export default ResetPassword