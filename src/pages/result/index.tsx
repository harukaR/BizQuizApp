import { Header } from '@/components/Layout/Header/Header'

import styles from "@/styles/Home.module.scss"
import Link from 'next/link'

type Props = {}

export default function index({}: Props) {
  return (
    <div>
      <Header/>
      <main>  
        <div className={styles.mainInner}>
          <p className={styles.result}>結果は?/10でした。</p>
          <Link href='/' className={styles.link}>TOPに戻る</Link>

        </div>
      </main>
    </div>
  )
}