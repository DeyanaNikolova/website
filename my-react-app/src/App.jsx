import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
// import Food from './Food.jsx';
// import Card from './Card.jsx';
// import Button from './Button.jsx';
 import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";


function App() {
  return (
    <>
      <Header />
      {/* <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student /> */}
      <UserGreeting isLoggedIn={true}/>
      
      <Footer />
    </>
  );
}

export default App;
