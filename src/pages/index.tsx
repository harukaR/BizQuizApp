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
        </div>
      </main>
    </>
  )
}
