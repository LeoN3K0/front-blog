import React from 'react';
import { ThemeProvider } from '@mui/material';
import { HomeContainer, CardContainer, LeftSection, RightSection, RecentPostTitle, RecentPostContent, RecentPostsList, ListTitle, ListSeparator, RecentPostsListItem, RecentPostsListItemLink, CreateBlogPostButton, ButtonContainer } from './styledcomps/homeStyles';
import theme from '../themes/theme';
import { useAuth } from '../AuthContext';

const Home = () => {
  const { isLoggedIn } = useAuth();

  const handleCreateBlogPost = () => {
    // Handle create blog post button click
    // Redirect to the create blog post page
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
            <RecentPostContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum est vel elit feugiat, vitae fermentum nunc efficitur. Maecenas bibendum felis vitae ligula scelerisque, non consectetur risus mollis. Duis sed ullamcorper purus.
            </RecentPostContent>
          </LeftSection>
          <RightSection>
            <ListTitle>Recent Posts</ListTitle>
            <ListSeparator />
            <RecentPostsList>
              <RecentPostsListItem>
                <RecentPostsListItemLink href="#">Blog Post 1</RecentPostsListItemLink>
              </RecentPostsListItem>
              <RecentPostsListItem>
                <RecentPostsListItemLink href="#">Blog Post 2</RecentPostsListItemLink>
              </RecentPostsListItem>
              <RecentPostsListItem>
                <RecentPostsListItemLink href="#">Blog Post 3</RecentPostsListItemLink>
              </RecentPostsListItem>
              <RecentPostsListItem>
                <RecentPostsListItemLink href="#">Blog Post 4</RecentPostsListItemLink>
              </RecentPostsListItem>
              <RecentPostsListItem>
                <RecentPostsListItemLink href="#">Blog Post 5</RecentPostsListItemLink>
              </RecentPostsListItem>
            </RecentPostsList>
          </RightSection>
        </CardContainer>
      </HomeContainer>
    </ThemeProvider>
  );
};

export default Home;
