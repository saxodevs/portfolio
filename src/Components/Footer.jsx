import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs"


export const Footer = () => {
    return (
        <div>
            <div className=" px-4 md:px-[7%]">
                <div className="flex flex-col md:flex-row items-start gap-10">
                    <div className="w-[40%]">
                        <a href="#home" className="font-black text-3xl my-10" >
                            MyPortfolio
                        </a>
                        <p className="my-5 text-white/70 text-[15px]"> Creating stunning digital experiences that captivate and inspire. Let's build something amazing together.</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-4 py-5">
                                <a href="https://www.facebook.com/saxodevs/"
                                    className="h-12.5 w-12.5 flex items-center justify-center rounded-full p-2
                                     bg-card hover:bg-primary transition duration-300 hover:-translate-y-1.25">
                                    <BsFacebook size={24} />
                                </a>
                                <a href="https://x.com/saho_tech/"
                                    className="h-12.5 w-12.5 flex items-center justify-center rounded-full p-2
                                     bg-card hover:bg-primary transition duration-300 hover:-translate-y-1.25">
                                    <BsTwitterX size={24} />
                                </a>
                                <a href="https://www.instagram.com/saxodevs/"
                                    className="h-12.5 w-12.5 flex items-center justify-center rounded-full p-2
                                      bg-card hover:bg-primary transition duration-300 hover:-translate-y-1.25">
                                    <BsInstagram size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/saxodevs"
                                    className="h-12.5 w-12.5 flex items-center justify-center rounded-full p-2
                                      bg-card hover:bg-primary transition duration-300 hover:-translate-y-1.25">
                                    <BsLinkedin size={24} />
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4 className="font-semibold text-[16px] my-4">Useful Links</h4>
                        <ul>
                            <li className="h-8"><a href="#home" className="text-white/70 hover:text-primary text-[14px] h-2">Home</a></li>
                            <li className="h-8"><a href="#about" className="text-white/70 hover:text-primary text-[14px] h-2">About us</a></li>
                            <li className="h-8"><a href="#services" className="text-white/70 hover:text-primary text-[14px] h-2">Services</a></li>
                            <li className="h-8"><a href="#resume" className="text-white/70 hover:text-primary text-[14px] h-2">Resume</a></li>
                            <li className="h-8"><a href="#portfolio" className="text-white/70 hover:text-primary text-[14px] h-2">Portfolio</a></li>
                            <li className="h-8"><a href="#contact" className="text-white/70 hover:text-primary text-[14px] h-2">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4 className="font-semibold text-[16px] my-4">My Services</h4>
                        <ul>
                            <li className="h-8"><a href="#services" className="text-white/70 hover:text-primary text-[14px]">Mobile Development</a></li>
                            <li className="h-8"><a href="#services" className="text-white/70 hover:text-primary text-[14px]">UI/UX Design</a></li>
                            <li className="h-8"><a href="#services" className="text-white/70 hover:text-primary text-[14px]">Securiry</a></li>
                            <li className="h-8"><a href="#services" className="text-white/70 hover:text-primary text-[14px]">Analytics</a></li>
                            <li className="h-8"><a href="#services" className="text-white/70 hover:text-primary text-[14px]">Web App Development</a></li>
                            <li className="h-8"><a href="#services" className="text-white/70 hover:text-primary text-[14px]">Website Development</a></li>

                        </ul>
                    </div>

                    <div className="">
                        <h4 className="font-semibold text-[16px] my-4">Contact Me</h4>
                        <p className="text-[14px] h-8">BW819 CERULEAN STREET</p>
                        <p className="text-[14px] h-8">Takoradi,Ghana</p>
                        <p className="text-[14px] h-8"><strong>Phone:</strong><span>+233 242780205</span></p>
                        <p className="text-[14px] h-8"><strong>Email:</strong> <span>saxodevs@gmail.com</span></p>
                    </div>

                </div>
                <div className="bg-card p-5 rounded my-20 flex flex-col items-center">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">MyPortfolio</strong> <span>All Rights Reserved</span></p>
                    <p>Designed by <a href="" className="text-primary">SaxoDevs</a></p>
                </div>
            </div>
        </div>
    )
}