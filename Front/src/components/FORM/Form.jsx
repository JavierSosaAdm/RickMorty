import style from './Form.module.css';
import {useState} from 'react';
import validation from './validation';

const Form = ({ login }) => {
    
    const [userData, setUserData] = useState({ 
        username: '', 
        password: '' 
    });

    const [errors, setErrors] = useState({ 
        username: '', 
        password: '' 
    });

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]:event.target.value
        }))
    }

    const handleSummit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return(
        <form className={style.form} onSubmit={handleSummit}>
            <label htmlFor="username">Username:</label>
            <input type= "text" name='username' className={style.input} value={userData.username} onChange={handleInputChange} />
            {errors.username && <p style={{color: 'red'}}>{errors.username}</p>}
            <hr />
            <label htmlFor="password">Password:</label>
            <input type= "password" name='password' className={style.input} value={userData.password} onChange={handleInputChange}/>
            {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
            <hr />
            <button className={style.button}>LOGIN</button>
        </form>
    )
}
export default Form;