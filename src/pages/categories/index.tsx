import { Header } from '@/components/Layout/Header/Header'
import { SiteTitle } from '@/components/Layout/SiteTitle/SiteTitle'
import { SelectButton } from '@/components/Ui/SelectButton/SelectButton'
import { UserIcon } from '@/components/UserIcon/UserIcon'

import styles from "@/styles/Home.module.scss"

type Props = {}

export default function index({}: Props) {
  return (
    <>
    <Header/>
    <main>
        <SiteTitle/>
        <div className={styles.mainInner}>
            <UserIcon children='user01さんが接続中'/>
            <div className={styles.buttonWrap}>
                <div className={styles.buttonFlex}>
                        <SelectButton children='カテゴリ01' />
                        <SelectButton children='カテゴリ02' />
                </div>
            </div>
        </div>
    </main>
    </>
  )
}