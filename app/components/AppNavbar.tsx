import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";

export default function AppNavbar() {
    return(
        <AppBar position="fixed">
            <Toolbar sx={{ display: 'flex',
                justifyContent: 'space-between'
             }}>
                <Link href="/">
                    <Typography component="h1" 
                    sx={{ color: '#FFF' }}>
                        Simple Blog
                    </Typography>
                </Link>
                
                <Button>
                    <Link href="/posts/new">
                        <Typography sx={{ color:'#FFF' }}>
                            Create New Post
                        </Typography>
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
}