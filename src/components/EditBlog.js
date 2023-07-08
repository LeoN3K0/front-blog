import React, { useState } from 'react';
import { EditBlogContainer, EditBlogCard, EditBlogForm, FormTitle, FormLabel, FormInput, FormButton, EditorContainer, DeleteButton } from './styledcomps/editBlogStyles';

const EditBlog = () => {
  const [title, setTitle] = useState('');
  const [body, /*setBody*/] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  /*const handleBodyChange = (contentState) => {
    setBody(contentState);
  };*/

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting the updated blog post
    console.log('Updated Title:', title);
    console.log('Updated Body:', body);
  };

  const handleDelete = () => {
    // Logic for deleting the blog post
    console.log('Blog post deleted');
  };

  return (
    <EditBlogContainer>
      <EditBlogCard>
        <FormTitle>Edit Blog Post</FormTitle>
        <EditBlogForm onSubmit={handleSubmit}>
          <div>
            <FormLabel>Title:</FormLabel>
            <FormInput type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div>
            <FormLabel>Body:</FormLabel>
            <EditorContainer>
            </EditorContainer>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <FormButton type="submit">Save Changes</FormButton>
            </div>
            <div>
              <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            </div>
          </div>
        </EditBlogForm>
      </EditBlogCard>
    </EditBlogContainer>
  );  
};

export default EditBlog;
