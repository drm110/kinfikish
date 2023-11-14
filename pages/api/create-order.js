const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
import { isEmpty } from "lodash";

const api = new WooCommerceRestApi({
  url: "https://kinkifish.com",
  consumerKey: "ck_fcc6029c09cba6569c2dc30940d539ceb66b8266",
  consumerSecret: "cs_6822e9d4a541cd7a2be41d01e32f19236ceb7ae1",
  version: "wc/v3", // API version
});

/**
 * Create order endpoint.
 *
 * @see http://woocommerce.github.io/woocommerce-rest-api-docs/?javascript#create-an-order
 *
 * @param {Object} req Request.
 * @param {Object} res Response.
 *
 * @return {Promise<{orderId: string, success: boolean, error: string}>}
 */
export default async function handler(req, res) {
  const responseData = {
    success: false,
    orderId: "",
    total: "",
    currency: "",
    error: "",
    paymentUrl: "",
  };

  if (isEmpty(req.body)) {
    responseData.error = "Required data not sent";
    return responseData;
  }

  const data = req.body;
  data.status = "pending";
  data.set_paid = false;

  try {
    const { data } = await api.post("orders", req.body);

    responseData.success = true;
    responseData.orderId = data.number;
    responseData.total = data.total;
    responseData.currency = data.currency;
    responseData.paymentUrl = data.payment_url;

    res.json(responseData);
  } catch (error) {
    console.log("error", error);
    /**
     * Request usually fails if the data in req.body is not sent in the format required.
     *
     * @see Data shape expected: https://stackoverflow.com/questions/49349396/create-an-order-with-coupon-lines-in-woocomerce-rest-api
     */
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
}
