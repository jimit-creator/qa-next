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
    "id": 1750684255,
    "question": "What are custom hooks?",
    "answer": "<pre><code>\nimport { useState, useEffect } from 'react';\n// Custom hook to fetch data from an API\nfunction useFetch(url) {\n    const [data, setData] = useState(null);\n    const [loading, setLoading] = useState(true);\n    const [error, setError] = useState(null);\n    useEffect(() =&gt; {\n        const fetchData = async () =&gt; {\n            try {\n                const response = await fetch(url);\n                if !response.ok) {\n        throw new Error('Network response was not ok');\n    }\n    const result = await response.json();\n    setData(result);\n} catch (error) {\n    setError(error);\n} finally {\n    setLoading(false);\n}\n};\nfetchData();\n// Cleanup function\nreturn () =&gt; {\n    // Cleanup logic if needed\n};\n}, [url]); // Dependency array to watch for changes</code></pre>",
    "difficulty": "easy",
    "category": "React"
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