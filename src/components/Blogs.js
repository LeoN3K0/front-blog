import React from 'react';
import CardContent from '@mui/material/CardContent';
import Pagination from '@mui/material/Pagination';
import {
  BlogsContainer,
  MainCard,
  SearchBar,
  BlogList,
  BlogListItem,
  BlogTitle,
  BlogDate
} from './styledcomps/blogsStyles';

const Blogs = () => {
  return (
    <MainCard>
      <CardContent>
        <BlogsContainer>
          <SearchBar type="text" placeholder="Search..." />
          <BlogList>
            <BlogListItem>
              <BlogTitle>Blog Post 1</BlogTitle>
              <BlogDate>Posted on June 30, 2023</BlogDate>
            </BlogListItem>
            <BlogListItem>
              <BlogTitle>Blog Post 2</BlogTitle>
              <BlogDate>Posted on June 28, 2023</BlogDate>
            </BlogListItem>
            <BlogListItem>
              <BlogTitle>Blog Post 3</BlogTitle>
              <BlogDate>Posted on June 25, 2023</BlogDate>
            </BlogListItem>
            {/* Add more blog posts */}
          </BlogList>
          <Pagination count={10} color="primary" />
        </BlogsContainer>
      </CardContent>
    </MainCard>
  );
};

export default Blogs;