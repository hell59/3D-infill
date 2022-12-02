import React from 'react';
import Navbar from "./components/navbar/navbar";
import Showroom from "./components/showroom/showroom";
import Sidebar from "./components/sidebar/sidebar";
import './App.css'


class App extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Showroom/>
                <Sidebar/>
            </div>
        );
    }
}

export default App;