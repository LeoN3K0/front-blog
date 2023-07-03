import React from 'react';
import {
  HomeContainer,
  CardContainer,
  LeftSection,
  RightSection,
  RecentPostTitle,
  RecentPostContent,
  RecentPostsList,
  ListTitle,
  ListSeparator,
  RecentPostsListItem,
  RecentPostsListItemLink
} from './styledcomps/homeStyles';

const Home = () => {
  return (
    <HomeContainer>
      <CardContainer>
        <LeftSection>
          <RecentPostTitle>Most Recent Blog Post</RecentPostTitle>
          <RecentPostContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum est vel elit feugiat, vitae
            fermentum nunc efficitur. Maecenas bibendum felis vitae ligula scelerisque, non consectetur risus mollis.
            Duis sed ullamcorper purus.
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
  );
};

export default Home;