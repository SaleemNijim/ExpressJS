import express from 'express'


const allStudents = (req, res) => {
    res.send("All Students")
}

const newStudent = (req, res) => {
    res.send("create a new  Student")
}

const updateStudent = (req, res) => {
    res.send("update Student info")
}

const deleteStudent = (req, res) => {
    res.send("remove Student from db")
}

export {
    allStudents,
    newStudent,
    updateStudent,
    deleteStudent
};