import styles from "@/styles/Home.module.scss"

import { SiteTitle } from '@/components/Layout/SiteTitle/SiteTitle'
import { Header } from "@/components/Layout/Header/Header"
import { UserIcon } from "@/components/UserIcon/UserIcon"
import { SelectButton } from "@/components/Ui/SelectButton/SelectButton"
import Link from "next/link"



export default function Home() {
  return (
    <>
      <Header/>
      <main>  
        <SiteTitle/>
        <div className={styles.mainInner}>
        <UserIcon children='こんにちはuser01さん'/>
            <div className={styles.buttonWrap}>
              <Link href="/quiz" className={styles.link}>
                <SelectButton children="クイズに挑戦する" className={styles.challengeButton} />
              </Link>

              <div className={styles.buttonFlex}>
              <Link href="/qanda" className={styles.link}>
                <SelectButton children="問題と回答をみる"/>
              </Link>
              <Link href="/score" className={styles.link}>
                <SelectButton children="本日のあなたのスコア"/>
              </Link>


              </div>
            </div>
        </div>
      </main>
    </>
  )
}
