import React from 'react';
import IconContent from '@/components/Common/IconContent';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

interface IconContentListProps {
  data: Array<any>;
}

function IconContentList({ data }: IconContentListProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
      }}
    >
      {data.map((item: any, index: number) => {
        return (
          <IconContent
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </Box>
  );
}

export default IconContentList;
