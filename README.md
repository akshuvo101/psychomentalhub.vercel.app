# PsychoMentalHub

PsychoMentalHub is an AI-powered mental wellness platform designed to help university students assess, understand, and improve their mental well-being through structured self-assessment and AI-assisted guidance.

The platform combines modern full-stack web technologies, secure authentication, role-based access control, PostgreSQL database management, and Google Gemini AI to provide students with personalized wellness insights and conversational support.

> **Note:** PsychoMentalHub is designed for educational and self-awareness purposes. AI-generated results do not represent a medical diagnosis and should not replace professional mental health care.

---

## Project Objectives

PsychoMentalHub was developed to provide a simple, accessible, and technology-driven digital wellness platform for university students.

The main objectives are to:

- Provide structured mental wellness self-assessment.
- Generate AI-assisted wellness insights from assessment responses.
- Provide personalized wellness recommendations.
- Offer AI-assisted conversational wellness guidance.
- Maintain secure authentication and role-based access.
- Protect user data through database-level security.
- Provide downloadable assessment reports.
- Demonstrate the practical integration of AI with a modern full-stack web application.

---

## Core Features

### Student Portal

- Secure registration and login
- Google authentication
- Student profile management
- Mental wellness self-assessment
- AI-assisted assessment analysis
- Wellness/risk score
- Mental-state classification
- AI confidence score
- Category-based wellness insights
- Personalized wellness recommendations
- AI Counselor chat
- Assessment result history
- PDF assessment reports
- Responsive dashboard
- Light and dark mode

### Counselor Portal

- Counselor dashboard
- Student wellness information
- Assessment review
- Appointment management
- Counseling-related information access

### Admin Portal

- Administrative dashboard
- User management
- Appointment oversight
- Platform administration
- System-level management

---

## AI-Assisted Wellness Analysis

PsychoMentalHub integrates **Google Gemini AI** for assessment analysis and conversational wellness guidance.

The assessment system analyzes multiple wellness-related areas, including:

- Stress
- Anxiety
- Depression
- Burnout
- Sleep
- Focus
- Social well-being
- Mood

The AI-assisted analysis can generate:

- Overall wellness/risk score
- Mental-state classification
- AI confidence level
- Category-based wellness insights
- Personalized recommendations
- Natural-language wellness guidance

The AI system is intended to support student self-awareness and general wellness rather than provide clinical diagnosis or treatment.

---

## System Design

The following diagram represents the overall system architecture of PsychoMentalHub, including the major application components, security mechanisms, data services, AI integration, and deployment flow.

![PsychoMentalHub System Design](public/images/design.png)

The architecture separates the user interface, application/API logic, authentication, database services, security controls, and external AI services into clearly defined responsibilities.

### Major Components

- **Next.js Application** — Provides the user interface, dashboards, reports, appointments, assessments, and AI Counselor experience.
- **Application / API Layer** — Handles API requests, validation, processing, business logic, authentication, authorization, and external service integration.
- **Supabase PostgreSQL** — Provides persistent relational data storage and database management.
- **Supabase Authentication** — Handles user authentication and session management.
- **Row Level Security (RLS)** — Provides database-level access control for protected records.
- **Google Gemini AI** — Provides AI-assisted assessment analysis and conversational wellness guidance.
- **Security Layer** — Protects application and database access through authentication, role-based authorization, RLS, and secure communication.
- **Vercel** — Provides cloud deployment and hosting.
- **GitHub** — Provides source control and CI/CD workflow.

### High-Level Data Flow

