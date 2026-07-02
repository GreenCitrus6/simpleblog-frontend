import { Box } from "@mui/material";
import AppNavbar from "@/app/components/AppNavbar";
import PostsTable from "@/app/components/PostsTable";


export default function newPost() {
    return(
        <Box sx={{ display: 'flex' }}>
            <AppNavbar/>
            {/* Posts container */}
            <Box sx={{ mt: 7 }}>
                
            </Box>
        </Box>
    );
}