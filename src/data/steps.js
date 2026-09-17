export const steps = [
  {
    id: 1,
    title: 'Profile Onboarding',
    description: '6-step wizard captures branch, semester, past subject marks, learning style, daily study hours, subjects you find hard, and exam pressure level. This data seeds the personalization engine — every AI response is built around your specific profile.',
    tags: ['Supabase', 'student_context object']
  },
  {
    id: 2,
    title: 'Timetable Upload',
    description: 'Upload a PDF, photo, or scan of your timetable. OpenCV preprocesses the image, Tesseract OCR extracts text, spaCy NER pulls out subject names and exam dates. A priority score is calculated per subject: closer exam + lower past marks = higher priority.',
    tags: ['Tesseract OCR', 'OpenCV', 'spaCy NER', 'Priority scoring']
  },
  {
    id: 3,
    title: 'Syllabus Upload',
    description: 'For each subject, upload your syllabus PDF or DOCX. KeyBERT extracts keywords and topics per unit. spaCy identifies unit boundaries. The result is an editable subject → unit → topic knowledge map — you can rename, add, or delete any topic.',
    tags: ['KeyBERT', 'pdfplumber', 'python-docx', 'Knowledge map']
  },
  {
    id: 4,
    title: 'Notes Upload',
    description: 'Upload notes per unit (PDF, DOCX, or phone photo of handwritten notes). Each file is parsed, structure-aware chunked (by heading, not token count), embedded locally with sentence-transformers, and stored in a FAISS index per user per subject. If notes are missing, you pick: free NPTEL textbook chapter, AI-generated explanation, or upload later.',
    tags: ['sentence-transformers', 'FAISS', 'Chunking', 'FLAN-T5', 'NPTEL fallback']
  },
  {
    id: 5,
    title: 'Learn Track Adapt',
    description: 'Every topic session retrieves chunks from your FAISS index via BM25+FAISS hybrid reranking, sends them to Groq with your student_context object, and gets a personalized explanation. Your progress is tracked per topic. Ebbinghaus forgetting curve schedules when to revisit what you\'ve already learned.',
    tags: ['Groq API', 'BM25+FAISS hybrid', 'Semantic cache', 'Ebbinghaus']
  }
];
