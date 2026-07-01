import devProject from "../data/devProjects"
import github from "../assets/github.jpg"

const Development = () => {
    return (
        <>
            <div className="overflow-y-auto">
                <div className="mb-10">
                    <div className='text-3xl md:text-4xl mb-4 text-white uppercase'>Machine Learning & AI Engineering</div>
                    <div className='border-1 border-[#686868] opacity-20'></div>
                </div>
                {devProject.map((project, index) => (
                    <div key={index} className='grid grid-cols-1 md:grid-cols-2 py-5 gap-8 mb-16'>
                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="text-3xl font-bold text-white">{project.title}</div>
                                <div className="opacity-75 text-sm text-[#bdbdbd] mt-1">{project.subtitle}</div>
                                <div className="opacity-60 text-sm mt-1">{project.year}</div>
                            </div>
                            
                            <div className="flex flex-col gap-4 mt-6">
                                <div className="text-md text-[#bdbdbd] md:w-[90%] leading-relaxed">
                                    {project.desc}
                                </div>
                                <div className="flex flex-wrap gap-2 text-xs text-white mt-2">
                                    {project.techStack.map((tech, idx) => (
                                        <div key={idx} className="border border-white/20 rounded-md px-3 py-1 bg-white/5">{tech}</div>
                                    ))}
                                </div>
                                <div className="mt-4 flex items-center gap-4">
                                    <a href={project.gitlink} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                        <img src={github} className="h-6 w-6 rounded-full" alt="GitHub Repo" />
                                    </a>
                                    <a href={project.link} target='_blank' rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1 font-semibold">
                                        Live Demo ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full h-[250px] md:h-[350px] rounded-lg overflow-hidden border border-white/10 shadow-lg">
                            <img
                                src={project.imgURL}
                                alt={project.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Development
