
import './App.css';
import Navbar from './components/Navbar';
import CSS from './assets/css3.png';
import Git from './assets/git.png';
import Github from './assets/github.png';
import HTML from './assets/html5.png';
import Javascript from './assets/javascript.png';
import mySQL from './assets/mysql.png';
import Nodejs from './assets/nodejs.png';
import ReactIcon from './assets/react.png';
import VScode from './assets/visual-studio-code.png';
import Tailwind from './assets/Tailwind CSS.png'


function App() {
  return (
    <div className="App">
        <Navbar />
        <div className=' flex flex-col items-center justify-center h-screen'>
        <h1 className='font-bold text-3xl'>Hi, I'm Kian</h1>
        <h2 className='font-semibold m-5'>Fullstack Developer</h2>
        <p>I'm a fullstack developer with a passion for all things technology</p>
        </div>
        <section className='skills h-screen'>
        <h1 className='font-bold text-3xl my-10'>Skills</h1>
          <div className='icons flex flex-row justify-center my-44'>
          <div className='flex flex-col'>
            <img src={HTML}/>
          <h1>HTML5</h1>
          </div>
          <div className='flex flex-col'>
          <img src={CSS}/>
          <h1>CSS3</h1>
          </div>
          <div className='flex flex-col'>
          <img src={Javascript}/>
          <h1>JavaScript</h1>
          </div>
          <div className='flex flex-col'>
          <img src={ReactIcon}/>
          <h1>ReactJS</h1>
          </div>
          <div className='flex flex-col'>
          <img src={Tailwind}/>
          <h1>Tailwind CSS</h1>
          </div>
          <div className='flex flex-col'>
          <img src={mySQL}/>
          <h1>MySQL</h1>
          </div>
          <div className='flex flex-col'>
          <img src={Nodejs}/>
          <h1>NodeJs</h1>
          </div>
          <div className='flex flex-col'>
          <img src={Git}/>
          <h1>Git</h1>
          </div>
          <div className='flex flex-col'>  
          <img src={Github}/>
          <h1>Github</h1>
          </div>  
          <div className='flex flex-col'>
          <img src={VScode}/>
          <h1>Visual Studio Code</h1>
          </div>
          </div>
        </section>
        <section className='skills h-screen'>
          <h1>Projects</h1>

          <h2>Calorie Calculator & Workout builder</h2>
          <h2>Twitch Chat Bot</h2>
          <h2>Pizza Planet Ecommerce Website</h2>
        </section>
    </div>
  );
}

export default App;
