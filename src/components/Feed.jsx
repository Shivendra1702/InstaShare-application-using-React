import React from "react";
import {  Box } from "@mui/material";
import { Post } from "./Post";

const Feed = () => {
  return (
    <Box p={2} flex={5} >
      <Post name="Ritik Kumar Pillai" msg="Hey bitch , wanna go for ride" imgurl="https://images.unsplash.com/photo-1661127402205-a60877354473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      <Post name="Mia Khalifa" msg="I want something big ..." imgurl="https://images.unsplash.com/photo-1661123807934-fc637f27233d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      <Post name="Jordy" msg="People fuck people , but i fuck Computers" imgurl="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"/>
      <Post msg="Home alone .." name="Alia sus" imgurl="https://images.unsplash.com/photo-1660938419010-0ffbbef92f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80"/>
      <Post name="Wan sun" msg="Looking for someone to spend time and have fun " imgurl="https://images.unsplash.com/photo-1661149925216-a16c1631997a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
    </Box>
  );
};

export default Feed;
