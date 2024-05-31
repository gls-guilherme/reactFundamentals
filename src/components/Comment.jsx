import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "@phosphor-icons/react";
import {Avatar} from "../Avatar.jsx";

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src={"https://github.com/diego3g.png"} alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time dateTime={'2024-05-30'}>Cerca de 1h atrás</time>
                        </div>

                        <button title={'Deletar comentário'}>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}