const express = require("express");
const Contact = require("./model"); 
const router = express.Router();

router.get("/driss", async(req, res) => {
  await Contact.find().then((data)=>{
    res.send(data)
 }).catch(()=>{
    console.log("data is not runing ")
 })
});

router.post('/leo', async (req, res) => {
    try {
        console.log("Received request body:", req.body); // Debugging

        const { nom, email, phone, message } = req.body;

        if (!nom || !email || !phone || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        let newContact = new Contact({
            nom,
            email,
            phone,
            message
        });

        await newContact.save();
        console.log("Data inserted successfully");

        res.status(201).json({ message: "Data inserted successfully" });

    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
