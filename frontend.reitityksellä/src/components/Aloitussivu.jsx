import { useNavigate } from "react-router-dom";

const Aloitussivu = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/list');
  };

  return <button onClick={handleClick}>http://localhost:3333/getData</button>;
};

export default Aloitussivu;
