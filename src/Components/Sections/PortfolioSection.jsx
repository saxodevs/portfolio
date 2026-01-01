
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

import design from '../../assets/img/portfolio/design.png';
import event1 from '../../assets/img/portfolio/event1.png';
import event2 from '../../assets/img/portfolio/event2.png';
import finance from '../../assets/img/portfolio/finance.png';
import medicine from '../../assets/img/portfolio/medicine.png';


export const PortfolioSection = () => {


    const tabs = [
        "All Project", "Mobile App", "Website & Web App", "UI/UX Design"
    ]

    const [tab, setTab] = useState(tabs[0])


    function toggleTab(e) {
        setTab(e);
    }

    const projects = [
        {
            type: "Mobile Development",
            name: "Medicine App",
            year: 2021,
            categorry: "Mobile App",
            img: medicine,
            url: " ",
            description: "A mobile application that helps users manage their medications effectively.",
            categories: [
                'Design',
                'developmet'
            ]
        },
        {
            type: "Web App Development",
            name: "Admin Panel - Event Booking",
            year: 2023,
            categorry: "Website & Web App",
            img: event1,
            url: "",
            description: "An admin panel for managing event bookings, user registrations, and event details.",
            categories: [
                'Design',
                'developmet'
            ]
        },
        {
            type: "App Design",
            name: "Event Booking App",
            year: 2024,
            categorry: "UI/UX Design",
            img: design,
            url: "",
            description: "A user-friendly mobile app design for booking and managing event tickets seamlessly.",
            categories: [
                'Design',

            ]
        },

        {
            type: "Web App Development",
            name: "Finance Management System",
            year: 2022,
            categorry: "Website & Web App",
            img: finance,
            url: "",
            description: "A comprehensive web application for managing personal and business finances.",
            categories: [
                'Design',
                'developmet'
            ]
        },
        {
            type: "Mobile Development",
            name: "Event Management App",
            year: 2023,
            categorry: "Mobile App",
            img: event2,
            url: "",
            description: "A mobile app that allows users to create, manage, and attend events with ease.",
            categories: [
                'Design',
                'developmet'
            ]
        },

    ]


    const mobileApp = projects.filter((el) => {
        const keyWord = "Mobile App";
        return (
            el.categorry.includes(keyWord)

        );
    })
    const webs = projects.filter((el) => {
        const keyWord = "Website & Web App";
        return (
            el.categorry.includes(keyWord)

        );
    })
    const designs = projects.filter((el) => {
        const keyWord = "UI/UX Design";
        return (
            el.categorry.includes(keyWord)

        );
    })



    return (


        <section id="portfolio" className="min-h-screen scroll-mt-20 px-4 md:px-[7%]">
            <h1 className="font-bold text-[24px] text-center my-4 capitalize mt-20">Portfolio</h1>
            <p className=" text-center">My Projects are built on precision, collaboration, and results. From initial planning to final delivery, I focus on clear communication, efficient execution, and solutions that meet your goals. Every project is managed with care, transparency, and a commitment to delivering high-quality outcomes on time and on target.</p>

            <div className="mt-20 flex items-center justify-center">
                {
                    tabs.map((el) => (
                        <button key={el} onClick={() => toggleTab(el)}
                            className={` ${tab === el ? 'bg-primary transition-colors duration-500' : 'border border-white/15 transition-colors duration-500 hover:border-primary hover:text-primary'} text-white/60' px-3 py-2 mx-2 rounded text-[14px] cursor-pointer `} >
                            {el}
                        </button>
                    ))
                }
            </div>
            <div className="mt-15">
                {
                    tab === "All Project" && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {/*  */}
                            {
                                projects.map((project, index) => (
                                    <div className="relative portfoli-card overflow-hidden " key={index}>
                                        <div className="image-container aspect-square">
                                            <img src={project.img} alt="" className="rounded-2xl " />
                                        </div>


                                        <div className="tab-content rounded-2xl h-60 p-4  absolute top-0 left-0 right-0 hidden hover:bg-[rgba(32,29,32,0.7)] transition-colors duration-500 ">
                                            <p className="bg-white/80 rounded py-1 px-3 w-fit text-primary my-2 font-mono uppercase text-[14px] ">{project.type}</p>
                                            <p className=" py-1 px-3 w-fit font-semibold">{project.name}</p>
                                            <p className="text-white/70 text-[14px] mt-5">{project.description}</p>

                                            <div className="flex justify-end mt-20">
                                                <div className="flex items-center justify-between gap-3 mr-5">
                                                    <a href={project.img} className="bg-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-500 "><BsPlus size={24} /></a>
                                                    {/* <a href="" className="bg-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-500 "><BsArrowRight size={16} /></a> */}
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className=" flex gap-2">
                                                {
                                                    project.categories.map((el) => (
                                                        <span key={el} className="bg-primary/10 px-2 py-1 rounded-2xl text-[10px] text-primary uppercase">{el}</span>
                                                    ))
                                                }


                                            </p>
                                            <p className="text-white/55 text-[14px]">{project.year}</p>
                                        </div>
                                    </div>
                                ))
                            }

                            {/*  */}


                        </div>
                    )
                }
                {
                    tab === "Mobile App" && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                            {/*  */}
                            {
                                mobileApp.map((mobile) => (
                                    <div className="relative portfoli-card " key={mobile}>

                                        <div className="image-container aspect-square">
                                            <img src={mobile.img} alt="" className="rounded-2xl " />
                                        </div>
                                        <div className="tab-content rounded-2xl h-60 p-4  absolute top-0 left-0 right-0 hidden hover:bg-[rgba(32,29,32,0.7)] transition-colors duration-500 ">
                                            <p className="bg-white/80 rounded py-1 px-3 w-fit text-primary my-2 font-mono uppercase text-[14px] ">{mobile.type}</p>
                                            <p className=" py-1 px-3 w-fit font-semibold">{mobile.name}</p>
                                            <p className="text-white/70 text-[14px] mt-5">{mobile.description}</p>

                                            <div className="flex justify-end mt-20 mr-5">
                                                <div className="flex items-center justify-between gap-3">
                                                    <a href="" className="bg-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-500 "><BsPlus size={24} /></a>
                                                    {/* <a href="" className="bg-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-500 "><BsArrowRight size={16} /></a> */}
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className=" flex gap-2">
                                                {
                                                    mobile.categories.map((el) => (
                                                        <span key={el} className="bg-primary/10 px-2 py-1 rounded-2xl text-[10px] text-primary uppercase">{el}</span>
                                                    ))
                                                }


                                            </p>
                                            <p className="text-white/55 text-[14px]">{mobile.year}</p>
                                        </div>
                                    </div>
                                ))
                            }

                            {/*  */}


                        </div>
                    )
                }
                {
                    tab === "Website & Web App" && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                            {/*  */}
                            {
                                webs.map((web) => (
                                    <div className="relative portfoli-card " key={web}>

                                        <div className="image-container aspect-square">
                                            <img src={web.img} alt="" className="rounded-2xl " />
                                        </div>
                                        <div className="tab-content rounded-2xl h-60 p-4  absolute top-0 left-0 right-0 hidden hover:bg-[rgba(32,29,32,0.7)] transition-colors duration-500 ">
                                            <p className="bg-white/80 rounded py-1 px-3 w-fit text-primary my-2 font-mono uppercase text-[14px] ">{web.type}</p>
                                            <p className=" py-1 px-3 w-fit font-semibold">{web.name}</p>
                                            <p className="text-white/70 text-[14px] mt-5">{web.description}</p>
                                            <div className="flex justify-end mt-20">
                                                <div className="flex items-center justify-between gap-3 mr-5">
                                                    <a href="" className="bg-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-500 "><BsPlus size={24} /></a>
                                                    {/* <a href="" className="bg-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-500 "><BsArrowRight size={16} /></a> */}
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className=" flex gap-2">
                                                {
                                                    web.categories.map((el) => (
                                                        <span key={el} className="bg-primary/10 px-2 py-1 rounded-2xl text-[10px] text-primary uppercase">{el}</span>
                                                    ))
                                                }


                                            </p>
                                            <p className="text-white/55 text-[14px]">{web.year}</p>
                                        </div>
                                    </div>
                                ))
                            }

                            {/*  */}


                        </div>
                    )
                }
                {
                    tab === "UI/UX Design" && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                            {/*  */}
                            {
                                designs.map((design) => (
                                    <div className="relative portfoli-card overflow-hidden " key={design}>

                                        <div className="image-container aspect-square">
                                            <img src={design.img} alt="" className="rounded-2xl " />
                                        </div>
                                        <div className="tab-content rounded-2xl h-60 p-4  absolute top-0 left-0 right-0 hidden hover:bg-[rgba(32,29,32,0.7)] transition-colors duration-500 ">
                                            <p className="bg-white/80 rounded py-1 px-3 w-fit text-primary my-2 font-mono uppercase text-[14px] ">{design.type}</p>
                                            <p className=" py-1 px-3 w-fit font-semibold">{design.name}</p>
                                            <p className="text-white/70 text-[14px] mt-5">{design.description}</p>

                                            <div className="flex justify-end mt-20">
                                                <div className="flex items-center justify-between gap-3 mr-5">
                                                    <a href="" className="bg-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-500 "><BsPlus size={24} /></a>
                                                    {/* <a href="" className="bg-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-500 "><BsArrowRight size={16} /></a> */}
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className=" flex gap-2">
                                                {
                                                    design.categories.map((el) => (
                                                        <span key={el} className="bg-primary/10 px-2 py-1 rounded-2xl text-[10px] text-primary uppercase">{el}</span>
                                                    ))
                                                }


                                            </p>
                                            <p className="text-white/55 text-[14px]">{design.year}</p>
                                        </div>
                                    </div>
                                ))
                            }

                            {/*  */}


                        </div>
                    )
                }
                {/* hi there */}
            </div>
            <div className="bg-gray-50/15  h-[0.2px] w-full my-10"></div>
            <div className="flex flex-col  md:flex-row items-center justify-between">
                <div className="col-lg-8">
                    <h3 className="font-extrabold text-[32px] my-2" >Like what you see? Let’s work together.</h3>
                    <p className="text-white/60">We design and build products that get results. Tell us about your idea and we’ll propose a plan, timeline, and estimate within 48 hours.</p>
                </div>

                <a href="#contact" className="bg-primary px-5 py-3 rounded-md font-bold hover:shadow shadow-2xl hover:-translate-y-1.25 transition-all duration-300">Let's Work Together</a>

            </div>
        </section>

    )
}