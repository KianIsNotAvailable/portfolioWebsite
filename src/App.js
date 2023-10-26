
import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/skillList';
import Projects from './components/Projects';




function App() {
  return (
    <div className="App">
        <Navbar />
        <div id='home' className=' flex flex-col items-center justify-center h-screen'>
        <h1 className='font-bold text-4xl'>Hi, I'm Kian</h1>
        <h2 className='font-semibold m-5'>Fullstack Developer</h2>
        <p className='max-w-3xl'>I'm a fullstack developer with a passion for all things technology. I'm an advocate for clean code, responsive design and continuous improvement. 
          When I'm not coding you can find me exploring the latest tech innovations and keeping up with the latest trends and best practices to deliver top notch results.</p>
        </div>
        <section id='SkillSection' className=' h-screen'>
        <h1 className='font-bold text-3xl my-10'>Skills</h1>
          <div className='icons flex flex-row justify-center my-44'>
            <Skills/>
          </div>
        </section>
        <section className='Projects h-screen'>
          <h1 className='font-bold text-3xl ' >Projects</h1>
        <div className=' p-40'>
         <Projects/>
          
        </div>
        </section>
    </div>
  );
}

export default App;
