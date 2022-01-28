import styles from '../styles/exports.module.scss';
import Link from 'next/link';
<link href="https://fonts.googleapis.com/css2?family=Amiri:ital@0;1&display=swap" rel="stylesheet"></link>




function Home(){
    return(
        <div className ={styles.container}>

            <div className = {styles.header}>

                <div className = {styles.header__textFormat}>
                    <div className = {styles.header__textFormat__cellOne}>
                        <h1>Christian Chavez</h1>
                    </div>
                    <div className = {styles.header__textFormat__cellTwo}>
                        <h1>Software Engineer</h1>
                    </div>
                    <div className = {styles.header__textFormat__cellThree}>
                        <h1>STEM enthusiast</h1>
                    </div>
                    <div className = {styles.header__textFormat__cellFour}>
                        <h1>95% caffeine, 5% human</h1>
                    </div>

                </div>




                <div className= {styles.header__picture}>

                </div>

            </div>


            <div className = {styles.about}>

                <div className = {styles.about__mainText}>

                    
                    <p className = {styles.about__mainText__text}>
                            'Through hardhips, to the stars'
                    </p>

                    <p className= {styles.about__mainText__secondText}>

                        Thank you very much for taking the time to view my site! My name is Christian and I am a
                        self-taught developer that has a passion for STEM, and enjoy combat sports. If there is anything that I have learned
                        about myself from such sports, it's that no matter how tired I am, or how many times I get knocked down; I
                        always get up and am never discouraged. I have the same philosophy when it comes to problem solving, and learning anything in general.
                        No matter how difficult something is, I will always push through it and resolve the issue. 

                    </p>


                </div>


                <div className = {styles.about__image}></div>




            </div>





            <div className = {styles.projects}>

                <h1 className = {styles.projects__header}>technologies</h1>

                <div className = {styles.card}>

                    <div className = {`${styles.card__side} ${styles.card__side__sideFront}`}>
                     
                        <h1 className = {styles.card__side__sideFront__divZero}>Design</h1>

                        <svg className = {styles.card__side__sideFront__divOne}>
                            <use  xlinkHref = 'sprite2.svg#icon-adobephotoshop'></use>
                        </svg>

                        <svg className = {styles.card__side__sideFront__divTwo}>
                            <use xlinkHref = 'sprite2.svg#icon-adobeillustrator'></use>
                        </svg>

                        <svg className = {styles.card__side__sideFront__divThree}>
                            <use xlinkHref = 'sprite2.svg#icon-adobexd'></use>
                        </svg>
                       
                    </div>

                    <div className = {`${styles.card__side} ${styles.card__side__sideBack}`}>
                        <p className = {styles.card__side__sideBack__paragraph}>
                            I love messing around with design tools, and although it's not something I am an expert on, I enjoy spending time
                            on learning how to use them because they are incredibly important for the user experience. This personal site was
                            actually made using these design tools and I had a blast doing it!
                        </p>
                    </div>
        
                </div>

                <div className = {styles.card}>

                    <div className = {`${styles.card__side} ${styles.card__side__sideFront}`}>
                     
                        <h1 className = {styles.card__side__sideFront__divZero}>Front-end</h1>

                        <svg className = {styles.card__side__sideFront__divOne}>
                            <use  xlinkHref = 'sprite2.svg#icon-react'></use>
                        </svg>

                        <svg className = {styles.card__side__sideFront__divTwo}>
                            <use xlinkHref = 'sprite2.svg#icon-html5'></use>
                        </svg>

                        <svg className = {styles.card__side__sideFront__divThree}>
                            <use xlinkHref = 'sprite2.svg#icon-css3'></use>
                        </svg>
                       
                    </div>

                    <div className = {`${styles.card__side} ${styles.card__side__sideBack}`}>
                        <p className = {styles.card__side__sideBack__paragraph}>
                            when I was first learning about HTML and CSS the most notable thing to me was the seperation of concerns, a concept
                            that calls for the organization of code. As in CSS, javascript, and HTML code should be kept in seperate files; so 
                            when I was first introduced to react and JSX my mind was blown! I've really enjoyed working within the react library 
                            and have gotten used it, allowing me to pick up some skills such as redux along the way. This personal site was created 
                            using these tools!
                        </p>
                    </div>
        
                </div>

                <div className = {styles.card}>
                    <div className = {`${styles.card__side} ${styles.card__side__sideFront}`}>

                     
                        <h1 className = {styles.card__side__sideFront__divZero}>Back-end</h1>

                        <svg className = {styles.card__side__sideFront__divOne}>
                            <use  xlinkHref = 'sprite2.svg#icon-mongodb'></use>
                        </svg>

                        <svg className = {styles.card__side__sideFront__divTwo}>
                            <use xlinkHref = 'sprite2.svg#icon-node-dot-js'></use>
                        </svg>

                        <svg className = {styles.card__side__sideFront__divThree}>
                            <use xlinkHref = 'sprite2.svg#icon-next-dot-js'></use>
                        </svg>
                       
                    </div>

                    <div className = {`${styles.card__side} ${styles.card__side__sideBack}`}>
                        <p className = {styles.card__side__sideBack__paragraph}>
                            In my journey of learning how to code, I kind of stood away from back-end technologies because I was scared of them.
                            I was always putting node.Js and databases on the backburner because of this reason; after a friend of mine encouraged me to 
                            explore it more however, I absolutely fell in love with it. I tend to focus more on front-end stuff because I have a certain ounce
                            of paranoia in thinking that the a site will be useless if the user experience is not up to par. Personally however, I would 
                            like to specialize on back-end technologies and focus more on that in the near future. 

                        </p>
                    </div>
        
                </div>

            </div>









            <div className ={styles.contact}>

                
                <h1 className = {styles.contact__title}>Let's get to work</h1>

                <div className = {styles.contact__phone}>
                    <h1>602-819-1889</h1>
                </div>

                <div className = {styles.contact__email}>
                    <h1>cchave23@asu.edu</h1>
                </div>
            
                <Link href = 'https://github.com/MrBanditHat1'>

                    <button className = {styles.contact__gitHub}>
                        <svg className = {styles.contact__gitHub__icon}>
                            <use xlinkHref = 'sprite.svg#icon-github'></use>
                        </svg>
                    </button>
                
                </Link>

                
            </div>


            
        </div>
    )
};


export default Home


 /*                 <button className = {styles.contact__phone}>
                    <svg >
                        <use xlinkHref = 'sprite.svg#icon-phone'></use>
                    </svg>
                </button>

                <button className = {styles.contact__email}>
                    <svg c>
                        <use xlinkHref = 'sprite.svg#icon-envelop'></use>
                    </svg>
                </button>

                <button className = {styles.contact__gitHub}>
                    <svg >
                        <use xlinkHref = 'sprite.svg#icon-github'></use>
                    </svg>
                </button>
                
                
                
                */



