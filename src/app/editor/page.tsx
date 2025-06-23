"use client";
import { useState, useEffect, useRef } from "react";
import { TextInput, Select, Button, Group, Paper, Stack, Title, Divider, Text, CopyButton, Notification } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { RichTextEditor } from "@mantine/tiptap";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from '@tiptap/extension-underline';
import { IconRefresh } from '@tabler/icons-react';

const difficulties = [
  { value: "Beginner", label: "Beginner" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const categories = [
  { value: "React", label: "React" },
  { value: "Next.js", label: "Next.js" },
  { value: "General", label: "General" },
  { value: "Angular", label: "Angular" },
  { value: "JavaScript", label: "JavaScript" },
];

export default function QuestionEditor() {
  const [id, setId] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const copyFnRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    setMounted(true);
    setId(Math.floor(Date.now() / 1000));
  }, []);

  useEffect(() => {
    if (id !== null && copyFnRef.current) {
      copyFnRef.current();
    }
  }, [id]);

  const questionEditor = useEditor({
    extensions: [StarterKit],
    content: question,
    onUpdate: ({ editor }) => setQuestion(editor.getHTML()),
  });
  const answerEditor = useEditor({
    extensions: [StarterKit, Underline],
    content: "",
    onUpdate: ({ editor }) => setAnswer(editor.getHTML()),
  });

  const questionObj = {
    id: id ?? 0,
    question,
    answer,
    difficulty: difficulty || "",
    category: category || "",
  };

  return (
    <Stack maw={1000} mx="auto" my="xl">
      <Title order={2}>Question & Answer Editor</Title>
      <Group align="start" gap={8} wrap="wrap" grow>
        {/* Left: Form */}
        <Paper p="xs" shadow="xs" withBorder style={{ flex: 1, minWidth: 350, maxWidth: 600 }}>
          <Stack gap="xs">
            <Group align="end" gap={4}>
              <TextInput label="ID (Unix timestamp)" value={id ?? ''} readOnly style={{ flex: 1 }} />
              <Button
                variant="light"
                onClick={() => setId(Math.floor(Date.now() / 1000))}
                title="Refresh ID"
                px={6}
                h={32}
                mt={18}
                disabled={id === null}
              >
                <IconRefresh size={16} />
              </Button>
            </Group>
            <Select label="Difficulty" data={difficulties} value={difficulty} onChange={setDifficulty} required searchable />
            <Select label="Category" data={categories} value={category} onChange={setCategory} required searchable />
            <TextInput label="Question" value={question} onChange={e => setQuestion(e.target.value)} required />
            {mounted && (
              <div>
                <Text fw={500} mb={2} fz={14}>Answer (Rich Text)</Text>
                <RichTextEditor editor={answerEditor}>
                  <RichTextEditor.Toolbar>
                    <RichTextEditor.ControlsGroup>
                      <RichTextEditor.Bold />
                      <RichTextEditor.Italic />
                      <RichTextEditor.Underline />
                      <RichTextEditor.Strikethrough />
                      <RichTextEditor.Code />
                    </RichTextEditor.ControlsGroup>
                    <RichTextEditor.ControlsGroup>
                      <RichTextEditor.H1 />
                      <RichTextEditor.H2 />
                      <RichTextEditor.H3 />
                    </RichTextEditor.ControlsGroup>
                    <RichTextEditor.ControlsGroup>
                      <RichTextEditor.BulletList />
                      <RichTextEditor.OrderedList />
                      <RichTextEditor.Blockquote />
                      <RichTextEditor.CodeBlock />
                    </RichTextEditor.ControlsGroup>
                    <RichTextEditor.ControlsGroup>
                      <RichTextEditor.Undo />
                      <RichTextEditor.Redo />
                    </RichTextEditor.ControlsGroup>
                  </RichTextEditor.Toolbar>
                  {answerEditor && <RichTextEditor.Content />}
                </RichTextEditor>
              </div>
            )}
          </Stack>
        </Paper>
        {/* Right: JSON Preview */}
        <Paper p="xs" shadow="xs" withBorder style={{ flex: 1, minWidth: 150, maxWidth: 400 }}>
          <Stack gap="xs">
            <Group justify="space-between">
              <Text fw={500} fz={14}>Copy the following JSON and paste into <code>questions.ts</code>:</Text>
              <CopyButton value={JSON.stringify(questionObj, null, 2)} timeout={2000}>
                {({ copied, copy }) => {
                  copyFnRef.current = copy;
                  return (
                    <Button color={copied ? "teal" : "blue"} onClick={copy} size="xs">
                      {copied ? "Copied!" : "Copy JSON"}
                    </Button>
                  );
                }}
              </CopyButton>
            </Group>
            <pre style={{ background: '#f8f9fa', padding: 6, borderRadius: 4, fontSize: 12 }}>
              {JSON.stringify(questionObj, null, 2)}
            </pre>
          </Stack>
        </Paper>
      </Group>
      {/* <Divider my="md" label="Preview" labelPosition="center" />
      <Paper p="md" shadow="xs" withBorder>
        <Text fw={500} mb={4}>Question Preview</Text>
        <div dangerouslySetInnerHTML={{ __html: question }} style={{ background: '#f8f9fa', padding: 12, borderRadius: 4 }} />
        <Text fw={500} mt={16} mb={4}>Answer Preview</Text>
        <div dangerouslySetInnerHTML={{ __html: answer }} style={{ background: '#f8f9fa', padding: 12, borderRadius: 4 }} />
      </Paper> */}
    </Stack>
  );
} 