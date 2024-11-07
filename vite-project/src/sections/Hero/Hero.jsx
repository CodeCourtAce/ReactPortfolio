import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV.png';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon; 
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
             className={styles.hero} 
             src={heroImg} 
             alt="Profile pic of GG"
            />
            <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt="Color mode icon"
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                GG 
                <br /> 
                D'Aconti
            </h1>
            <h2>Software Engineer</h2>
            <span> {/* Social media icons will probably need to be switched to About me, Portfolio, Contact & Resume button sections. */}
                <a href="https://twitter.com/" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com/" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            {/* will change the text later to look better just using lorem ipsum for the time being*/}
            <p className={styles.description}>
            As a dedicated software engineer with a passion for innovative problem-solving, I specialize in developing robust and scalable applications.

With expertise in languages such as Python, React, and JavaScript.

            </p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
           </div> 
    </section>
    );

}

export default Hero;