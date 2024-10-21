import nodemailer from 'nodemailer';
import { connectToCotDatabase } from '@/../lib/db-cot'; // Asegúrate de que la ruta sea correcta

export async function POST(request: Request) {
  // Desestructuración de datos de la solicitud
  const { name, lastname, email, phonenum, city, rfc, company, products } = await request.json();

  // Configuración de Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Opciones del correo electrónico
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
    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // Conectar a la base de datos de cotizaciones y guardar los datos
    const db = await connectToCotDatabase();
    const collection = db.collection('cotizaciones'); // Asegúrate de que 'cotizaciones' sea el nombre correcto de la colección
    await collection.insertOne({ name, lastname, email, phonenum, city, rfc, company, products });

    // Responder al cliente
    return new Response(JSON.stringify({ message: 'Email sent and data stored successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ message: 'Failed to process request', error: (error as any).message }), { status: 500 });
  }
}

export const runtime = 'nodejs';

