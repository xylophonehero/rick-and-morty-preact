import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import tw from "twin.macro"

import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './header';
import GlobalStyles from './GlobalStyles';
import { QuotesProvider } from '../context/QuotesContext';

const App: FunctionalComponent = () =>
{
    return (
        <QuotesProvider>
            <div id="preact_root" >
                <GlobalStyles />
                <div tw="flex flex-col min-h-screen">
                    <Header />

                    <Router>
                        <Route path="/" component={Home} />
                        <NotFoundPage default />
                    </Router>


                </div>
            </div>
        </QuotesProvider>
    );
};

export default App;
