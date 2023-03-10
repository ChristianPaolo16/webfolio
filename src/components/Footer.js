import { Footer } from "flowbite-react"

export default function AppFooter() {
    return(
        <Footer container={true}>
            <div className="w-full">
                <Footer.Divider />
                <div className="w-full flex flex-col lg:flex-row sm:items-center justify-between text-center">
                    <Footer.Copyright
                        by="All Rights Reserved"
                        year={2023}
                        className='lg:ml-10'
                    />
                    <div className="mt-4 lg:mr-10 flex space-x-6 sm:mt-0 justify-center">
                        <a href="https://www.linkedin.com/in/christian-paolo-avanzado-483885262/" target="_blank" rel="noreferrer">
                            <img alt="Linkedin" className="h-7" src="https://res.cloudinary.com/dr4rwlp7t/image/upload/v1677832932/webportfolio/logo-linkedin_oyt0ea.png"/>
                        </a>
                        <a href="https://gitlab.com/lopao16" target="_blank" rel="noreferrer">
                            <img alt="Gitlab" className="h-7" src="https://res.cloudinary.com/dr4rwlp7t/image/upload/v1677832933/webportfolio/logo-gitlab_xelkgv.png"/>
                        </a>
                        <a href="https://github.com/ChristianPaolo16" target="_blank" rel="noreferrer">
                            <img alt="Github" className="h-7" src="https://res.cloudinary.com/dr4rwlp7t/image/upload/v1677832932/webportfolio/logo-github_tj9rfk.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </Footer>
    )
}