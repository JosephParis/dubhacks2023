import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MainAppBar from './appbar'
import SimpleSlide from './SlidePanel'
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} rowSpacing={5}>
        <Grid item xs={12}>
        <MainAppBar></MainAppBar>
        </Grid>
        <Grid item xs={12}>
        <SimpleSlide></SimpleSlide>
        </Grid>
        <Grid item xs={6}>
            <Box style={{height: '300',backgroundColor: 'red'}}>
            <Typography variant="body2" color="text.secondary" fontSize='75px'>
            Build Towards the Future Together
          </Typography>
            </Box>
        </Grid>
        <Grid item xs={6}>
          <Box style={{height: '300',backgroundColor: 'blue'}}>
          <Typography variant="body2" color="text.secondary" fontSize='75px'>
            Build Towards the Future Together
          </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}