import { Button } from "flowbite-react"
import resume from '../files/Resume.pdf'

export default function About () {

    return(
        <div id='about' className="grid lg:grid-cols-12 lg:h-3/5">
            <div className="lg:col-span-3 lg:col-start-2 lg:mt-20 flex flex-col items-center">
                <img className='rounded-full' src="https://res.cloudinary.com/dr4rwlp7t/image/upload/v1677411885/webportfolio/self_bwyr0l.png" alt="..."/>
                <h1 className="text-3xl lg:mt-4">Paolo Avanzado</h1>
                <h2 className="text-2xl lg:mt-2">Web Developer</h2>
                <div className="lg:mt-2">
                    <a href={resume} download="Resume">
                        <Button className='mt-4 bg-blue-600 text-lg lg:hidden' size="md">
                            RESUME
                        </Button>
                    </a>
                </div>
            </div>
            <div className="flex flex-col xl:mt-44 lg:col-start-5 lg:mt-20 lg:col-span-7 lg:ml-5 mx-10 mt-12 ">
                <p className="my-3 text-lg text-justify">
                    I am an aspiring full stack developer with a passion for web development. I have acquired skills in various programming languages.
                </p>

                <p className="my-3 text-lg text-justify">
                    I am always eager to learn and stay up-to-date with the latest trends and technologies in web development. I am confident in my ability to apply my skills and knowledge to create high-quality, scalable, and efficient applications that meet user needs.
                </p>

                <p className="my-3 text-lg text-justify"> 
                    I am excited about the opportunity to start my career in web development and make a positive impact on any project I work on.
                </p>
            </div>
        </div>
    )
    
}