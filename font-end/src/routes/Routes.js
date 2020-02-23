import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
//   landing as landingRoutes,
  dashboard as dashboardRoutes,
  page as pageRoutes,
  pageAdmin as pageAdminRoutes,
} from "./index";

import DashboardLayout from "../layouts/Dashboard";
// import LandingLayout from "../layouts/Landing";
import AuthLayout from "../layouts/Auth";
import Page404 from "../pages/auth/Page404";

import Logout from "../controller/Logout"

import ScrollToTop from "../components/ScrollToTop";

import AdminPageLayout from "../layouts/AdminPageLayout";

const PrivateRoute = (Layout, routes) =>
  routes.map(({ children, path, component: Component }, index) =>
    children ? (
      // Route item with children
      children.map(({ path, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
          )}
        />
      ))
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        exact
        render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )}
      />
    )
  );

const PublicRoute = (Layout, routes) =>
    routes.map(({ children, path, component: Component }, index) =>
        children ? (
            // Route item with children
            children.map(({ path, component: Component }, index) => (
                <Route
                    key={index}
                    path={path}
                    exact
                    render={props => (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    )}
                />
            ))
        ) : (
            // Route item without children
            <Route
                key={index}
                path={path}
                exact
                render={props => (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )}
            />
        )
    );

function Routes() {
    return(
        <Router>
            <ScrollToTop>
                <Switch>
                    {/* {PrivateRoute(LandingLayout, landingRoutes)} */}
                    {PrivateRoute(AdminPageLayout, pageAdminRoutes)}
                    {PrivateRoute(DashboardLayout, dashboardRoutes)}
                    {PublicRoute(AuthLayout, pageRoutes)}
                    <Route
                        path="/logout"
                        render={() => (
                            <Logout/>
                        )}
                    />
                    <Route
                        render={() => (
                            <AuthLayout>
                                <Page404/>
                            </AuthLayout>
                        )}
                    />
                </Switch>
            </ScrollToTop>
        </Router>
    );
}
export default Routes;
