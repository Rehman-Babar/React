import {Router} from 'express'
import { getTask, saveTask, updateTask, deleteTask } from '../controller/task.controller.js'
const router = Router();


router.get('/get', getTask);
router.post('/post', saveTask);
router.put('/put', updateTask);
router.delete('/delete', deleteTask);
export default router;