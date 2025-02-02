// qaRules.js
module.exports = function defineRules(qa) {
  const rules = [
    {
      name: "Regla 1: Saludo",
      condition: (fact) => fact.question.toLowerCase() === "hola",
      action: (fact) => {
        fact.answer = "¡Hola! ¿Cómo puedo ayudarte?";
      },
    },
    {
      name: "Regla 2: ¿Cómo estás?",
      condition: (fact) => fact.question.toLowerCase() === "¿cómo estás?",
      action: (fact) => {
        fact.answer = "Estoy bien, gracias por preguntar. ¿En qué puedo ayudarte?";
      },
    },
    {
      name: "Regla 3: ¿Qué puedes hacer?",
      condition: (fact) => fact.question.toLowerCase() === "¿qué puedes hacer?",
      action: (fact) => {
        fact.answer = "Puedo responder preguntas predefinidas y ayudarte con información sobre TelePASE.";
      },
    },
    {
      name: "Regla 4: Adiós",
      condition: (fact) => fact.question.toLowerCase() === "adiós",
      action: (fact) => {
        fact.answer = "¡Hasta luego! Que tengas un buen día.";
      },
    },
    {
      name: "Regla 5: ¿Cómo adherirme a TelePASE?",
      condition: (fact) => fact.question.toLowerCase() === "¿cómo adherirme a telepase?",
      action: (fact) => {
        fact.answer = "Puedes adherirte en www.telepase.com.ar, completando el formulario online y eligiendo el método de entrega.";
      },
    },
    {
      name: "Regla 6: ¿Dónde puedo usar TelePASE?",
      condition: (fact) => fact.question.toLowerCase() === "¿dónde puedo usar telepase?",
      action: (fact) => {
        fact.answer = "Puedes usar TelePASE en toda la Red de autopistas adheridas. Consulta la lista completa en www.telepase.com.ar.";
      },
    },
    {
      name: "Regla 7: ¿Qué beneficios tiene TelePASE?",
      condition: (fact) => fact.question.toLowerCase() === "¿qué beneficios tiene telepase?",
      action: (fact) => {
        fact.answer = "Te permite acceder a las autopistas sin detenerte, pagar sin efectivo y evitar filas en los peajes.";
      },
    },
    {
      name: "Regla 8: ¿Debo hacer un trámite en cada autopista?",
      condition: (fact) => fact.question.toLowerCase() === "¿debo hacer un trámite en cada autopista?",
      action: (fact) => {
        fact.answer = "No, solo realizas el trámite una vez y tu TelePASE será válido en toda la Red.";
      },
    },
    {
      name: "Regla 9: ¿Cómo se abona TelePASE?",
      condition: (fact) => fact.question.toLowerCase() === "¿cómo se abona telepase?",
      action: (fact) => {
        fact.answer = "Puedes pagar con tarjeta de crédito (Visa, Mastercard, American Express, Cabal), tarjeta de débito (Visa) o mediante MercadoPago.";
      },
    },
    {
      name: "Regla 10: ¿Qué beneficios tiene pagar con MercadoPago?",
      condition: (fact) => fact.question.toLowerCase() === "¿qué beneficios tiene pagar con mercadopago?",
      action: (fact) => {
        fact.answer = "No necesitas tarjeta de crédito ni cuenta bancaria y puedes controlar tus consumos desde la app de MercadoPago.";
      },
    },
    {
      name: "Regla 11: ¿Se emite facturación de TelePASE?",
      condition: (fact) => fact.question.toLowerCase() === "¿se emite facturación de telepase?",
      action: (fact) => {
        fact.answer = "Sí, puedes descargarla desde la web de la concesionaria correspondiente o en Autogestión en www.telepase.com.ar.";
      },
    },
    {
      name: "Regla 12: ¿Cómo accedo a mis facturas?",
      condition: (fact) => fact.question.toLowerCase() === "¿cómo accedo a mis facturas?",
      action: (fact) => {
        fact.answer = "Regístrate en Autogestión en www.telepase.com.ar para ver y descargar tus facturas.";
      },
    },
    {
      name: "Regla 13: ¿Hay TelePASE para motos?",
      condition: (fact) => fact.question.toLowerCase() === "¿hay telepase para motos?",
      action: (fact) => {
        fact.answer = "Sí, las motocicletas pueden adherirse completando el formulario en www.telepase.com.ar.";
      },
    },
    {
      name: "Regla 14: ¿Cuáles son las condiciones de uso de TelePASE?",
      condition: (fact) => fact.question.toLowerCase() === "¿cuáles son las condiciones de uso de telepase?",
      action: (fact) => {
        fact.answer = "Debes adherir el dispositivo al parabrisas y respetar las velocidades máximas (20 km/h para autos, 10 km/h para motos) y la distancia mínima de 20 metros entre vehículos.";
      },
    },
    {
      name: "Regla 15: ¿Qué hago si debo cambiar el parabrisas?",
      condition: (fact) => fact.question.toLowerCase() === "¿qué hago si debo cambiar el parabrisas?",
      action: (fact) => {
        fact.answer = "Si tu dispositivo se despegó, no debe reutilizarse. Gestiona un reemplazo a través de Autogestión.";
      },
    },
    {
      name: "Regla 16: ¿Qué hago si vendo el vehículo?",
      condition: (fact) => fact.question.toLowerCase() === "¿qué hago si vendo el vehículo?",
      action: (fact) => {
        fact.answer = "Debes dar de baja el dispositivo para desvincularlo del auto. Puedes hacerlo en Autogestión o en un Centro de Atención.";
      },
    },
    {
      name: "Regla 17: ¿Puedo usar el TelePASE en la mano?",
      condition: (fact) => fact.question.toLowerCase() === "¿puedo usar el telepase en la mano?",
      action: (fact) => {
        fact.answer = "No, el dispositivo debe estar correctamente adherido al parabrisas del vehículo o moto.";
      },
    },
    {
      name: "Regla 18: ¿Funciona TelePASE en cualquier parabrisas?",
      condition: (fact) => fact.question.toLowerCase() === "¿funciona telepase en cualquier parabrisas?",
      action: (fact) => {
        fact.answer = "Algunos parabrisas especiales requieren colocación en zonas específicas. Consulta el manual de tu vehículo o visita un Centro de Atención.";
      },
    },
    {
      name: "Regla 19: ¿Qué pasa si un auto se pega detrás de mí en el peaje?",
      condition: (fact) => fact.question.toLowerCase() === "¿qué pasa si un auto se pega detrás de mí en el peaje?",
      action: (fact) => {
        fact.answer = "No se te cobrará doble, ya que el sistema solo registra una pasada por vehículo.";
      },
    },
    {
      name: "Regla 20: ¿Puedo usar el TelePASE de mi auto para un tráiler?",
      condition: (fact) => fact.question.toLowerCase() === "¿puedo usar el telepase de mi auto para un tráiler?",
      action: (fact) => {
        fact.answer = "Solo si tu TelePASE pertenece a la categoría 4. Para acarreos eventuales, utiliza las vías de pago manual.";
      },
    },
  ];

  return qa;
};
