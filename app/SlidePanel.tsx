'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Hidden } from '@mui/material';
import { ArrowBack, ArrowForward, TextsmsTwoTone } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

export default function SimpleSlide() {
  const [currentCard, changeCard] = React.useState({
    cardNumber: 0,
    textOne: 'Black Berry',
    textTwo: 'Build Towards the Future Together',
    imgSrc: 'classroom.jpg'
  });
//./Images/classroom.png './Images/classroom.png'
  const handleChange = () => {
    switch(currentCard.cardNumber % 3) {
      case(0):
        changeCard({
          cardNumber: currentCard.cardNumber + 1,
          textOne: 'Black Berry',
          textTwo: 'Build Towards the Future Together',
          imgSrc: 'classroom.jpg'
        });
        return;
      case(1):
        changeCard({
          cardNumber: currentCard.cardNumber + 1,
          textOne: 'Connect',
          textTwo: 'Find Students with Similar Interests',
          imgSrc: 'classroom.jpg'
        });
        break;
      case(2):
        changeCard({
          cardNumber: currentCard.cardNumber + 1,
          textOne: 'Build A Resume',
          textTwo: 'Find Clubs, Projects, and Internships',
          imgSrc:'classroom.jpg'
        });
        break;
      default:
        changeCard({
          cardNumber: currentCard.cardNumber+1,
          textOne: 'Black Berry',
          textTwo: 'Build Towards the Future Together',
          imgSrc:'classroom.jpg'
        });
        return;
  }}

    const MainAreaCard = (
      <div>
      <Card sx={{height: '100%', width:'100%',position: 'relative'}} style={{background: 'transparent'}}>
        <CardActionArea>
            <CardContent >
              <Typography gutterBottom variant="h5" component="div" fontSize='100px' color={'maroon'}>
                {currentCard.textOne}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize='75px' color={'maroon'}>
              {currentCard.textTwo}
              </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
      </div>
  )
  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        position: 'relative',
        zIndex: 1,
        flexGrow: 1
      }}
      
    >
        <Grid container rowSpacing={1} justifyContent="space-evenly" alignItems="center" >
 
        <Grid item xs textAlign={'center'}>
            <Button
            variant="text"
            startIcon={<ArrowBack fontSize='large'/>}
            onClick={handleChange}
            size='large'
            >
            </Button>
        </Grid>

        <Grid item xs={6}style={{backgroundImage: 'url("classroom.jpg")', backgroundSize: '100%', backgroundRepeat:'no-repeat'}}>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
              {MainAreaCard}
            </Slide>
            </Grid>
            

        <Grid item xs textAlign={'center'}>
            <Button 
            variant="text"        
            startIcon={<ArrowForward fontSize='large'/>}
            onClick={handleChange}
            size='large'
            >
            </Button>
        </Grid>
        </Grid>
    </Box>
  );
}
/*
<img src='classroom.jpg' min-height={'100%'} min-width={'100%'}  background-size={'cover'}
    background-repeat={'no-repeat'}/>
          <CardMedia
            component="img"
            src='classroom.jpg'
            height='500'
            alt="other"
            /><FormControlLabel
control={<Switch checked={checked} onChange={handleChange} />}
label="Show"            style={{textAlign:"center", top:"50%"}}
/>
       <Grid xs={1}></Grid>
        <Grid xs={1}>2</Grid>
        <Grid xs={1}></Grid>
        <Grid xs={1}>4</Grid>
        <Grid xs={1}></Grid>
        <Grid xs={1}>6</Grid>
        <Grid xs={1}></Grid>
        <Grid xs={1}>8</Grid>
        <Grid xs={1}></Grid>
        <Grid xs={1}>10</Grid>
        <Grid xs={1}></Grid>
        <Grid xs={1}>12</Grid>
        <Grid item xs={6}>
            <Slide direction="left" in={checked === 1} mountOnEnter unmountOnExit>
            {MultiActionAreaCard}
            </Slide>
            </Grid>
            <Grid item xs={6}>
            <Slide direction="left" in={checked === 2 ? Hidden} mountOnEnter unmountOnExit>
            {MultiActionAreaCard}
            </Slide>
            </Grid>
        */