const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { signupSchema, loginSchema } = require("../validation/auth.schema");

const signup = async (req, res) => {
    try {
        const parsedData = signupSchema.parse(req.body);

        const userExists = await User.findOne({ email: parsedData.email });
        if (userExists) return res.status(400).json({ message: "Email already registered" });

        const hashedPassword = await bcrypt.hash(parsedData.password, 10);

        const newUser = await User.create({
            ...parsedData,
            password: hashedPassword
        });

        const token = generateToken(newUser._id);

        res.status(201).json({
            message: "Signup successful",
            token,
            user: { id: newUser._id, name: newUser.name, email: newUser.email }
        });
    } catch (error) {
        res.status(400).json({ message: error.errors?.[0]?.message || error.message });
    }
};

const login = async (req, res) => {
    try {
        const parsedData = loginSchema.parse(req.body);

        const user = await User.findOne({ email: parsedData.email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(parsedData.password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = generateToken(user._id);

        res.status(200).json({
            message: "Login successful",
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (error) {
        res.status(400).json({ message: error.errors?.[0]?.message || error.message });
    }
};

module.exports = { signup, login };
