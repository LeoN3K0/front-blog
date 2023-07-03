import styled from 'styled-components';

export const EditBlogContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const EditBlogCard = styled.div`
  width: 600px;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const EditBlogForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FormLabel = styled.label`
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const EditorContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  .rdw-editor-wrapper {
    padding: 8px;
    .rdw-editor-main {
      min-height: 200px;
    }
  }
`;

export const FormButton = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;
