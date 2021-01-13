import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import Contact from './Contact';
import About from './About';

const Home = props => {
    const { match, history } = props;
    const { params } = match;
    const { page } = params;

    // maps between index of tab and name of tab 
    const tabNameToIndex = {
        0: "about",
        1: "contact"
    }

    const indexToTabName = {
        "about": 0,
        "contact": 1,
    }

    const [selectedTab, setSelectecdTab] = React.useState(indexToTabName[page]);

    const handleChange = (event, newValue) => {
        history.push(`/home/${tabNameToIndex[newValue]}`)
        setSelectecdTab(newValue);
    };

    return (
        <>
            <AppBar position="sticky">
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="About" />
                    <Tab label="Contact" />
                </Tabs>
            </AppBar>
            { selectedTab === 0 && <About />}
            { selectedTab === 1 && <Contact />}
        </>
    );
};

export default Home;