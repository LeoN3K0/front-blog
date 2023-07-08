import React from 'react';
import 'react-quill/dist/quill.snow.css';
import {
  PreviewCard,
  PreviewContent,
  PreviewTitle,
} from './styledcomps/blogPreviewStyles';

const BlogPreview = ({ title, body }) => {
  const hasContent = title || body;

  return (
    <PreviewCard>
      {hasContent ? (
        <>
          <PreviewTitle>{title}</PreviewTitle>
          <PreviewContent className='ql-editor' dangerouslySetInnerHTML={{ __html: body }} />
        </>
      ) : (
        <PreviewTitle>Preview: Nothing to display at the moment...</PreviewTitle>
      )}
    </PreviewCard>
  );
};

export default BlogPreview;
