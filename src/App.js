import React, { Component } from "react";
import { HashRouter, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AppBar from "./components/AppBar";
import { createTheme } from "@mui/material/styles";
import {ThemeProvider} from "@mui/material/styles";
import './styles/App.css';

const theme = createTheme(
    {
        typography: {
            fontFamily: 'monospace',
            h5: {
                fontSize: "1.6rem",
                fontWeight: "bold",
            },
            h6: {
                fontSize: "1.3rem",
                fontWeight: "bold",
            },
            h7: {
                fontWeight: "bold",
            },
            h8: {
                fontSize: "1.4em",
                fontFamily: 'monospace',
                fontWeight: "bold"
            }
        }
    }
);

class App extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div style={{ height: "100%", 'overflow-y': 'scroll', 'overflow-x': 'hidden', 'scrollbar-width': 'none' }}>
                    <HashRouter>
                        <AppBar></AppBar>
                        <div style={{
                            display: 'flex', width: '100%', 'align-items': 'center', 'justify-content': 'center', 'overflow-y': 'hidden', 'background-color': '#1c1c25',
                            'background-image': 'radial-gradient(circle, rgba(229, 229, 229, 0.03) 20%, transparent 10%), radial-gradient(circle, rgba(229, 229, 229, 0.03) 20%, transparent 10%)',
                            'background-size': '1em 1em', 'background-position': '50% 50%'}}>
                            <AppRoutes></AppRoutes>
                        </div>
                    </HashRouter>

                </div>
            </ThemeProvider>
        );
    }
}

export default App;