import EditorJS from '@editorjs/editorjs';
import Paragraph from '@editorjs/paragraph';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const ResponseEditor = function ({ onNewResponse }) {
  const editorInstance = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const responseEditor = new EditorJS({
      holder: 'editorjs',
      placeholder: 'What are your thoughts?',
      tools: {
        paragraph: Paragraph,
      },
      onReady: () => {
        editorInstance.current = responseEditor;
      },
    });
    return () => {
      if (editorInstance.current) {
        editorInstance.current.destroy();
        editorInstance.current = '';
      }
    };
  }, []);

  const saveResponse = async function () {
    if (editorInstance.current) {
      try {
        const savedData = await editorInstance.current.save();
        const formattedResponse = {
          id: savedData.blocks[0]?.id || '',
          response:savedData.blocks[0]?.data?.text || 'Empty Response'
        };

        if (formattedResponse.id !== '' || formattedResponse.response !== 'Empty Response' ) {
        const response = await fetch(`http://localhost:8000/story/${id}/response`, {
          method: 'POST',
          credentials: "include",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formattedResponse),
        });

        if (response.ok) {
          const result = await response.json();
          if (onNewResponse) {
            onNewResponse(result);
          }
          editorInstance.current.clear();
        } else {
          console.error('Failed to save response');
        }
      }
    }  catch (error) {
        console.log('Error saving response:', error);
      }
  } }

  return (
    <>
      <div id="editorjs" className="editorjs-response"></div>
      <button onClick={saveResponse} className='respondButton' type='button'>Respond</button>
    </>
  );
};

export default ResponseEditor;
