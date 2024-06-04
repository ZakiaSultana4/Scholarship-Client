import Feature from "./Feature";

const Features = () => {
    const features = [
        {
            id: 1,
            name: "Create an Account",
            details:
                "If you do not have any account in our site then please make sure your register. feedback to help",
        },
        {
            id: 2,
            name: "Create a Job Ad",
            details:
                "Click on add job link and fill up job requirement then click on add job button it will add your job",
        },
        {
            id: 3,
            name: "Add additional info",
            details:
                "If you do not have any account in our site then please make sure your register.  feedback to help",
        },
        {
            id: 4,
            name: "Post Your Job",
            details:
                "If you do not have any account in our site then please make sure your register.",
        },
    ];
    return (
        <div className="container mx-auto px-6 pb-32">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                {features.map((feature) => (
                    <Feature key={feature.id} feature={feature}></Feature>
                ))}
            </div>
        </div>
    );
};

export default Features;