import { Bars } from "react-loader-spinner"


const Loader = () => {
  return (
    <div className=" flex justify-center items-center  my-40 flex-col">
    <img
      className="w-[200px]"
      src="https://wpdemo.zcubethemes.com/scholary/wp-content/themes/scholary/inc/assets/images/logo.png"
      alt=""
    />

    <Bars
      height="80"
      width="80"
      color="#004C3F"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />

  </div>
  )
}

export default Loader