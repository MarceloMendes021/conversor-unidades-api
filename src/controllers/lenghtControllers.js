exports.convertLength = (req, res) => {
  const { value, fromUnit, toUnit } = req.body;

  let result;

  if (!fromUnit || !toUnit || !value) {
    return res
      .status(400)
      .json({ error: "Todos os parametros são obrigatórios" });
  }

  if (fromUnit === toUnit) {
    return res
      .status(400)
      .json({ error: "As unidades de medidas utilizadas são as mesmas!" });
  }

  if (fromUnit === "Quilometro") {
    if (toUnit === "Metro") {
      result = value * 1000;
    } else if (toUnit === "Centimetro") {
      result = value * 100000;
    }
  } else if (fromUnit === "Metro") {
    if (toUnit === "Quilometro") {
      result = value / 1000;
    } else if (toUnit === "Centimetro") {
      result = value * 100;
    }
  } else if (fromUnit === "Centimetro") {
    if (toUnit === "Quilometro") {
      result = value / 100000;
    } else if (toUnit === "Metro") {
      result = value / 100;
    }
  }

  res.json(result);
};
