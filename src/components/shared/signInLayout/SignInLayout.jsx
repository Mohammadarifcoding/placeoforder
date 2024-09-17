import { DynamicSelect } from '../form/DynamicSelect'
import SalesReport from '@/assets/login/sidePanel.svg';

const SignInLayout = ({ children }) => {

    return (
        <div className="container relative flex flex-col justify-center h-screen md:flex-row">
            <div className="flex-1 hidden w-1/2 min-h-screen p-6 overflow-hidden md:block bg-gray-50 md:pt-10">
                <nav className="flex items-center justify-between w-full mb-8">
                    <div className="text-xl font-bold">PLACE OF ORDER</div>
                    <div className="items-center justify-between hidden w-2/4 gap-3 md:flex">
                        <a href="#" className="font-medium hover:text-muted-foreground">Products</a>
                        <a href="#" className="font-medium hover:text-muted-foreground">Features</a>
                        <a href="#" className="font-medium hover:text-muted-foreground">Pricing</a>
                        <a href="#" className="font-medium hover:text-muted-foreground">FAQ</a>
                        <DynamicSelect className="rounded-lg outline-none text-primary-foreground bg-accent max-w-16" placeholder="EN" options={['EN', 'BN']} />
                    </div>
                    {/* <Button className="hidden md:inline-flex bg-accent">En</Button> */}
                </nav>

                <div className="flex items-center justify-center w-full h-full">
                    <div>
                        <img className="" src={SalesReport} alt="" />
                        <p className="w-full text-center description">Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day.</p>
                    </div>

                </div>

            </div>

            {children}

            {/* <div className="flex items-center justify-center flex-1 h-full p-6 bg-white md:w-1/2 md:p-10">
              <div className="w-full max-w-md p-10 space-y-4 rounded-lg shadow-2xl">
                  <div className="space-y-3">
                      <h5 className="font-medium ">Sign in to</h5>
                      <h3 className="font-semibold">PLACE <span className="font-light">ORDER</span> </h3>
                      <p className="text-blue-gray-300">Don&apos;t have an account? <span className=" text-accent">Get Started</span> </p>
                  </div>
                  <form className="space-y-4">
                      <div className="space-y-4">
                          <Input type="text" label="User Name" className="w-full" />
                          <div className="relative">
                              <Input
                                  type={showPassword ? "text" : "password"}
                                  label="Password"
                                  className="w-full pr-10"
                              />
                              <button
                                  type="button"
                                  className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2"
                                  onClick={() => setShowPassword(!showPassword)}
                              >
                                  {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                              </button>
                          </div>
                      </div>
                      <div className="text-sm text-right ">
                          <Link to="#" className="border-b border-muted-foreground">Forgot password?</Link>
                      </div>
                      <Button className="w-full bg-gray-900 hover:bg-gray-800">Login</Button>
                  </form>

                  <div className="flex items-center justify-between">
                      <div className="w-1/3 h-0.5 border" />
                      <p className="text-lg text-blue-gray-300">Or login with</p>
                      <div className="w-1/3 h-0.5 border" />
                  </div>

                  <div className="flex justify-evenly">
                      <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FcGoogle className=" size-4" /> <span className="hidden lg:block">Google</span></button>
                      <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FaFacebookF className="text-blue-700 size-4" /> <span className="hidden lg:block">Facebook</span></button>
                      <button className="flex items-center gap-1 p-3 text-sm border rounded-full lg:rounded-xl"><FaLinkedinIn className="text-blue-700 size-4" /> <span className="hidden lg:block">Linkedin</span></button>
                  </div>

              </div>
          </div> */}
        </div>
    )
}

export default SignInLayout


// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Calendar, EyeIcon, EyeOffIcon, ShoppingCart } from "lucide-react"
// import { IoIosArrowDown } from "react-icons/io";
// import SalesReport from '@/assets/login/sidePanel.svg';
// import { HiMiniArrowTrendingUp } from "react-icons/hi2";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { Input, Select } from "@material-tailwind/react";
// import { DynamicSelect } from "@/components/shared/form/DynamicSelect";


// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Calendar, EyeIcon, EyeOffIcon, ShoppingCart } from "lucide-react"
// import { IoIosArrowDown } from "react-icons/io";
// import SalesReport from '@/assets/login/salesReport.png';
// import { HiMiniArrowTrendingUp } from "react-icons/hi2";

// export default function LoginPage() {
//     const [showPassword, setShowPassword] = useState(false)

