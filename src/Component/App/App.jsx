import { Link } from "react-router-dom";

const App = () => {
    return (
        <div className="text-center space-x-10 mt-10" >
            <Link  to='/' > Home</Link>
            <Link to = '/loginPage' >Login</Link>
        </div>
    );
};

export default App;