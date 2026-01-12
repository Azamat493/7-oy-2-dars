import React, { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import Ezoza from "../assets/images/Ezoza.jpg";
import Shodiyor from "../assets/images/Shodiyor.jpg";
import Shoxrux from "../assets/images/Shoxrux.jpg";
const SchoolContext = createContext();

const initialTeachers = [
  {
    id: 1,
    name: "Kristin Watson",
    subject: "Chemistry",
    class: "J SS 2",
    email: "michelle.rivera@example.com",
    gender: "Female",
    age: 34,
    about: "Expert in Chemistry",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 4,
    name: "Karimova E'zoza",
    subject: "Bolopti",
    class: "J SS 3",
    email: "ezoza.karimova@example.com",
    gender: "Female",
    age: 22,
    about:
      "Juda iqtidorli va mehribon o'qituvchi. Bolalar bilan ishlashni yaxshi ko'radi.",
    img: Ezoza,
  },
  {
    id: 5,
    name: "Shodiyor",
    subject: "PickUp Master",
    class: "SS 3",
    email: "shodiyor.dev@school.com",
    gender: "Male",
    age: 23,
    about:
      "Dasturlash bo'yicha kuchli mutaxassis. O'quvchilarga kod yozishni o'rgatadi.",
    img: Shodiyor,
  },

  {
    id: 6,
    name: "Shoxrux",
    subject: "CS2 Master",
    class: "J SS 1",
    email: "shoxrux.sport@school.com",
    gender: "Male",
    age: 24,
    about: "Sport ustasi. Maktab futbol jamoasi murabbiyi.",
    img: Shoxrux,
  },

  {
    id: 2,
    name: "Marvin McKinney",
    subject: "French",
    class: "JSS 3",
    email: "debbie.baker@example.com",
    gender: "Female",
    age: 29,
    about: "Loves teaching languages",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Jane Cooper",
    subject: "Maths",
    class: "JSS 3",
    email: "kenzi.lawson@example.com",
    gender: "Female",
    age: 40,
    about: "Math wizard",
    img: "https://i.pravatar.cc/150?img=3",
  },
];

export const SchoolProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return localStorage.getItem("schoolUser")
      ? JSON.parse(localStorage.getItem("schoolUser"))
      : null;
  });

  const login = (email, password) => {
    if (email === "admin@school.com" && password === "123") {
      const userData = { name: "Admin User", email: email, role: "Admin" };
      setUser(userData);
      localStorage.setItem("schoolUser", JSON.stringify(userData));
      toast.success(`Welcome back, ${userData.name}!`);
      return true;
    } else {
      toast.error("Email yoki parol noto'g'ri!");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("schoolUser");
    toast("See you soon!", { icon: "👋" });
  };

  const [teachers, setTeachers] = useState(() => {
    const savedTeachers = localStorage.getItem("schoolTeachers");
    return savedTeachers ? JSON.parse(savedTeachers) : initialTeachers;
  });

  useEffect(() => {
    localStorage.setItem("schoolTeachers", JSON.stringify(teachers));
  }, [teachers]);

  const addTeacher = (newTeacher) => {
    const teacherWithId = { ...newTeacher, id: Date.now() };
    setTeachers([...teachers, teacherWithId]);
    toast.success("O'qituvchi muvaffaqiyatli qo'shildi!");
  };

  const deleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
    toast.success("O'qituvchi o'chirildi!");
  };

  const getTeacherById = (id) => {
    return teachers.find((teacher) => teacher.id === parseInt(id));
  };

  return (
    <SchoolContext.Provider
      value={{
        teachers,
        addTeacher,
        deleteTeacher,
        getTeacherById,
        user,
        login,
        logout,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => useContext(SchoolContext);
