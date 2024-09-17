
import SignInForm from "@/components/pages/signInPage/SignInForm";
import SignInLayout from "@/components/shared/signInLayout/SignInLayout";

export default function SignInPage() {

    return (
        <SignInLayout>
            <SignInForm />
        </SignInLayout>
        // <div className="container relative flex flex-col justify-center h-screen md:flex-row">
        //     <div className="flex-1 hidden w-1/2 min-h-screen p-6 overflow-hidden md:block bg-gray-50 md:pt-10">
        //         <nav className="flex items-center justify-between w-full mb-8">
        //             <div className="text-xl font-bold">PLACE OF ORDER</div>
        //             <div className="items-center justify-between hidden w-2/4 gap-3 md:flex">
        //                 <a href="#" className="font-medium hover:text-muted-foreground">Products</a>
        //                 <a href="#" className="font-medium hover:text-muted-foreground">Features</a>
        //                 <a href="#" className="font-medium hover:text-muted-foreground">Pricing</a>
        //                 <a href="#" className="font-medium hover:text-muted-foreground">FAQ</a>
        //                 <DynamicSelect className="rounded-lg outline-none text-primary-foreground bg-accent max-w-16" placeholder="EN" options={['EN', 'BN']} />
        //             </div>
        //             {/* <Button className="hidden md:inline-flex bg-accent">En</Button> */}
        //         </nav>

        //         <div className="flex items-center justify-center w-full h-full">
        //             <div>
        //                 <img className="" src={SalesReport} alt="" />
        //                 <p className="w-full text-center description">Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day.</p>
        //             </div>

        //         </div>

        //     </div>

        //     <div className="flex items-center justify-center flex-1 h-full p-6 bg-white md:w-1/2 md:p-10">
        //         <div className="w-full max-w-md p-10 space-y-4 rounded-lg shadow-2xl">
        //             <div className="space-y-3">
        //                 <h5 className="font-medium ">Sign in to</h5>
        //                 <h3 className="font-semibold">PLACE <span className="font-light">ORDER</span> </h3>
        //                 <p className="text-blue-gray-300">Don&apos;t have an account? <span className=" text-accent">Get Started</span> </p>
        //             </div>
        //             <form className="space-y-4">
        //                 <div className="space-y-4">
        //                     <Input type="text" label="User Name" className="w-full" />
        //                     <div className="relative">
        //                         <Input
        //                             type={showPassword ? "text" : "password"}
        //                             label="Password"
        //                             className="w-full pr-10"
        //                         />
        //                         <button
        //                             type="button"
        //                             className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2"
        //                             onClick={() => setShowPassword(!showPassword)}
        //                         >
        //                             {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
        //                         </button>
        //                     </div>
        //                 </div>
        //                 <div className="text-sm text-right ">
        //                     <Link to="#" className="border-b border-muted-foreground">Forgot password?</Link>
        //                 </div>
        //                 <Button className="w-full bg-gray-900 hover:bg-gray-800">Login</Button>
        //             </form>

        //             <div className="flex items-center justify-between">
        //                 <div className="w-1/3 h-0.5 border" />
        //                 <p className="text-lg text-blue-gray-300">Or login with</p>
        //                 <div className="w-1/3 h-0.5 border" />
        //             </div>

        //             <div className="flex justify-evenly">
        //                 <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FcGoogle className=" size-4" /> <span className="hidden lg:block">Google</span></button>
        //                 <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FaFacebookF className="text-blue-700 size-4" /> <span className="hidden lg:block">Facebook</span></button>
        //                 <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FaLinkedinIn className="text-blue-700 size-4" /> <span className="hidden lg:block">Linkedin</span></button>
        //             </div>

        //         </div>
        //     </div>
        // </div>
    )
}