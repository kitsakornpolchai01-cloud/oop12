import { StudentDAO } from "./StudentDAO";

const studentDAO = new StudentDAO();

studentDAO.insert('6605', 'สมศรี ดีใจ', 3.40);
studentDAO.insert('6604', 'สมชาติ ใจดี', 3.21);
studentDAO.insert('6606', 'กิตนะ มั่นคง', 3.65);

const students = studentDAO.findAll();

students.forEach((student) => {
    if (student.isHonors()) {
        console.log(
            `${student.getStudentCode()} ${student.getId()} ${student.getFullName()} ${student.getGpa()} (Honors)`
        );
    } else {
        console.log(
            `${student.getStudentCode()} ${student.getId()} ${student.getFullName()} ${student.getGpa()}`
        );
    }
});