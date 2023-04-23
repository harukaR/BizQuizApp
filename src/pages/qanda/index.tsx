import React from 'react'
import styles from "@/styles/Home.module.scss"
import Link from 'next/link'
type Props = {}

export default function index({}: Props) {
  return (
    <main>  
        <div className={styles.mainInner}>
        <p className={styles.pageTitle}>問題と回答</p>
        <Link href='/' className={styles.link}>TOPに戻る</Link>
        </div>
    </main>
  )
}