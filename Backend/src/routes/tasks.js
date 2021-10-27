import { Router } from 'express';

import { getTasks, getTaskCount, getTask, saveTask, deleteTask, updateTask } from '../controllers/tasks'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  desciption: Tasks enpoint
 */


/**
 * @swagger
 * /tasks:
 *  get:
 *   summary: Get all tasks 
 *   tags: [Tasks]
 */
router.get('/tasks',getTasks)
/**
 * @swagger
 * /tasks:
 *  get:
 *   summary: Get total tasks counter with numbers
 *   tags: [Tasks]
 */
router.get('/tasks/count',getTaskCount)
/**
 * @swagger
 * /tasks:
 *  get: 
 *   summary: shows tasks for id 
 *   tags: [Tasks]
 */
router.get('/tasks/:id',getTask)
/**
 * @swagger
 * /tasks:
 *  post: 
 *   summary: create a tasks 
 *   tags: [Tasks]
 */
router.post('/tasks',saveTask)
/**
 * @swagger
 * /tasks:
 *  delete:
 *   summary: delete a tasks
 *   tags: [Tasks]
 */
router.delete('/tasks/:id',deleteTask) 
/**
 * @swagger
 * /tasks:
 *  put:
 *   summary: update a task 
 *   tags: [Tasks]
 */
router.put('/tasks/:id', updateTask)

export default router