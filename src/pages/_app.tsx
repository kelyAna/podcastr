import { Header } from '../components/Header/index'
import { Player } from '../components/Player'
import { PlayerContext } from '../contexts/PlayerContext'

import styles from '../styles/app.module.scss'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContext.Provider value={'Ana'}>
      <div className={styles.appWrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
