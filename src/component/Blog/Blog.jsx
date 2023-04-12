import React from "react";
import TitleText from "../TitleText/TitleText";

const Blog = () => {
  return (
    <div>
      <TitleText>Blog</TitleText>
      <div className="lg:px-20 mt-16">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          When should you use context API?
          </div>
          <div className="collapse-content">
            <p>The Context API in React is used to manage the state that needs to be accessed by multiple components throughout the application. When we have data that needs to be accessed by multiple components at different levels of the component tree by prop drilling. It allows us to avoid the problem of (prop drilling) passing data through multiple layers of components to get it to where it needs to be. It reduces our time and improves our efficiency to make our code more organized and maintainable.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is a custom hook?
          </div>
          <div className="collapse-content">
            <p>Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Using custom Hooks is an efficient solution. Custom Hooks start with "use". With custom React Hooks, we can reuse stateful logic easily across different components in an optimized and scalable format.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is useRef?
          </div>
          <div className="collapse-content">
            <p>The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that doesn't cause a component to re-render when the value or state changes. It can be used to access a DOM element directly by adding a ref attribute.When we initialize useRef we have set an initial value. useRef only return an object called current.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is useMemo?
          </div>
          <div className="collapse-content">
            <p>The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. When we need to do the large functional calculations and update on UI again and again it can reduce our application performance. For preventing this issue we use useMemo Hook. useMemo can memorize that functional calculation and update on UI when needed. This will cause the function to only run when needed it also improves our application performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
