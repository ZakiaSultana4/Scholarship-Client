import { Link } from "react-router-dom";
import err from "../../assets/err.png";

const ErrorPage = () => {
  return (
    <div className=" flex justify-center items-center mt-16 flex-col">
        <Link to={'/'}>
            <p className=" underline text-[#008060] text-lg font-semibold">Back To Home</p>
        </Link>
        <img src={err} alt="" className="w-[600px]"/>
        <p className=" text-red-600 text-4xl">Error,Page Not Found</p>
    </div>
  )
}

export default ErrorPage