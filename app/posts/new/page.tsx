import { Box, Input } from "@mui/material";
import AppNavbar from "@/app/components/AppNavbar";
import PostEditor from "@/app/components/PostEditor";

export default function newPost() {
    return(
        <Box sx={{ display: 'flex' }}>
            <AppNavbar/>
            {/* page content container */}
            <Box sx={{ mt: 7 }}>
                <PostEditor />
            </Box>
        </Box>
    );
}