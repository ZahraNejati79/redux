import { buyCake } from "../redux/cake/cakeAction";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>number of cake:{props.numOfCake}</h2>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
