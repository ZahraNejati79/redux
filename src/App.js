import "./App.css";

function App() {
  const BUY_CAKE = "BUY_CAKE";

  //action creator
  function buyCake() {
    return {
      type: BUY_CAKE,
    };
  }

  const initialState = {
    numOfCake: 10,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case BUY_CAKE:
        return { ...state, numOfCake: numOfCake - 1 };
    }
  };

  return (
    <>
      <div className="App">Hello world</div>;<h1>hello world</h1>
    </>
  );
}

export default App;
