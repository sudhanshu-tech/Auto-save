import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import BlogPostForm from './components/BlogPostForm';


const App = () => {
  return (
    <Provider store={store}>
      <div className='div1'>
        <h1 className="blog">Blog Post</h1>
        <BlogPostForm />
      </div>
    </Provider>
  );
};

export default App;
