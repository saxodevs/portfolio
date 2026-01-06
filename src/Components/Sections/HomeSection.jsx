import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs"
import { MyTyper } from "../Typer"

export const HomeSection = () => {
    return (

        <section id="home" className="min-h-screen scroll-mt-20  relative">
            <div className="absolute bg-background/70 h-full w-full hero">
                <div className="grid h-screen place-items-center">

                    <div className=" -mt-50 md:ml-50 md:mt-20">
                        <h1 className="font-bold text-4xl">Hi, I'm Peter Saho</h1>
                        <div className="flex gap-1 relative items-center justify-center mt-4">
                            <p className="font-medium">I'm a </p>
                            <MyTyper />

                        </div>
                        <div className="flex items-center gap-4 py-5 z-50">
                            <a href="https://www.facebook.com/saxodevs/"
                                className="h-12.5 w-12.5 flex items-center justify-center rounded-full p-2
                                     bg-card hover:bg-primary transition duration-300 hover:-translate-y-1.25 cursor-pointer ">
                                <BsFacebook size={24} />
                            </a>
                            <a href="https://x.com/saho_tech/"
                                className="h-12.5 w-12.5 flex items-center justify-center rounded-full p-2
                                     bg-card hover:bg-primary transition duration-300 hover:-translate-y-1.25 cursor-pointer">
                                <BsTwitterX size={24} />
                            </a>
                            <a href="https://www.instagram.com/saxodevs/"
                                className="h-12.5 w-12.5 flex items-center justify-center rounded-full p-2
                                      bg-card hover:bg-primary transition duration-300 hover:-translate-y-1.25 cursor-pointer">
                                <BsInstagram size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/saxodevs"
                                className="h-12.5 w-12.5 flex items-center justify-center rounded-full p-2
                                      bg-card hover:bg-primary transition duration-300 hover:-translate-y-1.25 cursor-pointer">
                                <BsLinkedin size={24} />
                            </a>
                        </div>
                    </div>

                </div>

            </div>


        </section>

    )
}

