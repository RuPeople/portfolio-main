import React, { Component } from 'react';
import {observer} from "mobx-react-lite";
import './App.css';
import Header from "./components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import "./fonts/Satoshi-Regular.otf"
import "./fonts/Satoshi-MediumItalic.otf"
import "./fonts/Satoshi-Medium.otf"
import "./fonts/Satoshi-Light.otf"
import "./fonts/Satoshi-LightItalic.otf"
import "./fonts/Satoshi-Italic.otf"
import "./fonts/Satoshi-BoldItalic.otf"
import "./fonts/Satoshi-Bold.otf"
import "./fonts/Satoshi-Black.otf"
import "./fonts/Satoshi-Variable.ttf"
import "./fonts/Satoshi-VariableItalic.ttf"
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import ModelCanvas from "./components/ModelCanvas";

console.log(process.env.REACT_APP_API_URL)

const App = observer(() => {
    return (
        <BrowserRouter>
            <Header/>
            <ModelCanvas/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
});

export default App;
