import styles from './Post.module.css'
import {Comment} from "./Comment.jsx";
import {Avatar} from "../Avatar.jsx";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={"https://github.com/gls-guilherme.png"}/>
                    <div className={styles.authorInfo}>
                        <strong>Guilherme Alves</strong>
                        <span>Developer</span>
                    </div>
                </div>

                <time dateTime={'2024-05-30'}>Publicado a 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder={'Deixe um comentário'}
                />

                <footer>
                    <button type={'submit'}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}