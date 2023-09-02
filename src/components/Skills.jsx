import Image from "next/image";
import BootstrapLogo from "public/images/workedImages/Bootstrap_logo.svg.png";
import StrapiLogo from "public/images/workedImages/pngwing.com.png";
import HtmlLogo from "public/images/workedImages/HTML5_logo_and_wordmark.svg.png";
import CssLogo from "public/images/workedImages/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png";
import JSLogo from "public/images/workedImages/JavaScript-logo.png";
import GitLogo from "public/images/workedImages/git_logo.png";
import NestJsLogo from "public/images/workedImages/nestjs_logo.png";
import NextJsLogo from "public/images/workedImages/Nextjs-logo.svg.png";
import ReactLogo from "public/images/workedImages/react_logo.png";
import ExpressLogo from "public/images/workedImages/Expressjs.png";
import DockerLogo from "public/images/workedImages/docker_logo.png";
import TailwindLogo from "public/images/workedImages/tailwindcss-logotype.svg";
import TypescriptLogo from "public/images/workedImages/Typescript_logo_2020.svg.png";
import GoogleAnalyticsLogo from "public/images/workedImages/Google-Analytics-Logo.png";

export default function Skills({ locale }) {
  const viewportColorer =
    "bg-red-500 sm:bg-slate-400 md:bg-blue-500 lg:bg-yellow-300 xl:bg-purple-300 2xl:bg-orange-500";
  const viewportColore = "";

  const language = locale === "en-US" ? 0 : 1;

  const text = [
    {
      encabezado: "Skills",
    },
    {
      encabezado: "Habilidades",
    },
  ];

  const EnglishDiv = () => {
    return (
      <div>
        <p className="">
          I've used <span className="font-bold">React </span>and{" "}
          <span className="font-bold">Next.js</span> to build fast and efficient
          web applications, primarily relying on{" "}
          <span className="font-bold">Bootstrap</span> or{" "}
          <span className="font-bold">Tailwind</span> for responsive and
          visually appealing designs.
        </p>
        <p className="mt-2">
          On the backend, I've employed frameworks such as{" "}
          <span className="font-bold">Nest.js</span> and{" "}
          <span className="font-bold">Express.js</span> to develop robust and
          scalable APIs. I've managed databases using{" "}
          <span className="font-bold">MongoDB</span> , ensuring data integrity
          and seamless querying. I've successfully deployed applications on
          platforms like <span className="font-bold">DigitalOcean</span>,
          configuring server instances and optimizing performance.
        </p>
        <p className="mt-2">
          <span className="font-bold">Git</span> has been my tool for version
          control, while <span className="font-bold">Docker</span> has enabled
          consistent application deployment across various environments.
        </p>
        <p className="mt-2">
          Additionally, I've explored{" "}
          <span className="font-bold">Google Analytics</span> and{" "}
          <span className="font-bold">Meta Pixel</span> integrations, utilizing
          them to gain insights into user behavior and the effectiveness of
          marketing campaigns.
        </p>
      </div>
    );
  };

  const SpanishDiv = () => {
    return (
      <div>
        <p className="">
          He utilizado <span className="font-bold">React </span>y{" "}
          <span className="font-bold">Next.js</span> para construir aplicaciones
          web rápidas y eficientes, principalmente apoyándome en{" "}
          <span className="font-bold">Bootstrap</span> o{" "}
          <span className="font-bold">Tailwind</span> para diseños responsivos y
          visualmente atractivos.
        </p>
        <p className="mt-2">
          En el backend, he utilizado frameworks como{" "}
          <span className="font-bold">Nest.js</span> y{" "}
          <span className="font-bold">Express.js</span> para desarrollar APIs
          robustas y escalables. He gestionado bases de datos utilizando{" "}
          <span className="font-bold">MongoDB</span>, garantizando la integridad
          de los datos y la sencillez de las consultas. También he desplegado
          aplicaciones con éxito en plataformas como{" "}
          <span className="font-bold">DigitalOcean</span>, configurando
          instancias de servidor y optimizando su rendimiento.
        </p>
        <p className="mt-2">
          <span className="font-bold">Git</span> ha sido mi herramienta para el
          control de versiones, mientras que{" "}
          <span className="font-bold">Docker</span> me ha permitido desplegar
          consistentemente en variadas plataformas.
        </p>
        <p className="mt-2">
          Adicionalmente, he trabajado en integraciones con{" "}
          <span className="font-bold">Google Analytics</span> y{" "}
          <span className="font-bold">Meta Pixel</span> , utilizando estas
          herramientas para obtener información sobre comportamiento de usuario
          y efectividad de campañas de marketing.
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className={`2xl:mx-52 xl:mx-20 mx-10 ${viewportColore}`}>
        <div className="mt ">
          <p className="text-6xl text-black font-22 text-center">
            {text[language].encabezado}
          </p>
          <div className=" flex justify-center">
            <div className="border-b border-8 border-black mt-4 w-[150px]" />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className="w-[100%] md:w-[80%] xl:w-[70%]">
            <div className="mt-20 flex flex-wrap justify-center px-10 ">
              <div className="p-3">
                <Image
                  priority
                  alt="NextJsLogo"
                  src={NextJsLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  priority
                  alt="BootstrapLogo"
                  src={BootstrapLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  priority
                  alt="HtmlLogo"
                  src={HtmlLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  priority
                  alt="CssLogo"
                  src={CssLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  priority
                  alt="StrapiLogo"
                  src={StrapiLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>

              <div className="p-3">
                <Image
                  priority
                  alt="GitLogo"
                  src={GitLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  priority
                  alt="NestJsLogo"
                  src={NestJsLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  priority
                  alt="ReactLogo"
                  src={ReactLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  priority
                  alt="TailwindLogo"
                  src={TailwindLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  priority
                  alt="ExpressLogo"
                  src={ExpressLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  priority
                  alt="DockerLogo"
                  src={DockerLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>

              <div className="p-3">
                <Image
                  priority
                  alt="GoogleAnalyticsLogo"
                  src={GoogleAnalyticsLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  priority
                  alt="TypescriptLogo"
                  src={TypescriptLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Image
                  priority
                  alt="JSLogo"
                  src={JSLogo}
                  className="h-10 w-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-14 ">
              {language === 0 ? <EnglishDiv /> : <SpanishDiv />}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-48 ml-60 border-b border-2 border-black"></div> */}
    </div>
  );
}
