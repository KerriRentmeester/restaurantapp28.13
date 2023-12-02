//this file magically appeared in 28.13, but I was only able to write out part of the code. I saw more code in 28.15 (3:40) and added it below.
import '../styles/global.css'
import { useContext, useState } from "react";
import Head from "next/head";
import AppContext from "../components/context";
import Layout from "../components/layout"

const { useContext } = require("react");  // this line was present in 28.13, but not in 28.15
// missing ~7 lines of code that can't be seen in 28.13. But in 28.15 there is no code here.

function MyApp(props) {
    var {user, setUser} = useContext(appContext)
    const { Component, pageProps } = props;

    return (
        <AppContext.Provider value={{isAuthenticated:false,user:null, setUser:() => {}}}>
            <Head>
                <link
                    rel="stylesheet"
                        {/*missing 3 lines of code */}
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppContext.Provider>
    );
    
}

export default MyApp;