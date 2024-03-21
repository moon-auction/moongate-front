import { useEffect, useState } from "react";
import styles from "@styles/Register.module.css";
import { GetConfirmCode, CorfirmCode } from "@apis/Register";

export default function Register() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const [confirmCode, setConfirmCode] = useState("");
    const [confirmed, setConfirmed] = useState(false);

    useEffect(() => {
        // It should get the confirm code from the server;
        GetConfirmCode().then((res: any) => {
            setConfirmCode(res.data.code);
        });
    }, []);

    function handleConfirmCode(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        // API call to the server
    }

    function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (formData.password !== formData.passwordConfirm) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
    }

    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
            <h1>회원가입</h1>
            <form className={styles.formFormat}onSubmit={handleRegister}>
                <div className={styles.inputHolders}>
                    <label className={styles.labels} htmlFor="email">이메일</label>
                    <input className={styles.inputs} type="email" id="email" onChange={((e) => {setFormData({...formData, email: e.target.value})})}/>
                </div>
                <div className={styles.inputHolders}>
                    <label className={styles.labels} htmlFor="password">비밀번호</label>
                    <input className={styles.inputs} type="password" id="password" onChange={((e) => {setFormData({...formData, password: e.target.value})})}/>
                </div>
                <div className={styles.inputHolders}>
                    <label className={styles.labels} htmlFor="passwordConfirm">비밀번호 확인</label>
                    <input className={styles.inputs} type="password" id="passwordConfirm" onChange={((e) => {setFormData({...formData, passwordConfirm: e.target.value})})}/>
                </div>
                <div>
                    <p>확인코드</p>
                    <p>{confirmCode}</p>
                    <input className={styles.labels} type="number" id="confirmCode" onChange={((e) => {})}></input>
                    <button type="button" disabled={confirmed} onClick={handleConfirmCode}>인증하기</button>
                </div>
                <button disabled={!confirmed} type="submit">회원가입</button>
            </form>
        </div>
        </div>
    )
}