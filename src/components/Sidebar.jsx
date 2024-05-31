import styles from './Sidebar.module.css'
import { PencilLine } from '@phosphor-icons/react'
import {Avatar} from "../Avatar.jsx";
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src={"https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt={""}
            />

            <div className={styles.profile}>
                <Avatar hasBorder src={"https://github.com/gls-guilherme.png"} />
                <strong>Guilherme Alves</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href={"#"}>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}