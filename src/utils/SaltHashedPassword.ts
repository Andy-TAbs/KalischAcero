import bcrypt from "bcryptjs";

// Función para generar el hash de la contraseña
export async function saltAndHashPassword(password: string) {
    const salt = await bcrypt.genSalt(10); // Genera un salt con un factor de costo de 10
    const hashedPassword = await bcrypt.hash(password, salt); // Hashea la contraseña utilizando el salt generado
    return hashedPassword;
}
