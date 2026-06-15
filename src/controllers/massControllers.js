exports.convertMass = (req, res) => {
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

  if (fromUnit === "Tonelada") {
    if (toUnit === "Quilograma") {
      result = value * 1000;
    } else if (toUnit === "Grama") {
      result = value * 1000000;
    } else {
      return res.status(400).json({ error: "Unidade de destino não suportada" });
    }
  } else if (fromUnit === "Quilograma") {
    if (toUnit === "Tonelada") {
      result = value / 1000;
    } else if (toUnit === "Grama") {
      result = value * 1000;
    } else {
      return res.status(400).json({ error: "Unidade de destino não suportada" });
    }
  } else if (fromUnit === "Grama") {
    if (toUnit === "Tonelada") {
      result = value / 1000000;
    } else if (toUnit === "Quilograma") {
      result = value / 1000;
    } else {
      return res.status(400).json({ error: "Unidade de destino não suportada" });
    }
  } else {
    return res.status(400).json({ error: "Unidade de origem não suportada" });
  }

  res.json({ result });
};
