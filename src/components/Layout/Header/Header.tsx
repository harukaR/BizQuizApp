import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
// import { faMoon } from '@fortawesome/free-solid-svg-icon'

import styles from "@/components/Layout/Header/header.module.scss"



export const Header =()=>{
    return(
        <header>
            <FontAwesomeIcon icon={faSun} className={styles.themeIcon} />
        </header>

    )
}