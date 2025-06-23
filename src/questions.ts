export type Question = {
  id: number;
  question: string;
  answer: string;
  difficulty: string;
  category: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
    difficulty: "easy",
    category: "React"
  },
  {
    id: 2,
    question: "What is Next.js?",
    answer: "Next.js is a React framework that enables server-side rendering and static site generation.",
    difficulty: "medium",
    category: "Next.js"
  },
  {
    id: 3,
    question: "What is the Virtual DOM?",
    answer: "The Virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM by libraries such as React.",
    difficulty: "medium",
    category: "General"
  },
  {
    id: 4,
    question: "How do you define an Angular component?",
    answer: `<pre><code>@Component({\n  selector: 'app-hello',\n  template: '&lt;h1&gt;Hello World!&lt;/h1&gt;'\n})\nexport class HelloComponent { }</code></pre>`,
    difficulty: "medium",
    category: "Angular"
  },
  {
    id: 42,
    question: "What is the difference between == and ===?",
    answer: "<ul><li><code>==</code> checks value only (loose equality).</li><li><code>===</code> checks value and type (strict equality).</li></ul><pre><code>console.log(5 == '5');  // true\nconsole.log(5 === '5'); // false</code></pre>",
    category: "JavaScript",
    difficulty: "Beginner"
  },
];

export default questions; 