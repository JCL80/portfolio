import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { Modal } from "flowbite-react";
import { useState } from "react";

export default function Contact({ locale }) {
  const viewportColorer =
    "bg-red-500 sm:bg-slate-400 md:bg-blue-500 lg:bg-yellow-300 xl:bg-purple-300 2xl:bg-orange-500";
  const viewportColore = "";
  const [showModal, setShowModal] = useState(false);
  const [mensajeEnviadoCorrectamente, setMensajeEnviadoCorrectamente] =
    useState(true);

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
      modalHeader200: "Message sent successfully",
      modalHeader500: "Message send failed",
      modalP200:
        "Your message has been received. Thank you for reaching out. I'll respond as soon as possible. If you prefer, you can also reach me on my personal number: +595 992 571 209.",
      modalP500:
        "There was an issue while sending the message. You can try sending it again, or feel free to contact me directly by calling or texting my personal number: +595 992 571 209.",
    },
    {
      encabezado: "Contacto",
      nombre: "Nombre",
      apellido: "Apellido",
      message: "Mensaje",
      send_message: "Enviar Mensaje",
      direccion: "DIRECCIÓN",
      phone: "TELÉFONO",
      modalHeader200: "Mensaje enviado correctamente",
      modalHeader500: "Error al enviar el mensaje",
      modalP200:
        "Su mensaje ha sido recibido. Gracias por ponerse en contacto. Responderé tan pronto como sea posible. Si prefiere, también puede escribir o llamar a mi número personal: +595 992 571 209.",
      modalP500:
        "Ha habido un problema al enviar el mensaje. Puede intentar enviarlo nuevamente o, si prefieree, puede contactarme directamente llamando o enviando un mensaje a mi número personal: +595 992 571 209.",
    },
  ];

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/sendEmail", data);
      const { status } = res;
      setMensajeEnviadoCorrectamente(true);
    } catch (err) {
      setMensajeEnviadoCorrectamente(false);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("Su nombre es necesario"),
    apellido: Yup.string().required("Su apellido es requerido"),
    email: Yup.string().email().required("Su correo es requerido"),
    mensaje: Yup.string().required("Su mensaje es requerido"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  return (
    <div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <Modal.Header>
          <p
            className={`${
              mensajeEnviadoCorrectamente ? "text-green-400" : "text-red-400"
            }`}
          >
            {mensajeEnviadoCorrectamente
              ? text[language].modalHeader200
              : text[language].modalHeader500}
          </p>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {mensajeEnviadoCorrectamente
                ? text[language].modalP200
                : text[language].modalP500}
            </p>
          </div>
        </Modal.Body>
      </Modal>
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
            <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex">
                <div className=" w-[50%] pr-1">
                  <div className="relative">
                    <input
                      {...register("nombre")}
                      type="text"
                      id="floating_outlined"
                      className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                        errors.nombre
                          ? "focus:border-red-600"
                          : "focus:border-blue-600"
                      }  peer`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#ecf0f3] dark:bg-gray-900 px-2 peer-focus:px-2 ${
                        errors.nombre
                          ? "peer-focus:text-red-600"
                          : "peer-focus:text-blue-600"
                      } peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                    >
                      {text[language].nombre}
                    </label>
                  </div>
                </div>
                <div className=" w-[50%] pl-1">
                  <div className="relative">
                    <input
                      {...register("apellido")}
                      type="text"
                      id="floating_outlined"
                      className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                        errors.apellido
                          ? "focus:border-red-600"
                          : "focus:border-blue-600"
                      } peer`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#ecf0f3] dark:bg-gray-900 px-2 peer-focus:px-2 ${
                        errors.apellido
                          ? "peer-focus:text-red-600"
                          : "peer-focus:text-blue-600"
                      }  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                    >
                      {text[language].apellido}
                    </label>
                  </div>
                </div>
              </div>

              <div className="relative mt-6">
                <input
                  {...register("email")}
                  type="text"
                  id="floating_outlined"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                    errors.email
                      ? "focus:border-red-600"
                      : "focus:border-blue-600"
                  } peer`}
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#ecf0f3] dark:bg-gray-900 px-2 peer-focus:px-2 ${
                    errors.email
                      ? "peer-focus:text-red-600"
                      : "peer-focus:text-blue-600"
                  }  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                >
                  Email
                </label>
              </div>
              <div className="mt-6">
                <div className=" w-[100%]">
                  <div className="relative">
                    <textarea
                      {...register("mensaje")}
                      type="text"
                      id="floating_outlined"
                      className={`${
                        errors.mensaje
                          ? "focus:border-red-600"
                          : "focus:border-blue-600"
                      } h-36 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-2 border-black appearance-none  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#ecf0f3] dark:bg-gray-900 px-2 peer-focus:px-2 ${
                        errors.mensaje
                          ? "peer-focus:text-red-600"
                          : "peer-focus:text-blue-600"
                      }  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                    >
                      {text[language].message}
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className=" w-[100%]">
                  <div className="flex justify-center py-4 bg-yellow-300">
                    {/* <button className="font-bold text-lg"> */}
                    <button
                      type="submit"
                      className="text-gray-900 bg-transparent  rounded-lg  font-bold text-lg shadow-none normal-case"
                    >
                      {text[language].send_message}
                    </button>
                    {/* </button> */}
                  </div>
                </div>
              </div>
            </form>
            {/* <div className="mt-20">
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
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-48 ml-60 border-b border-2 border-black"></div>
    </div>
  );
}
