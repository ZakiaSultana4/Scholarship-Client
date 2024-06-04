import { useState } from 'react'
import { updateRole } from '../../../../api/auth'
import { toast } from 'react-hot-toast'
import UpdateUserModal from '../../Modal/UpdateUserModal'
import DeleteUserModal from '../../Modal/DeleteUserModal'
import useAuth from '../../../../hooks/useAuth'
import axiosSecure from '../../../../api'

const UserDataRow = ({ user,}) => {
    const {setLoading}=useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const modalHandler = async role => {
    try {
        setLoading(true)
      const data = await updateRole({ email: user?.email, role })
      setLoading(false)
      toast.success('User role updated!')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      setIsOpen(false)
    }
  }
  const modalHandler2 = async id => {
    try {
        setLoading(true)
    await axiosSecure.delete(`/user/${id}`);
      setLoading(false)
      toast.success('User Deleted!')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      setIsOpen(false)
    }
  }
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.status ? (
          <p
            className={`${
              user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update </span>
        </span>
        {/* Modal */}
        <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          user={user}
          modalHandler={modalHandler}
        />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
          onClick={() => setIsOpen2(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-600
           leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span onClick={()=>modalHandler2(user._id)} className='relative'>Delete</span>
        </span>
     
      </td>
    </tr>
  )
}

export default UserDataRow