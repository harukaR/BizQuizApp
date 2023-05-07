import styles from "@/styles/Home.module.scss"

import { SiteTitle } from '@/components/Layout/SiteTitle/SiteTitle'
import { Header } from "@/components/Layout/Header/Header"
import { Footer } from "@/components/Layout/Footer/Footer"
import { SelectButton } from "@/components/Ui/SelectButton/SelectButton"
import { createUser, deleteUser,confirmation } from "@/hooks/user"
import Link from "next/link"



export default function Home() {


  return (
    <>
      <p onClick={createUser}>user生成</p>
      <p onClick={confirmation}>userを確認</p>
      <p onClick={deleteUser}>userを削除</p>
      <Header/>
      <main>  
        <SiteTitle/>
        <div className={styles.mainInner}>
          <p className={styles.mainText}>4択のクイズを通して<br></br>ビジネスで使える用語を覚えよう！</p>
          <div className={styles.selectWrap}>
            <p className={styles.selectWrapText}>カテゴリを選択してください。</p>
            <div className={styles.selectWrapButtons}>
              <Link href='quiz/countDown'>
                <SelectButton children="seo"/>
              </Link>
            
              <SelectButton children="marketing"/>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
