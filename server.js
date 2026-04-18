const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// routes
app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/produits", require("./routes/produitRoutes"));
app.use("/api/commandes", require("./routes/commandeRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));