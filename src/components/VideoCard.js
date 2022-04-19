import { Avatar, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from "next/router";

dayjs.extend(relativeTime);

const useStyles = makeStyles(() => ({
    img: {
      width: '100%',
    },
    caption: {
      fontWeight: 500,
      display: '-webkit-box',
      '-webkit-line-clamp': 2, //garante que só vai ter duas linha e adiciona 3 pontinhos se o texto for grande
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    },
  }));

export default function VideoCard({ item }){
    const classes = useStyles();
    const router = useRouter();
  
    
    return(
        <Box>
            <img alt={item.title} src={item.thumb} className={classes.img}/>
            <Box>
                <Avatar alt={item.authorName} src={item.authorAvatar}>
                    SS
                </Avatar>
            </Box>
            <Box>
                <Typography
                    className={classes.caption}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                >
                    {item.title}
                </Typography>
                <Typography display="block" variant="body2" color="textSecondary">
                    {item.authorName}
                </Typography>
                <Typography>
                    {`${item.views} • ${dayjs(item.updatedAt).fromNow()}`}
                </Typography>
            </Box>
        </Box>
    )
}