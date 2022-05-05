import { addNew, getAll, getOne } from '../controllers/desaparecidos';
import {Router} from 'express';

const router = Router()


router.route('/')
    .get(getAll)
    .post(addNew)
    

router.route('/:nombre')
    .get(getOne)

export default router