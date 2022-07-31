import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

const HooksCakeContainer = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch(buyCake());
  return (
    <div>
      <h2>number of cake:{numOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
