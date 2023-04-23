import styles  from "@/components/UserIcon/userIcon.module.scss"
type Props ={
    children:string;
}

export const UserIcon =({children}:Props)=>{
    return(

        <div className={styles.UserWrap}>
                <div className={styles.userIcon}></div>
                <p className={styles.userName}>{children}</p>
        </div>
    )
}