import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import {mongoosePagination, PaginationOptions } from 'mongoose-paginate-ts';
import User from '../models/User';
import FAQ from '../models/FAQ';

const createFAQ = async (req: Request, res: Response, next: NextFunction) => {
    const { username, question, answer, likes, verified } = req.body;

    try {
        // Check if the user and product exist in the database by name
        const userExists = await User.findOne({ username:username });
    
        if (!userExists) {
          return res.status(404).json({ message: 'User not found in the database', 
          userExists,
        });
        }
        
    const faq = new FAQ({
        _id: new mongoose.Types.ObjectId(),
        username: userExists.username,
        question,
        answer,
        likes,
        verified
    });

    const savedFAQ = await faq.save();
    return res.status(201).json(savedFAQ);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const readFAQ = (req: Request, res: Response, next: NextFunction) => {
    const faqId = req.params.faqId;

    return FAQ.findById(faqId)
        .then((faq) => (faq ? res.status(200).json(faq) : res.status(404).json({ message: 'FAQ no encontrada' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1; 
    const options: PaginationOptions = {
        page,
        limit: 3
    };
    return FAQ.paginate(options)
        .then((result) => res.status(200).json(result))
        .catch((error) => res.status(500).json({ error }));
};

const updateFAQ = (req: Request, res: Response, next: NextFunction) => {
    const faqId = req.params.faqId;

    return FAQ.findById(faqId)
        .then((faq) => {
            if (faq) {
                faq.set(req.body);

                return faq
                    .save()
                    .then((updatedFAQ) => res.status(200).json(updatedFAQ))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'FAQ no encontrada' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteFAQ = (req: Request, res: Response, next: NextFunction) => {
    const faqId = req.params.faqId;

    return FAQ.findByIdAndDelete(faqId)
        .then((faq) => (faq ? res.status(204).json({ message: 'FAQ eliminada' }) : res.status(404).json({ message: 'FAQ no encontrada' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createFAQ, readFAQ, readAll, updateFAQ, deleteFAQ };