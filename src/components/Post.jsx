import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";

export const Post = (props) => {
  return (
    <div>
      <Card sx={{margin:2}} >
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 30, height: 30 }}
              src={props.imgurl}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.name}
          subheader="September 14, 2021"
        />
        <CardMedia
          component="img"
          height="20%"
          image={props.imgurl}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.msg}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
