import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <div className="2xl:mx-52 xl:mx-20 mx-10">
        <div className="mt-56">
          <p className="text-6xl text-black font-22 text-center">Contact</p>
          <div className=" flex justify-center">
            <div className="border-b border-8 border-black mt-4 w-[150px]" />
          </div>
        </div>
        <div className="mt-20">
          <div className="flex">
            <div className=" w-[50%] pr-1">
              <div className="border-2 border-black py-3 px-4">
                <input className="w-[100%] outline-none bg-transparent" />
              </div>
            </div>
            <div className=" w-[50%] pl-1">
              <div className="border-2 border-black py-3 px-4">
                <input className="w-[100%] outline-none bg-transparent" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className=" w-[100%]">
              <div className="border-2 border-black py-3 px-4">
                <input className="w-[100%] outline-none bg-transparent" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className=" w-[100%]">
              <div className="border-2 border-black py-3 px-4">
                <textarea className="w-[100%] h-36 outline-none bg-transparent" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className=" w-[100%]">
              <div className="flex justify-center py-4 bg-yellow-300">
                <span className="font-bold text-lg ">Send Message</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center flex-col">
            <p>ADDRESS</p>
            <p className="mt-2 text-xl font-bold">
              San Pablo, Asunción, Paraguay
            </p>{" "}
          </div>
          <div className="flex items-center flex-col mt-20">
            <p>PHONE</p>
            <p className="mt-2 text-xl font-bold">(+595) 992-571-209</p>{" "}
          </div>
          <div className="flex items-center flex-col mt-20">
            <p>EMAIL</p>
            <p className="mt-2 text-xl font-bold">jcambrac@gmail.com</p>{" "}
          </div>
        </div>
      </div>
      <div className="mt-48 ml-60 border-b border-2 border-black"></div>
    </div>
  );
}
