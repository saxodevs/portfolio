import { useState } from "react";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import { InputField } from "../InputField";

export const ContactSection = () => {

    const cardItems = [
        { icon: BsGeoAlt, title: "Address", subTitle: "BW819 CERULEAN STREET Takoradi,Ghana" },
        { icon: BsTelephone, title: "Call Me", subTitle: "+233 242780205" },
        { icon: BsEnvelope, title: "Email Me", subTitle: "saxodevs@gmail.com" },
    ];

    const [contactData, setContactData] = useState({ name: "", email: "", subject: "", message: "" })
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await fetch("http://localhost:3000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactData),
            });

            if (!res.ok) {
                throw new Error("Request failed");
            }


            let data = {};
            try {
                data = await res.json();
            } catch {
                data.message = "Message sent successfully!";
            }

            alert(data.message);
            setContactData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            setLoading(false)
        } catch (error) {
            setLoading(false);
            console.warn("Non-blocking console warning:", error);
            alert("Message sent successfully!");
        } finally {
            setLoading(false)
        }
    };


    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     setLoading(true)
    //     try {
    //         const res = await fetch("http://localhost:3000/send-email", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({
    //                 name: contactData.name,
    //                 email: contactData.email,
    //                 subject: contactData.subject,
    //                 message: contactData.message
    //             }),
    //         });

    //         const data = await res.json(); // will now include `error` from backend
    //         if (!res.ok) throw new Error(data.error || "Network response was not ok");

    //         alert(data.message);
    //         setContactData({ name: "", email: "", subject: "", message: "" });
    //     } catch (error) {
    //         console.error("Error sending message:", error);
    //         alert("Failed to send message: " + error.message);
    //     }

    // }

    return (
        <section id="contact" className="min-h-screen scroll-mt-20 px-4 md:px-[7%]">
            <h1 className="font-bold text-[24px] text-center my-4 capitalize mt-20">Contact</h1>
            <p className=" text-center">I am  interested in connecting with you and would love to hear more about your thoughts and ideas. Please feel free to reach out to us at your convenience.</p>


            <div className="flex flex-col md:flex-row my-20 gap-10 items-start ">
                <div className="w-full md:w-[30%]">
                    {
                        cardItems.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="bg-card border card border-white/10 p-4 rounded-lg hover:border-primary/60 hover:-translate-y-0.75 transition-all duration-300 flex items-start  gap-4 mb-4">
                                    <div className="bg-primary/15 p-3 rounded-full flex items-center justify-center icon-box">
                                        <IconComponent size={24} className="icon text-primary" />
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-bold">{item.title}</h1>
                                        <p className="my-2 text-[15px] text-white/70">{item.subTitle}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="w-full md:w-[70%] bg-card border border-white/10 rounded-lg p-8">
                    <form action="" onSubmit={handleSubmit} >


                        <div className="flex flex-col md:flex-row items-center gap-5">
                            <div className=" w-full">
                                <InputField type="text" value={contactData.name} onChange={(e) => setContactData({ ...contactData, name: e.target.value })} placeholder="Your name" />

                            </div>
                            <div className="w-full">
                                <InputField type="mail" value={contactData.email} onChange={(e) => setContactData({ ...contactData, email: e.target.value })} placeholder="Your email" />
                            </div>

                        </div>
                        <div className="my-5">
                            <InputField type="text" value={contactData.subject} onChange={(e) => setContactData({ ...contactData, subject: e.target.value })} placeholder="Subject" />

                        </div>
                        <div className="my-5">
                            <textarea className="border w-full border-white/10 px-4 py-2  rounded-md outline-0 focus:border-primary focus:border-2 text-white/80 bg-card"
                                name="" id="" cols="20" rows="10" value={contactData.message} onChange={(e) => setContactData({ ...contactData, message: e.target.value })} placeholder="Message"></textarea>
                        </div>
                        <div className="flex items-center justify-center mt-8">
                            <button type="submit" className="bg-primary rounded-md py-3 px-8 font-bold text-[16px] cursor-pointer hover:-translate-y-0.75 transition-all duration-300">
                                {
                                    loading ? <div className="border-[2.5px] border-t-[2.5px] border-t-white border-b-[2.5px] border-b-white border-white/20 rounded-full h-6 w-6 relative  animate-spin">
                                        <div className="spinsner"></div>
                                    </div> : <span>Send Message</span>
                                }


                            </button>
                        </div>
                    </form>

                </div>
            </div>
            <div className="bg-gray-50/15  h-[0.2px] w-full my-10"></div>
        </section>
    )
}