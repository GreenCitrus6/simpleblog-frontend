'use client';
import { Drawer, Table } from "@mui/material";
import { useState, useEffect } from "react";
import api from '../api/axiosConfig'

export default function PostsTable() {
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
    
    return(
        <Table> 
            
        </Table>
    );
}