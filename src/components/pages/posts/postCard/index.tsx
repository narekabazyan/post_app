import { FC } from 'react';
import Post from '@/types/post';
import {
  StyledPostCard,
  StyledPostCardBody,
  StyledPostCardDate,
  StyledPostCardHead,
  StyledPostCardImageHolder,
  StyledPostCardInner,
  StyledPostCardTitle,
  StyledPostImage,
} from '@/components/pages/posts/postCard/StyledPostCard';

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <StyledPostCard>
      <StyledPostCardImageHolder>
        <StyledPostImage
          src={post.image}
          alt='Post image'
          fill
          quality={50}
          priority={true}
        />
      </StyledPostCardImageHolder>
      <StyledPostCardInner>
        <StyledPostCardHead>
          <StyledPostCardTitle>{post.title}</StyledPostCardTitle>
          <StyledPostCardDate>{post.creationDate}</StyledPostCardDate>
        </StyledPostCardHead>
        <StyledPostCardBody>{post.body}</StyledPostCardBody>
      </StyledPostCardInner>
    </StyledPostCard>
  );
};

export default PostCard;
