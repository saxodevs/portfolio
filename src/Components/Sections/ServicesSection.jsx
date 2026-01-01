import { BsApp, BsCodeSlash, BsGraphUpArrow, BsLayoutTextWindowReverse, BsPhone, BsShieldCheck } from "react-icons/bs"

export const ServicesSection = () => {

    const services = [
        {
            title: "Mobile App Development",
            icon: <BsPhone size={28} />,
            description: "Building sleek and functional apps for iOS, and Android devices, ensuring compatibility with the latest Apple and Android technologies. That provide a seamless user experience across various devices."
        },
        {
            title: "Web App  Development",
            icon: <BsApp size={28} />,
            description: "Crafting responsive and dynamic web applications using modern frameworks and technologies to deliver exceptional user experiences."
        },
        {
            title: "Website Development",
            icon: <BsCodeSlash size={28} />,
            description: " Crafting responsive and dynamic web applications using modern frameworks and technologies to deliver exceptional user experiences."
        },
        {
            title: "UI/UX Design",
            icon: <BsLayoutTextWindowReverse size={28} />,
            description: " Crafting intuitive and visually appealing user interfaces that enhance user experience and engagement across digital platforms."
        },
        {
            title: "Analytics",
            icon: <BsGraphUpArrow size={28} />,
            description: " Leverage data-driven insights to optimize your digital strategies and drive informed business decisions."
        },
        {
            title: "Security",
            icon: <BsShieldCheck size={28} />,
            description: " Protect your digital assets with robust security solutions designed to safeguard against cyber threats and vulnerabilities."
        },

    ]

    return (
        <section id="services" className="min-h-screen scroll-mt-20 px-4 md:px-[7%]">
            <h1 className="font-bold text-[24px] text-center my-4 capitalize mt-20">Services</h1>
            <p className=" text-center">Discover a range of services designed to elevate your digital presence and drive business growth.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 my-10 gap-4">
                {services.map((service, index) => (
                    <div key={index} className="bg-card rounded-2xl p-4 border border-white/15 flex flex-col items-center justify-center hover:border-t-4 hover:border-primary hover:-translate-y-1.25 transition-all duration-300 ">
                        <div className="bg-primary/5 rounded-md text-primary p-4">{service.icon}</div>
                        <h1 className="font-bold my-4">{service.title}</h1>
                        <p className="text-white/50 text-[14px] text-center mx-5">{service.description}</p>
                    </div>
                ))}


            </div>

            <div className=" w-full  rounded-2xl mt-10 cta flex flex-col md:flex-row items-center justify-between  px-20 py-10 gap-5">


                <div className="w-full md:w-[60%]">
                    <h1 className="font-bold text-2xl">Transform Your Vision Into Reality</h1>
                    <p className="mt-4">Ready to elevate your digital presence? Let's collaborate to bring your ideas to life with innovative solutions tailored to your needs.</p>
                </div>
                <a href="#contact" className="bg-white cursor-pointer rounded-full text-primary font-bold px-4 py-2 hover:-translate-y-1.25 transition-all duration-300 mt-4">Start Your Project</a>
            </div>

        </section>
    )
}