import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Skills() {
    
    return(
        <div id='skills' className="flex flex-col items-center pt-10">
            <span className='mt-10 text-3xl'>SKILLS</span>
            <div className="lg:w-3/6 px-2 py-16 sm:px-0 w-11/12">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        <Tab 
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-lg font-medium leading-5 text-blue-700',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >Front-end</Tab>
                        <Tab 
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-lg font-medium leading-5 text-blue-700',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >Back-end</Tab>
                        <Tab 
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-lg font-medium leading-5 text-blue-700',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >Tools</Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel className="grid grid-cols-2">
                            <div className='text-center mt-10 text-xl font-bold'>
                                HTML
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                CSS
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                JavaScript
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                ReactJS
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                Bootstrap
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                Tailwind CSS
                            </div>
                        </Tab.Panel>
                        <Tab.Panel className="grid grid-cols-2">
                            <div className='text-center mt-10 text-xl font-bold'>
                                Node.js
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                Express.js
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                PHP
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                NoSQL
                            </div>
                        </Tab.Panel>
                        <Tab.Panel className="grid grid-cols-2">
                            <div className='text-center mt-10 text-xl font-bold'>
                                MongoDB Compass
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                Git
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                VS Code
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                Sublime Text
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                Postman
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                Render
                            </div>
                            <div className='text-center mt-10 text-xl font-bold'>
                                Vercel
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}