import { useState } from "react";

const Home = () => {

    const [Name,setName] = useState('omar');
    const [age ,setage] = useState(25);

    const handleClick = () =>{
     setName('Ali');
     setage(30);
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{Name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;