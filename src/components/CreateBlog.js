import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { CreateBlogContainer, CreateBlogCard, CreateBlogForm, FormTitle, FormLabel, FormInput, FormButton, EditorContainer } from './styledcomps/createBlogStyles';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (contentState) => {
    setBody(contentState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting the blog post
    console.log('Title:', title);
    console.log('Body:', body);
  };

  return (
    <CreateBlogContainer>
      <CreateBlogCard>
        <FormTitle>Create Blog Post</FormTitle>
        <CreateBlogForm onSubmit={handleSubmit}>
          <div>
            <FormLabel>Title:</FormLabel>
            <FormInput type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div>
            <FormLabel>Body:</FormLabel>
            <EditorContainer>
              <Editor
                editorState={body}
                onEditorStateChange={handleBodyChange}
                toolbar={{
                  options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'image'],
                  inline: {
                    options: ['bold', 'italic', 'underline'],
                  },
                  blockType: {
                    options: ['Normal', 'H1', 'H2', 'H3'],
                  },
                  list: {
                    options: ['unordered', 'ordered'],
                  },
                  textAlign: {
                    options: ['left', 'center', 'right'],
                  },
                  link: {
                    popupClassName: 'link-popup',
                  },
                  /*image: {
                    uploadEnabled: true,
                    uploadCallback: handleImageUpload, // Implement your image upload logic here
                    alt: { present: true, mandatory: true },
                  },*/
                }}
                placeholder="Write your blog content..."
              />
            </EditorContainer>
          </div>
          <FormButton type="submit">Submit</FormButton>
        </CreateBlogForm>
      </CreateBlogCard>
    </CreateBlogContainer>
  );
};

export default CreateBlog;
