import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, useTheme, useMediaQuery } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link } from 'react-router-dom';
import HelpOutlineIcon from '@mui/icons-material/ChatRounded';

const Sidebar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false); // Manage the open state internally

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* Menu Button for Mobile */}
            {isMobile && (
                <IconButton
                    edge="start"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    style={{ position: 'absolute', top: 38, left: 25, zIndex: 1300, color: 'white' }} // Set the color to white
                >
                    {open ? <CloseIcon style={{ color: 'white' }} /> : <MenuIcon style={{ color: 'white' }} />} 
                    {/* Ensure the icon is white */}
                </IconButton>
            )}

            {/* Sidebar Drawer */}
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={isMobile ? open : true}
                onClose={handleDrawerToggle}
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(245, 245, 245,0.9)',
                        color: 'black',
                        backdropFilter: 'blur(4px)', 
                        overflowX: 'hidden',
                    },
                }}
            >
                <div style={{ textAlign: 'center', padding: '10px' }}>
                    <img
                        src="/LearnMitra__1_-removebg-preview.png"
                        alt="Logo"
                        style={{
                            width: '100%',
                            maxWidth: '180px',
                            height: 'auto',
                            filter: 'brightness(1.65)'
                        }}
                    />
                </div>
                <List>
                    {[
                        { text: 'My Dashboard', icon: <DashboardIcon />, path: '/' },
                        { text: 'My Roadmaps', icon: <LibraryBooksIcon />, path: '/MyRoadmaps' },
                        { text: "What's New", icon: <NewReleasesIcon />, path: '/WhatsNew' },
                        { text: 'Feedback', icon: <FeedbackIcon />, path: '/feedback' },
                        { text: 'My Profile', icon: <PersonIcon />, path: '/my-profile' },
                        { text: 'Logout', icon: <ExitToAppIcon />, path: '#' },
                    ].map((item, index) => (
                        <ListItem
                            button
                            key={index}
                            component={Link}
                            to={item.path}
                            sx={{
                                padding: 2,
                                borderBottom: '0.5px solid rgb(211,211,211)',
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: '#AFDBF5',
                                    borderRadius: '20px',
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} primaryTypographyProps={{ style: { fontSize: '1.15rem', fontFamily: 'Georgia, serif' } }} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* Icon Button for Bottom Right */}
            <IconButton
                color="primary"
                style={  {
                    position: 'fixed',
                    bottom: 40,
                    right: 60,
                    zIndex: 1300,
                }}
            >
                <HelpOutlineIcon />
            </IconButton>
        </>
    );
};

export default Sidebar;
