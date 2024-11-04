import logo from './logo.svg';
import './App.css';
import Profile from './Profile';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Profile text = {{message:"Welcome to Full Stack Development - I"}}  title = {"React JS Programming Week09 Lab exercise"}
                      studentId={"101331989"} name={"Neeta Koirala Pant"} collegeName = {"George Brown College, Toronto"} />



         {/*<Welcome></Welcome> function base component*
         <div>
            <Welcome name= "Welcome to Full Stack Development - I"/>
            <Welcome name ="React JS Programming Week09 Lab exercise"/>
            <Welcome name="101331989"/>
            <Welcome name= "Neeta Koirala Pant"/>
            <Welcome name= "George Brown College, Toronto"/>
        </div>*/}

      </header>
    </div>
  );
}

export default App;
