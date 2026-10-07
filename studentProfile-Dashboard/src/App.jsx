import Header from "./Header.jsx";
import StudentCard from "./StudentCard.jsx";
import Skills from "./Skills.jsx";
import Footer from "./Footer";
function App(){
  return(
    <div>
      <Header/>
  <StudentCard student={[
{
Name: "Rahul",
Age: 22,
Course: "Computer Science",
City: "Nashik"
},
{
Name: "Priya",
Age: 21,
Course: "Information Technology",
City: "Pune"
},
{
Name: "Amit",
Age: 23,
Course:" Electronics",
City: "Mumbai"

}

  ]}/>
  
  
  
  <Skills/>
  <Footer/>
  </div>
  
);
}
export default App;