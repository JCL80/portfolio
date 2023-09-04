const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  try {
    const { nombre, apellido, email, mensaje } = req.body;
    const styledParagraph = `<p style="font-size: 20px;">Contact Request From Your Portfolio Website</p>  
  <p style="font-size:18px">Name: ${nombre}</p>
  <p style="font-size:18px">Last Name: ${apellido}</p>
  <p style="font-size:18px">Email: ${email}</p>
  <p style="font-size:18px">Mensaje: ${mensaje}</p>
  `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.nodemailer_email,
        pass: process.env.nodemailer_app_password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const nodemailer_res = await transporter.sendMail({
      from: process.env.nodemailer_email,
      to: "jcambrac@gmail.com",
      subject: "Contact Request",
      html: styledParagraph,
    });
    res.status(200).json({ msg: "Evento enviado correctamente" });
  } catch (err) {
    console.log("***** error en el envio del email *****", err);
    res.status(500).json({
      msg: "El mensaje no ha podido ser enviado, por favor contacteme via whatsapp",
    });
  }
}
