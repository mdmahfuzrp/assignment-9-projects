import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='faq-container'>
        <div class="faq">
            <h1 className='faq-title'>Frequently Asked Questions:</h1>
            <details>
            <summary>Question 01: When should you use context api?</summary>
            <div className='answer'><span>Answer:</span>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
            </div>
            </details>
        </div>
        <div class="faq">
            <details>
                <summary>Question 02: What is custom hook?
</summary>
                <div className='answer'><span>Answer:</span>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature.
                </div>
            </details>
        </div>
            <div class="faq">
                <details>
                <summary>Question 03: What is useRef?</summary>
                <div className='answer'><span>Answer:</span>useRef only returns one item. It returns an Object called current . When we initialize useRef we set the initial value: useRef . It's like doing this: const count . We can access the count by using count.current .
                </div>
                </details>
            </div>
            <div class="faq">
                <details>
                <summary>Question 04: What is useMemo?</summary>
                <div className='answer'><span>Answer:</span>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
                </div>
                </details>
            </div>
        </div>
    );
};

export default Blog;