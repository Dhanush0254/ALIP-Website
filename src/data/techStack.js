export const techStack = [
  { category: 'Frontend', name: 'React.js', description: 'Vite scaffold, Tailwind CSS v3' },
  { category: 'Backend', name: 'FastAPI', description: 'Python, async, Pydantic schemas' },
  { category: 'Database', name: 'Supabase', description: 'PostgreSQL, Auth, Storage' },
  { category: 'Vector DB', name: 'FAISS', description: 'Per-user index in Supabase Storage' },
  { category: 'Embeddings/local', name: 'sentence-transformers', description: 'all-MiniLM-L6-v2, zero API cost' },
  { category: 'Topic extraction/local', name: 'KeyBERT', description: 'Keyword extraction from syllabus' },
  { category: 'NER/local', name: 'spaCy', description: 'Subject names, dates, units' },
  { category: 'Summarization/local', name: 'FLAN-T5-small', description: 'Chunk summarization, flashcards' },
  { category: 'OCR/local', name: 'Tesseract + OpenCV', description: 'Scanned notes, phone photos' },
  { category: 'Reranking/local', name: 'rank_bm25', description: 'Hybrid BM25 + FAISS retrieval' },
  { category: 'AI Reasoning', name: 'Groq free', description: 'llama-3.3-70b-versatile, free tier' },
  { category: 'Vision', name: 'Gemini free', description: 'Fallback + Vision for diagrams' },
  { category: 'Doc Parsing', name: 'pdfplumber', description: 'Tables, text, structure-aware' },
  { category: 'Doc Parsing', name: 'python-docx', description: 'DOCX syllabus and notes' },
  { category: 'Hosting', name: 'Render+Vercel free', description: 'Backend + frontend, free tier' },
  { category: 'State', name: 'Zustand', description: 'Global frontend state' }
];

export const freeTierCosts = [
  { component: 'Embeddings/local', tool: 'Local models', cost: '$0.00' },
  { component: 'Topic extraction/local', tool: 'Local models', cost: '$0.00' },
  { component: 'Summarization/local', tool: 'Local models', cost: '$0.00' },
  { component: 'OCR/local', tool: 'Local models', cost: '$0.00' },
  { component: 'AI Reasoning', tool: 'Groq free', cost: '$0.00' },
  { component: 'Vision', tool: 'Gemini free', cost: '$0.00' },
  { component: 'DB', tool: 'Supabase free', cost: '$0.00' },
  { component: 'Hosting', tool: 'Render+Vercel free', cost: '$0.00' },
];
