const express = require("express");
const cors = require("cors");
const nools = require("nools");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

var Message = function (message) {
  this.text = message;
};

const flow = nools.flow("QA Flow", function (flow) {
  // Regla 1: Saludo
  flow.rule("Saludo", [Message, "q", "q.text =~ /^(hola)$/i"], function (facts) {
    facts.q.text = "¡Hola! ¿Cómo puedo ayudarte?";
    this.modify(facts.q);
  });

  // Regla 2: ¿Cómo estás?
  flow.rule("¿Cómo estás?", [Message, "q", "q.text =~ /^(¿?s?cómos?estás??)$/i"], function (facts) {
    facts.q.text = "Estoy bien, gracias por preguntar. ¿En qué puedo ayudarte?";
    this.modify(facts.q);
  });

  // Regla 3: ¿Qué podes hacer?
  flow.rule("¿Qué puedes hacer?", [Message, "q", "q.text =~ /^(¿?s?qués?podéss?hacer??)$/i"], function (facts) {
    facts.q.text = "Puedo responder preguntas predefinidas y ayudarte con información sobre TelePASE.";
    this.modify(facts.q);
  });

  // Regla 4: Adiós
  flow.rule("Adiós", [Message, "q", "q.text =~ /^(adiós)$/i"], function (facts) {
    facts.q.text = "¡Hasta luego! Que tengas un buen día.";
    this.modify(facts.q);
  });

  // Regla 5: ¿Cómo adherirme a TelePASE?
  flow.rule("¿Cómo adherirme a TelePASE?", [Message, "q", "q.text =~ /^(¿?s?cómos?adherirmes?as?telepase??)$/i"], function (facts) {
    facts.q.text = "Puedes adherirte en www.telepase.com.ar, completando el formulario online y eligiendo el método de entrega.";
    this.modify(facts.q);
  });

  // Regla 6: ¿Dónde puedo usar TelePASE?
  flow.rule("¿Dónde puedo usar TelePASE?", [Message, "q", "q.text =~ /^(¿?s?dóndes?puedos?usars?telepase??)$/i"], function (facts) {
    facts.q.text = "Puedes usar TelePASE en toda la Red de autopistas adheridas. Consulta la lista completa en www.telepase.com.ar.";
    this.modify(facts.q);
  });

  // Regla 7: ¿Qué beneficios tiene TelePASE?
  flow.rule("¿Qué beneficios tiene TelePASE?", [Message, "q", "q.text =~ /^(¿?s?qués?beneficioss?tienes?telepase??)$/i"], function (facts) {
    facts.q.text = "Te permite acceder a las autopistas sin detenerte, pagar sin efectivo y evitar filas en los peajes.";
    this.modify(facts.q);
  });

  // Regla 8: ¿Debo hacer un trámite en cada autopista?
  flow.rule("¿Debo hacer un trámite en cada autopista?", [Message, "q", "q.text =~ /^(¿?s?debos?hacers?uns?trámites?ens?cadas?autopista??)$/i"], function (facts) {
    facts.q.text = "No, solo realizas el trámite una vez y tu TelePASE será válido en toda la Red.";
    this.modify(facts.q);
  });

  // Regla 9: ¿Cómo se abona TelePASE?
  flow.rule("¿Cómo se abona TelePASE?", [Message, "q", "q.text =~ /^(¿?s?cómos?ses?abonas?telepase??)$/i"], function (facts) {
    facts.q.text = "Puedes pagar con tarjeta de crédito (Visa, Mastercard, American Express, Cabal), tarjeta de débito (Visa) o mediante MercadoPago.";
    this.modify(facts.q);
  });

  // Regla 10: ¿Qué beneficios tiene pagar con MercadoPago?
  flow.rule("¿Qué beneficios tiene pagar con MercadoPago?", [Message, "q", "q.text =~ /^(¿?s?qués?beneficioss?tienes?pagars?cons?mercadopago??)$/i"], function (facts) {
    facts.q.text = "No necesitas tarjeta de crédito ni cuenta bancaria y puedes controlar tus consumos desde la app de MercadoPago.";
    this.modify(facts.q);
  });

  // Regla 11: ¿Se emite facturación de TelePASE?
  flow.rule("¿Se emite facturación de TelePASE?", [Message, "q", "q.text =~ /^(¿?s?ses?emites?facturacións?des?telepase??)$/i"], function (facts) {
    facts.q.text = "Sí, puedes descargarla desde la web de la concesionaria correspondiente o en Autogestión en www.telepase.com.ar.";
    this.modify(facts.q);
  });

  // Regla 12: ¿Cómo accedo a mis facturas?
  flow.rule("¿Cómo accedo a mis facturas?", [Message, "q", "q.text =~ /^(¿?s?cómos?accedos?as?miss?facturas??)$/i"], function (facts) {
    facts.q.text = "Regístrate en Autogestión en www.telepase.com.ar para ver y descargar tus facturas.";
    this.modify(facts.q);
  });

  // Regla 13: ¿Hay TelePASE para motos?
  flow.rule("¿Hay TelePASE para motos?", [Message, "q", "q.text =~ /^(¿?s?hays?telepases?paras?motos??)$/i"], function (facts) {
    facts.q.text = "Sí, las motocicletas pueden adherirse completando el formulario en www.telepase.com.ar.";
    this.modify(facts.q);
  });

  // Regla 14: ¿Cuáles son las condiciones de uso de TelePASE?
  flow.rule("¿Cuáles son las condiciones de uso de TelePASE?", [Message, "q", "q.text =~ /^(¿?s?cuáless?sons?lass?condicioness?des?usos?des?telepase??)$/i"], function (facts) {
    facts.q.text = "Debes adherir el dispositivo al parabrisas y respetar las velocidades máximas (20 km/h para autos, 10 km/h para motos) y la distancia mínima de 20 metros entre vehículos.";
    this.modify(facts.q);
  });

  // Regla 15: ¿Qué hago si debo cambiar el parabrisas?
  flow.rule("¿Qué hago si debo cambiar el parabrisas?", [Message, "q", "q.text =~ /^(¿?s?qués?hagos?sis?debos?cambiars?els?parabrisas??)$/i"], function (facts) {
    facts.q.text = "Si tu dispositivo se despegó, no debe reutilizarse. Gestiona un reemplazo a través de Autogestión.";
    this.modify(facts.q);
  });

  // Regla 16: ¿Qué hago si vendo el vehículo?
  flow.rule("¿Qué hago si vendo el vehículo?", [Message, "q", "q.text =~ /^(¿?s?qués?hagos?sis?vendos?els?vehículo??)$/i"], function (facts) {
    facts.q.text = "Debes dar de baja el dispositivo para desvincularlo del auto. Puedes hacerlo en Autogestión o en un Centro de Atención.";
    this.modify(facts.q);
  });

  // Regla 17: ¿Puedo usar el TelePASE en la mano?
  flow.rule("¿Puedo usar el TelePASE en la mano?", [Message, "q", "q.text =~ /^(¿?s?puedos?usars?els?telepases?ens?las?mano??)$/i"], function (facts) {
    facts.q.text = "No, el dispositivo debe estar correctamente adherido al parabrisas del vehículo o moto.";
    this.modify(facts.q);
  });

  // Regla 18: ¿Funciona TelePASE en cualquier parabrisas?
  flow.rule("¿Funciona TelePASE en cualquier parabrisas?", [Message, "q", "q.text =~ /^(¿?s?funcionas?telepases?ens?cualquiers?parabrisas??)$/i"], function (facts) {
    facts.q.text = "Algunos parabrisas especiales requieren colocación en zonas específicas. Consulta el manual de tu vehículo o visita un Centro de Atención.";
    console.log(facts.q.text);
    this.modify(facts.q);
  });

  // Regla 19: ¿Qué pasa si un auto se pega detrás de mí en el peaje?
  flow.rule("¿Qué pasa si un auto se pega detrás de mí en el peaje?", [Message, "q", "q.text =~ /^(¿?s?qués?pasas?sis?uns?autos?ses?pegas?detráss?des?mís?ens?els?peaje??)$/i"], function (facts) {
    facts.q.text = "No se te cobrará doble, ya que el sistema solo registra una pasada por vehículo.";
    this.modify(facts.q);
  });

  // Regla 20: ¿Puedo usar el TelePASE de mi auto para un tráiler?
  flow.rule("¿Puedo usar el TelePASE de mi auto para un tráiler?", [Message, "q", "q.text =~ /^(¿?Puedo usar|Puedo utilizar) el TelePASE (para un )?(trailer)?/i"], function (facts) {
    facts.q.text = "Solo si tu TelePASE pertenece a la categoría 4. Para acarreos eventuales, utiliza las vías de pago manual.";
    this.modify(facts.q);
  });
});

app.post("/chat", async (req, res) => {
  const userQuestion = req.body.text;

  // Crear un objeto con la pregunta
  const pregunta = new Message(userQuestion.toLowerCase());

  // Crear una sesión y ejecutar las reglas
  const session = flow.getSession();
  session.assert(pregunta); // Añadimos el objeto con la pregunta al motor de reglas
  session.match(); // Ejecutamos las reglas

  // Responder con la respuesta obtenida
  res.json({ response: pregunta.text || "Lo siento, no entiendo esa pregunta." });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
