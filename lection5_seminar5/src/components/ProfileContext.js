import { useContext } from "react";
import { ThemeContext1 } from "../App";
import classes from "./Profile.module.css"



function Profile() {
    const theme = useContext(ThemeContext1)
    return (
        <div className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}>

            <h2>Profile</h2>
            <p>Создайте контексты UserContext и ThemeContext с начальными значениями (например, имя пользователя: "Гость", тема: "светлая"). ● Реализуйте компонент App: ○ Оберните дочерние компоненты в UserContext.Provider и ThemeContext.Provider. ○ Добавьте возможность изменения имени пользователя и темы через интерфейс пользователя. ● Создайте компоненты, использующие эти контексты: ○ Header должен отображать приветствие с именем пользователя. ○ Profile может показывать более
            </p>
        </div>);
}

export default Profile;