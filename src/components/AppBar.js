import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Divider, { dividerClasses } from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//const pages = ['About', 'Books', 'Watches', 'History', 'Philosophy', 'Science', 'Mathematics', 'Tech', 'Programming', 'AI'];
const pages = ['About', 'Books', 'Watches', 'History', 'Philosophy', 'Science', 'Mathematics', 'Tech', 'Programming', 'AI', 'Tune','Chatterbug'];
const clonePages = pages.slice()
clonePages.reverse()
export default function ApplicationBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenu = (event, page) => {
        console.log(page)
        if (page == "Chatterbug") {
            navigate("/chatterbug")
        } else if (page == "Tune") {
            navigate("/tuneurmodel")
        }else if (page == "AI") {
            navigate("/ai")
        } else if (page == "Programming") {
            navigate("/programming")
        } else if (page == "Tech") {
            navigate("/tech")
        } else if (page == "Mathematics") {
            navigate("/maths")
        } else if (page == "Science") {
            navigate("/science")
        } else if (page == "Philosophy") {
            navigate("/philosophy")
        } else if (page == "History") {
            navigate("/history")
        } else if (page == "Watches") {
            navigate("/watches")
        } else if (page == "Books") {
            navigate("/books")
        } else if (page == "About") {
            navigate("/about")
        }

    };

    const handleLoginMenu = (event) => {
        navigate("/about")
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "#1c1c25", 'background-image': 'radial-gradient(circle, rgba(229, 229, 229, 0.03) 20%, transparent 10%), radial-gradient(circle, rgba(229, 229, 229, 0.03) 20%, transparent 10%)',
'background-size': '1em 1em', 'background-position': '50% 50%'}}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            flexGrow: 1,
                            mr: 2,
                            fontFamily: 'monospace',
                            fontSize: '2.5em',
                            color: 'inherit',
                            textDecoration: 'none',
                                                    }}
                    >
                        Maitreya
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'node', lg: 'flex' }, flexDirection: 'row-reverse' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleLoginMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        {pages.map((page) => (
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Button
                                    key={page}
                                    onClick={(evt) => handleMenu(evt, page)}
                                    sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'monospace' }}
                                >
                                    {page}
                                </Button>
                                <Box sx={{ height: '30%', alignSelf: 'center', borderLeft: 1, borderColor: 'white', borderWidth: '1px' }}></Box>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', lg: 'none' , flexDirection: 'row-reverse'} }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {clonePages.map((page) => (
                                <MenuItem key={page} onClick={(evt) => handleMenu(evt, page)}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                            <MenuItem key={"Login"} onClick={handleLoginMenu}>
                                <Typography sx={{ textAlign: 'center' }}>{"About"}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}