export const screens = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    title: 'Dashboard — everything you need today',
    description: 'Visited every day. Sorted by urgency, not alphabetically. Every section adapts to your exam calendar and weak subjects.',
    points: [
      'Exam countdown cards sorted by closest deadline, color-coded critical / on track / safe',
      'Today\'s study suggestions — 2-3 topics chosen by exam date × past marks × uncovered status',
      'Ebbinghaus "Due for Review" section — topics past their retention interval',
      'Casual Learning Strip — daily random topic, doesn\'t affect progress'
    ]
  },
  {
    id: 'topic',
    label: 'Topic Page',
    title: 'Topic Page — three modes, one topic',
    description: 'The most visited screen. Every explanation is retrieved from your notes via RAG. The AI adapts based on your history with this exact topic.',
    points: [
      '🔍 Full Explanation — first time you open a topic (concept + real example + key points)',
      '💡 Analogy Mode — if you flagged "I\'m confused" (simple analogies, no jargon)',
      '⚡ Quick Recap — on revisit with no confusion flag (short, focused on what tripped you before)',
      'Source tag always visible — your notes (green) or NPTEL/AI (amber)'
    ]
  },
  {
    id: 'subject',
    label: 'Subject Page',
    title: 'Subject Knowledge Map',
    description: 'A bird\'s-eye view of your entire syllabus for a single subject, generated automatically from your uploads.',
    points: [
      'Expandable accordion for each unit',
      'Topics color-coded by understanding level',
      'Progress rings showing completion per unit',
      'Quick actions to upload missing notes'
    ]
  },
  {
    id: 'chatbot',
    label: 'Chatbot',
    title: 'Subject Master — a tutor who knows your notes',
    description: 'Slides in from the right without leaving the page. Not a general chatbot — scoped to one subject\'s FAISS index. Knows what you haven\'t covered yet.',
    points: [
      'Subject-scoped: only retrieves from that subject\'s FAISS chunks',
      'Proactively surfaces uncovered units before you dive deep',
      'Multi-turn: full conversation history sent each time',
      'Session end logs all discussed topics → updates progress automatically'
    ]
  },
  {
    id: 'revision',
    label: 'Revision',
    title: 'Revision Mode — locked until you earn it',
    description: 'Deliberately gated. No quizzes to waste time. When you hit 100%, flashcards and one-mark Q&A are generated from your own notes — not generic question banks.',
    points: [
      'Locked with a progress ring until subject reaches 100% understood',
      'Flashcards: topic name → flip → key points from your notes (cached after first generation)',
      'One-mark Q&A: B.Tech exam style, self-rated (Got it / Missed it)',
      'Missed questions re-queue at the end of the session'
    ]
  },
  {
    id: 'onboarding',
    label: 'Onboarding',
    title: 'Profile Onboarding Wizard',
    description: 'A one-time flow that builds your unique student context vector.',
    points: [
      'Collects branch, semester, past results',
      'Identifies weak subjects for priority weighting',
      'Sets daily study capacity',
      'Builds the student_context object for all future prompts'
    ]
  },
  {
    id: 'setup',
    label: 'Setup',
    title: 'Semester Setup Flow',
    description: 'The document processing pipeline interface.',
    points: [
      'Timetable upload and OCR verification',
      'Syllabus upload and unit/topic extraction preview',
      'Notes upload with drag-and-drop',
      'Real-time status of chunking and embedding pipelines'
    ]
  },
  {
    id: 'auth',
    label: 'Auth',
    title: 'Authentication',
    description: 'Simple, secure entry powered by Supabase.',
    points: [
      'Email / Password login',
      'OAuth providers (Google, GitHub)',
      'Password reset flow',
      'Persistent sessions'
    ]
  },
  {
    id: 'landing',
    label: 'Landing',
    title: 'Marketing Landing Page',
    description: 'The entry point for new users to understand ALIP\'s value proposition.',
    points: [
      'Hero section with dynamic visual elements',
      'Value proposition and core features overview',
      'How it works step-by-step breakdown',
      'Call to action to create an account'
    ]
  }
];
