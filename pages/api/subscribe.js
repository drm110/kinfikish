const axios = require("axios");

const LIST_ID = "VhVTgV";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;

    const data = {
      profiles: [{ email }],
    };

    try {
      const response = await axios.post(
        `https://a.klaviyo.com/api/v2/list/${LIST_ID}/subscribe`,
        data
      );
      res.status(200).json({ message: "Successfully subscribed!" });
    } catch (error) {
      res.status(500).json({ message: "An error occurred." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
