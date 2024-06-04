
import axios from 'axios'
import axiosSecure from '../hooks/useAxiosSecure'

// create payment intent
export const createPaymentIntent = async fee => {
  const { data } = await axios.post('https://scholarship-two.vercel.app/create-payment-intent', fee)
  return data
}



// update room status after booking in db
export const updateStatus = async (id, status) => {
  const { data } = await axiosSecure.patch(`/rooms/status/${id}`, { status })
  return data
}

// get all bookings for a guest by email
export const getBookings = async email => {
  const { data } = await axiosSecure(`/bookings?email=${email}`)
  return data
}
// get all bookings for a host by email
export const getHostBookings = async email => {
  const { data } = await axiosSecure(`/bookings/host?email=${email}`)
  return data
}
