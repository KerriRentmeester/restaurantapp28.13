//this magically appeared in 28.12

const { useContext } = require("react");
// missing several lines of code that can't be seen in video






function MyApp(props) {
    var {user, setUser} = useContext(appContext)
    const { Component, pageProps } = props;

    return (
        <AppContext.Provider value={{isAuthenticated:false,user:null, setUser:() => {}}}>
        <Head>

            <Layout>
                    <Component {...pageProps} />
            </Layout>

        </Head>
        </AppContext.Provider>
    );
    
}

export default MyApp;