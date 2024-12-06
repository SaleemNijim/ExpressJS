import express from 'express'
import {
    allStudents,
    newStudent,
    updateStudent,
    deleteStudent
} from '../controllers/student.js'

const router = express()


router.get('/all', allStudents)
router.post('/create', newStudent)
router.put('/update', updateStudent)
router.delete('/delete', deleteStudent)






export default router