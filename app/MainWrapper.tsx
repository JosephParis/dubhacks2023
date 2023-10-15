//import MainAppBar from "./MainAppBar";
//import BasicGrid from "./BasicGrid";
import React from "react";
import { Basic } from "next/font/google";
import { Box, Grid, Typography } from "@mui/material";
import SimpleSlide from "./SlidePanel";
import jobData from "./jobData";
import SlidePanel from "./SlidePanel";

const defaultJob = {
    title: 'Job Title',
    company: 'Company Name',
    location: 'Location',
    description: 'Job description goes here.',
    salary: 'Salary information',
    datePosted: 'Date Posted',
  };
  
const JobListing = ({ job = defaultJob}) => (
    <div className="job-listing">
      <h2>{job.title}</h2>
      <p>{job.company} - {job.location}</p>
      <p>{job.description}</p>
      <p>Salary: {job.salary}</p>
      <p>Date Posted: {job.datePosted}</p>
    </div>
  );

  const AboutUs = () =>{
    return(
    <section>
    <h2>About Me</h2>
    <p>
      This is a brief introduction about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </section>
  )
  }
  const Connect = () => { 
    return (
        <section>
            <h2>Connect</h2>
            <p>
            You can connect with others here!
            </p>
    </section>
    )
  }
  const Contact = () =>{
    return (
    <section>
        <h2>Contact</h2>
        <p>
        You can contact me at example@example.com.
        </p>
  </section>
    )
  }

  const Opportunities = () => {
    //              <JobListing key={job.id} job={job} />
    return (
        <div className="App">
          <header>
            <h1>Job Listings</h1>
          </header>
          <main>
            {jobData.map((job) => (
                 <JobListing key={job.id} job={job} />
            ))}
          </main>
        </div>
      );
  }
class MainWrapper extends React.Component<{}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentPage: 'Home',
            MainComponent: <SimpleSlide></SimpleSlide>
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            currentPage: 'Home'
        });
    }
    //['Home','About Us', 'Connect', 'Contact', 'Opportunities'];
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} rowSpacing={5}>
              <Grid item xs={12}>
              </Grid>
              <Grid item xs={12}>
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


 )
    };
}
export default MainWrapper;
/*<MainAppBar></MainAppBar>

<Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} rowSpacing={5}>
              <Grid item xs={12}>
              <MainAppBar></MainAppBar>
              </Grid>
              <Grid item xs={12}>
              {MainComponent}
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
              let MainComponent = <SimpleSlide></SimpleSlide>;
    let key = this.state.currentPage
    switch(key){
        case 'Home':
            MainComponent=<SimpleSlide></SimpleSlide>
            break;
        case 'About Us':
            MainComponent=<AboutUs></AboutUs>
            break;
        case 'Connect':
            MainComponent=<Connect></Connect>
            break;
        case 'Contact':
            MainComponent=<Contact></Contact>
            break;
        case 'Opportunities':
            MainComponent=<Opportunities></Opportunities>
            break;
        default:
            break;
    }
          */