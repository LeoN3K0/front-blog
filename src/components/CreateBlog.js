import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './BlogPreview';
import {
  CreateBlogContainer,
  CreateBlogCard,
  CreateBlogForm,
  FormTitle,
  FormLabel,
  FormInput,
  ButtonContainer,
  SaveButton,
  PublishButton,
} from './styledcomps/createBlogStyles';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (value) => {
    setBody(value);
  };

  const handleSaveDraft = (e) => {
    e.preventDefault();
    // Logic for saving the blog post as a draft
    console.log('Title:', title);
    console.log('Body:', body);
    console.log('Published:', false);
  };

  const handlePublish = (e) => {
    e.preventDefault();
    // Logic for publishing the blog post
    console.log('Title:', title);
    console.log('Body:', body);
    console.log('Published:', false);
  };

  return (
    <CreateBlogContainer>
      <CreateBlogCard>
        <FormTitle>Create Blog Post</FormTitle>
        <CreateBlogForm>
          <div>
            <FormLabel>Title:</FormLabel>
            <FormInput type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div>
            <FormLabel>Body:</FormLabel>
            <Editor value={body} onChange={handleBodyChange} placeholder="Write your blog content..." />
          </div>
          <ButtonContainer>
            <div>
              <SaveButton onClick={handleSaveDraft}>
                Save Draft
              </SaveButton>
            </div>
            <div>
              <PublishButton onClick={handlePublish}>Publish</PublishButton>
            </div>
          </ButtonContainer>
        </CreateBlogForm>
      </CreateBlogCard>
      <Preview title={title} body={body}/>
    </CreateBlogContainer>
  );  
};

export default CreateBlog;
