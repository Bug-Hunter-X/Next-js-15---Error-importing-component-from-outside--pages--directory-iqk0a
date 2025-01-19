```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {/* This component will cause an error because it is not exported from the components folder */}
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

const MyComponent = () => {
  return <p>This is my component</p>;
};
```