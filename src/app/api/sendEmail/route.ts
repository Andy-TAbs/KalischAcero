import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, lastname, email, phonenum, city, rfc, company, products } = await request.json();

  // Aquí puedes agregar validaciones adicionales si es necesario

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'andrestavarestt@gmail.com',
    subject: 'Nueva Cotización',
    html: `
      <p>Nombre: ${name}</p>
      <p>Apellido(s): ${lastname}</p>
      <p>Correo Electrónico: ${email}</p>
      <p>Teléfono/Celular: ${phonenum}</p>
      <p>Ciudad: ${city}</p>
      <p>RFC: ${rfc}</p>
      <p>Empresa: ${company}</p>
      <p>Productos: ${products}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email', error: (error as any).message }), { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: true, // Permitir el análisis del cuerpo de la solicitud
  },
};
