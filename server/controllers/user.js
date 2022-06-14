import { Email } from '@material-ui/icons';
import bcrypt from 'bycryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async (res, req) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.fimdOne({email});

        if(!existingUser) return res.status(404).json({message: 'User does not exist.'});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(404).json({message: 'Invalid credentials'});

        
    } catch (error) {
        
    }
};

export const signup = async (res, req) => {

};
