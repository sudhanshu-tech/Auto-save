import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle, setContent } from './action'
import './BlogPostForm.css';

const BlogPostForm = () => {
  const { title, content } = useSelector((state) => state);
  const dispatch = useDispatch();

  let saveBlogPost = useCallback(() => {
    console.warn(title,content);
    fetch('http://localhost:3001/api', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({ title, content }),
    })
      .then((response) => response.json())
      .then((savedPost) => {
        console.log('Blog post saved:', savedPost);
      })
      .catch((error) => {
        console.error('Error saving blog post:', error);
      });
  }, [title, content]);



  useEffect(() => {
    const autosave = setTimeout(() => {
      saveBlogPost();
    }, 5000);

    return () => {
      clearTimeout(autosave);
    };
  }, [title, content, saveBlogPost]);

  const handleTitleChange = (event) => {
    dispatch(setTitle(event.target.value));
  };

  const handleContentChange = (event) => {
    dispatch(setContent(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter title"
        className="title"
      />
      <textarea
        value={content}
        onChange={handleContentChange} 
        placeholder="Enter content"
        className="content"
      ></textarea>
    </div>
  );
};

export default BlogPostForm;
