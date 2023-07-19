import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import {
  BlogsContainer,
  MainCard,
  SearchBar,
  BlogList,
  BlogListItem,
  BlogTitle,
  BlogInfo,
  BlogAuthor,
  BlogDate,
  NoBlog,
} from '../styles/blogsStyles';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const filterBlogs = (blog) => {
    if (!searchQuery) {
      return true;
    }

    const search = searchQuery.toLowerCase();
    const titleMatch = blog.title.toLowerCase().includes(search);
    const authorMatch = blog.author.toLowerCase().includes(search);

    return titleMatch || authorMatch;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let url = 'https://back-blog-e8li.onrender.com/blogs';
        if (searchQuery) {
          url += `?search=${searchQuery}`;
        }
        const response = await axios.get(url);
        setBlogs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };

    fetchBlogs();
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <p>Loading blogs...</p>;
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.filter(filterBlogs).slice(indexOfFirstPost, indexOfLastPost);

  return (
    <MainCard>
      <CardContent>
        <BlogsContainer>
          <SearchBar
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {currentPosts.length > 0 ? (
            <BlogList>
              {currentPosts.map((blog) => (
                <BlogListItem key={blog.id}>
                  <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }}>
                    <BlogTitle>{blog.title}</BlogTitle>
                  </Link>
                  <BlogInfo>
                    <BlogAuthor>By {blog.author}</BlogAuthor>
                    <BlogDate>Published on {new Date(blog.published_date).toLocaleDateString('en-US')}</BlogDate>
                  </BlogInfo>
                </BlogListItem>
              ))}
            </BlogList>
          ) : (
            <NoBlog>No blogs found...</NoBlog>
          )}
          <Pagination
            count={Math.ceil(blogs.filter(filterBlogs).length / postsPerPage)}
            color="primary"
            page={currentPage}
            onChange={handlePageChange}
          />
        </BlogsContainer>
      </CardContent>
    </MainCard>
  );
};

export default Blogs;
