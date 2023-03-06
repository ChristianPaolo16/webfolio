import { Button } from "flowbite-react"

export default function Projects() {
    
    return(
        <div id='projects' className="flex flex-col pt-10">
            <span className='mt-10 text-3xl text-center'>PROJECTS</span>

            <div className="flex flex-col lg:flex-row items-center justify-center mt-10">
                <img src="https://res.cloudinary.com/dr4rwlp7t/image/upload/v1677816869/webportfolio/firstPortfolio_sxibt4.png" className="w-4/5 lg:w-2/5"/>
                <div className="flex flex-col lg:ml-8 lg:mt-12 mt-6 w-3/4 lg:w-2/5">
                    <span className="text-xl">Personal Portfolio</span>
                    <p className="lg:mt-2 lg:w-96">
                        My first personal portfolio created using HTML, CSS, and Bootstrap
                    </p>
                    <div className="flex mt-5">
                        <Button className='mr-5' href="https://christianpaolo16.github.io/webportfolio/" target="_blank">Live</Button>
                        <Button href="https://github.com/ChristianPaolo16/webportfolio" target="_blank">Source</Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center mt-10">
                <img src="https://res.cloudinary.com/dr4rwlp7t/image/upload/v1677822118/webportfolio/paradise_srfilx.png" className="w-4/5 lg:w-2/5"/>
                <div className="flex flex-col lg:ml-8 lg:mt-12 mt-6 w-3/4 lg:w-2/5">
                    <span className="text-xl">Paradise</span>
                    <p className="lg:mt-2 lg:w-96">
                        My capstone 3 project in Zuitt Coding Bootcamp using MERN Stack. This is a resort boking application wherein you can schedule your bookings for a room in the resort.
                    </p>
                    <div className="flex mt-5">
                        <Button className='mr-5' href="https://resort-booking-ecru.vercel.app/" target="_blank">Live</Button>
                        <Button href="https://github.com/ChristianPaolo16/Reesort-Booking-Application" target="_blank">Source</Button>
                    </div>
                </div>
            </div>

        </div>
    )
    
}