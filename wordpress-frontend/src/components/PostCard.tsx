import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import type { Post } from '../config/mockData';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea component={Link} to={`/post/${post.id}`}>
        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
          <CardMedia
            component="img"
            height="200"
            image={post._embedded['wp:featuredmedia'][0].source_url}
            alt={post.title.rendered}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title.rendered}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.excerpt.rendered.replace(/<[^>]*>/g, '')}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
            {new Date(post.date).toLocaleDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}; 