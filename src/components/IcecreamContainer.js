import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux/icecream/IcecraemAction";

const HooksIcecreamContainer = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch(buyIcecream());
  return (
    <div>
      <h2>number of icecream:{numOfIcecream}</h2>
      <button onClick={() => dispatch(buyIcecream())}>buy icecream</button>
    </div>
  );
};

export default HooksIcecreamContainer;
