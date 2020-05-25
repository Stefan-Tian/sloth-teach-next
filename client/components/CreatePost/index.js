import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, RichUtils } from 'draft-js';
import { FullPostContainer } from '../Container';
import { FullPostImageCard } from '../ImageCard';
import { FullPostCard } from '../Card';
import { EditorContainer } from '../Editor';
import { TextInputField, TextAreaField } from '../Input';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

export default () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [showEditor, setShowEditor] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  useEffect(() => {
    setShowEditor(true);
  }, []);

  return (
    <FullPostContainer>
      <FullPostImageCard src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <FullPostCard type="normal">
        <TextInputField placeholder="文章標題" onChange={handleTitleChange} />
        <TextAreaField
          placeholder="文章大意 (將顯示在卡片上)"
          onChange={handleDescriptionChange}
        />
        <EditorContainer>
          {showEditor && (
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              placeholder="文章內容"
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: {
                  uploadCallback: () => {},
                  alt: { present: true, mandatory: true },
                },
              }}
            />
          )}
        </EditorContainer>
      </FullPostCard>
    </FullPostContainer>
  );
};
