import styled from 'styled-components';

export const CreateBlogContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CreateBlogCard = styled.div`
  width: 80%;
  max-width: 600px;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const CreateBlogForm = styled.form`
  margin-top: 20px;
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const FormButton = styled.button`
  display: block;
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const EditorContainer = styled.div`
  margin-top: 10px;
  .rdw-editor-main {
    min-height: 200px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
  }
`;
