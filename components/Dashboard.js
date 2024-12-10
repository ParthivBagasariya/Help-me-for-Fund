"use client"
import React,{useEffect,useState} from 'react';
import { useSession,signIn,signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {fetchuser, updateProfile } from '@/action/useraction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';


const Dashboard = () => {
    const {data : session,update} = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(()=>{
        getData()
        if(!session){
            router.push('/login')
        }
    },[router,session])

    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setform(u)
    }

    const handleChange = (e) => {
        setform({...form,[e.target.name] : e.target.value})
    }

    const handleSubmit = async(e) =>{
        update()
        await updateProfile(e,session.user.name)
        toast('Profile updated succesfully',{
            position : "top-right",
            autoClose : 5000,
            hideProgressBar : false,
            closeOnClick : true,
            pauseOnHover : true,
            draggable : true,
            progress : undefined,
            theme : "light",
            transition : Bounce,
          })
    }

  return (
    <>
    <ToastContainer
        position = "top-right"
        autoClose = {5000}
        hideProgressBar = {false}
        newstOnTop = {false}
        closeInClick
        rtl = {false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme = "light"
        />
      <ToastContainer/>

    <div className='container mx-auto py-5 px-6'>
        <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>

        <form className='max-w-2xl mx-auto' action={handleSubmit}>
            <div className='my-2'>
                <label htmlFor="name" className = "block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Name</label>
                <input value={form.name ? form.name: ""} onChange={handleChange} type='text' name='name' id='name' className='block w-full p-2 text-gray-900 boarder boarder-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            </div>
            {/* input for email */}
            <div className='my-2'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
                <input value={form.email ? form.email: ""} onChange={handleChange} type='text' name='email' id='email' className='block w-full p-2 text-gray-900 boarder boarder-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            </div>
            {/* input for username */}
            <div className='my-2'>
                <label htmlFor="username" className = "block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Username</label>
                <input value={form.username ? form.username: ""} onChange={handleChange} type='text' name='username' id='username' className='block w-full p-2 text-gray-900 boarder boarder-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            </div>
            {/* input for profile pic input for text */}
            <div className='my-2'>
                <label htmlFor="profilepic" className = "block mb-2 text-sm font-medium text-gray-900 dark:text-white" >profilepic Picture</label>
                <input value={form.profilepic ? form.profilepic: ""} onChange={handleChange} type='text' name='profilepic' id='profilepic' className='block w-full p-2 text-gray-900 boarder boarder-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            </div>
            {/* input for cover picture */}
            <div className='my-2'>
                <label htmlFor="coverpic" className = "block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Cover Picture</label>
                <input value={form.coverpic ? form.coverpic: ""} onChange={handleChange} type='text' name='coverpic' id='coverpic' className='block w-full p-2 text-gray-900 boarder boarder-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            </div>
            {/* razorpay id  */}
            
            <div className='my-2'>
                <label htmlFor="razorpayid" className = "block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Razorpay Id</label>
                <input value={form.razorpayid ? form.razorpayid: ""} onChange={handleChange} type='text' name='razorpayid' id='razorpayid' className='block w-full p-2 text-gray-900 boarder boarder-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            </div>
            {/* razorpay secrate  */}
            <div className='my-2'>
                <label htmlFor="razorpaysecrete" className = "block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Razorpay Secrete</label>
                <input value={form.razorpaysecrete ? form.razorpaysecrete: ""} onChange={handleChange} type='text' name='razorpaysecrete' id='razorpaysecrete' className='block w-full p-2 text-gray-900 boarder boarder-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            </div>

            {/* submit button */}
            <div className='my-6'>
                <button type='submit'className='block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-b focus:ring-4 focus:outline-non dark:focus:ring-blue-800 font-medium text-sm'>Save</button>

            </div>
            

        </form>
      
    </div>
    </>
  );
}

export default Dashboard;