import { AppBar, Toolbar, Typography } from "@mui/material";

export default function AppNavbar() {
    return(
        <AppBar position="fixed">
            <Toolbar>
                <Typography>Simple Blog</Typography>
            </Toolbar>
        </AppBar>
    );
}