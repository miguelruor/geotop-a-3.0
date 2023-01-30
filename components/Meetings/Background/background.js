import { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

export default function Background(props) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color={props.backgroundColor}
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Title
                    </Typography>
                </Toolbar>
            </AppBar>
            {/*<Header
                {...props}
                headerSrc={"/img/meetings/" + props.meeting + "/header-banner.png"}
                bannerSrc={"/img/meetings/" + props.meeting + "/banner.jpg"} />
            {props.children}*/}
            <SideMenu options={
                [
                    { text: "Homepage", url: "/" + props.meeting },
                    { text: "Keynote Speakers", url: "/" + props.meeting + "/keynote-speakers" },
                    { text: "Deadlines and Registration", url: "/" + props.meeting + "/registration" },
                    { text: "Financial Support", url: "/" + props.meeting + "/financial-support" },
                    { text: "Guidelines for Contribution", url: "/" + props.meeting + "/contribution-guidelines" },
                    { text: "Abstract Submission", url: "/" + props.meeting + "/abstract-submission" },
                    { text: "Venue and Travel Infos", url: "/" + props.meeting + "/venue-and-travel-infos" },
                    { text: "Accomodation and Meals", url: "/" + props.meeting + "/accomodation-and-meals" },
                    { text: "Social Programme", url: "/" + props.meeting + "/social-programme" },
                    { text: "List of Participants", url: "/" + props.meeting + "/list-of-participants" },
                    { text: "Scientific Programme", url: "/" + props.meeting + "/scientific-programme" },
                    { text: "Book of Abstracts", url: "/" + props.meeting + "/book-of-abstracts" },
                    { text: "Group Photo and Gallery", url: "/" + props.meeting + "/group-photo-and-gallery" },
                    { text: "FAQs and Suggestions", url: "/" + props.meeting + "/faqs-and-suggestions" },
                ]
            }
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
            >
                {props.children}
            </SideMenu>
        </Box>
    )
}