
import { FaUserAlt, FaDollarSign } from 'react-icons/fa'
import { BiBookmarkAltPlus } from "react-icons/bi";
import { GiBookPile } from "react-icons/gi";
import SalesLineChart from './SalesLineChart'
import { GiBookAura } from "react-icons/gi";
import { useEffect, useState } from 'react'
import { getAdminStat } from '../../../api/utils'

const AdminStatistics = () => {
  const [statData, setStatData] = useState({})
  console.log(statData);
  useEffect(() => {
    getAdminStat().then(data => setStatData(data))
  }, [])
  return (
    <div>
      <div className='mt-16'>
        {/* small cards */}
        <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2  mx-10'>
          {/* Sales Card */}
          <div className='relative flex flex-col bg-clip-border rounded-xl
           bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr
               shadow-lg absolute mb-4 my-4 grid h-16 w-16 place-items-center
                from-indigo-600 to-indigo-400 text-white shadow-indigo-500/40`}
            >
              <GiBookPile className='w-6 h-6 text-white'/>

            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased leading-normal  font-semibold'>
                Total Sales :
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                ${statData?.totalSale}
              </h4>
            </div>
          </div>
          {/* Users Card */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr
               shadow-lg absolute mb-4 my-4 grid h-16 w-16 place-items-center
                from-lime-600 to-lime-400 text-white shadow-lime-500/40`}
            >
              <FaUserAlt className='w-6 h-6 text-white' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased leading-normal  font-semibold'>
                Total User :
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {statData?.userCount}
              </h4>
            </div>
          </div>
          {/* Total Bookings */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-bordermb-4 mx-4 rounded-xl overflow-hidden bg-gradient-to-tr 
              shadow-lg absolute mb-4 my-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
            >
              <GiBookAura className='w-6 h-6 text-white'/>
         
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased leading-normal  font-semibold'>
                Total Scholarship Bookings :
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {statData?.bookingCount}
              </h4>
            </div>
          </div>
          {/* Total Bookings */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr
               shadow-lg absolute mb-4 my-4 grid h-16 w-16 place-items-center
                from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
            ><BiBookmarkAltPlus className='w-6 h-6 text-white'/>
   
         
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased leading-normal  font-semibold'>
                Total Scholarships :
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
              {statData?.roomCount}
              </h4>
            </div>
          </div>
      
        </div>

        <div className='mb-4 grid grid-cols-1 px-20'>
          {/* Total Sales Graph */}

          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2'>
            <SalesLineChart data={statData?.chartData} />
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default AdminStatistics