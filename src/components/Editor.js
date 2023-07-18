import React, { useRef, useCallback, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { EditorContainer, CustomModal, UrlInput, ModalButton, CancelButton, ModalOrText } from './styledcomps/editorStyles';

const Editor = ({ value, onChange, placeholder, onImageRemove }) => {
  const editorRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = useCallback(async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://back-blog-e8li.onrender.com/upload-image', formData);
      const imageUrl = response.data.imageUrl;
      const quill = editorRef.current.getEditor();
      const range = quill.getSelection(true);
      quill.insertEmbed(range.index, 'image', imageUrl);
    } catch (error) {
      console.error('Error uploading image', error);
    }
  }, []);

  const handleToolbarClick = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (imageUrl) {
      const quill = editorRef.current.getEditor();
      const range = quill.getSelection(true);
      quill.insertEmbed(range.index, 'image', imageUrl);
    }
    setShowModal(false);
    setImageUrl(''); 
  };

  const handleFileUpload = (e) => {
    const file = e.target.files.item(0);
    handleImageUpload(file);
    setShowModal(false);
  };

  const handleQuillChange = (content, _, source, editor) => {
    onChange(content);
  
    if (source === 'user') {
      const deltas = editor.getContents().ops;
      const imageUrls = [];
  
      deltas.forEach((delta) => {
        if (delta.insert && delta.insert.image) {
          const imageUrl = delta.insert.image;
          imageUrls.push(imageUrl);
        }
      });
  
      handleDeletedImages(imageUrls);
    }
  };
  
  const handleDeletedImages = async (imageUrls) => {
    // Perform deletion for images that are no longer in the editor
    const deletedImages = [];
    const imageElements = document.querySelectorAll('.ql-editor img');
    imageElements.forEach((imageElement) => {
      const imageUrl = imageElement.getAttribute('src');
      if (!imageUrls.includes(imageUrl)) {
        deletedImages.push(imageUrl);
        imageElement.parentNode.removeChild(imageElement);
      }
    });
  
    // Send deletion requests for deleted images
    for (const imageUrl of deletedImages) {
      try {
        const imageName = imageUrl.split('/').pop();
        await axios.delete(`http://localhost:3000/delete-image/${imageName}`);
        console.log('Image deleted successfully:', imageUrl);
      } catch (error) {
        console.error('Error deleting image', error);
      }
    }
  
    // Call the onImageRemove function for each deleted image
    deletedImages.forEach((imageUrl) => {
      onImageRemove(imageUrl);
    });
  };
  
  

      

  return (
    <EditorContainer>
      <ReactQuill
        theme="snow"
        ref={editorRef}
        value={value}
        onChange={handleQuillChange}
        modules={{
          toolbar: {
            container: [
              [{ font: [] }],
              [{ size: ['small', false, 'large', 'huge'] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ color: [] }, { background: [] }],
              [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
              [{ align: [] }],
              ['image'], // Remove 'link' from here
              ['clean'],
            ],
            handlers: {
              image: handleToolbarClick,
            },
          },
        }}
        formats={[
          'font',
          'size',
          'bold',
          'italic',
          'underline',
          'strike',
          'color',
          'background',
          'list',
          'bullet',
          'indent',
          'align',
          'image',
        ]}
        placeholder={placeholder}
      />
      <CustomModal open={showModal} onClose={() => setShowModal(false)}>
        <div className="modal-content">
          <form onSubmit={handleUrlSubmit}>
            <label>
              Image URL:
              <UrlInput
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </label>
            <ModalButton type="submit">Submit</ModalButton>
            <CancelButton type="button" onClick={() => setShowModal(false)}>
              Cancel
            </CancelButton>
          </form>
          <ModalOrText>OR...</ModalOrText>
          <ModalButton component="label">
            Upload
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
          </ModalButton>
        </div>
      </CustomModal>
    </EditorContainer>
  );
};

export default Editor;