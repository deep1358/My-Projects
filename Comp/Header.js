import styles from '../styles/header.module.css'
import {motion} from "framer-motion"

function Header() {
    return (
        <motion.div initial="hidden" animate="visible" className={styles.header}
            variants={{
                hidden:{
                    scale:.8,
                    opacity:0
                },
                visible:{
                    scale:1,
                    opacity:1,
                    transition:{
                        delay:.4
                    }
                }
            }}
        >
            <h1>I am Deep Shah</h1>
        </motion.div>
    )
}

export default Header
