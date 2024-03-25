import { useEffect, useState, SyntheticEvent } from "react";
import styles from "@styles/Register.module.css";
import { GetConfirmCode, ValidateCorfirmCode, Register as RegisterAPI } from "@apis/Register";

export default function Register() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const [confirmUrl, setConfirmUrl] = useState(-1);

    const [confirmCode, setConfirmCode] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9]).{8,25}$/;

    useEffect(() => {
        // It should get the confirm code from the server;
        GetConfirmCode().then((res: any) => {
            setConfirmCode(res.data.code);
        });
    }, []);

    useEffect(() => {
        console.log(formData)
    }, [formData])

    function handleConfirmCode(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        // API call to the server
        ValidateCorfirmCode(confirmCode, confirmUrl).then((res: any) => {
            setConfirmed(true);
        }).catch((err) => {
            alert("인증에 실패했습니다");
        });
    }

    function handleRegister(e: SyntheticEvent) {
        e.preventDefault();
        console.log("clicked register")
        if (formData.password !== formData.passwordConfirm) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        if (!passwordRegex.test(formData.password)) {
            alert("비밀번호는 영어와 특수문자와 숫자의 조합으로 최소 8자 이상 25자 이하여야합니다");
            return;
        }

        RegisterAPI({...formData, confirm: confirmCode}).then((res: any) => {
            alert("회원가입에 성공했습니다");
        }
        ).catch((err) => {
            alert("회원가입에 실패했습니다");
        });
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
                <div className={styles.inputHolders} style={{display: !passwordRegex.test(formData.password) ? "flex" : "none"}}>
                    <p style={{color: "red", fontSize: 12}}>비밀번호는 영어와 특수문자와 숫자의 조합으로 최소 8자 이상 25자 이하여야합니다</p>
                </div>
                <div className={styles.inputHolders}>
                    <label className={styles.labels} htmlFor="passwordConfirm">비밀번호 확인</label>
                    <input className={styles.inputs} type="password" id="passwordConfirm" onChange={((e) => {setFormData({...formData, passwordConfirm: e.target.value})})}/>
                </div>
                <div className={styles.inputHolders} style={{display: formData.password==formData.passwordConfirm ? "none" : "flex"}}>
                    <p style={{color: "red", fontSize: 12}}>비밀번호가 같지 않습니다</p>
                </div>
                <div>
                    <p>확인코드</p>
                    <p>{confirmCode}</p>
                </div>
                <div className={styles.inputHolders}>
                    <label className={styles.labels} htmlFor="passwordConfirm">공홈 url</label>
                    <input className={styles.labels} type="number" id="confirmCode" onChange={((e) => {setConfirmUrl(e.target.valueAsNumber)})}></input>
                    <button type="button" disabled={confirmed} onClick={handleConfirmCode}>인증하기</button>
                </div>
                <button  type="submit" onSubmit={handleRegister}>회원가입</button>
            </form>
        </div>
        </div>
    )
}