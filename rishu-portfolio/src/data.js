// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Rishu Kumar',
  title: 'Aspiring Full Stack Developer',
  tagline: 'Building Ideas Into Digital Experiences.',
  email: 'rishukumar387412@gmail.com',
  location: 'Aurangabad, Bihar, India',
  github: 'https://github.com/rishu38',
  linkedin: 'https://www.linkedin.com/in/rishu-singh-2a92153a6/',
  youtube: 'https://www.youtube.com/@risufact',
  resume: 'resume/Rishu_Kumar_Resume.pdf', // placeholder: replace the PDF in /public/resume
}

export const roles = ['Full Stack Developer', 'Web Developer', 'Programmer', 'Tech Enthusiast', 'Problem Solver']

export const navLinks = [
  ['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['education', 'Education'],
  ['journey', 'Journey'], ['roadmap', 'Roadmap'], ['github', 'GitHub'], ['youtube', 'YouTube'], ['contact', 'Contact'],
]

export const skills = {
  current: [
    { group: 'Programming and databases', items: ['C', 'Python', 'Java', 'SQL'] },
    { group: 'Web', items: ['HTML', 'CSS', 'JavaScript'] },
  ],
  learning: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MERN Stack'],
}

export const hms = {
  title: 'Hospital Management System',
  blurb: 'A system for running day-to-day hospital work: patients, doctors, appointments, billing, medicines and laboratory tests.',
  features: [
    'Patient Management', 'Doctor Management', 'Appointment Management', 'Patient Search',
    'Billing System', 'PDF Bill Generation', 'Medicine Management', 'Laboratory Test Management',
  ],
  tech: [],   // TODO: add the technologies you used, e.g. ['Java', 'SQL']
  github: '', // TODO: paste the repository link (empty = opens your GitHub repositories)
  live: '',   // TODO: paste the live demo link (empty = button shows "Soon")
}

export const upcoming = [
  { title: 'MERN Stack Applications', blurb: 'Full stack apps built with MongoDB, Express.js, React.js and Node.js as I learn the stack.', tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'] },
  { title: 'AI-Based Web Applications', blurb: 'Web applications that bring AI-powered features into everyday tools. Details coming soon.', tech: [] },
]

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  school: 'Mewar University',
  year: '2nd Year, 3rd Semester',
}

export const journey = [
  { status: 'done', title: 'Programming foundations', text: 'Core programming with C, Python and Java, plus SQL for databases.' },
  { status: 'done', title: 'Web fundamentals', text: 'Building pages with HTML, CSS and JavaScript.' },
  { status: 'done', title: 'First real project', text: 'Built the Hospital Management System.' },
  { status: 'now', title: 'Learning the MERN stack', text: 'Working through React.js, Node.js, Express.js and MongoDB.' },
  { status: 'next', title: 'Cloud and DevOps', text: 'Next up after full stack: AWS, Linux, Docker and automation.' },
]

export const roadmap = {
  stages: [
    { title: 'Full Stack Developer', status: 'In progress', text: 'Learning the MERN stack and building projects with it.' },
    { title: 'Cloud Engineer', status: 'Planned', text: 'Learning to design and run applications on cloud infrastructure.' },
    { title: 'DevOps Engineer', status: 'Planned', text: 'Automating how software is built, tested and deployed.' },
  ],
  planned: ['AWS', 'Linux', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud Infrastructure', 'Automation'],
}
