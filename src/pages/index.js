import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';

export default function Home({ data }) {
  return (
      <Layout title="YouTube">
          <Box p={2}>
          <Grid container spacing={4}>
                {data.map((item) => (
                    <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <VideoCard item={item} />
                    </Grid>
                ))}
            </Grid>
          </Box>
      </Layout>
  );
}

  export async function getStaticProps() {
      const data = [
          {
            id: 1,
            title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE #01]',
            authorId: 1,
            authorName: 'Vilmar de Souza',
            authorAvatar: 'avatarUrl',
            views: 10,
            thumb: '/thumbs/next01.png',
            videoUrl: 'url',
            updatedAt: new Date(),
          },
          {
            id: 1,
            title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE #02]',
            authorId: 1,
            authorName: 'Vilmar de Souza',
            authorAvatar: 'avatarUrl',
            views: 10,
            thumb: '/thumbs/next02.png',
            videoUrl: 'url',
            updatedAt: new Date(),
          },
          {
            id: 1,
            title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE #03]',
            authorId: 1,
            authorName: 'Vilmar de Souza',
            authorAvatar: 'avatarUrl',
            views: 10,
            thumb: '/thumbs/next03.png',
            videoUrl: 'url',
            updatedAt: new Date(),
          },
          {
            id: 1,
            title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE #04]',
            authorId: 1,
            authorName: 'Vilmar de Souza',
            authorAvatar: 'avatarUrl',
            views: 10,
            thumb: '/thumbs/next04.png',
            videoUrl: 'url',
            updatedAt: new Date(),
          },
          {
            id: 1,
            title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER E UTILIZAR EM SUAS APLICAÇÕES WEB [PARTE #05]',
            authorId: 1,
            authorName: 'Vilmar de Souza',
            authorAvatar: 'avatarUrl',
            views: 10,
            thumb: '/thumbs/next05.png',
            videoUrl: 'url',
            updatedAt: new Date(),
          }
      ];

    return {
      props: {
        data: JSON.parse(JSON.stringify(data)),
      }, // will be passed to the page component as props
    };
  }