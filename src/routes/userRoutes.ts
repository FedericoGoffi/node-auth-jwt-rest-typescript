import express, { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userController';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret';

const authenticateToken = (req: Request, res: Response, next: NextFunction): void => { 

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        res.status(401).json({message: 'Unauthorized'});
        return;
    }

      jwt.verify(token, JWT_SECRET, (err, decoded) => {
        
        if(err){
            console.error('Authentication error', err);
            res.status(403).json({error: 'Dont have access to this resource'});
            return;
        }

        next();

    })

 };

router.post('/', authenticateToken, createUser);
router.get('/', authenticateToken, getAllUsers);
router.get('/:id', authenticateToken, getUserById);
router.put('/:id', authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);


export default router;