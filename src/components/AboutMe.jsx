import Image from "next/image";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { AiOutlineSmallDash, AiOutlineCloudDownload } from "react-icons/ai";

import { useInView } from "react-intersection-observer";

export default function AboutMe({ locale }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const viewportColorer =
    "bg-red-500 sm:bg-slate-400 md:bg-blue-500 lg:bg-yellow-300 xl:bg-purple-300 2xl:bg-orange-500";
  const viewportColore = "";

  const language = locale === "en-US" ? 0 : 1;
  const resumeName =
    locale === "en-US"
      ? "Jorge_Cambra_Resume.pdf"
      : "Jorge_Cambra_Curriculum.pdf";

  const text = [
    {
      encabezado: "About me",
      firstP:
        "I am a web developer with 2+ years of experience. I am from Camagüey, Cuba. I started programming at the age of 15 as part of the Cuban competitive programming movement. I currently live in Asunción, Paraguay. Besides programming, my main interests include mathematics, physics and sports. I always try to appreciate all kinds of creations, be they artistic, scientific or engineering related.",
      name: "Name",
      origin: "Birth Country",
      age_question: "Age",
      age_response: "Years",
      direccion: "Address",
      phone: "Phone",
      whatsapp: "Available",
      download: "DOWNLOAD",
      educacion: "EDUCATION",
      preuniversitario: "IPVCE Máximo Gómez Báez",
      enfoque_escolar_pre: "Competitive Programming Contestant",
      detalles_pre:
        "Contestant in the Ibero-American Olympiad in Informatics. Two-time silver medalist and one-time bronze medalist in the Cuban Olympiad in Informatics.",
      universidad: "Central University Marta Abreu of Las Villas",
      carrera: "Computer Science",
      enfoque_escolar_uni:
        "Mostly interested in algorithms, web browsers, web experiences, combinatorics, and computational complexity.",
    },
    {
      encabezado: "Sobre mí",
      firstP:
        "Soy un desarrollador web con más de dos años de experiencia. Soy de Camagüey, Cuba. Comencé a programar a los 15 años como parte del movimiento cubano de programación competitiva. Actualmente vivo en Asunción, Paraguay. Además de la programación, mis principales intereses incluyen las ciencias y el deporte. Siempre trato de apreciar todo tipo de creaciones, sean ellas artísticas, científicas o ingenieriles. ",
      name: "Nombre",
      origin: "Origen",
      age_question: "Edad",
      age_response: "Años",
      direccion: "Dirección",
      phone: "Teléfono",
      whatsapp: "Disponible",
      download: "DESCARGAR",
      educacion: "EDUCACIÓN",
      preuniversitario: "IPVCE Máximo Gómez Báez",
      enfoque_escolar_pre: "Concursante Programación Competitiva",
      detalles_pre:
        "Concursante en la Olimpiada Iberoamericana de Informática. Dos medallas de plata y una de bronce en la Olimpiada Cubana de Informática.",
      universidad: "Universidad Central Marta Abreu de Las Villas",
      carrera: "Ciencias de la Computación",
      enfoque_escolar_uni:
        "Prinicpalmente interesado en algoritmos, navegadores y experiencias web, combinatoria y complejidad computacional.",
    },
  ];

  return (
    <div>
      <div
        className={`2xl:mx-52 xl:mx-20 mx-10 min-h-screen ${viewportColore}`}
      >
        <div className="mt-">
          <p className="text-6xl text-black font-22 text-center">
            {text[language].encabezado}
          </p>
          <div className=" flex justify-center">
            <div className="border-b border-8 border-black mt-4 w-[150px]" />
          </div>
          <div className="flex justify-center">
            <p className="mt-8 w-[100%] md:w-[80%] xl:w-[70%] text-center">
              {text[language].firstP}
            </p>
          </div>
          <div className="mt-20  text-lg">
            <div className="flex justify-center">
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] p-2 border-2 border-black ms-1`}
              >
                <p className="text-center">
                  {text[language].name}:{" "}
                  <span className="font-bold ">Jorge Cambra</span>
                </p>
              </div>
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] px-4 py-3 border-2 border-black ms-2`}
              >
                <p className="text-center">
                  {text[language].origin}:{" "}
                  <span className="font-bold">Cuba</span>
                </p>
              </div>
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] px-4 py-3 border-2 border-black ms-2 text-xl`}
              >
                <p className="text-center">
                  {text[language].age_question}:{" "}
                  <span className="font-bold">
                    21 {text[language].age_response}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] px-4 py-3 border-2 border-black`}
              >
                <p className="text-center">
                  {text[language].direccion}:{" "}
                  <span className="font-bold">Asunción, Paraguay</span>
                </p>
              </div>
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] px-4 py-3 border-2 border-black ms-2`}
              >
                <p className="text-center">
                  {text[language].phone}:{" "}
                  <span className="font-bold">(+595) 992 571 209</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] p-2 border-2 border-black ms-3`}
              >
                <p className="text-center">
                  Email: <span className="font-bold">jcambrac@gmail.com</span>
                </p>
              </div>
              <div
                ref={ref}
                className={`fade-in-block ${
                  inView ? "fade-in" : ""
                } flex items-center bg-[#F2F2F2] p-2 border-2 border-black ms-2`}
              >
                <p className="text-center">
                  Whatsapp: <span className="font-bold"> Available </span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-20 ">
              <div className="flex items-end justify-center">
                <div className="w-[2px] h-[50px] bg-gray-600 m-2"></div>
                <div className="w-[2px] h-[70px] bg-gray-600 m-2"></div>
                <div className="w-[2px] h-[50px] bg-gray-600 m-2"></div>
              </div>
            </div>
            <div className="my-10 flex justify-center items-">
              <a href={`/${resumeName}`} download={resumeName}>
                <div className="bg-yellow-300 px-20 py-10 flex flex-col items-center justify-center">
                  <AiOutlineCloudDownload size={60} />
                  <p className=" text-xl font-bold mt-3">
                    {text[language].download} CV
                  </p>
                </div>
              </a>
            </div>
            <div className=" ">
              <div className="flex items-start justify-center">
                <div className="w-[2px] h-[50px] bg-gray-600 m-2"></div>
                <div className="w-[2px] h-[70px] bg-gray-600 m-2"></div>
                <div className="w-[2px] h-[50px] bg-gray-600 m-2"></div>
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-center items-center">
            <div className="w-[100%] md:w-[80%] xl:w-[60%]">
              <div className="flex justify-center">
                <div className=" w-fit border-black border-x">
                  <p className="mx-4 font-semibold text-2xl border-b-2 border-yellow-300">
                    {text[language].educacion}
                  </p>
                </div>
              </div>
              <div className=" shadow-lg bg- mt-6 py-8 px-6">
                <p className="text-lg">
                  <span className="font-semibold">IPVCE Máximo Gómez Báez</span>{" "}
                  <span>(2017-2020)</span>
                </p>
                <p className="font-bold text-xl mt-1">
                  {text[language].enfoque_escolar_pre}
                </p>
                <p className="mt-2">{text[language].detalles_pre}</p>
              </div>
              <div className=" shadow-lg mt-4 py-8 px-6">
                <p className="text-lg">
                  <span className="font-semibold">
                    {text[language].universidad}{" "}
                  </span>
                  <span>(2022)</span>
                </p>
                <p className="font-bold text-xl mt-1">
                  {text[language].carrera}
                </p>
                <p className="mt-2">{text[language].enfoque_escolar_uni}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
