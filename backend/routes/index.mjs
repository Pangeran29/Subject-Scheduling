import express from "express";
import { RefreshToken } from "../Login user/RefreshToken.mjs";
import { getUsers, registration, Login , Logout} from "../Login user/users_controllers.mjs";
import { verifyToken } from "../middleware/verifyToken.mjs";
import { showSubjects, getSubjectsById, createSubject, updateSubject, deletesubjects, viewbyDay, cancleAll, cancleOne } from "../CUD matkul/subjects.js";
import { createStudetns, deleteStudent, editStudent, getStudents, getStudentsbyId } from "../CUD mahasiswa/students.js";
import { addDay, showDay } from "../Data hari/adding day.js";
import { addTime, showTime } from "../data jam mengajar/adding time.js";

const router = express.Router();

// for login and register
router.get('/users', verifyToken, getUsers);
router.post('/users', registration);
router.post('/login', Login);
router.get('/token', RefreshToken);
router.delete('/logout', Logout);

// CRUD subjects
router.get("/subjects", showSubjects)
router.get("/subjects/:id", getSubjectsById);
router.get("/subject/:schedule", viewbyDay)
router.post("/subject", createSubject);
router.patch("/subjects/:day/:id", updateSubject);
router.delete("/subject/:day", cancleAll);
router.patch("/subject/:day/:id", cancleOne);
router.delete("/subjects/:id", deletesubjects);

// CRUD students
router.get("/students", getStudents);
router.get("/students/:id", getStudentsbyId);
router.post("/add", createStudetns);
router.patch("/edit/:id", editStudent);
router.delete("/delete/:id", deleteStudent);

// scheduling


// adding data time and days
router.get("/time", showTime);
router.post("/time", addTime);
router.get("/day", showDay);
router.post("/day", addDay);


export default router;