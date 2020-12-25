import express from 'express';
import controller from '../controllers/book';
const router = express.Router();

router.get('/', controller.getAllBooks);
router.post('/create', controller.createBook);

export = router;
