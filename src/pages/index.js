import React from "react"
import Layout from "../components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/base.css';
import '../../static/css/vendor.css';
import '../../static/css/main.css';

import { Helmet } from "react-helmet";

const indexPage = () => {
    return (
        <Layout>
            <Helmet>
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
                <title>Shubham Gupta</title>
            </Helmet>
        </Layout>
    );
}
export default indexPage;