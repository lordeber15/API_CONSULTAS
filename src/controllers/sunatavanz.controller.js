const axios = require("axios");
const { TOKEN } = process.env;
const getRucAvanz = async (req, res) => {
  const ruc = req.params.ruc;
  console.log(req.params.ruc);
  //  const token = "apis-token-16299.1l9ndIMxkIIiHfeLTQiTF8cxGNvDoFkt";

  try {
    const response = await axios.get(
      `https://api.decolecta.com/v1/sunat/ruc/full?numero=${ruc}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error al consultar Ruc Avanzado:",
      error.response?.data || error.message
    );
    res
      .status(500)
      .json({
        error: "Error al consultar RUC Avanzado:" && error.response?.data,
      });
  }
};

module.exports = {
  getRucAvanz,
};
