const questions: Question[] = [
  {
    "id": 1750669866,
    "question": "What is React?",
    "answer": "<p>React is a <strong>JavaScript library</strong> used for building <strong>user interfaces</strong>, especially <strong>single-page applications</strong> where content updates without refreshing the page.</p><pre><code>function App() {\n  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;\n}</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750669867,
    "question": "What are components in React?",
    "answer": "<p>Components are like <strong>building blocks</strong> of a React app. They are <strong>reusable pieces</strong> of code that return HTML (JSX).</p><p><strong>Types:</strong></p><ul><li><p><strong>Functional components</strong></p></li><li><p><strong>Class components</strong></p></li></ul><pre><code>function Welcome() {\n  return &lt;h2&gt;Welcome to React!&lt;/h2&gt;;\n}</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750670030,
    "question": "What is JSX?",
    "answer": "<p>JSX stands for <strong>JavaScript XML</strong>. It allows you to write HTML inside JavaScript.</p><pre><code>const element = &lt;h1&gt;Hello JSX!&lt;/h1&gt;;</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750670580,
    "question": "What is the props and state?",
    "answer": "<p>In <strong>React</strong>, <code>props</code> and <code>state</code> are two core concepts used to manage and pass data in components.</p><p><strong><u>props</u></strong></p><p><strong>Props</strong> are used to <strong>pass data from parent to child components</strong>.</p><ul><li><p>Read-only (immutable inside the component receiving them)</p></li><li><p>Passed <strong>from outside the component</strong></p></li><li><p>Used to configure a component</p></li></ul><pre><code>function Welcome(props) {\n  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;\n}\n\nfunction App() {\n  return &lt;Welcome name=\"Jimit\" /&gt;;\n}</code></pre><p><strong><u>state</u></strong></p><p><strong>State</strong> is used to <strong>manage data inside a component</strong> that can change over time.</p><ul><li><p>Mutable (can be updated using <strong>useState </strong>in functional components)</p></li><li><p>Managed inside the component</p></li><li><p>Used for interactive or dynamic data</p></li></ul><pre><code>import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    &lt;&gt;\n      &lt;p&gt;You clicked {count} times&lt;/p&gt;\n      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Click me&lt;/button&gt;\n    &lt;/&gt;\n  );\n}</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750672805,
    "question": "What is useState?",
    "answer": "<p><strong><u>useState</u> </strong>is a <strong>React Hook</strong> that lets you add <strong>state</strong> to a functional component.</p><pre><code>const [name, setName] = React.useState(\"John\");</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750673129,
    "question": "What is useEffect?",
    "answer": "<p><strong><u>useEffect</u></strong> is a hook that lets you perform <strong>side effects</strong> (like data fetching, timers) in functional components.</p><pre><code>React.useEffect(() =&gt; {\n  console.log(\"Component mounted!\");\n}, []);</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750673166,
    "question": "What is the virtual DOM?",
    "answer": "<p>Virtual DOM is a <strong>lightweight copy</strong> of the real DOM. React uses it to <strong>optimize updates</strong>. It compares changes (called <strong>diffing</strong>) and updates only the part that changed.</p>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750675725,
    "question": "What is reconciliation in React?",
    "answer": "<p>Reconciliation is the process where React compares the <strong>virtual DOM</strong> with the <strong>real DOM</strong> and updates only what’s changed.</p>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750673167,
    "question": "What is the difference between controlled and uncontrolled components?",
    "answer": "<p><strong>Controlled Component:</strong> React handles the form input.</p><pre><code>function Form() {\n  const [input, setInput] = React.useState(\"\");\n  return &lt;input value={input} onChange={e =&gt; setInput(e.target.value)} /&gt;;\n}</code></pre><p><strong>Uncontrolled Component:</strong> DOM handles the form input using <strong>ref</strong>.</p><pre><code>function Form() {\n  const inputRef  = React.useRef();\n  \n  const handleSubmit = () =&gt; {\n    alert(inputRef.current.value);\n  };\n\n  return (\n    &lt;&gt;\n      &lt;input type=\"text\" ref={inputRef} /&gt;\n      &lt;button onClick={handleSubmit}&gt;Submit&lt;/button&gt;\n    &lt;/&gt;\n  );\n}</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750673357,
    "question": "What are keys in React?",
    "answer": "<p>Keys help React identify which items in a list are changed or removed. They should be <strong>unique</strong>.</p><pre><code>items.map(item =&gt; &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;);</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750673415,
    "question": "What is lifting state up?",
    "answer": "<p>When <strong>two components need to share data</strong>, the state is moved to their <strong>common parent</strong>.</p>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750674244,
    "question": "What is Context API?",
    "answer": "<p>Context API lets you pass data <strong>deeply through the component tree</strong> without manually passing props at every level.</p><pre><code>import React, { createContext, useContext, useState } from 'react';\n\n// 1. Create context\nconst ThemeContext = createContext();\n\n// 2. Provide context\nfunction App() {\n  const [theme, setTheme] = useState('light');\n\n  return (\n    &lt;ThemeContext.Provider value={{ theme, setTheme }}&gt;\n      &lt;Toolbar /&gt;\n    &lt;/ThemeContext.Provider&gt;\n  );\n}\n\n// 3. Consume context in nested components\nfunction Toolbar() {\n  return (\n    &lt;div&gt;\n      &lt;ThemedButton /&gt;\n    &lt;/div&gt;\n  );\n}\n\nfunction ThemedButton() {\n  const { theme, setTheme } = useContext(ThemeContext);\n\n  return (\n    &lt;button\n      onClick={() =&gt; setTheme(theme === 'light' ? 'dark' : 'light')}\n      style={{\n        background: theme === 'light' ? '#fff' : '#333',\n        color: theme === 'light' ? '#000' : '#fff',\n      }}\n    &gt;\n      Current theme: {theme}\n    &lt;/button&gt;\n  );\n}</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750674750,
    "question": "What are fragments in React?",
    "answer": "<p>Fragments let you return multiple elements <strong>without adding extra DOM nodes</strong>.</p><pre><code>&lt;&gt;\n  &lt;h1&gt;Title&lt;/h1&gt;\n  &lt;p&gt;Description&lt;/p&gt;\n&lt;/&gt;</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750675035,
    "question": "What is useRef?",
    "answer": "<p><strong><u>useRef</u></strong> is a hook to <strong>store a reference</strong> to a DOM element or a value that persists between renders.</p><pre><code>function Form() {\n  const inputRef  = React.useRef();\n  \n  const handleSubmit = () =&gt; {\n    alert(inputRef.current.value);\n  };\n\n  return (\n    &lt;&gt;\n      &lt;input type=\"text\" ref={inputRef} /&gt;\n      &lt;button onClick={handleSubmit}&gt;Submit&lt;/button&gt;\n    &lt;/&gt;\n  );\n}</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750675109,
    "question": "What is React.memo?",
    "answer": "<p><strong><u>React.memo</u></strong> is used to <strong>prevent unnecessary re-renders</strong> of a component if its props haven't changed.</p><pre><code>const MyComponent = React.memo(function MyComponent({ name }) {\n  return &lt;p&gt;{name}&lt;/p&gt;;\n});</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750675110,
    "question": "What is the difference between useCallback and useMemo?",
    "answer": "<p>Both <strong><u>useCallback</u></strong> and <strong><u>useMemo</u></strong> are <strong>performance optimization hooks</strong> in React. They help avoid unnecessary re-renders or recalculations.</p><p><strong><em><u>useCallback</u></em></strong></p><p>useCallback memoizes a function — returns the same function instance unless its dependencies change.</p><p><strong>Use when:</strong> You pass functions to child components and want to <strong>prevent re-creating them on every render</strong>.</p><pre><code>import { useCallback, useState } from 'react';\n\nfunction Parent() {\n  const [count, setCount] = useState(0);\n\n  const handleClick = useCallback(() =&gt; {\n    console.log('Button clicked');\n  }, []); // memoized function\n\n  return (\n    &lt;&gt;\n      &lt;Child onClick={handleClick} /&gt;\n      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Re-render Parent&lt;/button&gt;\n    &lt;/&gt;\n  );\n}\n\nfunction Child({ onClick }) {\n  console.log('Child rendered');\n  return &lt;button onClick={onClick}&gt;Click me&lt;/button&gt;;\n}</code></pre><p><strong><em><u>useMemo</u></em></strong></p><p>useMemo memoizes a computed value — avoids expensive recalculations on every render.</p><p><strong>Use when:</strong> You have <strong>slow calculations</strong> or want to <strong>avoid recalculating derived values</strong> unless dependencies change.</p><pre><code>import { useMemo, useState } from 'react';\n\nfunction ExpensiveComponent() {\n  const [count, setCount] = useState(0);\n  const [other, setOther] = useState(false);\n\n  const expensiveCalculation = useMemo(() =&gt; {\n    console.log('Calculating...');\n    return count * 2;\n  }, [count]); // only recalculates if count changes\n\n  return (\n    &lt;&gt;\n      &lt;p&gt;Expensive Value: {expensiveCalculation}&lt;/p&gt;\n      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increase&lt;/button&gt;\n      &lt;button onClick={() =&gt; setOther(!other)}&gt;Toggle Other&lt;/button&gt;\n    &lt;/&gt;\n  );\n}</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750675665,
    "question": "What is lazy loading in React?",
    "answer": "<p>Lazy loading means loading components <strong>only when needed</strong> to reduce the initial load time.</p><pre><code>const LazyComponent = React.lazy(() =&gt; import('./MyComponent'));\n\n&lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;\n  &lt;LazyComponent /&gt;\n&lt;/Suspense&gt;</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750675791,
    "question": "What is the significance of the key prop in lists?",
    "answer": "<p>It helps React <strong>track list items</strong> and update them efficiently without re-rendering the whole list.</p>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750675855,
    "question": "What are higher-order components (HOC)?",
    "answer": "<p>HOC is a function that takes a component and <strong>returns a new component</strong> with added functionality.</p><pre><code>function withAuth(Component) {\n  return function EnhancedComponent(props) {\n    return &lt;Component {...props} isAuthenticated={true} /&gt;;\n  };\n}</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750675958,
    "question": "What is the purpose of defaultProps?",
    "answer": "<p><strong><em><u>defaultProps</u></em></strong> sets <strong>default values</strong> for props if no value is passed.</p><pre><code>function Greet({ name }) {\n  return &lt;h1&gt;Hello, {name}&lt;/h1&gt;;\n}\n\nGreet.defaultProps = {\n  name: \"Guest\"\n};</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750676421,
    "question": "What is prop drilling and how to avoid it?",
    "answer": "<p>Prop drilling is passing props from parent to child to grandchild, etc., even if only the last one needs it.</p><p><strong><em><u>Solution:</u></em></strong><br>Use <strong>Context API</strong> or <strong>state management libraries</strong> (like Redux).</p>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750679033,
    "question": "Implement a javascript function that flattens a nested array  into a single-dimensional array.",
    "answer": "<pre><code>function flattenArray(arr) {\n  let result = [];\n\n  for (let item of arr) {\n    if (Array.isArray(item)) {\n      result = result.concat(flattenArray(item));\n    } else {\n      result.push(item);\n    }\n  }\n\n  return result;\n}\nconst nestedArray = [1, [2, [3, 4], 5], 6];\nconst flatArray = flattenArray(nestedArray);\n\nconsole.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]</code></pre>",
    "difficulty": "easy",
    "category": "JavaScript"
  },
  {
    "id": 1750679162,
    "question": "Implement a javascript function that flattens a nested object.",
    "answer": "<pre><code>var input = {\n  a: 1,\n  b: {\n    c: 2,\n    d: {\n      e: 3,\n    },\n  },\n};\n\n var output = {\n   'a': 1,\n   'b.c': 2,\n   'b.d.e': 3\n }</code></pre><p></p><pre><code>function flattenObject(obj, parentKey = '', result = {}) {\n  for (let key in obj) {\n    const fullKey = parentKey ? `${parentKey}.${key}` : key;\n    if (typeof obj[key] === 'object' &amp;&amp; obj[key] !== null) {\n      flattenObject(obj[key], fullKey, result); // Recursive call\n    } else {\n      result[fullKey] = obj[key];\n    }\n  }\n  return result;\n}\n\n// Example usage:\nconst input = {\n  a: 1,\n  b: {\n    c: 2,\n    d: {\n      e: 3,\n    },\n  },\n};\n\nconst output = flattenObject(input);\nconsole.log(output);</code></pre>",
    "difficulty": "easy",
    "category": "JavaScript"
  },
  {
    "id": 1750679830,
    "question": "What are the features of React?",
    "answer": "<ul><li><p>JSX</p></li><li><p>Virtual dom</p></li><li><p>one way data binding</p></li><li><p>Uses reusable components to develop the views</p></li><li><p>Supports server side rendering</p></li></ul>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750679831,
    "question": "What is useReducer hook?",
    "answer": "<p>It is an alternative to useState hook which is used when state of the component is complex and requires more than one state variable.</p>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750680080,
    "question": "What is meant by forward ref?",
    "answer": "<p>In React, <strong>forwardref</strong> is a technique which is used to send the ref from parent component to one of its children. This is helpful when we want to access the child component dom node from the parent component.</p>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750683977,
    "question": "What is meant by forward ref?",
    "answer": "<p><strong>Forward Ref</strong> in React is a technique to <strong>pass a ref through a component to one of its child DOM nodes</strong>, especially useful when you're building reusable components (like buttons, inputs, or wrappers) and need the parent to access a child DOM element.</p><pre><code>import React, { useRef } from 'react';\n\nconst MyInput = React.forwardRef((props, ref) =&gt; {\n  return &lt;input ref={ref} placeholder=\"Enter text\" /&gt;;\n});\n\nfunction ParentComponent() {\n  const inputRef = useRef();\n\n  const focusInput = () =&gt; {\n    inputRef.current.focus();\n  };\n\n  return (\n    &lt;div&gt;\n      &lt;MyInput ref={inputRef} /&gt;\n      &lt;button onClick={focusInput}&gt;Focus the input&lt;/button&gt;\n    &lt;/div&gt;\n  );\n}</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750684113,
    "question": "What are Error boundaries?",
    "answer": "<p><strong>Error Boundaries</strong> are <strong>React components</strong> that catch <strong>JavaScript errors</strong> <strong>in their child component tree</strong>, log those errors, and display a <strong>fallback UI</strong> instead of crashing the entire application.</p>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750684255,
    "question": "What is Lazy loading in React?",
    "answer": "<p>The lazy loaded components are wrapped by Suspense.The Suspense component receives a fallback prop which is displayed until the lazy loaded component in rendered.</p><pre><code>import React, { lazy, Suspense } from 'react';\nconst LazyComponent = lazy(() =&gt; import('./LazyComponent'));\nfunction App() {\n    return (\n        &lt;div&gt;\n            &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;\n                &lt;LazyComponent /&gt;\n            &lt;/Suspense&gt;\n        &lt;/div&gt;\n    );\n}\nexport default App;</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750684256,
    "question": "What are custom hooks?",
    "answer": "<pre><code>\nimport { useState, useEffect } from 'react';\n// Custom hook to fetch data from an API\nfunction useFetch(url) {\n    const [data, setData] = useState(null);\n    const [loading, setLoading] = useState(true);\n    const [error, setError] = useState(null);\n    useEffect(() =&gt; {\n        const fetchData = async () =&gt; {\n            try {\n                const response = await fetch(url);\n                if !response.ok) {\n        throw new Error('Network response was not ok');\n    }\n    const result = await response.json();\n    setData(result);\n} catch (error) {\n    setError(error);\n} finally {\n    setLoading(false);\n}\n};\nfetchData();\n// Cleanup function\nreturn () =&gt; {\n    // Cleanup logic if needed\n};\n}, [url]); // Dependency array to watch for changes</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750684595,
    "question": "What are custom hooks?",
    "answer": "<pre><code>\nimport { useState, useEffect } from 'react';\n// ✅ Custom hook to fetch data\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() =&gt; {\n    const fetchData = async () =&gt; {\n      try {\n        const response = await fetch(url);\n        if (!response.ok) {\n          throw new Error('Network response was not ok');\n        }\n        const result = await response.json();\n        setData(result);\n      } catch (err) {\n        setError(err);\n      } finally {\n        setLoading(false);\n      }\n    };\n\n    fetchData();\n\n    // Optional cleanup\n    return () =&gt; {\n      // abort fetch or cleanup logic if needed\n    };\n  }, [url]);\n\n  return { data, loading, error };\n}\n\n// ✅ Example usage of the custom hook\nfunction MyComponent() {\n  const { data, loading, error } = useFetch('https://api.com/data');\n\n  if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;\n  if (error) return &lt;div&gt;Error: {error.message}&lt;/div&gt;;\n\n  return (\n    &lt;div&gt;\n      {data &amp;&amp; (\n        &lt;ul&gt;\n          {data.map(item =&gt; (\n            &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;\n          ))}\n        &lt;/ul&gt;\n      )}\n    &lt;/div&gt;\n  );\n}\n\nexport default MyComponent;\n</code></pre>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750685123,
    "question": "How do you optimize your react application?",
    "answer": "<ul><li><p><strong><em><u>Code Splitting</u></em></strong>: Break down large bundles into smaller chunks to reduce initial load times.</p></li><li><p><strong><em><u>Lazy Loading</u></em></strong>: Load non-essential components\\asynchronously to prioritize critical content.</p></li><li><p><strong><em><u>Caching and Memoization</u></em></strong>: Cache data locally or use memoization libraries to avoid redundant API calls and computations.</p></li><li><p><strong><em><u>Memoization</u></em></strong>: Memoize expensive computations and avoid unnecessary re-renders using tools like React.memo and useMemo.</p></li><li><p><strong><em><u>Optimized Rendering</u></em></strong>: Use shouldComponentUpdate, PureComponent, or React.memo to prevent unnecessary re-renders of components.</p></li><li><p><strong><em><u>Virtualization</u></em></strong>: Implement virtual lists and grids to render only the visible elements, improving rendering performance for large datasets.</p></li><li><p><strong><em><u>Server-Side Rendering (SSR)</u></em></strong>: Pre-render content on the server to improve initial page load times and enhance SEO.</p></li><li><p><strong><em><u>Bundle Analysis</u></em></strong>: Identify and remove unused dependencies, optimize images, and minify code to reduce bundle size.</p></li><li><p><strong><em><u>Performance Monitoring</u></em></strong>: Continuously monitor app performance using tools like Lighthouse, Web Vitals, and browser DevTools.</p></li><li><p><strong><em><u>Optimize rendering with keys</u></em></strong>: Ensure each list item in a mapped array has a unique and stable key prop to optimize rendering performance. Keys help React identify which items have changed, been added, or removed, minimizing unnecessary DOM updates.</p></li><li><p><strong><em><u>CDN Integration</u></em></strong>: Serve static assets and resources from Content Delivery Networks (CDNs) to reduce latency and improve reliability.</p></li></ul>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750685814,
    "question": "What are the difference between Package.json and Package.lock.json",
    "answer": "<p><strong><em><u>Package.json</u></em></strong>:  is a metadata file that contains information about your project, such as the name, version, description, author, and most importantly, the list of dependencies required for your project to run. This file is used by npm (Node Package Manager) to install, manage, and update dependencies for your project.</p><p><strong><em><u>Package.lock.json</u></em></strong>: is a file that npm generates after installing packages for your project. This file contains a detailed description of the dependencies installed in your project, including their versions and the dependencies of their dependencies. This file is used by npm to ensure that the same version of each package is installed every time, regardless of the platform, environment, or the order of installation.</p>",
    "difficulty": "easy",
    "category": "React"
  },
  {
    "id": 1750687194,
    "question": "How do you secure a Node.js/Express application?",
    "answer": "<ul><li><p><strong><em><u>Input validation &amp; sanitization:</u></em></strong>First, I ensure all user input is validated and sanitized using libraries like express-validator to prevent XSS and SQL/NoSQL injection.</p></li><li><p><strong><em><u>HTTP Headers:</u></em></strong> I use helmet middleware to set secure HTTP headers and protect against common attacks like clickjacking or XSS.</p></li><li><p><strong><em><u>CORS:</u></em></strong> I restrict API access using the cors middleware by allowing only specific trusted origins.</p></li><li><p><strong><em><u>Authentication:</u></em></strong> For authentication, I use hashed passwords with bcrypt and JWT tokens with short expiry and refresh mechanisms.</p></li><li><p><strong><em><u>Rate Limiting:</u></em></strong> I use express-rate-limit to prevent brute force and abuse of endpoints.</p></li><li><p><strong><em><u>Secure Environment:</u></em></strong> Secrets are stored in .env files, never hardcoded. I use dotenv and never commit sensitive info to git.</p></li><li><p><strong><em><u>Dependency Security:</u></em></strong> I regularly run npm audit, update packages, and avoid unnecessary third-party modules.</p></li><li><p><strong><em><u>Error Handling</u></em></strong>: I prevent leaking stack traces by using centralized error handlers that return generic messages to the client.</p></li><li><p><strong><em><u>Network/Server</u></em></strong>: I use reverse proxies like NGINX, firewalls to close unused ports, and HTTPS via Let’s Encrypt or Cloudflare.</p></li></ul>",
    "difficulty": "hard",
    "category": "General"
  },
  {
    "id": 1750687943,
    "question": "How would you architect an e-commerce/full stack application?",
    "answer": "<pre><code>1. Feature Planning &amp; Scope 📝\n2. UI/UX Wireframes &amp; Mockups 🎨\n3. System Design Diagram 📐\n4. Database Design (ERD, schemas) 🗃\n5. API Design (Routes, structure) 🌐\n6. Setup Repo &amp; Folder Structure 🗂\n7. Backend Development 🛠\n8. Frontend Development 💻\n9. Integration &amp; Testing ✅\n10. Deployment 🚀</code></pre>",
    "difficulty": "hard",
    "category": "General"
  },
  {
    "id": 1750690255,
    "question": "How do you handle large data sets in MERN applications?",
    "answer": "<p><strong><u>1. Backend Handling</u></strong></p><p>In the backend, I avoid fetching all 10M records at once. Instead, I use:</p><ul><li><p>Pagination with limit and skip in MongoDB</p></li><li><p>Indexing on frequently queried fields</p></li><li><p>Projection to return only required fields</p></li><li><p>Caching with Redis for frequent queries</p></li><li><p>Cursor-based or keyset pagination for better performance on large datasets</p></li></ul><p><strong><em><u>2. Frontend Handling</u></em></strong></p><p>In the frontend, I implement:</p><ul><li><p>Lazy loading or infinite scroll (e.g., React + Intersection Observer)</p></li><li><p>Client-side caching using SWR/React Query</p></li><li><p>Load only what the user needs (e.g., 20 items per scroll/page)</p></li></ul><p><strong><em><u>3. Performance &amp; Optimization</u></em></strong></p><p>To make the experience fast and scalable:</p><ul><li><p>Use indexes on DB fields (e.g., createdAt, productId)</p></li><li><p>Add caching layers with Redis or memory store</p></li><li><p>Use load balancers and horizontally scale the backend</p></li><li><p>Use cloud DB solutions with replica sets or sharding (MongoDB Atlas)</p></li></ul>",
    "difficulty": "hard",
    "category": "General"
  },
  {
    "id": 1750690431,
    "question": "How do you structure your MERN project?",
    "answer": "<p>I separate frontend and backend into different folders. The backend follows MVC structure: <strong>models</strong>, <strong>controllers</strong>, <strong>routes</strong>, and <strong>middleware</strong>. The frontend is built with React, where I separate pages, components, hooks, and services (API layer). This keeps code modular and scalable.</p>",
    "difficulty": "hard",
    "category": "General"
  },
  {
    "id": 1750690481,
    "question": "How would you scale your application to handle high traffic?",
    "answer": "<p>I would use horizontal scaling with multiple instances behind a load balancer. For the backend, I’d make it stateless and store sessions in Redis. For the database, I’d use MongoDB Atlas with sharding and indexing. I’d also use caching (<strong>Redis</strong>) and <strong>CDN</strong> for static content.</p>",
    "difficulty": "hard",
    "category": "General"
  },
  {
    "id": 1750690534,
    "question": "How do you secure your Node.js application?",
    "answer": "<p>I use Helmet to set secure HTTP headers, express-rate-limit for DDoS protection, and CORS to restrict access. For authentication, I use JWT and hash passwords with <strong>bcrypt</strong>. Sensitive data is stored in <strong>.env</strong>. I also validate and sanitize input to prevent injection attacks.</p>",
    "difficulty": "hard",
    "category": "General"
  },
  {
    "id": 1750692232,
    "question": "What is the difference between let, const, and var in JavaScript?",
    "answer": "<p>The main differences between let, const, and var are:</p><ul><li><p><strong>var</strong>: Function-scoped, hoisted, can be redeclared</p></li><li><p><strong>let</strong>: Block-scoped, hoisted but not initialized, cannot be redeclared</p></li><li><p><strong>const</strong>: Block-scoped, must be initialized, cannot be reassigned</p></li></ul>",
    "difficulty": "easy",
    "category": "JavaScript"
  },
  {
    "id": 1750692350,
    "question": "What is the difference between == and ===?",
    "answer": "<p><strong>==</strong> checks value only (loose equality).</p><p><strong>===</strong> checks value and type (strict equality).</p><pre><code>console.log(5 == '5');  // true\nconsole.log(5 === '5'); // false</code></pre><p></p>",
    "difficulty": "easy",
    "category": "JavaScript"
  },
  {
    "id": 1750692509,
    "question": "What are modules in javascript ?",
    "answer": "<ul><li><p>Modules allows us to break down the large piece of code into smaller parts.</p></li><li><p>Modules helps us to write more reusable and maintenable code.</p></li><li><p>Modules can be imported and exported using import and export statements.</p></li></ul>",
    "difficulty": "easy",
    "category": "JavaScript"
  },
  {
    "id": 1750692510,
    "question": "Whatʼs the spread operator in javascript?",
    "answer": "<p>The <strong>spread operator (</strong><code>...</code><strong>)</strong> in JavaScript is used to <strong>unpack elements from arrays or objects</strong> and insert them into another array, object, or function call.</p><pre><code>const a = [1, 2];\nconst b = [3, 4];\nconst merged = [...a, ...b];  // [1, 2, 3, 4]</code></pre>",
    "difficulty": "easy",
    "category": "JavaScript"
  },
  {
    "id": 1750692717,
    "question": "What is rest operator in javascript ?",
    "answer": "<p>The <strong>rest operator (</strong><code>...</code><strong>)</strong> in JavaScript is used to <strong>gather multiple elements into a single array or object</strong>.</p><pre><code>function sum(...numbers) {\n  return numbers.reduce((a, b) =&gt; a + b, 0);\n}\nsum(1, 2, 3); // 6</code></pre>",
    "difficulty": "easy",
    "category": "JavaScript"
  },
  {
    "id": 1750692811,
    "question": "What is the difference between map and filter?",
    "answer": "<ul><li><p>Both map and filter are useful in JavaScript when working with an arrays.</p></li><li><p>map transforms each element of an array and creates a new array which contains the transformed elements. whereas filter will creates a new array with only those elements which satisfies the specified condition.</p></li></ul>",
    "difficulty": "easy",
    "category": "JavaScript"
  },
  {
    "id": 1750692897,
    "question": "What is the difference between map() and  forEach()",
    "answer": "<ul><li><p>map method is used to transform the elements of an array. Whereas forEach method is used to loop through the elements of an array.</p></li><li><p>map method will return a new array with the transformed values. forEach method does not return a new array.</p></li><li><p>map method can be used with other array methods like filter method. whereas forEach method cannot be used with other array methods as it does not return any array.</p></li></ul>",
    "difficulty": "easy",
    "category": "JavaScript"
  },
  {
    "id": 1750935824,
    "question": "What is the difference between SQL and NoSQL databases?",
    "answer": "<p>SQL and NoSQL databases differ in their data structure, scalability, and use cases.</p><p><strong><em><u>SQL (MySQL, PostgreSQL)</u></em></strong></p><ul><li><p>Uses tables with rows and columns</p></li><li><p>Requires predefined schema</p></li><li><p>Better for complex queries and relationships</p></li><li><p>ACID compliant</p></li></ul><p><strong><em><u>NoSQL (MongoDB)</u></em></strong></p><ul><li><p>Uses collections of documents</p></li><li><p>Schema-less and flexible</p></li><li><p>Better for scalability and big data</p></li><li><p>Eventually consistent</p></li></ul>",
    "difficulty": "easy",
    "category": "Database"
  },
  {
    "id": 1750936118,
    "question": "What are Indexes in Databases?",
    "answer": "<p><strong>Indexes</strong> are data structures that improve the speed of data retrieval operations. Think of them like a book's index - instead of reading the whole book to find something, you can quickly look it up in the index.</p><p><strong>MySQL/PGSQL</strong></p><pre><code>-- Creating an index\nCREATE INDEX idx_email ON users(email);\n\n-- Composite index\nCREATE INDEX idx_name_email ON users(name, email);</code></pre><p><strong>Mongo</strong></p><pre><code>// Creating an index\ndb.users.createIndex({ email: 1 });\n\n// Compound index\ndb.users.createIndex({ name: 1, email: 1 });\n\n// Using index in query\ndb.users.find({ email: 'john@example.com' }); // Uses index</code></pre><p><strong>Types of Indexes:</strong></p><ul><li><p><strong>Single-column index</strong>: Index on one column</p></li><li><p><strong>Composite index</strong>: Index on multiple columns</p></li><li><p><strong>Unique index</strong>: Ensures no duplicate values</p></li><li><p><strong>Text index</strong>: For full-text search (MongoDB)</p></li></ul>",
    "difficulty": "easy",
    "category": "Database"
  },
  {
    "id": 1750937136,
    "question": "Tell me about yourself/Introduction",
    "answer": "<p><strong>My name is Jimit Hothi, and I have over 9 years of experience in the software development industry.</strong> I have worked on multiple domains and technologies. specializing in JavaScript and Node.js and building scalable, secure, and high-performance web applications.</p><p>I have hands-on experience in <strong>both frontend and backend development</strong>. On the frontend, I'm proficient with modern frameworks like <strong>Angular, React </strong>, while on the backend, I develop <strong>RESTful APIs</strong> and services using <strong>Node.js</strong>.</p><p>In terms of cloud experience, I have worked with <strong>Google Cloud Functions</strong> to build and deploy serverless solutions and microservices. I also have experience with Amazon Web Services (AWS), including services like Lambda, S3, CloudWatch, and EC2, for managing cloud infrastructure, deployment automation, and monitoring.</p><p>Throughout my career, I have contributed to various phases of the software development lifecycle—from requirement gathering and system design to development, testing, deployment, and maintenance. I’ve also handled responsibilities such as team coordination, client communication, code reviews, and project delivery.</p><p>I’m comfortable working both independently and collaboratively in agile environments.</p>",
    "difficulty": "easy",
    "category": "General"
  }
];

export type Question = {
  id: number;
  question: string;
  answer: string;
  difficulty: string;
  category: string;
};

export default questions; 