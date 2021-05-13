import IndexPage from "./pages/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/sources/">{/*<Sources />*/}</Route>
                    <Route path="/assignments">{/*Assignments*/}</Route>
                    <Route path="/">
                        <IndexPage />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
