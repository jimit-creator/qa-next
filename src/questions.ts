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