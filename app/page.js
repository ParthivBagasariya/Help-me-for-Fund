import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base">
     <div className="font-bold flex gap-2 justify-center items-center md:text-5xl text-xl">Help Me For Fund <span > <img className="invertImg" src="/Maincoin.gif" width={40} alt="" /> </span> </div>
     <p className="text-center md:text-left">
      A crowdfunding plateform for creators. 
     </p>
    <p className="text-center md:text-left">
        Get funded by your fans and followers. Start now!
      </p>
     <div>
        <Link  href={"/login"}>
     <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
     </Link>

    <Link href={"/about"}>
     <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
    </Link>
     
     </div>
    </div>
     <div className="bg-white h-1 opacity-10">
     </div>
     <div className="text-white container mx-auto pb-32 pt-14 px-10">
      <h2 className="text-2xl font-bold text-center mb-8"> Your fans can buy you a Chai</h2>
      <div className="flex gap-5 justify-around ">
      <div className="item space-y-3 flex flex-col items-center justify-center">
              <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/Conslutant.gif" alt=""/>
              <p className="font-bold ">Fund Yourself</p>
              <p className="text-center">Your fans are avilable for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
              <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt=""/>
              <p className="font-bold">Fans want to help</p>
              <p className="text-center">Your fans are avilable for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
              <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/people.gif" alt=""/>
              <p className="font-bold">Fans want to help</p>
              <p className="text-center">Your fans are avilable for you to help you</p>
          </div>
      </div>
     </div>

     <div className="bg-white h-1 opacity-10">
     </div>

     <div className="text-white container mx-auto pb-32 pt-14">
      <h2 className="text-2xl font-bold text-center mb-8"> Learn more about us</h2>
      <div className="flex gap-5 justify-around ">
      <div className="item space-y-3 flex flex-col items-center justify-center">
              <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/Global.gif" alt=""/>
              <p className="font-bold">Global Recognization</p>
              <p className="text-center">Your fans are avilable for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
              <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/StarRating.gif" alt=""/>
              <p className="font-bold">5 ️⭐️ Rating</p>
              <p className="text-center">Your fans are avilable for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
              <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/onTime.gif" alt=""/>
              <p className="font-bold">On Time</p>
              <p className="text-center">Your fans are avilable for you to help you</p>
          </div>
      </div>
     </div>
    </>
  );
}
