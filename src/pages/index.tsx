import styles from "@/styles/Home.module.scss"

import { SiteTitle } from '@/components/Layout/SiteTitle/SiteTitle'
import { Header } from "@/components/Layout/Header/Header"
import { Footer } from "@/components/Layout/Footer/Footer"
import { SelectButton } from "@/components/Ui/SelectButton/SelectButton"



export default function Home() {
  return (
    <>
      <Header/>
      <main>  
        <SiteTitle/>
        <div className={styles.mainInner}>
          <p className={styles.mainText}>4択のクイズを通して<br></br>ビジネスで使える用語を覚えよう！</p>
          <div className={styles.selectWrap}>
            <p className={styles.selectWrapText}>カテゴリを選択してください。</p>
            <div className={styles.selectWrapButtons}>
              <SelectButton children="seo"/>
              <SelectButton children="marketing"/>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
