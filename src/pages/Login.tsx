import { useState } from 'react';
import styles from '@styles/Login.module.css';
import { LoginAPI } from '@apis/Login';
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const [ formData, setFormData ] = useState({ id: '', pw: '' });
    const navigate = useNavigate();

    function sendLoginData(id: string, pw: string) {
        LoginAPI({email: id, password: pw})
            .then((res) => {
                alert('로그인 성공');
                navigate('/');
            })
            .catch((err) => {
            });
    }

    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <h1>로그인</h1>
                <form onSubmit={((e) => {
                    e.preventDefault();
                    sendLoginData(formData.id, formData.pw);
                })}>
                    <div className={styles.holder}>
                        <label className={styles.idlabel} htmlFor='id'>아이디</label>
                        <input className={styles.inputcolor} name="id" maxLength={30} type="text" onChange={((e) => {setFormData({...formData, id: e.target.value});})}></input>
                    </div>
                    <div className={styles.holder}>
                        <label className={styles.pwlabel} htmlFor='pw'>패스워드</label>
                        <input className={styles.inputcolor} name='pw' maxLength={20} type="password" onChange={((e) => {setFormData({...formData, pw: e.target.value});})}></input>  
                    </div>
                    <button className={styles.submitButton} type='submit'>로그인</button>
                </form>
            </div>
        </div>
    )
}