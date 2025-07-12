const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const contactModel = require("./models/contactModel");
const connect_to_db = require("./database/db")

require("dotenv").config();
const PORT = process.env.PORT || 5000;

connect_to_db();
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.post("/api/contact", async (req, res) => {
    try {
        const contactData = new contactModel(req.body);
        await contactData.save();
        res.status(201).json({ message: "Contact details saved successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to save contact details" });
    }
});


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})