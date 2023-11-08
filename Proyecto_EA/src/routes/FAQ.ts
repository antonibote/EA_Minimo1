import express from 'express';
import controller from '../controllers/FAQ';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

router.post('/createFAQ', ValidateSchema(Schemas.FAQ.create), controller.createFAQ);
router.get('/readFAQ/:faqId', controller.readFAQ);
router.get('/readall', controller.readAll);
router.put('/updateFAQ/:faqId', ValidateSchema(Schemas.FAQ.update), controller.updateFAQ);
router.delete('/deleteFAQ/:faqId', controller.deleteFAQ);

export = router;