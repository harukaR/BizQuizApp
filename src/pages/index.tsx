import styles from "@/styles/Home.module.scss"

import { SiteTitle } from '@/components/Layout/SiteTitle/SiteTitle'
import { Header } from "@/components/Layout/Header/Header"
import { UserIcon } from "@/components/UserIcon/UserIcon"
import { SelectButton } from "@/components/Ui/SelectButton/SelectButton"



export default function Home() {
  return (
    <>
      <Header/>
      <main>  
        <SiteTitle/>
        <div className={styles.mainInner}>
            <UserIcon/>
            <div className={styles.buttonWrap}>
              <SelectButton children="クイズに挑戦する" className={styles.challengeButton} />
              <div className={styles.buttonFlex}>
                <SelectButton children="問題と回答をみる"/>
                <SelectButton children="本日のあなたのスコア"/>
              </div>
            </div>

        </div>
      </main>
    </>
  )
}
