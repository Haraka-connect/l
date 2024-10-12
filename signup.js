const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {
    if (req.method === 'POST') { // Ensure you're accepting only POST requests
        try {
            const { firstname, lastname, email, phone, password, confirm_password, service } = req.body;

            if (password !== confirm_password) {
                return res.status(400).json({ error: "Passwords do not match" });
            }

            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ error: "User already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
            user = new User({
                firstname,
                lastname,
                email,
                phone,
                password: hashedPassword, // Save the hashed password
                service
            });

            await user.save();
            res.status(201).json({ message: "User created successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Server error" });
        }
    } else {
        // Respond with a 405 Method Not Allowed if the method is not POST
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};