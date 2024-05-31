import { Post } from "./components/Post.jsx";
import './global.css'
import {Header} from "./components/Header.jsx";

import style from './App.module.css'
import {Sidebar} from "./components/Sidebar.jsx";

export function App() {
  return (
      <div>
          <Header />

          <div className={style.wrapper}>
            <aside>
                <Sidebar />
            </aside>
            <main>
                <Post
                    author={"Guilherme Alves"}
                    content={"Post 1"}
                />
            </main>
          </div>
      </div>
  )
}
