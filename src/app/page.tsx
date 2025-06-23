"use client";

import questions, { type Question } from "../questions";
import { QUESTIONS_PER_PAGE, ALL_OPTION } from "../constants";
import React, { useMemo, useState } from "react";

// Helper to add Tailwind classes to <pre> and <code> in the answer HTML
function addCodeClasses(html: string) {
  // Style <pre><code>...</code></pre> blocks
  html = html.replace(
    /<pre><code>/g,
    '<pre class="bg-gray-900 border border-gray-200 rounded-lg p-4 overflow-x-auto my-6 text-xs font-mono"><code class="text-white text-[11px]">'
  ).replace(
    /<\/code><\/pre>/g,
    "</code></pre>"
  );

  // Style inline <code> (not inside <pre>)
  // This regex finds <code>...</code> not immediately after <pre
  // html = html.replace(
  //   /(s)(.*?)(<\/code>)/g,
  //   (match, p1, p2, p3, offset, string) => {
  //     // Check if this <code> is inside a <pre>
  //     const before = string.slice(0, offset);
  //     // If the last <pre> is after the last </pre>, it's inside a pre block
  //     const lastPre = before.lastIndexOf('<pre');
  //     const lastEndPre = before.lastIndexOf('</pre>');
  //     if (lastPre > lastEndPre) {
  //       return match; // skip, already styled as block
  //     }
  //     return `<code class="bg-gray-100 text-gray-800 rounded px-1 py-0.5 font-mono text-[11px]">${p2}</code>`;
  //   }
  // );
  return html;
}

export default function Home() {
  const [category, setCategory] = useState<string>(ALL_OPTION);
  const [difficulty, setDifficulty] = useState<string>(ALL_OPTION);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  // Get unique categories and difficulties
  const categories = useMemo(() => [ALL_OPTION, ...Array.from(new Set(questions.map(q => q.category)))], []);
  const difficulties = useMemo(() => [ALL_OPTION, ...Array.from(new Set(questions.map(q => q.difficulty)))], []);

  // Filter and process questions
  const filteredQuestions = useMemo(() => {
    let filtered = questions;
    if (category !== ALL_OPTION) filtered = filtered.filter(q => q.category === category);
    if (difficulty !== ALL_OPTION) filtered = filtered.filter(q => q.difficulty === difficulty);
    if (search.trim() !== "") {
      const s = search.trim().toLowerCase();
      filtered = filtered.filter(q =>
        q.question.toLowerCase().includes(s) ||
        q.answer.toLowerCase().includes(s)
      );
    }
    return filtered.map(q => ({
      ...q,
      answer: addCodeClasses(q.answer)
    }));
  }, [category, difficulty, search]);

  // Pagination
  const totalPages = Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE);
  const paginatedQuestions = filteredQuestions.slice((page - 1) * QUESTIONS_PER_PAGE, page * QUESTIONS_PER_PAGE);

  // Handle filter or page change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setPage(1);
  };
  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value);
    setPage(1);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-2 sm:px-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-gray-900">Interview Questions</h1>
      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center gap-2 sm:gap-2 mb-4 justify-center">
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={handleSearchChange}
          className="w-full sm:flex-1 h-12 px-2 py-1 rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <select
          className="w-full sm:w-auto h-12 px-2 py-1 rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          className="w-full sm:w-auto h-12 px-2 py-1 rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={difficulty}
          onChange={handleDifficultyChange}
        >
          {difficulties.map((diff) => (
            <option key={diff} value={diff}>{diff.charAt(0).toUpperCase() + diff.slice(1)}</option>
          ))}
        </select>
      </div>
      <div className="w-full max-w-4xl flex flex-col gap-8">
        {paginatedQuestions.length === 0 ? (
          <div className="text-center text-gray-500">No questions found.</div>
        ) : (
          paginatedQuestions.map((q) => (
            <div
              key={q.id}
              className="rounded-md shadow bg-white border border-gray-200 p-6 sm:p-6 transition-transform hover:scale-[1.01] group relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-900 leading-snug mr-2">
                    {q.question}
                  </h2>
                  <span className="text-xs sm:text-sm px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold tracking-wide border border-gray-200">
                    {q.category}
                  </span>
                </div>
                <span className="self-start sm:self-center text-xs sm:text-sm px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold tracking-wide border border-blue-200">
                  {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
                </span>
              </div>
              <div
                className="text-gray-700 mt-2 text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: q.answer }}
              />
            </div>
          ))
        )}
      </div>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex gap-2 mt-10">
          <button
            className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 font-semibold shadow-sm hover:bg-gray-50 transition disabled:opacity-50"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-4 py-2 rounded-lg border border-gray-200 font-semibold shadow-sm ${page === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-900'} transition`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 font-semibold shadow-sm hover:bg-gray-50 transition disabled:opacity-50"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
