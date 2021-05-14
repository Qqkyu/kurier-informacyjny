/* React */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Pages */
import IndexPage from "./pages/Index";
import SourcesPage from "./pages/Sources";

//Todo: ThemeContext (set sources there instead of passing in props)

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/sources/">
                        <SourcesPage />
                    </Route>
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
