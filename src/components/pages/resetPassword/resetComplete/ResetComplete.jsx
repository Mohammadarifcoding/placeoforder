import { Button } from '@/components/ui/button'
import Roket from '@/assets/icons/roket.svg'
import { Link } from 'react-router-dom'

const ResetComplete = () => {
    return (
        <div className="flex items-center justify-center flex-1 h-full bg-white sm:p-6 lg:w-1/2 md:p-10">

            <div className="w-full max-w-md p-10"> {/* rounded-lg shadow-2xl */}
                <img className=" mx-auto" src={Roket} />

                <h3 className="font-semibold text-center my-10">Password reset successfully completed</h3>

                <Link to="/sign-in"><Button className="w-full">Back to sign in</Button></Link>

            </div>
        </div>
    )
}

export default ResetComplete