import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './post1.md.js';
import post2 from './blog-post.2.md.js';
import post3 from './blog-post.3.md.js';
import strandbeest from '../assets/strandbeest.jpeg';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'Data Structures',
  description:
    "For students in 61B, CSM 61B section, or anyone interested in basic data structures",
  image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80',
  imgText: 'Data Structures',
  linkText: 'Learn more',
};

const featuredPosts = [
  {
    title: 'Design',
    description:
      'Resources to learn about the design process and other fundamentals',
    image: strandbeest,
    imageText: 'Lady Strandbeest',
  },
  {
    title: 'Coding Interviews',
    description:
      'Some (hard-learned) lessons about technical interviews and tips on how to succeed',
    image: 'https://miro.medium.com/max/2400/1*OCqRyD1IlQ45QW1lUlcWjA.png',
    imageText: 'Image Text',
  },
];

const posts = [post1];

const sidebar = {
  title: 'About',
  description:
    'Hi! This is a small resource guidebook I made for my students, friends, or anyone interested in these areas! Please feel free to reach out through any social links if you would like me to add additional resources. I structured this guidebook into a blog-style and am still working on building it, so let me know if there are any issues!',
  social: [
    { name: 'Email', icon: EmailIcon, href: 'mailto:ritikbatra@berkeley.edu' },
    { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ritikbatra'},
    { name: 'GitHub', icon: GitHubIcon, href: 'https://github.com/rbatra2000' },
    { name: 'Portfolio', icon: LanguageIcon, href: 'http://ritikbatra.com/' }
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Ritik's Learning Resources" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Update Posts" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <br />
      <Footer title="" description="" />
    </React.Fragment>
  );
}
