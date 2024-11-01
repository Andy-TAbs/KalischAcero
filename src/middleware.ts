import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // Si el usuario no está autenticado y trata de ir al dashboard, redirigirlo a la página de inicio de sesión
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/Iniciar-Sesion", req.url));
  }

  // Si el usuario está autenticado y trata de ir a la página de inicio de sesión, redirigirlo al dashboard
  if (token && pathname === "/Iniciar-Sesion") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Continuar con el middleware de NextAuth si no se cumplen las condiciones anteriores
  return NextResponse.next();
}

// Configuración para aplicar el middleware en las rutas especificadas
export const config = {
  matcher: ["/Iniciar-Sesion", "/dashboard/:path*"],
};
