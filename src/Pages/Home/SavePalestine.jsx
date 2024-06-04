import save from "../../assets/palestine.png";

const SavePalestine = () => {
    return (
        <div className="container mx-auto px-6 pb-16">
            <div className="grid xl:grid-cols-3 lg:grid-cols-3   border-b md:px-4 px-2 pt-10 border-dashed justify-between items-end">
                <div className="col-span-1 order-1">
                    <div className="lg:pb-20 pb-5">
                        <h2 className=" md:text-5xl text-3xl font-bold">
                            We support Palestine
                        </h2>
                    </div>
                </div>
                <div className="mx-auto lg:order-2 order-3">
                    <img className="h-80" src={save} alt="" />
                </div>
                <div className="lg:pb-20 pb-2 lg:order-3 order-2">
                    <p className="text-lg pt-6 md:pb-4 pb-4">
                        We are taking action to help our freelancers, our
                        clients, and the people of Palestine—and so can you
                    </p>
                    <a
                        href=""
                        target="_blank"
                        className="px-3.5 text-sm py-1.5 font-semibold border-2  rounded-full"
                        rel="noopener noreferrer"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SavePalestine;