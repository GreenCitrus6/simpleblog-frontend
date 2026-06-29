import { Box } from "@mui/material";
import AppNavbar from "../../components/AppNavbar";
import PostsTable from "../../components/PostsTable";

interface PageProps {
  params: Promise<{ postId: string }>;
}

export default async function Post({ params }: PageProps) {
  const { postId } = await params;

  return(
      <Box sx={{ display: 'flex' }}>
          <AppNavbar/>
            {/* Posts container */}   
          <Box sx={{ mt: 7 }}>
          {/* header, subheader with content and tags */}
          {/* edit button next to header */}
          {/* body */}
          {/* footer containing tags */}
        </Box>
      </Box>
  );
}