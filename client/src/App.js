/* React */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Pages */
import AssignmentsPage from "./pages/Assignments";
import RegisterPage from "./pages/Register";
import SourcesPage from "./pages/Sources";
import LoginPage from "./pages/Login";
import IndexPage from "./pages/Index";

/* Material UI */
import CircularProgress from "@material-ui/core/CircularProgress";

/* Miscellaneous */
import SourcesContext from "./SourcesContext";
import axios from "axios";

function App() {
    const [sources, setSources] = useState();

    useEffect(() => {
        axios
            .get("http://localhost:5000/sources", { crossdomain: true })
            .then((response) => {
                console.log(response.data);
                setSources(response.data);
            });
    }, []);

    return sources ? (
        <SourcesContext.Provider value={sources}>
            <Router>
                <Switch>
                    <Route path="/register/">
                        <RegisterPage />
                    </Route>
                    <Route path="/login/">
                        <LoginPage />
                    </Route>
                    <Route path="/sources/">
                        <SourcesPage />
                    </Route>
                    <Route path="/assignments">
                        <AssignmentsPage />
                    </Route>
                    <Route path="/">
                        <IndexPage />
                    </Route>
                </Switch>
            </Router>
        </SourcesContext.Provider>
    ) : (
        <div className="h-screen flex justify-center items-center bg-gray-200">
            <CircularProgress />
        </div>
    );
}

export default App;
