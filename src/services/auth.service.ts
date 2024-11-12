import { User } from "../models/user.interface";
import jwt from "jsonwebtoken";

const JWT_SCRET = process.env.JWT_SECRET || 'default-secret';

export const generateToken = (user: User): string => {
    
    return jwt.sign({ id: user.id, email: user.email}, JWT_SCRET, {expiresIn: '1h'});

}