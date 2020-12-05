import "./App.scss";
import Reviews from "./component/Reviews/Reviews";
import data from "./data";
import Title from "./component/Title/Title";

function App() {
    return (
        <div className="App text-center">
            <Title title="our reviews" under={true} />
            <Reviews views={data} />
        </div>
    );
}

export default App;
