import nodemailer from 'nodemailer';
import { connectToCotDatabase } from '@/../lib/db-cot'; // Asegúrate de que la ruta sea correcta

export async function POST(request: Request) {
  // Desestructuración de datos de la solicitud
  const { name, email, phonenum, city, suggestion, asunto, message } = await request.json();

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
    subject: asunto,
    html: `
        <p>Nombre: ${name}</p>
        <p>Correo Electrónico: ${email}</p>
        <p>Teléfono/Celular: ${phonenum}</p>
        <p>Ciudad: ${city}</p>
        <p>Productos: ${message}</p>
    `,
  };

  try {
    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // Conectar a la base de datos de cotizaciones y guardar los datos
    const db = await connectToCotDatabase();
    const collection = db.collection('Contacto'); // Asegúrate de que 'cotizaciones' sea el nombre correcto de la colección
    await collection.insertOne({ name, email, phonenum, city, suggestion, asunto, message });

    // Responder al cliente
    return new Response(JSON.stringify({ message: 'Email sent and data stored successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ message: 'Failed to process request', error: (error as any).message }), { status: 500 });
  }
}

export const runtime = 'nodejs';

