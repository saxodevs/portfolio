import { BsBriefcase, BsCalendar, BsDownload, BsEnvelope, BsFacebook, BsGeoAlt, BsInstagram, BsLinkedin, BsMortarboard, BsPhone, BsStarFill, BsStarHalf, BsTwitterX } from "react-icons/bs"
import cv from '../../assets/cv.pdf'
import profile from "../../assets/img/profile/profile.png"
export const AboutSection = () => {
    return (
        <section id="about" className="min-h-screen scroll-mt-20 px-4 md:px-[7%]">

            <h1 className="font-bold text-[24px] text-center my-4 capitalize">about me</h1>
            <p className=" text-center">I leverage cutting-edge tools and technologies to deliver exceptional results for your business.</p>


            {/*  */}
            <div className="flex flex-col md:flex-row gap-5 my-20 items-start ">
                <div className="bg-card p-5 rounded-2xl w-full md:w-[30%] flex flex-col items-center justify-center">
                    <div className=" border-8 border-primary rounded-full  relative  h-50 w-50 profile-img-wrapper">
                        <img src={profile} alt="" />
                        {/* <div className="online-wrapper">
                            <div className="online"></div>
                        </div> */}

                    </div>
                    <h1 className="mt-5 font-bold text-[24px]">Peter Saho</h1>
                    <p className="mt-2 text-primary">Full Stack Developer</p>

                    <div className="flex gap-2 mt-4 ">
                        <BsStarFill className="text-amber-300" />
                        <BsStarFill className="text-amber-300" />
                        <BsStarFill className="text-amber-300" />
                        <BsStarFill className="text-amber-300" />
                        <BsStarHalf className="text-amber-300" />
                        <span className="-mt-0.5 ml-2">4.5</span>
                    </div>
                    <div className="bg-gray-50/15  h-[0.2px] w-full my-5"></div>
                    <div className="flex items-center justify-between my-5 gap-4">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="font-bold text-2xl text-primary">10</h1>
                            <p className=" uppercase text-gray-400 text-[14px]">projects</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="font-bold text-2xl text-primary">3+</h1>
                            <p className=" uppercase text-gray-400 text-[14px]">years</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="font-bold text-2xl text-primary">2</h1>
                            <p className=" uppercase text-gray-400 text-[14px]">awards</p>
                        </div>
                    </div>
                    <div className="bg-gray-50/15  h-[0.2px] w-full my-5"></div>
                    <a href={cv} className="flex items-center justify-center mb-5 gap-6 bg-primary px-4 py-3 cursor-pointer rounded-md w-full hover:bg-primary/50  hover:-translate-y-1.25 duration-300"> <BsDownload /> Download CV</a>
                    <a href="#contact" className="flex items-center justify-center gap-6 bg-primary/30 px-4 py-3 cursor-pointer rounded-md w-full hover:bg-primary/50  hover:-translate-y-1.25 duration-300"> <BsEnvelope /> Contact</a>
                    <div className="bg-gray-50/15  h-[0.2px] w-full my-5"></div>
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
                <div className="w-full md:w-[70%]">
                    <p className="bg-primary/10 text-primary px-4 py-1 rounded-full uppercase w-fit">about me</p>
                    <h1 className="text-4xl font-extrabold my-5">Transforming Ideas into Digital Reality</h1>
                    <p className="my-4 " >
                        I am a motivated and detail-oriented student with intermediate-level experience in
                        software and web development. I have a strong foundation across multiple technologies
                        and enjoy building practical, efficient, and user-focused digital solutions. My passion lies in learning
                        continuously and applying modern tools to solve real-world problems.
                    </p>
                    <p>
                        I have worked on a variety of projects that demonstrate my ability to adapt to different
                        requirements, collaborate effectively, and deliver quality results within deadlines.
                        I am comfortable working across the full development process—from planning
                        and design to implementation and testing.
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-5">
                        <div className="border border-white/5 rounded-2xl bg-card p-4 hover:border-primary hover:-translate-y-1.25 transition-all duration-300">
                            <div className="flex items-center justify-start">
                                <BsBriefcase className="text-primary" size={28} />
                                <div className="ml-4 ">
                                    <p className="text-white/50 uppercase text-[12px]">Experience</p>
                                    <h1 className="font-bold  text-white">3+</h1>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white/5 rounded-2xl bg-card p-4 hover:border-primary hover:-translate-y-1.25 transition-all duration-300">
                            <div className="flex items-center justify-start">
                                <BsMortarboard className="text-primary" size={28} />
                                <div className="ml-4 ">
                                    <p className="text-white/50 uppercase text-[12px]">Degree</p>
                                    <h1 className="font-bold  text-white">Bachelor of Technology</h1>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white/5 rounded-2xl bg-card p-4 hover:border-primary hover:-translate-y-1.25 transition-all duration-300">
                            <div className="flex items-center justify-start">
                                <BsGeoAlt className="text-primary" size={28} />
                                <div className="ml-4 ">
                                    <p className="text-white/50 uppercase text-[12px]">based in</p>
                                    <h1 className="font-bold  text-white">Ghana, Takoradi</h1>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white/5 rounded-2xl bg-card p-4 hover:border-primary hover:-translate-y-1.25 transition-all duration-300">
                            <div className="flex items-center justify-start">
                                <BsEnvelope className="text-primary" size={28} />
                                <div className="ml-4 ">
                                    <p className="text-white/50 uppercase text-[12px]">Email</p>
                                    <h1 className="font-bold  text-white">saxodevs@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white/5 rounded-2xl bg-card p-4 hover:border-primary hover:-translate-y-1.25 transition-all duration-300">
                            <div className="flex items-center justify-start">
                                <BsPhone className="text-primary" size={28} />
                                <div className="ml-4 ">
                                    <p className="text-white/50 uppercase text-[12px]">Contact</p>
                                    <h1 className="font-bold text-white">+233 242 780 205</h1>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white/5 rounded-2xl bg-card p-4 hover:border-primary hover:-translate-y-1.25 transition-all duration-300">
                            <div className="flex items-center justify-start">
                                <BsCalendar className="text-primary" size={28} />
                                <div className="ml-4 ">
                                    <p className="text-white/50 uppercase text-[12px]">availability</p>
                                    <h1 className="font-bold  text-white">Open to Work</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Technical Skills */}
                    <p className="bg-primary/10 text-primary px-4 py-1 mt-10 rounded-full uppercase w-fit">Core Skills</p>
                    <h3 className="font-bold text-2xl my-5">Technical Proficiency</h3>
                    <div className="my-5">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-bold">Flutter & Firebase</p>
                            <p className="text-primary font-bold">89%</p>
                        </div>
                        <div className="w-full h-2.5 bg-card rounded relative">
                            <div className="w-[89%] h-2.5 bg-primary rounded  animate-pulse  duration-200"></div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-bold">Reactjs</p>
                            <p className="text-primary font-bold">68%</p>
                        </div>
                        <div className="w-full h-2.5 bg-card rounded">
                            <div className="w-[68%] h-2.5 bg-primary rounded animate-pulse  duration-200"></div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-bold">JavaScript</p>
                            <p className="text-primary font-bold">75%</p>
                        </div>
                        <div className="w-full h-2.5 bg-card rounded">
                            <div className="w-[75%] h-2.5 bg-primary rounded animate-pulse  duration-200"></div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-bold">Bootstrap</p>
                            <p className="text-primary font-bold">84%</p>
                        </div>
                        <div className="w-full h-2.5 bg-card rounded">
                            <div className="w-[84%] h-2.5 bg-primary rounded animate-pulse  duration-200"></div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-bold">HTML & CSS</p>
                            <p className="text-primary font-bold">95%</p>
                        </div>
                        <div className="w-full h-2.5 bg-card rounded">
                            <div className="w-[95%] h-2.5 bg-primary rounded animate-pulse  duration-200"></div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-bold">Java</p>
                            <p className="text-primary font-bold">58%</p>
                        </div>
                        <div className="w-full h-2.5 bg-card rounded">
                            <div className="w-[58%] h-2.5 bg-primary rounded animate-pulse  duration-200"></div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-bold">UI/UX & Figma</p>
                            <p className="text-primary font-bold">78%</p>
                        </div>
                        <div className="w-full h-2.5 bg-card rounded">
                            <div className="w-[78%] h-2.5 bg-primary rounded animate-pulse  duration-200"></div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-bold">Python, C++, C# & PHP</p>
                            <p className="text-primary font-bold">58%</p>
                        </div>
                        <div className="w-full h-2.5 bg-card rounded">
                            <div className="w-[58%] h-2.5 bg-primary rounded animate-pulse  duration-200"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}