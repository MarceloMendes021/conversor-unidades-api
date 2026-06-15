exports.convertTemperature = (req, res) => {
  const { value, fromUnit, toUnit } = req.body;

  let result;

  if (value === undefined || value === null || !fromUnit || !toUnit) {
    return res.status(400).json({ error: "Todos os parametros são obrigatórios" });
  }

  if (isNaN(Number(value))) {
    return res.status(400).json({ error: "O valor fornecido é inválido" });
  }

  if (fromUnit === toUnit) {
    return res.status(400).json({ error: "As unidades de medidas utilizadas são as mesmas!" });
  }

  if (fromUnit === "Celsius") {
    if (toUnit === "Fahrenheit") {
      result = (value * 9) / 5 + 32;
    } else if (toUnit === "Kelvin") {
      result = value + 273.15;
    } else {
      return res.status(400).json({ error: "Unidade de destino não suportada" });
    }
  } else if (fromUnit === "Fahrenheit") {
    if (toUnit === "Celsius") {
      result = ((value - 32) * 5) / 9;
    } else if (toUnit === "Kelvin") {
      result = ((value - 32) * 5) / 9 + 273.15;
    } else {
      return res.status(400).json({ error: "Unidade de destino não suportada" });
    }
  } else if (fromUnit === "Kelvin") {
    if (toUnit === "Celsius") {
      result = value - 273.15;
    } else if (toUnit === "Fahrenheit") {
      result = ((value - 273.15) * 9) / 5 + 32;
    } else {
      return res.status(400).json({ error: "Unidade de destino não suportada" });
    }
  } else {
    return res.status(400).json({ error: "Unidade de origem não suportada" });
  }

  res.json({ result });
};
