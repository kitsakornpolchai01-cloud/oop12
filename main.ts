import {UserDAO} from "./UserDAO.ts";

const userDAO = new UserDAO();
userDAO.insert('อัมพร','aumporn00@gmail.com');
userDAO.insert('ไทย','thai11@gmail.com');
userDAO.insert('ชัยการ','chaiyakarn22@gmail.com');




const users = userDAO.findAll();
users.forEach(u=>{
    console.log(u.getInfo());
    
});