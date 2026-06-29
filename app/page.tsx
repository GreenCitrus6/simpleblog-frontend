import { Box } from '@mui/material';
import PostsTable from './components/PostsTable';
import AppNavbar from './components/AppNavbar';


export default function Home() {
  

  return (
    <Box sx={{ display: 'flex' }}>
      <AppNavbar/>
      {/* Posts container */}
      <Box>
        <PostsTable />
      </Box>
    </Box>
  );
}
