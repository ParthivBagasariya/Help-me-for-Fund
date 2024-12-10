"use client"
import React,{useEffect, useState} from 'react';
import Script from 'next/script';
import { initiate } from '@/action/useraction';
import { fetchuser,fetchpayments} from '@/action/useraction';
import { useRouter, useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useSession } from 'next-auth/react';

const PaymentPage = ({username}) => {

    const [paymentform, setpaymentform] = useState({name:"",message:""})
    const [currentUser,setcurrentUser] = useState({ })
    const [payments,setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(()=>{
      getData()
    },[])

    useEffect(()=>{
      if(searchParams.get("paymentdone") == "true"){
        toast('Thanks for your donation',{
          position : "top-right",
          autoClose : 5000,
          hideProgressBar : false,
          closeOnClick : true,
          pauseOnHover : true,
          draggable : true,
          progress : undefined,
          theme : "light",
          transition : Bounce,
        },[])
      }
      router.push(`${username}`)
    })

    const handleChange = (e) => {
        setpaymentform({...paymentform,[e.target.name] : e.target.value})
    }
     const getData = async () =>{
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
        console.log(u.dbpayments)
     }

    const pay = async (amount) => {
        let a = await initiate(amount,username,paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid , // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "get me a chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
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
    <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

<div className='cover w-full relative'>
          <img className='object-cover w-full h-48 md:h-[350]' src='/coverimage.gif' alt=''/>
          <div className='absolute -bottom-14 right-[46%] border-white border-2 rounded-full'>
            <img className='rounded-full' width={100} height={100} src='/profilepic.gif' alt=''/>
          </div>
        </div>
        <div className='info  flex justify-center items-center my-16 flex-col gap-2 '>
          <div className='font-bold text-lg '>
          @{username}
          </div>
          <div className='text-slate-400'> lets help {username} get a chai! </div>
          <div className='text-slate-400'> {payments.length} payments. {currentUser.name} hase raised ₹{payments.reduce ((a,b)=> a + b.amount,0)} raised</div>


          <div className='payment flex gap-3 w-[80%] mt-11 flex-col md:flex-row'>
            <div className='supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10'>
              <h2 className='text-2xl  font-bold my-5'>Top 10 Suppoters</h2>
              <ul className='mx-5 text-lg'>
                {payments.length == 0 && <li>No payments yet</li>}
                {payments.map((p,i)=>{
                 return <li key={i} className='my-4 flex gap-2 items-center'>
                    <img width={33} src='/avtar.gif' alt='user avtar'/>
                    <span>
                      {p.name} donated <span className='font-bold'>  ₹{p.amount}</span> with a message "{p.message}"
                    </span>
                </li>
                   
                })}
              </ul>
            </div>
            <div className='makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10 '>
              <h2 className='text-2xl font-bold my-5'>Make a payment</h2>
                <div className='flex gap-2 flex-col'>
                  <div>
                  <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                  </div>
                  <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                  <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                  <button onClick={()=> pay(Number.parseInt(paymentform.amount) * 100)}  type="button" className="text-white bg-gradient-to-br   hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled : from-purple-600 "disabled = {paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}>Pay</button>
                </div>
                {/* Or choose from these amounts */}
                <div className='flex flex-col md:flex-row gap-2 mt-5'>
                    <button className='bg-slate-800 p-3 rounded-lg' onClick={()=> pay(1000)} >pay ₹10</button>
                    <button className='bg-slate-800 p-3 rounded-lg' onClick={()=> pay(2000)} >pay ₹20</button>
                    <button className='bg-slate-800 p-3 rounded-lg' onClick={()=> pay(3000)} >pay ₹30</button>
                </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default PaymentPage;
