import React from 'react';

import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material';

import CardContent from '../Cards/CardContent';

interface CardContentListProps {
  data: Array<{
    image: string;
    title: string;
    description: string;
    buttonText: string;
  }>;
}

function CardContentList({ data }: CardContentListProps) {
  const theme = useTheme();
  const renderedList = (
    <>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: '300px',
          [theme.breakpoints.up('md')]: {
            height: '600px',
          },
        }}
      >
        <CardContent
          image={data[0].image}
          title={data[0].title}
          description={data[0].description}
          buttonText={data[0].buttonText}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ height: '300px' }}>
            <CardContent
              image={data[1].image}
              title={data[1].title}
              description={data[1].description}
              buttonText={data[1].buttonText}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              {data.slice(2).map((card, index) => (
                <Grid item key={index} xs={12} md={6} sx={{ height: '300px' }}>
                  <CardContent
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  return (
    <Grid container spacing={2}>
      {renderedList}
    </Grid>
  );
}

export default CardContentList;
