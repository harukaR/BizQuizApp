type Props = {
    children:string;
    className?: string;
}
import styles from '@/components/Ui/selectButton/selectButton.module.scss'

export const SelectButton =({children}:Props)=>{
    return(
        <button className={styles.selectButton}>{children}</button>
    )
}