import { BsAward, BsBook, BsBuildings, BsLaptop, BsMortarboard, BsPatchCheckFill } from "react-icons/bs"

export const ResumeSection = () => {
    return (
        <section id="resume" className="min-h-screen scroll-mt-20 px-4 md:px-[7%]">
            <h1 className="font-bold text-[24px] text-center my-4 capitalize">resume</h1>
            <p className=" text-center">
                My resume highlights my academic background, technical skills,
                and hands-on experience as an intermediate-level student developer.
                It reflects my ability to work with a wide range of technologies and adapt quickly
                to new tools and environments.</p>
            {/*  */}
            <div className="flex flex-col md:flex-row items-start gap-5">
                {/* {Professional Journey} */}
                <div className="w-full md:w-[50%]">
                    <p className="bg-primary text-white font-bold px-4 py-1 rounded-full uppercase w-fit mt-20">Experience</p>
                    <h1 className="my-5 font-extrabold text-4xl">Professional Journey</h1>
                    <p>My professional journey is focused on continuous learning and practical experience as an intermediate-level student in technology</p>

                    {/*  */}
                    <div className="p-5 border-[0.5px] w-full border-primary/30 rounded-2xl mt-10 bg-card  hover:border-t-4 hover:-translate-y-1.25 transition-all duration-300 ">
                        <div className="flex items-center justify-between">
                            <div className="bg-primary w-8 h-8 flex items-center justify-center rounded-md"><BsBuildings /></div>
                            <p className="bg-primary/10 text-primary px-4 py-1 rounded-full uppercase w-fit text-[12px]">Current</p>
                        </div>
                        <h3 className="font-bold text-3xl my-8">Software Developer</h3>
                        <p className="my-3">SaxoDevs Limited</p>

                        <p className="bg-primary/10 text-primary px-4 py-1 rounded-full  w-fit text-[14px]">2021 - Present</p>

                        <p className="my-10 text-white/50">I have experience working with diverse technologies and enjoy solving problems through clean, scalable code. I</p>
                        <div className="flex gap-5">
                            <span className="bg-primary/15 text-primary rounded-2xl px-4 py-1">Leadership</span>
                            <span className="bg-primary/15 text-primary rounded-2xl px-4 py-1">Strategy</span>
                            <span className="bg-primary/15 text-primary rounded-2xl px-4 py-1">Innovation</span>
                        </div>
                    </div>
                    <div className="p-5 border-[0.5px] border-white/5 rounded-2xl mt-10 bg-card  hover:border-t-4 hover:border-primary hover:-translate-y-1.25 transition-all duration-300 ">
                        <div className="flex items-center justify-between">
                            <div className="bg-primary w-8 h-8 flex items-center justify-center rounded-md"><BsLaptop /></div>
                            <p className="bg-primary/10 text-primary px-4 py-1 rounded-full uppercase w-fit text-[12px]">Current</p>
                        </div>
                        <h3 className="font-bold text-3xl my-8">Product Design Lead</h3>
                        <p className="my-3">SaxoDevs Limited</p>

                        <p className="bg-primary/10 text-primary px-4 py-1 rounded-full  w-fit text-[14px]">2021 - Present</p>

                        <p className="mt-5 text-white/50">I guide the design process from concept to execution, ensuring alignment between user needs, business goals, and technical feasibility.</p>

                    </div>
                    <div className="p-5 border-[0.5px]  border-white/5 rounded-2xl mt-10 bg-card  hover:border-t-4 hover:border-primary hover:-translate-y-1.25 transition-all duration-300 ">
                        <div className="flex items-center justify-between">
                            <div className="bg-primary w-8 h-8 flex items-center justify-center rounded-md"><BsBuildings /></div>
                            <p className="bg-primary/10 text-primary px-4 py-1 rounded-full uppercase w-fit text-[12px]">Current</p>
                        </div>
                        <h3 className="font-bold text-3xl my-8">UI/UX Designer</h3>
                        <p className="my-3">SaxoDevs Limited</p>

                        <p className="bg-primary/10 text-primary px-4 py-1 rounded-full  w-fit text-[14px]">2021 - Present</p>

                        <p className="mt-5 text-white/50">UI/UX Designer focused on creating intuitive, user-centered, and visually engaging digital experiences</p>

                    </div>
                </div>

                {/* Academic Background */}
                <div className="w-full md:w-[50%]">
                    <p className="bg-primary text-white font-bold px-4 py-1 rounded-full uppercase w-fit mt-20">Education</p>
                    <h1 className="my-5 font-extrabold text-4xl">Academic Background</h1>
                    <p>I am currently a student with a strong academic foundation in technology and software-related disciplines. My studies have provided me with both theoretical knowledge and practical skills, which I apply through projects and hands-on learning</p>


                    {/*  */}
                    <div className="flex items-start justify-start mt-10  gap-1.5">
                        <div className="relative border-2 rounded-full p-1 border-primary/30">
                            <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center"><BsMortarboard /> </div>
                        </div>
                        <div className="bg-card p-5 rounded-2xl w-full hover:border border-primary hover:-translate-y-1.25 transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <p className="bg-primary/20 text-primary px-2 py-1 rounded-2xl text-[12px]">2023-2027</p>
                                <p className="font-bold uppercase">Degree</p>
                            </div>
                            <h3 className="font-bold text-3xl my-5">Bachelor Of Technology</h3>
                            <p className="mb-3">Takoradi Technical University</p>
                            <p className="text-white/40 text-[12px]">Focused on Software Engineering with coursework in algorithms, web development, and databases. Graduated with honors.</p>
                            <div className="bg-primary/10 border-l-4 border-primary rounded-md px-4 h-10 mt-5 flex items-center justify-start gap-4">
                                <BsAward className="text-primary" />
                                <span className="text-primary font-bold">Software Engineering </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start justify-start mt-10  gap-1.5">
                        <div className="relative border-2 rounded-full p-1 border-primary/30">
                            <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center icon-box-2"><BsBook /> </div>
                        </div>
                        <div className="bg-card p-5 rounded-2xl w-full hover:border border-primary hover:-translate-y-1.25 transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <p className="bg-primary/20 text-primary px-2 py-1 rounded-2xl text-[12px]">2014-2017</p>
                                <p className="font-bold uppercase"></p>
                            </div>
                            <h3 className="font-bold text-3xl my-5">Techinical</h3>
                            <p className="mb-3">Asempaneye Senior High Technical </p>
                            <p className="text-white/40 text-[12px]">  Specialized in General Science with a focus on mathematics, physics, and computer science. Graduated with distinction.</p>
                            <div className="bg-primary/10 border-l-4 border-primary rounded-md px-4 h-10 mt-5 flex items-center justify-start gap-4">
                                <BsAward className="text-primary" />
                                <span className="text-primary font-bold">General Science </span>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-start justify-start mt-10 gap-1.5">
                        <div className="relative border-2 rounded-full p-1 border-primary/30">
                            <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center icon-box-2"><BsBook /> </div>
                        </div>
                        <div className="bg-card p-5 rounded-2xl w-full hover:border border-primary hover:-translate-y-1.25 transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <p className="bg-primary/20 text-primary px-2 py-1 rounded-2xl text-[12px]">2010-2013</p>
                                <p className="font-bold uppercase"></p>
                            </div>
                            <h3 className="font-bold text-3xl my-5">Basic School</h3>
                            <p className="mb-3">Assin Mankata D/A Basic </p>
                            <p className="text-white/40 text-[12px]">My basic education laid the foundation for my academic journey, instilling in me a love for learning and curiosity about the world around me.</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-start mt-10 gap-1.5">
                        <div className="relative border-2 rounded-full p-1 border-primary/30">
                            <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center icon-box-2"><BsPatchCheckFill /> </div>
                        </div>
                        <div className="bg-card p-5 rounded-2xl w-full hover:border border-primary hover:-translate-y-1.25 transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <p className="bg-primary/20 text-primary px-2 py-1 rounded-2xl text-[12px]">2020-2021</p>
                                <p className="font-bold uppercase">Certificates</p>
                            </div>
                            <h3 className="font-bold text-3xl my-5">Professional Certifications</h3>
                            <div className="flex items-center justify-between">
                                <p className="mb-3 text-white/60">JavaScript Algorithms and Data Structures</p>
                                <a href="#" className="bg-primary text-white rounded-md px-3 py-0.5 text-[14px] cursor-pointer flex items-center gap-2"><BsAward /> FreeCodeCamp</a>
                            </div>
                            <div className="bg-gray-50/15  h-[0.2px] w-full my-1.5"></div>
                            <div className="flex items-center justify-between">
                                <p className="mb-3 text-white/60">Responsive Web Design</p>
                                <a href="#" className="bg-primary text-white rounded-md px-3 py-0.5 text-[14px] cursor-pointer flex items-center gap-2"><BsAward /> FreeCodeCamp</a>
                            </div>
                            <div className="bg-gray-50/15  h-[0.2px] w-full my-1.5"></div>
                            <div className="flex items-center justify-between">
                                <p className="mb-3 text-white/60">Front End Libraries</p>
                                <a href="#" className="bg-primary text-white rounded-md px-3 py-0.5 text-[14px] cursor-pointer flex items-center gap-2"><BsAward /> FreeCodeCamp</a>
                            </div>



                        </div>
                    </div>

                </div>


            </div>


        </section>
    )
}