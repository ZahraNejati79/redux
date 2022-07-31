import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

const CakeWithPayload = () => {
  const [numCake, setNumCake] = useState(0);
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch(buyCake());
  return (
    <div>
      <h2>number of cake:{numOfCake}</h2>
      <input
        value={numCake}
        type="number"
        onChange={(e) => setNumCake(e.target.value)}
      />

      <button onClick={() => dispatch(buyCake(numCake))}>
        buy {numCake} cake
      </button>
    </div>
  );
};

export default CakeWithPayload;
