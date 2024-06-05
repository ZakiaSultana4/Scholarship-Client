import useAuth from "../../hooks/useAuth"
import useRole from "../../hooks/useRole"




const Profile = () => {
  const { user } = useAuth()
  const [role] = useRole()

  return (
    <div className='flex justify-center items-center h-screen'>
     
      <div className='bg-white shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src='http://kodeforest.net/html/uoe/extra-images/home-gallery6.jpg'
          className='w-full mb-4 rounded-t-lg h-52'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-[#008060] rounded-full'>
            {role && role.toUpperCase()}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <div className='flex flex-col'>
                <p className=" text-gray-700">  {role} Name :</p>
                <span className='font-bold text-black '>
                 {user.displayName}
                </span>
              </div>
              <div className='flex flex-col'>
                <p className=" text-gray-700">   {role} Email :</p>
                <span className='font-bold text-black '>
                {user.email}
                </span>
              </div>
          

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
