import Image from "next/image";
import MilesMorales from "public/images/wallpapersden.com_spider-man-miles-morales-black-and-red-suit_600x600.jpg";
import tmpAvatar from "public/images/tmpAvatar.png";
import { Kalam, Jost } from "@next/font/google";
import signature_1 from "public/images/signature_1.png";

const kalam = Kalam({ subsets: ["latin"], weight: "300" });
const jost = Jost({ subsets: ["latin"], weight: "300" });

function Main({ showSideBar, setShowSideBar, locale }) {
  const viewportColorer =
    "bg-red-500 sm:bg-slate-400 md:bg-blue-500 lg:bg-yellow-300 xl:bg-purple-300 2xl:bg-orange-500";
  const viewportColore = "";

  const language = locale === "en-US" ? 0 : 1;
  const text = [
    {
      encabezado1: "Website",
      encabezado2: "Developer",
      zeroP: "Hello, my name is",
      firstP:
        "I am a programmer with a strong drive for continuous learning and growth. My main expertise lies in working with the JavaScript language and its related technologies.",
      secondP:
        "I really enjoy building stuff, no matter the subject or how complex it is. Honestly, it feels great to know I've made a difference for someone in some way.",
      thirdP:
        "I'm a firm believer in the potential of web technologies, starting with web browsers becoming more advanced and the internet becoming even more accessible.",
    },
    {
      encabezado1: "Desarrollador",
      encabezado2: "Web",
      zeroP: "Hola, mi nombre es",
      firstP:
        "Soy un programador con una fuerte motivación por aprender y crecer continuamente. Mi experiencia principal radica en el lenguaje JavaScript y sus tecnologías relacionadas.",
      secondP:
        "Realmente disfruto construir, sin importar el tema o complejidad del proyecto. Me siento feliz al saber que he hecho una diferencia para alguien de alguna manera.",
      thirdP:
        "Soy un firme creyente en el potencial de las tecnologías web, principalmente en los navegadores web volviéndose más potentes, y el acceso a internet aún más generalizado.",
    },
  ];

  return (
    <div>
      <div className={`2xl:mx-52 xl:mx-20 mx-10 md:h-screen ${viewportColore}`}>
        <div className=" w-full h-full p-2 flex flex-col md:flex-row flex-1 items-center justify-center">
          <div className="w-[100%] px-0 md:px-8 md:w-[80%] xl:w-[60%] mt-10 order-2 md:order-1 ">
            <p className="text-5xl text-black font-22">
              {text[language].encabezado1}
            </p>
            <p className="text-5xl text-black">{text[language].encabezado2}</p>
            <div className=" border-b border-black border-8 mt-6 w-[200px]" />
            <div className="mt-6">
              <p className="text-xl">
                {text[language].zeroP}{" "}
                <span className={`${kalam.className}`}>Jorge Cambra</span>.
              </p>

              <p className="mt-2">{text[language].firstP}</p>
              <p className="mt-2">{text[language].secondP}</p>
              <p className="mt-2">{text[language].thirdP}</p>
              {/* <Image className="mt-2" src={signature_1} /> */}
            </div>
            <div className="mt-6 text-3xl font-semibold">
              <p className={`${kalam.className} font-bold`}>JCL80</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className=" border-black border-4 p-2 mt-10 md:mt-0">
              <div className=" border-black border-4">
                <Image
                  priority
                  alt="JCL80_Avatar"
                  src={tmpAvatar}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