```text
Student
   │
   ▼
Next.js Frontend
   │
   ▼
Next.js Application / API Layer
   │
   ├──────────────► Supabase PostgreSQL
   │
   └──────────────► Google Gemini AI
                           │
                           ▼
                 Personalized Result
                    / AI Guidance

The application layer acts as the central integration point between the frontend, database services, authentication, and external AI services.

Technology Stack
Frontend
Next.js
React
TypeScript
Tailwind CSS
Backend & Database
Next.js API Routes
Supabase
PostgreSQL
Supabase Authentication
Row Level Security (RLS)
Artificial Intelligence
Google Gemini AI
Libraries & UI
Lucide React
Framer Motion
Sonner
jsPDF
jsPDF AutoTable
Email Service
Resend
Deployment
Vercel
Version Control
Git
GitHub
Authentication & Authorization

PsychoMentalHub uses Supabase Authentication for user authentication and role-based authorization.

The platform supports three application roles:

Role	Primary Responsibility
Student	Complete assessments, view wellness insights, use AI guidance, and manage personal information
Counselor	Review student wellness information and manage counseling-related activities
Admin	Manage users and oversee platform-level operations

Role-based access ensures that users can access only the functionality associated with their assigned role.

Authentication and authorization are enforced through application-level access controls and database-level security policies.

Data Security

Security is an important part of the PsychoMentalHub architecture.

The platform uses:

Supabase Authentication
PostgreSQL
Row Level Security (RLS)
Role-based authorization
Protected application routes
Server-side API operations
Environment variables for sensitive credentials
HTTPS and secure communication channels
Row Level Security

Row Level Security policies provide database-level access control for protected records and help isolate user-specific data.

Credential Protection

Sensitive credentials and API keys are stored through environment variables rather than being exposed directly in the application source code.

Security: Never commit .env.local or any file containing private API credentials to the repository.

Assessment Workflow

The mental wellness assessment follows a structured workflow:

Student
   │
   ▼
Complete Assessment
   │
   ▼
Assessment Saved
   │
   ▼
AI Analysis
   │
   ▼
Wellness Evaluation
   │
   ├── Risk Score
   ├── Mental State
   ├── Confidence
   ├── Category Insights
   └── Recommendations
   │
   ▼
Assessment Result
   │
   ├── View Online
   └── Generate PDF Report

The submitted assessment data is preserved as part of the assessment workflow before AI-generated analysis is finalized. This helps ensure that the student's submitted assessment is not treated as lost when the external AI service is temporarily unavailable.

AI Counselor

The AI Counselor provides conversational wellness guidance using Google Gemini AI.

It is designed to support general student wellness conversations related to areas such as:

Stress
Anxiety
Study pressure
Sleep
Focus
Emotional well-being
Healthy habits

The AI Counselor is intended for general wellness guidance and self-awareness.

It does not provide professional medical diagnosis or treatment.

Assessment Report

PsychoMentalHub provides dynamically generated PDF assessment reports.

The report can contain:

Student information
Assessment overview
Wellness/risk score
Mental-state classification
AI-generated wellness summary
Category-based wellness insights
Recommended wellness actions
Educational and self-awareness disclaimer

The report is generated from the student's assessment data and can be saved as a PDF for personal reference.

Project Structure
app/
├── (auth)/
│   ├── login/
│   ├── register/
│   ├── forgot-password/
│   └── auth/
│
├── (public)/
│   ├── about/
│   ├── contact/
│   ├── features/
│   ├── resources/
│   └── page.tsx
│
├── student/
│   ├── dashboard/
│   ├── assessments/
│   ├── appointments/
│   └── reports/
│
├── counselor/
│   ├── dashboard/
│   ├── students/
│   ├── appointments/
│   ├── assessments/
│   └── reports/
│
├── admin/
│   ├── dashboard/
│   ├── users/
│   ├── appointments/
│   ├── reports/
│   └── settings/
│
├── api/
├── layout.tsx
└── page.tsx

components/
├── admin/
├── counselor/
├── student/
├── ui/
├── animations/
└── shared/

lib/
├── auth/
├── supabase/
├── redirects.ts
├── get-user-role.ts
└── utils.ts

public/
├── images/
│   └── design.png
├── icons/
└── favicon.ico

middleware.ts
next.config.ts
Database

PsychoMentalHub uses Supabase PostgreSQL as its primary relational database.

The database manages application data including:

User profiles
User roles
Assessment questions
Assessment responses
Assessment results
Wellness insights
Recommendations
Appointments
Other platform-related records

Database access is controlled through Supabase Authentication and Row Level Security policies.

Environment Variables

Create a .env.local file in the root directory of the project.

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-flash-latest

NEXT_PUBLIC_SITE_URL=http://localhost:3000

RESEND_API_KEY=your_resend_api_key
Environment Variable Reference
Variable	Purpose
NEXT_PUBLIC_SUPABASE_URL	Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY	Supabase public client key
GEMINI_API_KEY	Authentication for Google Gemini AI
GEMINI_MODEL	Gemini model used by the application
NEXT_PUBLIC_SITE_URL	Base URL of the application
RESEND_API_KEY	Authentication for the Resend email service

Security: Never commit .env.local or any file containing private API credentials to the repository.

Getting Started
Prerequisites

Make sure the following are installed:

Node.js
npm
Git

You will also need configured services for:

Supabase
Google Gemini AI
Resend
1. Clone the Repository
git clone <repository-url>
cd psychomentalhub
2. Install Dependencies
npm install
3. Configure Environment Variables

Create a .env.local file in the project root and add the required environment variables.

4. Run the Development Server
npm run dev
5. Open the Application

Open:

http://localhost:3000
Production Deployment

PsychoMentalHub can be deployed using Vercel.

Before deploying, configure the required environment variables in the Vercel project settings.

Required services include:

Supabase
Google Gemini AI
Resend

For production, update:

NEXT_PUBLIC_SITE_URL=https://your-production-domain.com

The typical deployment workflow is:

GitHub
   │
   ▼
Version Control / CI/CD
   │
   ▼
Vercel
   │
   ▼
Cloud Deployment & Hosting
User Experience & Design

PsychoMentalHub follows a modern and responsive user interface approach focused on clarity, accessibility, and ease of use.

Key design considerations include:

Responsive layouts
Mobile-friendly interfaces
Light and dark themes
Clear information hierarchy
Consistent visual design
Accessible feedback states
Loading states
Error handling
AI service availability handling
Focused wellness-oriented interfaces

The interface is designed to make wellness information understandable without overwhelming users with unnecessary technical complexity.

AI Service Reliability

PsychoMentalHub handles temporary AI service limitations separately from the core assessment system.

When the Gemini API reaches a usage limit or becomes temporarily unavailable:

The submitted assessment remains saved.
The user receives a clear availability message.
The assessment is not treated as lost.
AI analysis can be retried when the service becomes available.

This approach improves reliability by ensuring that temporary external AI limitations do not affect the persistence of core assessment data.

Academic Context

PsychoMentalHub was developed as a Computer Science & Engineering academic and portfolio project at:

Bangladesh University of Business & Technology (BUBT)

The project demonstrates practical implementation of:

Full-stack web development
Modern React and Next.js architecture
Authentication and authorization
Relational database design
Row Level Security
AI API integration
API development
PDF generation
Responsive UI/UX
Cloud deployment
Project Status

Status: Active Academic & Portfolio Project

The core platform includes:

Authentication
Role-based access
Student wellness assessment
AI-assisted assessment analysis
AI Counselor
Wellness insights
Personalized recommendations
PDF reporting
Counselor functionality
Administrative functionality
Secure PostgreSQL data management
Future Improvements

Potential future improvements include:

Advanced wellness analytics
More personalized AI insights
Real-time counselor communication
Video consultation
Mobile application
Additional assessment models
Enhanced progress visualization
Expanded counselor workflows
Advanced reporting and analytics
License

Copyright © 2026 AK Shuvo.

This project is presented for academic and portfolio purposes. The source code and original project materials are not licensed for unrestricted commercial reuse, redistribution, modification, or resale without permission.

See the LICENSE file for the complete license terms.

Developer

AK Shuvo

Computer Science & Engineering
Bangladesh University of Business & Technology (BUBT)

Built With

Next.js • React • TypeScript • Tailwind CSS • Supabase • PostgreSQL • Google Gemini AI