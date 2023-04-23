import styles from "@/styles/Home.module.scss"

import { Header } from '@/components/Layout/Header/Header'
import { UserIcon } from "@/components/UserIcon/UserIcon"
import { SelectButton } from "@/components/Ui/SelectButton/SelectButton"
import React from 'react'

type Props = {}

export default function index({}: Props) {
  return (
    <>
        <Header/>
        <main>
        <div className={styles.mainInner}>
            <UserIcon children='user01さんが接続中'/>
            <div className={styles.answerButtonWrap}>
                <SelectButton children='回答01' />
                <SelectButton children='回答02' />
                <SelectButton children='回答03' />
                <SelectButton children='回答04' />
            </div>
        </div>
    </main>
    </>

  )
}