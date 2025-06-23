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