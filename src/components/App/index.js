/***************************************************************************************
 * Title: Refactoring Changes. 
 * Date: 04/02/2020
 * Author: Dom Exley
 * Description: Added exact path attribute to admin route. 
 * This insures componets with /admin/* URL render correctly.
 * Brought in components of Add Item, Report, and Winner.
 * Implemented Routes to Add Item, Report, And Winner.
 **************************************************************************************/

import React from 'react';
import {
    BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

/************** Start Utility Components ******************/
import Navigation from '../Navigation';

/************** Start Page Components *********************/
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import AccountPage from '../Account';

// Admin Page Components
import AdminPage from '../Admin';
import AddItemForm from '../Admin/AddItemForm';
import Report from '../Admin/Report';
import WinnerLog from '../Admin/WinnerLog';

// Auction Management Page Components
import HomePage from '../Home';
import ItemPage from '../Item';
import CartPage from '../Cart';
import * as ROUTES from '../../constants/routes';

import { WithAuthentication } from '../Session';

const App = () => (
    <Router>
        <div>
            <Navigation />

            <hr />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route exact path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.ADMIN_ADD_ITEM} component={AddItemForm} />
            <Route path={ROUTES.ADMIN_REPORT} component={Report} />
            <Route path={ROUTES.ADMIN_WINNER_LOG} component={WinnerLog} />
            <Route path={ROUTES.DYNAMIC_ITEMS} component={ItemPage}/>
            <Route path={ROUTES.DYNAMIC_CART} component={CartPage}/>
        </div>

    </Router>
    
);

export default WithAuthentication(App);
