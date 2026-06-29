import { Box } from "@mui/material";
import AppNavbar from "../../components/AppNavbar";
import api from "../../api/axiosConfig"

interface PageProps {
  params: Promise<{ postId: string }>;
}


export default async function Post({ params }: PageProps) {
  const { postId } = await params;

  const res = await api.get(`http://localhost:8080/api/v1/blog/${postId}`)
  const data = await res.data;

  return(
      <Box sx={{ display: 'flex' }}>
        <AppNavbar/>
          {/* Posts container */}   
        <Box sx={{ mt: 7 }}>
          {data.title}
          {/* header, subheader with content and tags */}
          {/* edit button next to header */}
          {/* body */}
          {/* footer containing tags */}
        </Box>
      </Box>
  );
}