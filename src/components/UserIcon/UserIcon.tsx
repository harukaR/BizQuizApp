import styles  from "@/components/UserIcon/userIcon.module.scss"

export const UserIcon =()=>{
    return(

        <div className={styles.UserWrap}>
                <div className={styles.userIcon}></div>
                <p className={styles.userName}>こんにちはUser01さん</p>
        </div>
    )
}