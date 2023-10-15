import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SlidePanel from './SlidePanel'
import MainWrapper from './MainWrapper';
import { Grid } from '@mui/material';
import { Basic } from "next/font/google";
import SimpleSlide from "./SlidePanel";
import jobData from "./jobData";
import "./style.css"

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
    <section className='blackText'>
    <h2>About Me</h2>
    <p>
      This is a brief introduction about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </section>
  )
  }
  const Connect = () => { 
    return (
        <section className='blackText'>
            <h2>Connect</h2>
            <p>
            You can connect with others here!
            </p>
    </section>
    )
  }
  const Contact = () =>{
    return (
    <section className='blackText'>
        <h2>Contact</h2>
        <p>
        You can contact me at example@example.com.
        </p>
  </section>
    )
  }

  const Opportunities = () => {
    return (
        <div className="App blackText">
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
const pages = ['Home','About Us', 'Connect', 'Contact', 'Opportunities'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

class MainAppBar extends MainWrapper{
  constructor(props: any){
    super(props)
    this.state = {
      currentPage: 'Home',
      MainComponent: <SimpleSlide></SimpleSlide>,
      anchorElNav: null,
      anchorElUser: null,
  };
  }

  setPage(newPage:string){
    this.setState({
      currentPage: newPage
    })
  }
  setComponent(newComponent: any){
    console.log('in component')
    console.log(newComponent)
    this.setState({
      MainComponent: newComponent
    })
    console.log(this.state.MainComponent)
  }
  handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      this.setState({ anchorElNav: event.currentTarget });
  };
  handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElUser: event.currentTarget });
  };

  handleCloseNavMenu = () => {
    this.setState({ anchorElNav: null });
  };

  handleCloseUserMenu = () => {
    this.setState({ anchorElUser: null });
  };

  handlePageClick(key: any) {
    this.handleCloseNavMenu()
    console.log("TESTING TESTING 123")
    switch(key){
        case pages[0]:
          console.log(key)
          console.log(pages[0])
            this.setPage(pages[0])
            break;
        case pages[1]:
          this.setPage(pages[1])
            break;
        case pages[2]:
          this.setPage(pages[2])
            break;
        case pages[3]:
          this.setPage(pages[3])
            break;
        case pages[4]:
          this.setPage(pages[4])
            break;
        default:
            break;
    }
  }

  render() {
  let MainComponent = <SimpleSlide></SimpleSlide>;
  let key = this.state.currentPage
  switch(key){
      case 'Home':
        console.log('in render')
        console.log(key)
          //this.setComponent(<SimpleSlide></SimpleSlide>)
          MainComponent = <SimpleSlide></SimpleSlide>
          break;
      case 'About Us':
        //this.setComponent(<AboutUs></AboutUs>)
        MainComponent = <AboutUs></AboutUs>
          break;
      case 'Connect':
        //this.setComponent(<Connect></Connect>)
        MainComponent = <Connect></Connect>
          break;
      case 'Contact':
        //this.setComponent(<Contact></Contact>)
        MainComponent = <Contact></Contact>
          break;
      case 'Opportunities':    
            //this.setComponent(<Opportunities></Opportunities>)
            MainComponent = <Opportunities></Opportunities>
          break;
      default:
          break;
  }
  return (            
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} rowSpacing={5}>
      <Grid item xs={12}>
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={this.handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(this.state.anchorElNav)}
              onClose={this.handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page: string) => (
                <MenuItem key={page} onClick={this.handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page: string) => (
              <Button
                key={page}
                onClick={() => this.handlePageClick(page)}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={this.state.anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(this.state.anchorElUser)}
              onClose={this.handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={this.handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      </Grid>
      <Grid item xs={12}>
        {MainComponent}
      </Grid>

    </Grid>
  </Box>
  );}
}
export default MainAppBar; 
/*      <Grid item xs={6}>
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
      </Grid>*/