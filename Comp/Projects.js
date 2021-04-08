import styles from '../styles/projects.module.css'
import Project from './Project'

const Projects = () => {
    return (
        <div className={styles.projects}>
            <Project src="share-stories.jpg" name="Share Storie" link="https://share--stories.herokuapp.com"/>
            <Project src="Facebook.jpg" name="Facebook Clone" link="https://facebook-clone-e29d7.web.app"/>
            <Project src="Insta.jpg" name="Instagram Clone" link="https://instagram-clone-3879c.web.app"/>
            <Project src="D3-Expenses.jpg" name="D3 Project-1" link="https://d3-project-1-3e96f.web.app"/>
            <Project src="D3-Cycling.jpg" name="D3 Project-2" link="https://d3-project-2-b83f6.web.app"/>
            <Project src="D3-Tree.jpg" name="D3 Project-3" link="https://d3-project-3.web.app"/>
            <Project src="Blog.jpg" name="Blog-NextJs" link="https://blog-next-js-steel.vercel.app/"/>
            <Project src="content-manager.jpg" name="Content-Manager-NextJs" link="https://content-manager-app-prod-kappa.vercel.app/"/>
        </div>
    )
}

export default Projects
