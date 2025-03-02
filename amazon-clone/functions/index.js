const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv");
const { setGlobalOptions } = require("firebase-functions");
dotenv.config();

const stripe=require("stripe")(process.env.STRIPE_KEY)
const app = express();

setGlobalOptions({maxInstances:10})


app.use(express.json());
app.use(cors({ origin: true }));
app.get("/", (req, res) => {
  res.status(200).json({ message: "success!" });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(201).json({ clientSecret: paymentIntent.client_secret });
    // console.log(paymentIntent);
  } else {
    res.status(403).json({
      message: "total must be greater than 0",
    });
  }
});
exports.api=onRequest(app)
// app.listen(5050, (err) => {
//   if (err) throw err;
//   console.log("Amazon server running on PORT: http://localhost:5050");
// });