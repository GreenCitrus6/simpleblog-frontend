import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function AppNavbar() {
    return(
        <AppBar position="fixed">
            <Toolbar sx={{ display: 'flex',
                justifyContent: 'space-between'
             }}>
                <Typography>Simple Blog</Typography>
                <Button>
                    <Typography sx={{ color:'#FFF' }}>
                        Create New Post
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
}