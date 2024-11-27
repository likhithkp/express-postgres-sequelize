const express = require("express");
const { models } = require("./db");
require('dotenv').config();
const app = express();

app.use(express.json());

app.post("/createUser", async (req, res) => {
    try {
        const { email, first_name, middle_name, last_name, mob_no, whatsapp_no } = req.body;
        const user = await models.users.create({
            email,
            first_name,
            middle_name,
            last_name,
            mob_no,
            whatsapp_no
        })
        await user.save();
        res.send("user created")
    } catch (error) {
        console.error(error.message);
    };
});

app.post("/createOrder", async (req, res) => {
    try {
        const { user_id } = req.body;
        const order = await models.orders.create({
            user_id,
        })
        await order.save()
        res.send("order created")
    } catch (error) {
        console.error(error.message);
    };
});

app.get("/getOrders", async (req, res) => {
    try {
        const { user_id } = req.body;

        // Ensure user_id is provided
        if (!user_id) {
            return res.status(400).send({ error: "User ID is required" });
        }

        // Fetch orders associated with the provided user_id
        const orders = await models.orders.findAll({ where: { user_id } });

        // Send the response
        res.status(200).send(orders);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal server error" });
    }
});

app.post("/updateOrder/:id", async (req, res) => {
    try {
        const { user_id } = req.body;
        // Fetch orders associated with the provided user_id
        const orders = await models.orders.update({
            id: { user_id }
        }, { where: { user_id } });

        // Send the response
        res.status(200).send(orders);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal server error" });
    }
});

app.delete("/deleteOrders/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params; // Get user_id from route parameter

        // Check if user_id is provided
        if (!user_id) {
            return res.status(400).send({ error: "User ID is required" });
        }

        // Delete all orders that belong to the user
        const deletedCount = await models.orders.destroy({ where: { user_id } });

        // Check if any orders were deleted
        if (deletedCount === 0) {
            return res.status(404).send({ error: "No orders found for the given user" });
        }

        // Send success response
        res.status(200).send({ message: `${deletedCount} orders deleted successfully` });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal server error" });
    }
});

const PORT = process.env.APP_PORT || 3001;
app.listen(PORT);