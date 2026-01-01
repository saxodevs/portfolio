
import { useEffect, useRef, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { navs } from "./NavData";


const TopBar = () => {

    const [active, seActive] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navRefs = useRef({});




    const handleActiveNav = (id) => {
        seActive(id);

        const section = document.getElementById(id);

        if (!section) return;

        history.pushState(null, "", `/${id}`);
        section.scrollIntoView({ behavior: "smooth" });

    };


    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        };

        return () => {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen])

    useEffect(() => {

        const sections = navs
            .map((nav) => document.getElementById(nav.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        seActive(id);
                        history.replaceState(null, "", `/${id}`)
                    }
                });
            },
            {
                threshold: 0.6,
                rootMargin: "-80px 0px -40px 0px",
            }
        );
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();

    }, []);



    return (
        <div>
            <header className={`fixed top-0 left-0 w-full z-999  md:px-[5%] bg-bg-light  border-b border-black/30`}>
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                    <h1 className="font-bold text-lg">MyPortfolio</h1>
                    <nav className=" relative hidden md:flex items-center justify-center gap-8 ">
                        {
                            navs.map((nav) =>
                            (
                                <span
                                    ref={(el) => (navRefs.current[nav.id] = el)}
                                    key={nav.id} onClick={() => handleActiveNav(nav.id)} className={` 
                                    cursor-pointer hover:text-primary  transition-colors  font-semibold
                                    ${active === nav.id ? 'active' : ''}`}>{nav.label}
                                </span>
                            ))
                        }
                    </nav>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                    >
                        {isMenuOpen ? <div></div> : <BsList />}
                    </button>

                </div>






            </header>

            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 z-999">

                    <div
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className=" absolute inset-0 bg-black/5 backdrop-contrast-50 backdrop-brightness-50"
                    >
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden absolute right-10 top-5 cursor-pointer p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                        >
                            {isMenuOpen ? <BsX className="font-bold" /> : <div></div>}
                        </button>
                        <div className="relative h-[80%] bg-nav-mobile-background rounded-[20px] top-15  mx-5">

                            <nav className=" flex flex-col px-6 py-6 gap-5">
                                {
                                    navs.map((nav) =>
                                    (
                                        <span
                                            ref={(el) => (navRefs.current[nav.id] = el)}
                                            key={nav.id} onClick={() => handleActiveNav(nav.id)} className={` 
                                   
                                            cursor-pointer hover:text-primary  transition-colors  font-semibold
                                            ${active === nav.id ? 'active' : ''}`}>{nav.label}
                                        </span>
                                    ))
                                }
                            </nav>
                        </div>

                    </div>


                </div>
            )}
        </div>
    )
}


export default TopBar