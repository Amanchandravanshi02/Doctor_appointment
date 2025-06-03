import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const generateToken = (userId) => {
    const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    return token;
};
const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
};
export default {generateToken, verifyToken}