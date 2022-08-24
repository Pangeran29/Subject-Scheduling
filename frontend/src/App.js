import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { Dashboard } from "./components/dashboard";
import { Navbar } from "./components/navbar";
import { Lecturers } from "./data dosen/lecturers";
import { Subjects } from "./CUD matkul/subjects";
import { AddSubject } from "./CUD matkul/addsubject";
import { EditSubject } from "./CUD matkul/editSubject";
import { Student } from "./CUD mahasiswa/student";
import { EditStudent } from "./CUD mahasiswa/edit student";
import { AddStudent } from "./CUD mahasiswa/add student";
import { Schedule } from "./CUD penjadwalan/schedule";
import { EditSchedule } from "./CUD penjadwalan/edit schedule";
import { ShowSchedulebyDay } from "./CUD penjadwalan/schedule by day";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>          
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/dashboard" element={<><Navbar/><Dashboard/></>}/>        
        
        <Route exact path="/lecturers" element={<><Navbar/><Dashboard/><Lecturers/></> }/>        
        
        <Route exact path="/subjects" element={<><Navbar/><Dashboard/><Subjects/></> }/>        
        <Route exact path="/subjects/add" element={<><Navbar/><Dashboard/><AddSubject/></> }/>        
        <Route exact path="/subjects/edit/:id" element={<><Navbar/><Dashboard/><EditSubject/></> }/>        
        
        <Route exact path="/students" element={<><Navbar/><Dashboard/><Student/></> }/>        
        <Route exact path="/students/add" element={<><Navbar/><Dashboard/><AddStudent/></> }/>        
        <Route exact path="/students/edit/:id" element={<><Navbar/><Dashboard/><EditStudent/></> }/>        
        
        <Route exact path="/schedule" element={<><Navbar/><Dashboard/><Schedule/></> }/>        
        <Route exact path="/schedule/:day" element={<><Navbar/><Dashboard/><ShowSchedulebyDay/></> }/>        
        <Route exact path="/schedule/:day/:id" element={<><Navbar/><Dashboard/><EditSchedule/></> }/>        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;