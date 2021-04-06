import styles from '../styles/Project.module.css'
import {motion} from "framer-motion"
import Link from "next/link"

const Project = ({src,name,link}) => {
    return (
        <Link href={link}>
            <a target="_blank" style={{textDecoration:"none"}}>
            <motion.div  initial="hidden"
                animate="visible"
                variants={{
                    hidden:{
                        scale:.6,
                        opacity:0
                    },
                    visible:{
                        scale:1,
                        opacity:1,
                        transition:{
                            delay:.5
                        }
                    }
                }}
            >
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.project}
                >
                    <img className={styles.image} src={src} alt={name} />
                    <div className={styles.caption}>
                        <h5 className={styles.web_name}>{name}</h5>
                    </div>
                </motion.div>
            </motion.div>
            </a>
        </Link>
    )
}

export default Project