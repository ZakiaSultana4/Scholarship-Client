import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { BsBoxArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

const Footer = () => {
    return (
        <div className=" bg-gray-100 mt-10">
            <div className="container mx-auto md:py-16 md:px-6 px-2 md:pb-32 pb-16">
                <div className="grid md:grid-cols-3 grid-cols-1 md:justify-between justify-center md:items-start items-center md:text-left text-start space-y-8">
                    <div className="mt-4">
                        <div className="flex gap-3">
                            <div className=" bg-[rgb(15,29,56)] px-3 ">
                                <img  src="https://aihire-orpin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogolisht.90a7fdea.png&w=256&q=75" alt="" />
                            </div>
                          
                        </div>
                        <p className="pt-6">
                            Copyright © 2023 - All right reserved
                        </p>
                        {/* <div className="w-1/6 h-0.5 bg-primaryColor  md:ml-0 mx-auto mb-6"></div> */}
                    </div>
                    <div className="">
                        <h4 className="pb-6">Contact with me</h4>
                        <p className="text-base font-semibold text-[#a4a4a4] ">
                            Phone Number:
                            <span className="text-black">
                                {" "}
                                +880 1967276648
                            </span>
                        </p>
                        <p className="text-base font-semibold text-[#a4a4a4]  ">
                            <span className="">Email: </span>
                            <span className="text-black">
                               sultanazakia711@gmail.com
                            </span>{" "}
                        </p>
                        <p className="text-base font-semibold text-[#a4a4a4]  ">
                            <span className="">Location: </span>
                            <span className="text-black">
                                Cumilla, Bangladesh
                            </span>{" "}
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center md:justify-end justify-start gap-3">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    type: "spring",
                                    // stiffness: 400,
                                    damping: 10,
                                }}
                                rel="noreferrer"
                                target="_blank"
                                href={"https://github.com/sabbirsami"}
                                className="rounded-0 border border-[#4a4a4a]    text-lg border-1 p-3  flex justify-center items-center"
                            >
                                <FaGithub className="inline text-2xl font-semibold m-0.5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    type: "spring",
                                    // stiffness: 400,
                                    damping: 10,
                                }}
                                rel="noreferrer"
                                target="_blank"
                                href={
                                    "https://www.linkedin.com/in/sabbir-mohammad-sami/"
                                }
                                className="rounded-0 border border-[#4a4a4a]    text-lg border-1 p-3  flex justify-center items-start"
                            >
                                <FaLinkedinIn className="inline text-2xl font-semibold" />{" "}
                                <span className="ms-2 font-semibold mb-0">
                                    Linkedin
                                </span>
                            </motion.a>
                        </div>
                        <div className="ms-auto pt-3">
                            <motion.span
                                className="inline-block"
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    type: "spring",
                                    // stiffness: 400,
                                    damping: 10,
                                }}
                            >
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href={
                                        "https://sabbir-mohammad-sami.web.app/"
                                    }
                                    className="rounded-0 border border-dashed border-[#4a4a4a]  hover:text-white  text-lg border-1 p-3  flex justify-center items-start"
                                >
                                    <span className="ms-.5 pe-1 font-semibold mb-0">
                                        Developer portfolio
                                    </span>
                                    {/* <BsBoxArrowUpRight className="inline text-2xl font-semibold hover:block" />{" "} */}
                                </a>
                            </motion.span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;