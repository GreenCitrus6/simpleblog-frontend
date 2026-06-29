'use client';
import { Box } from '@mui/material';
import api from './api/axiosConfig'
import {useState, useEffect} from 'react';


export default function Home() {
  const [posts, setPosts] = useState();
  
  const getPosts = async () => {
    try {
      const response = await api.get("/api/v1/blog");
      console.log(response.data);
      setPosts(response.data);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getPosts();
  },[]);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Posts container */}
      <Box>
        
      </Box>
    </Box>
  );
}
