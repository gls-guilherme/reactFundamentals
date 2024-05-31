import { Post } from "./components/Post.jsx";
import './global.css'
import {Header} from "./components/Header.jsx";

import style from './App.module.css'
import {Sidebar} from "./components/Sidebar.jsx";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/gls-guilherme.png',
            name: 'Guilherme Alves',
            role: 'Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala galera 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-05-03 20:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/maykbrito.png',
            name: 'Mayk Brito',
            role: 'Educator @Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Fala galera 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-05-10 20:00:00'),
    },
]

export function App() {
  return (
      <div>
          <Header />

          <div className={style.wrapper}>
            <aside>
                <Sidebar />
            </aside>
            <main>
                {posts.map(post => {
                    return (
                        <Post
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    )
                })}
            </main>
          </div>
      </div>
  )
}
