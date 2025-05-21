import { Container, Typography, Box, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { mockPosts } from '../config/mockData';

export const PostDetail = () => {
  const { id } = useParams();
  const post = mockPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4">Post not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {post.title.rendered}
        </Typography>
        
        <Box sx={{ my: 4 }}>
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <img 
              src={post._embedded['wp:featuredmedia'][0].source_url} 
              alt={post.title.rendered}
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
            />
          )}
        </Box>

        <Typography variant="body1" component="div" sx={{ mb: 4 }}>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Typography>

        <Typography variant="subtitle2" color="text.secondary">
          Published on: {new Date(post.date).toLocaleDateString()}
        </Typography>
      </Paper>
    </Container>
  );
}; 