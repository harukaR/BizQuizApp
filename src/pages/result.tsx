import styles from "@/pages/result.module.scss"
import Link from "next/link"

import { Header } from "@/components/Layout/Header/Header"
import { Footer } from "@/components/Layout/Footer/Footer"
import { SelectButton } from "@/components/Ui/SelectButton/SelectButton"



export default function result() {
  return (
    <>
      <Header/>
      <main>  
        <div className={styles.mainInner}>
          <p className={styles.mainText}>結果は</p>
          <div className={styles.resultInner}>
            <p className={styles.resultIcon}>😚</p>
            <p className={styles.resultScore}>/ 10</p>
          </div>
          <Link href={'/'} className={styles.backtop}>
            TOPへ戻る
          </Link>
   
        </div>
      </main>
      <Footer/>
    </>
  )
}
