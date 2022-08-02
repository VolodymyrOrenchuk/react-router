import {Route, Switch} from "react-router-dom";
import Layout from "./components/layout/Layout";
import ContactsPage from "./pages/ContactsPage";
import MainPage from "./pages/MainPage";
import PhotosPage from "./pages/PhotosPage";
import PublicationsPage from "./pages/PublicationsPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (<Layout>
        <Switch>
            <Route path="/" exact>
                <MainPage/>
            </Route>
            <Route path="/posts">
                <PublicationsPage/>
            </Route>
            <Route path="/photos">
                <PhotosPage/>
            </Route>
            <Route path="/contacts" exact>
                <ContactsPage/>
            </Route>
            <Route path="/contacts/:id" exact component={ContactPage}>
                {/*<ContactPage/>*/}
            </Route>
        </Switch>
    </Layout>);
}

export default App;
