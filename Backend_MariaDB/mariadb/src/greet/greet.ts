import { Hono } from "hono";
import { Greet, Param } from "../greet/greet.mariadb";

// Crear una instancia de Hono
const greet = new Hono();

// Obtener todos los saludos
greet.get("/greet", async (c) => {
  const result = await Greet.findAll();  // Obtener todos los saludos
  return c.json(result);  // Devolver la respuesta en formato JSON
});

// Obtener un saludo por su ID
greet.get("/greet/:id", async (c) => {
  const id = Number(c.req.param("id"));  // Obtener el ID de los parámetros de la URL
  const result = await Greet.findById(id);  // Buscar el saludo por ID
  if (result) {
    return c.json(result);  // Si se encuentra el saludo, devolverlo en JSON
  } else {
    return c.notFound();  // Si no se encuentra, devolver un error 404
  }
});

// Crear un nuevo saludo
greet.post("/greet", async (c) => {
  const param = await c.req.json();  // Obtener el cuerpo de la solicitud (el saludo)
  const result = await Greet.create(param as Param);  // Crear el saludo en la base de datos
  return c.json(result, 201);  // Devolver el resultado con un código de estado 201
});

greet.put("/greet/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const param = await c.req.json();
  const result = await Greet.update(id, param as Param); // Actualizar el saludo por ID
  return result ? c.json(result) : c.notFound(); // Si existe, devolverlo; si no, error 404
});

greet.delete("/greet/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const result = await Greet.delete(id); // Eliminar el saludo por ID
  return result ? c.json({ message: "Deleted successfully" }) : c.notFound();
});
greet.get("/greet/stats", async (c) => {
  try {
    console.log("Solicitud recibida en /greet/stats");

    let total;
    let counts;

    try {
      console.log("Intentando obtener el total de registros...");
      total = await Greet.countTotal();
      console.log("Total obtenido correctamente:", total);
    } catch (error) {
      console.error("Error en countTotal:", error);
      total = { total: 0 }; // Valor por defecto
    }

    try {
      console.log("Intentando obtener el conteo por idioma...");
      counts = await Greet.countByLanguage();
      console.log("Conteo por idioma obtenido correctamente:", counts);
    } catch (error) {
      console.error("Error en countByLanguage:", error);
      counts = []; // Valor por defecto
    }

    console.log("Preparando respuesta JSON...");
    return c.json({
      total: total.total,
      counts: counts,
    });
  } catch (error) {
    console.error("Error general en /greet/stats:", error);
    
    // Enviar el mensaje de error como parte de la respuesta JSON
    return c.json({
  error: "Ocurrió un error en el servidor",
  details: error instanceof Error ? error.message : String(error)
}, 500);
  }
});


export default greet;
