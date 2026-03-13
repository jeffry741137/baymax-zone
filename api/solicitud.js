export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { servicio, correo_cliente } = req.body;

  console.log("Nueva solicitud:");
  console.log("Servicio:", servicio);
  console.log("Correo:", correo_cliente);

  return res.status(200).json({
    ok: true
  });

}
