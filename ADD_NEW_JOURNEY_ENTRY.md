# Adding New Journey Entries

This guide explains how to add new professional experience, education, or update technical skills in the Journey page.

## 📁 File Location
All journey data is centralized in: `app/data/journey.ts`

## 🔧 Adding New Professional Experience

### Step 1: Add to the `professionalExperience` array

```typescript
{
  id: 'unique-identifier',
  company: 'Company Name',
  position: 'Job Title',
  period: 'Start Date - End Date',
  achievements: [
    'Achievement 1',
    'Achievement 2',
    'Achievement 3'
  ]
}
```

### Example:
```typescript
{
  id: 'new-company',
  company: 'Tech Corp Inc.',
  position: 'Senior Software Engineer',
  period: 'Jan 2024 - Present',
  achievements: [
    'Led development of microservices architecture',
    'Improved system performance by 40%',
    'Mentored junior developers'
  ]
}
```

## 🎓 Adding New Education

### Step 1: Add to the `education` array

```typescript
{
  id: 'unique-identifier',
  institution: 'Institution Name',
  degree: 'Degree Name',
  period: 'Start Year - End Year',
  description: 'Brief description of the education'
}
```

### Example:
```typescript
{
  id: 'masters-degree',
  institution: 'University of Technology',
  degree: 'Master of Science in Computer Science',
  period: '2023 - 2025',
  description: 'Specialized in artificial intelligence and machine learning'
}
```

## 🛠️ Updating Technical Skills

### Step 1: Modify the `technicalSkills` object

```typescript
export const technicalSkills: TechnicalSkills = {
  languages: ['Java', 'JavaScript', 'Python', 'SQL/PLSQL', 'FTL'],
  devops: ['Jira', 'Postman', 'Git', 'Docker', 'Kubernetes', 'CI/CD'],
  frameworks: ['Spring Boot', 'Spring MVC', 'JSP', 'Node.js', 'Microservices'],
  architecture: ['REST APIs', 'Kafka', 'Agile Methodologies', 'Linux', 'Shell Scripting', 'Microservices'],
  databases: ['Oracle', 'MongoDB', 'Snowflake', 'Amazon S3']
}
```

### Example - Adding new skills:
```typescript
export const technicalSkills: TechnicalSkills = {
  languages: ['Java', 'JavaScript', 'Python', 'SQL/PLSQL', 'FTL', 'TypeScript', 'Go'],
  devops: ['Jira', 'Postman', 'Git', 'Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Terraform'],
  frameworks: ['Spring Boot', 'Spring MVC', 'JSP', 'Node.js', 'Microservices', 'React', 'Next.js'],
  architecture: ['REST APIs', 'Kafka', 'Agile Methodologies', 'Linux', 'Shell Scripting', 'Microservices', 'GraphQL'],
  databases: ['Oracle', 'MongoDB', 'Snowflake', 'Amazon S3', 'PostgreSQL', 'Redis']
}
```

## 📄 Updating Resume Download

### Step 1: Modify the `resumeDownload` object

```typescript
export const resumeDownload: ResumeDownload = {
  directDownload: {
    filename: 'Your_Name_Resume.pdf',
    path: '/files/your-resume.pdf'
  },
  googleDrive: {
    url: 'https://drive.google.com/file/d/your-file-id/view?usp=sharing',
    label: 'View on Drive'
  }
}
```

## ✅ Benefits of This Modular Approach

1. **Easy Updates**: All data in one place
2. **Type Safety**: TypeScript interfaces ensure data consistency
3. **Reusability**: Data can be imported and used anywhere
4. **Maintainability**: Changes only need to be made in one file
5. **Extensibility**: Easy to add new fields or sections

## 🚀 Helper Functions Available

- `getAllProfessionalExperience()` - Get all professional experiences
- `getProfessionalExperienceById(id)` - Get specific experience by ID
- `getAllEducation()` - Get all education entries
- `getEducationById(id)` - Get specific education by ID
- `getTechnicalSkills()` - Get technical skills object
- `getResumeDownload()` - Get resume download configuration
- `addProfessionalExperience(newExperience)` - Add new professional experience
- `addEducation(newEducation)` - Add new education entry
- `updateTechnicalSkills(updatedSkills)` - Update technical skills
- `updateResumeDownload(updatedResume)` - Update resume download links

## 📝 Notes

- All changes are automatically reflected on the Journey page
- No need to modify the page component itself
- The page will automatically render new entries with the same styling and effects
- Make sure to use unique IDs for each entry
- Keep descriptions concise but informative
