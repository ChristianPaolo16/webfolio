import { Navbar, Button } from "flowbite-react"
import resume from '../files/Resume.pdf'

export default function NavBar () {
    
    return(
        <Navbar
        fluid={true}
        rounded={true}
        className='sticky top-0'
        >
            <Navbar.Brand href="#about">
                <img
                src="https://res.cloudinary.com/dr4rwlp7t/image/upload/v1677476516/webportfolio/avanz_logo_c0zhuh.png"
                className="h-14 md:h-10 xl:ml-48"
                alt="Avanz"
                />
            </Navbar.Brand>
            <div className="flex md:order-2 xl:mr-48 hidden lg:block">
                <a href={resume} download="Resume">
                    <Button>
                        RESUME
                    </Button>
                </a>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#projects" className="text-lg">
                Projects
                </Navbar.Link>
                <Navbar.Link href="#skills" className="text-lg">
                Skills
                </Navbar.Link>
                <Navbar.Link href="#contact" className="text-lg">
                Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}