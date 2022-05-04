import Image from "next/image";
import { useState } from "react";
import HeaderButton from "./headerButton";
import LoginModal from "./LoginModal";

export default function Header() {
    return (
        <>
            <div className="w-full max-w-[120rem] mx-auto">
                <div className="flex p-8 gap-6 items-center">
                    <div className="font-bold text-xl mr-12 w-full md:max-w-[10vw]">
                        Houses
                    </div>
                    <div className="flex justify-center w-[80vw]">
                        <div className="md:flex justify-between w-full max-w-[60rem] hidden">
                            <HeaderButton route='/search' name='Search' />
                            <HeaderButton route='/about' name='About' />
                            <HeaderButton route='/help' name='Help' />
                            <HeaderButton route='/rea' name='Real Estate Agents' />
                            <HeaderButton route='/blog' name='Blog' />
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <Image src='/hamburger.svg' width={150} height={150} />
                    </div>

                    <div className="flex justify-self-end">
                        <LoginModal />
                    </div>
                </div>
            </div>

        </>
    )
}