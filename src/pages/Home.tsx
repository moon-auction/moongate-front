import styles from '@styles/Home.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import APIWrapper from '@apis/APIWrapper';
import { UserInfoAPI } from '@apis/Login';


class PostLink {
    title: string;
    number: number;
    up: number;
    constructor(title: string, number: number, up: number) {
        this.title = title;
        this.number = number;
        this.up = up;
    }
    toElement() {
        return (
            <Link to={'/post?number=' + this.number}>
                <div className={styles.post}>
                <div className={styles.number}>{this.number}</div>
                <div className={styles.title}>{this.title}</div>
                <div className={styles.up}>👍{this.up}</div>
            </div>
            </Link>
            
        );
    }
}


export default function Home() {
    const [top, setTop] = useState<PostLink[]>([]);
    const [ userInfo, setUserInfo ] = useState<any>({
        name: "",
        level: 0,
        exp: 0,
    });


    function LeftSideLoggedIn(props: any) {
        return (
            <div className={styles.leftSide}>
                <div className={styles.userInfo}>
                    <div className={styles.nickname}>닉네임: {userInfo.name}</div>
                </div>
                <div className={styles.userInfo}>
                    <div className={styles.nickname}>레벨: {userInfo.level}</div>
                </div>
                <div className={styles.userInfo}>
                    <div className={styles.nickname}>경험치: </div>
                    <div className={styles.nickname}>{}</div>
                </div>
                <Link className={styles.button} to={'logout'}>로그아웃</Link>
            </div>
        );
    }

    function LeftSideNotLoggedIn() {
        return (
            <div className={styles.leftSide}>
                <Link className={styles.button} to={'login'}>문게이트 로그인</Link>
                <Link className={styles.link} to={"register"}>회원가입</Link>
                <Link className={styles.link} to={"findidpw"}>ID/PW 찾기</Link>
            </div>
        );
    }

    useEffect(() => {
        UserInfoAPI().then((res: any) => {
            setUserInfo(res.data.user);
        }).catch((err: any) => {
            setUserInfo(null);
            console.log(err);
        });
    }, []);

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    useEffect(() => {
        setTop([
            new PostLink("test", 1, 1),
            new PostLink("test", 2, 2),
            new PostLink("test", 3, 3),
            new PostLink("test", 4, 4),
            new PostLink("test", 5, 5),
            new PostLink("test", 6, 6),
            new PostLink("test", 7, 7),
            new PostLink("test", 8, 8),
            new PostLink("test", 9, 9),
            new PostLink("test", 10, 10),
        ]);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                {userInfo ? <LeftSideLoggedIn props={userInfo}/> : <LeftSideNotLoggedIn />}

                <div className={styles.centerSide}>
                    <div className={styles.left}>
                        <div style={{display: "block", marginBottom: "40px"}}>
                            <div style={{justifyContent: "left", marginBottom: "10px", textAlign: "left"}}>화제의 게시글 TOP 10</div>
                            {top.map((post) => <>{post.toElement()}{<div className={styles.vertBr}></div>}</> )}
                            <div className={styles.more}><Link to={'board'}>더보기</Link></div>
                        </div>
                        <div style={{width: "100%", height: "300px", backgroundColor: "white", color: "black"}}>placeHolder for 게시판 즐겨찾기</div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.right}>
                        <div style={{width: "100%", height: "300px", backgroundColor: "white", color: "black", marginBottom:"30px"}}>placeholder for 길드광고</div>
                        <div style={{width: "100%", height: "300px", backgroundColor: "white", color: "black", marginBottom:"30px"}}>placeholder for 아이템 광고</div>
                        <div style={{width: "100%", height: "300px", backgroundColor: "white", color: "black"}}>placeholder for 캘린더</div>
                    </div>
                </div>

                <div className={styles.rightSide}>side</div>
            </div>
        </div>
    )
};