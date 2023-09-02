export default function Contact({ locale }) {
  const viewportColorer =
    "bg-red-500 sm:bg-slate-400 md:bg-blue-500 lg:bg-yellow-300 xl:bg-purple-300 2xl:bg-orange-500";
  const viewportColore = "";

  const language = locale === "en-US" ? 0 : 1;

  const text = [
    {
      encabezado: "Contact",
      nombre: "First Name",
      apellido: "Last Name",
      message: "Message",
      send_message: "Send Message",
      direccion: "ADDRESS",
      phone: "PHONE",
    },
    {
      encabezado: "Contacto",
      nombre: "Nombre",
      apellido: "Apellido",
      message: "Mensaje",
      send_message: "Enviar Mensaje",
      direccion: "DIRECCIÓN",
      phone: "TELÉFONO",
    },
  ];

  return (
    <div>
      <div className={`2xl:mx-52 xl:mx-20 mx-10 ${viewportColore}`}>
        <div className="mt">
          <p className="text-6xl text-black font-22 text-center">
            {text[language].encabezado}
          </p>
          <div className=" flex justify-center">
            <div className="border-b border-8 border-black mt-4 w-[150px]" />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className="w-[100%] md:w-[80%] xl:w-[80%]">
            <div className="mt-20">
              <div className="flex">
                <div className=" w-[50%] pr-1">
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#ecf0f3] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      {text[language].nombre}
                    </label>
                  </div>
                </div>
                <div className=" w-[50%] pl-1">
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#ecf0f3] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      {text[language].apellido}
                    </label>
                  </div>
                </div>
              </div>

              <div className="relative mt-6">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#ecf0f3] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>
              <div className="mt-6">
                <div className=" w-[100%]">
                  {/* <div className="border-2 border-black py-3 px-4">
                <textarea className="w-[100%] h-36 outline-none focus:border-transparent focus:ring-0 !bg-transparent border-0" />
              </div> */}
                  <div className="relative">
                    <textarea
                      type="text"
                      id="floating_outlined"
                      className=" h-36 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-2 border-black appearance-none  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#ecf0f3] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      {text[language].message}
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className=" w-[100%]">
                  <div className="flex justify-center py-4 bg-yellow-300">
                    <span className="font-bold text-lg ">
                      {text[language].send_message}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div className="flex items-center flex-col">
                <p>{text[language].direccion}</p>
                <p className="mt-2 text-xl font-bold">
                  San Pablo, Asunción, Paraguay
                </p>{" "}
              </div>
              <div className="flex items-center flex-col mt-20">
                <p>{text[language].phone}</p>
                <p className="mt-2 text-xl font-bold">
                  (+595) 992-571-209
                </p>{" "}
              </div>
              <div className="flex items-center flex-col mt-20">
                <p>EMAIL</p>
                <p className="mt-2 text-xl font-bold">
                  jcambrac@gmail.com
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48 ml-60 border-b border-2 border-black"></div>
    </div>
  );
}

{
  /* <div className="mt-6">
            <div className=" w-[100%]">
              <div className="border-2 border-black py-3 px-4">
                <input className="w-[100%] outline-none bg-transparent" />
              </div>
            </div>
          </div> */
}
