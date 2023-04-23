

import styles from "@/styles/Home.module.scss"
import Link from 'next/link'

type Props = {}

export default function index({}: Props) {
  return (
    <main>  
        <div className={styles.mainInner}>
        <p className={styles.pageTitle}>あなたのスコア</p>
        <Link href='/' className={styles.link}>TOPに戻る</Link>
        </div>
    </main>
  )
}