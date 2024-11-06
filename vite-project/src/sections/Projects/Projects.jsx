import styles from './ProjectsStyles.module.css'
import CarLogo from '../../assets/CarLogo.png'
import PuppyLogo from '../../assets/PuppyLogo.png'
import QuizLogo from '../../assets/QuizLogo.png'
import WeatherLogo from '../../assets/WeatherLogo.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className='{styles.projectsContainer}'>
            <ProjectCard 
            src={CarLogo} 
            link="https://github.com/CodeCourtAce/Car-Creator"
            h3="Car Creator" 
            p="Car Creator is a project that allows users to create and customize their own car"
            />
            <ProjectCard 
            src={PuppyLogo} 
            link="https://github.com/yunusemreertas/Fur-Ever-Home.git"
            h3="Fur Ever Home" 
            p="This project is a website that helps users find a pet to adopt"
            />
            <ProjectCard 
            src={QuizLogo} 
            link="https://github.com/abbylemieux/Movie-Trivia.git"
            h3="Movie Trivia" 
            p="This project is a movie trivia game that tests your knowledge of movies"
            />
            <ProjectCard 
            src={WeatherLogo} 
            link="https://github.com/CodeCourtAce/WeatherTrackerApp.git"
            h3="Weather Tracker" 
            p="This project is a weather tracker that allows users to search for the weather in their area"
            />
        </div>
    </section>
  );
}

export default Projects;