import styles from '@styles/Home.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
            <Link to={'/board?number=' + this.number}>
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
                <div className={styles.leftSide}>
                    <Link className={styles.button} to={'login'}>문게이트 로그인</Link>
                    <Link className={styles.link} to={"register"}>회원가입</Link>
                    <Link className={styles.link} to={"findidpw"}>ID/PW 찾기</Link>
                </div>

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