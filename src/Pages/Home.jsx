import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();

    return (
    <>
      <div>Home Page</div>
      <button onClick={()=> navigate('/order', {replace: true, state:{from:'home page'}})}> Order Now</button>
      
    </>
  );
};

export default Home;