//     return (
//         <div className="container relative flex flex-col md:flex-row">
//             <div className="flex-1 min-h-screen p-6 bg-white md:p-10">
//                 <nav className="flex items-center justify-between mb-8">
//                     <div className="text-xl font-bold">PLACE OF ORDER</div>
//                     <div className="hidden space-x-4 md:flex">
//                         <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
//                         <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
//                         <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
//                         <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
//                     </div>
//                     <Button className="hidden md:inline-flex">Sign Up</Button>
//                 </nav>
//                 <div className="relative hidden border md:block">
//                     <div className="absolute left-[12%] top-20 rounded-xl bg-white p-4 drop-shadow-2xl">
//                         {/* Overall sales head */}
//                         <div className="flex md:gap-5">
//                             <div>
//                                 <p className="">Overall sales</p>
//                                 <div className="flex gap-3">
//                                     <h4 className="mb-2">$56,945.98</h4>
//                                     <div className="bg-accent px-1.5 h-7 text-white flex items-center gap-1 rounded-full text-xs"><HiMiniArrowTrendingUp />  <span>23.5%</span></div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <p className="flex items-center gap-2 text-sm">Apr 25 - Apr 29 <Calendar className="text-muted-foreground size-5" /></p>
//                             </div>
//                         </div>
//                         {/* /head */}

//                         <div className="flex items-end text-muted-foreground">

//                             <div className="flex flex-col justify-around h-72" >
//                                 <p>50k </p>
//                                 <p>40k </p>
//                                 <p>30k </p>
//                             </div>
//                             <div className="flex justify-around w-full" >
//                                 <p>Apr 25 </p>
//                                 <p>Apr 26 </p>
//                                 <div className="relative">
//                                     <div className="absolute w-12 rounded-lg bg-tertiary h-44 bottom-10">
//                                         <div className="absolute bg-white shadow-lg left-3.5 z-10 p-2.5 rounded-md text-xs">
//                                             <ul>
//                                                 <li className="flex justify-between gap-6"><div className="flex items-center gap-1"><div className="size-1.5 rounded-full bg-accent" />Website</div> <span className="font-bold text-foreground">$45,567.00</span></li>
//                                                 <li className="flex justify-between gap-6 my-2.5"><div className="flex items-center gap-1"><div className="size-1.5 rounded-full bg-tertiary" />Google</div> <span className="font-bold text-foreground">$4,980.00</span></li>
//                                                 <li className="flex justify-between gap-6"><div className="flex items-center gap-1"><div className="size-1.5 rounded-full bg-transperent" />Others</div> <span className="font-bold text-foreground">$0.00</span></li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                     <div className="absolute w-12 rounded-lg bg-accent h-36 bottom-10" />
//                                     <p className="text-foreground">Apr 27 </p>
//                                 </div>
//                                 <p>Apr 28 </p>
//                                 <p>Apr 29 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Sales Report */}
//                     <div className="absolute p-4 bg-white rounded-lg left-[510px] top-80 drop-shadow-2xl min-w-[278px] max-w-72">
//                         <div className="flex justify-between ">
//                             <div className="text-lg font-bold text-gray-800">Sales report</div>
//                             <div className="flex items-center">Month <IoIosArrowDown /></div>
//                         </div>
//                         <img className=" drop-shadow" src={SalesReport} alt="" />
//                     </div>
//                     {/* /end */}

//                     <div className="absolute p-4 bg-white rounded-lg top-[505px] drop-shadow-2xl left-[240px] max-w-72">
//                         <div className="flex items-center gap-3 pb-4 mb-4 text-lg font-bold border-b-2 border-foreground text-slate-600"><ShoppingCart className=" text-accent size-5" /> Total Order</div>
//                         <h2 className="">1,256</h2>
//                         <div className="mt-2 text-xl text-gray-600"><span className=" text-accent">+1,0% </span> from last week</div>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex items-center justify-center flex-1 p-6 bg-gray-50 md:p-10">
//                 <div className="w-full max-w-md space-y-8">
//                     <div className="text-center">
//                         <h2 className="text-3xl font-bold text-gray-900">Sign in to</h2>
//                         <p className="mt-2 text-2xl font-semibold text-gray-900">PLACE ORDER</p>
//                     </div>
//                     <form className="mt-8 space-y-4">
//                         <div className="space-y-4">
//                             <Input type="text" placeholder="User Name" className="w-full" />
//                             <div className="relative">
//                                 <Input
//                                     type={showPassword ? "text" : "password"}
//                                     placeholder="Password"
//                                     className="w-full pr-10"
//                                 />
//                                 <button
//                                     type="button"
//                                     className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                 >
//                                     {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
//                                 </button>
//                             </div>
//                         </div>
//                         <Button className="w-full bg-gray-900 hover:bg-gray-800">Login</Button>
//                         <div className="text-sm text-center">
//                             <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }