import React from "react"
import Link from "next/link"

const Navbar = () =>{
    return(
        <div>
            <div className="w-[80vw]  hidden cursor-pointer fixed mt-[52vh] ml-[10vw] md:flex justify-around items-center border-2 border-b-gray-400 bg-black text-gray-200 rounded-xl p-3 z-30 ">
                <div>
                    <Link href={'/'}>
                    Home
                    </Link>
                </div>
                <div>
                    <Link href={'/courses'}>
                   Courses
                   </Link>
                </div>
                <div>
<Link href={"/about-us"}>
About
</Link>
                
                </div>
                <div>
                    Result
                </div>
                <div>
                    Verification
                </div>
                <div>
                <Link href={'/register-yourself'}>
                  Admission</Link>
                </div>
                <div>
                    Contact
                </div>
                <div>
                    Login 
                </div>
            </div>
        
        </div>
    )
}

export default Navbar
