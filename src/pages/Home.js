import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { HomeContainer, CardContainer, LeftSection, RightSection, RecentPostTitle, RecentPostContent, RecentPostsList, ListTitle, ListSeparator, RecentPostsListItem, RecentPostsListItemLink, CreateBlogPostButton, ButtonContainer } from './styledcomps/homeStyles';
import theme from '../themes/theme';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [recentPost, setRecentPost] = useState({});
  const [recentPosts, setRecentPosts] = useState([]);

  const handleCreateBlogPost = () => {
    navigate('/front-blog/createblog');
  };

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get('https://back-blog-e8li.onrender.com/blogs');
        const blogs = response.data;
        
        // Sort blogs by published_date in descending order
        blogs.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));
        
        // Set the most recent post
        setRecentPost(blogs[0]);
        
        // Set the next 5 recent posts (excluding the most recent one)
        setRecentPosts(blogs.slice(1, 6));
      } catch (error) {
        console.error('Failed to fetch recent posts:', error);
      }
    };

    fetchRecentPosts();
  }, []);

  const sanitizeHTML = (html) => {
    const sanitizedHTML = DOMPurify.sanitize(html, { ADD_TAGS: ['iframe'] });
    return { __html: sanitizedHTML };
  };

  const extractFirstParagraph = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const paragraphs = doc.getElementsByTagName('p');
    return paragraphs.length > 0 ? paragraphs[0].innerHTML : '';
  };

  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
        {isLoggedIn && (
          <ButtonContainer>
            <CreateBlogPostButton onClick={handleCreateBlogPost}>
              Create Blog Post
            </CreateBlogPostButton>
          </ButtonContainer>
        )}
        <CardContainer>
          <LeftSection>
            <RecentPostTitle>Most Recent Blog Post</RecentPostTitle>
            {recentPost ?(
              <>
              <RecentPostContent>
              <RecentPostsListItemLink href={`/blogs/${recentPost.id}`}>{recentPost.title}</RecentPostsListItemLink>
              </RecentPostContent>
              <br></br>
              <RecentPostContent><img src={recentPost.image} alt="Alt Text" /></RecentPostContent>
              <br></br>
              <RecentPostContent dangerouslySetInnerHTML={sanitizeHTML(extractFirstParagraph(recentPost.body))} />
              </>
            ):(
              <RecentPostContent>NO CONTENT</RecentPostContent>
            )}            
          </LeftSection>
          <RightSection>
            {recentPost ? (
              <>
              <ListTitle>Recent Posts</ListTitle>
              <ListSeparator />
              <RecentPostsList>
                {recentPosts.map((post) => (
                  <RecentPostsListItem key={post.id}>
                    <RecentPostsListItemLink href={`/blogs/${post.id}`}>{post.title}</RecentPostsListItemLink>
                  </RecentPostsListItem>
                ))}
              </RecentPostsList>
              </>
            ):(
              <ListTitle>No content</ListTitle>
            )}
            
          </RightSection>
        </CardContainer>
      </HomeContainer>
    </ThemeProvider>
  );
};

export default Home;
