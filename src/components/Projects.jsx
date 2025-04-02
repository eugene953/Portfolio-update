// import FoodOrder from "../assets/FoodOrder.png"
import kako from "../assets/kako.png"
import Shoply from "../assets/Shoply.png"
import DataWeb from "../assets/DataWeb.png"
import portfolio from "../assets/portfolio.png"

const projects = [
    {
       id:1,
       name:"Online Auction Web App",
       technologies: "MERN Stack",
       image:kako ,
       github:"https://github.com/eugene953",
    },
    {
        id:2,
        name:"E-Commerce Web App",
        technologies: "MERN Stack",
        image:Shoply ,
        github:"https://github.com/eugene953",
     },
     {
        id:3,
        name:"Data Web App",
        technologies: "MERN Stack",
        image: DataWeb,
        github:"https://github.com/eugene953",
     },
     {
        id:4,
        name:"Portfolio Web App",
        technologies: "MERN Stack",
        image: portfolio,
        github:"https://github.com/eugene953",
     },


   ];



const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 py-20
           mt-[900] left-0 z-[-2] h-full w-full bg-neutral-950 
        bg-[radial -gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
    ' id='project'>
    <div className=" mx-auto px-8 md:px-16 lg:px-24">
     <h2 className='text-4xl font-bold text-center
     mb-12'> My Projects</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2
     gap-8">
 {projects.map((project) => (
    <div key={project.id}  
    className="bg-gray-800 p-6  hover:shadow-lg rounded-lg
           transform transition-transform duration-300 hover:scale-105
    ">
       <img src={project.image} alt={project.name} 
       className="rounded-lg mb-4 w-full h-[300px] md:h-[350px] lg:h-[400px] " />
       <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-400 mb-4">
            {projects.technologies}</p>
        <a href={project.github}
        className="inline-block bg-gradient-to-r
        from-green-400 to-blue-500 text-white
        px-4 py-2 rounded-full" target="_blank"
        rel="noopener noreferrer">GitHub</a>
    </div>
))}
      
</div>
</div>
</div>
  )
}

export default Projects
