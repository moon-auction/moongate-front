import { Link } from 'react-router-dom';
import styles from '@styles/Topnav.module.css';

export default function Topnav() {
    return (
        <div className={styles.Topnav}>
            <button className={styles.button}>
                    <div className={styles.grid}></div>
                    <div className={styles.grid}></div>
                    <div className={styles.grid}></div>

                    <div className={styles.grid}></div>
                    <div className={styles.grid}></div>
                    <div className={styles.grid}></div>

                    <div className={styles.grid}></div>
                    <div className={styles.grid}></div>
                    <div className={styles.grid}></div>
            </button>


            <Link className={styles.link} id={styles.Logo} to={""}>
                <img className={styles.smallLogo} src='logo192.png'></img>
                <p className={styles.name}>문게이트</p>
            </Link>

            <div className={styles.br}></div>

            <Link className={styles.link} to={"shortcut"}>바로가기</Link>
            <Link className={styles.link} to={"auction"}>경매장</Link>
            <Link className={styles.link} to={"recruit"}>구인구직</Link>
            <Link className={styles.link} to={"board"}>게시판</Link>

            <div className={styles.profile}>
                <div className={styles.profileContainer}>
                    <Link className={styles.link} to={"login"}>로그인</Link>
                    <Link className={styles.link} to={"register"}>회원가입</Link>
                </div>
            </div>
            
        </div>
    );   
}