import { Box, Button, Typography } from "@mui/material";
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
        <Box sx={{ mt: 7, 
          display: 'flex',
          flexDirection: 'column'
         }}>
          {/* header, subheader with content and tags */}
          <Box>
            <Box sx={{ display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between', 
              alignItems: 'center', 
              width: '100%'
             }}>
              <Typography variant="h2"
              component="h2">
                {data.title}
              </Typography>
              <Button>Edit</Button>
            </Box>
             <Typography>
              <span>Category: </span>
              <span>{data.category}</span>
              </Typography>
             <Typography>
              <span>Tags: </span>
              <span>
                {data.tags.map((tag: string)=> (
                  <span key={tag}>{tag} </span>
                ))}
              </span>
             </Typography>
          </Box>
          {/* edit button next to header */}
          {/* body */}
          <Box>
            <p>{data.content}</p>
          </Box>
          {/* footer containing tags */}
        </Box>
      </Box>
  );
}