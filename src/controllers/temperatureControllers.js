exports.convertTemperature = (req, res) => {
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

  if (fromUnit === "Celsius") {
    if (toUnit === "Fahrenheit") {
      result = (value * 9) / 5 + 32;
    } else if (toUnit === "Kelvin") {
      result = value + 273.15;
    }
  } else if (fromUnit === "Fahrenheit") {
    if (toUnit === "Celsius") {
      result = ((value - 32) * 5) / 9;
    } else if (toUnit === "Kelvin") {
      result = ((value - 32) * 5) / 9 + 273.15;
    }
  } else if (fromUnit === "Kelvin") {
    if (toUnit === "Celsius") {
      result = value - 273.15;
    } else if (toUnit === "Fahrenheit") {
      result = ((value - 273.15) * 9) / 5 + 32;
    }
  }

  res.json(result);
};
