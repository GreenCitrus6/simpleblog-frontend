'use client';
import { Table, TableRow, TableCell, TableContainer, TableHead, TableBody, Link } from "@mui/material";
import { useState, useEffect } from "react";
import api from '../api/axiosConfig'

export default function PostsTable() {
    const [posts, setPosts] = useState([{
        objectId: 0,
        title: '-',
        content: '',
        category: '-',
        tags: [''],
    }]);
  
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
        <TableContainer>
            <Table> 
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((row)=>(
                        <TableRow 
                            key={row.objectId}>
                                <TableCell component="th">
                                    <Link href={`./posts/${row.objectId}`}>
                                        {row.title}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}