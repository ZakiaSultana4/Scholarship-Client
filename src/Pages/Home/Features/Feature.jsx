import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Feature({ feature }) {
    const styleAnimation = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)",
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)",
        },
    };
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{
                type: "spring",
                // stiffness: 400,
                damping: 10,
            }}
            className="border border-black/50 border-dashed p-6"
        >
            <motion.div
                variants={styleAnimation}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
            >
                <h2 className="text-5xl font-bold pb-6 text-primaryColor">
                    0{feature.id}
                </h2>
                <h4 className="text-2xl font-semibold">{feature.name}</h4>
                <p className="pt-2  text-black/70">{feature.details}</p>
            </motion.div>
        </motion.div>
    );
}

export default Feature;
Feature.propTypes = {
    feature: PropTypes.object,
};