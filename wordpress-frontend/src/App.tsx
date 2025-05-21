import { Container, Typography, Stack, ThemeProvider, createTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useWordPress } from './hooks/useWordPress';
import { PostCard } from './components/PostCard';
import { PostDetail } from './components/PostDetail';

const theme = createTheme();

function Home() {
  const { data: posts, loading, error } = useWordPress('posts');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const a = 4;\
  
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Stack spacing={8}>
        <Typography variant="h2" component="h1" align="center">
          WordPress Blog
        </Typography>
        <Grid
          container
          spacing={3}
          columns={{ xs: 1, md: 2, lg: 3 }}
        >
          {posts.map((post) => (
            <Grid key={post.id} sx={{ width: { xs: '100%', md: '50%', lg: '33.33%' } }}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
