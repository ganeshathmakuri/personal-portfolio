import './App.css';

const skills = ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML & CSS'];

const socialLinks = [
  { name: 'WhatsApp', href: 'https://wa.me/15551234567', icon: 'whatsapp' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/athmakuri-ganesh/', icon: 'linkedin' },
  { name: 'GitHub', href: 'https://github.com/athmakuri-ganesh', icon: 'github' },
  { name: 'Instagram', href: 'https://www.instagram.com/athmakuri.ganesh/', icon: 'instagram' },
  { name: 'Facebook', href: 'https://www.facebook.com/athmakuri.ganesh', icon: 'facebook' },
];

function SocialIcon({ type }) {
  const commonProps = {
    'aria-hidden': true,
    viewBox: '0 0 24 24',
    className: 'social-icon',
  };

  if (type === 'whatsapp') {
    return (
      <svg {...commonProps}>
        <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z" />
        <path d="M9 8.5c.3-.4.6-.4.9-.1l.8 1.3c.2.3.1.6-.2.9l-.5.5c.5 1 1.4 1.9 2.5 2.4l.5-.6c.2-.3.5-.4.8-.2l1.4.7c.4.2.4.6.2.9-.4.7-1.1 1-1.8.9-2.8-.4-5.5-3-5.8-5.5-.1-.5.4-1 .9-1.2Z" />
      </svg>
    );
  }

  if (type === 'linkedin') {
    return (
      <svg {...commonProps}>
        <path d="M6.5 9.5V18M6.5 6.5v.1M10.5 18v-8.5h3v1.3a3 3 0 0 1 5.5 1.8V18M2.5 3.5h19v17h-19z" />
        <circle cx="6.5" cy="6.5" r=".5" />
      </svg>
    );
  }

  if (type === 'github') {
    return (
      <svg {...commonProps}>
        <path d="M8 19c-4.5 1.4-4.5-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.8 1.4a13 13 0 0 0-6.9 0C4.4 1.2 3.2 1.6 3.2 1.6a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.7c0 5.1 3.1 6.3 6.1 6.6A3.4 3.4 0 0 0 7 18v4" />
      </svg>
    );
  }

  if (type === 'instagram') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M14 21v-8h3l.5-3H14V8c0-.9.3-1.5 1.6-1.5h2V3.8a24 24 0 0 0-2.8-.2c-2.8 0-4.7 1.7-4.7 4.8v1.6H7v3h3.1v8" />
    </svg>
  );
}

function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="logo" href="#home" aria-label="Athmakuri Ganesh home">AG</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#social">Social</a>
        </nav>
      </header>

      <main className="profile" id="home">
        <section className="profile-content" id="about">
          <p className="greeting">Hello, I&apos;m</p>
          <h1>Athmakuri Ganesh</h1>
          <h2>Full Stack Developer</h2>
          <p className="description">
            I build responsive, easy-to-use web applications from front end to
            back end. I enjoy turning ideas into useful digital experiences and
            learning new technologies along the way.
          </p>

          <div className="skills" id="skills">
            <h3>My skills</h3>
            <ul>
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>

          <div className="social" id="social">
            <h3>Find me online</h3>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  title={link.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon type={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="profile-photo">
          <img src="/sample-profile.jpg" alt="Sample portrait of a man" />
        </div>
      </main>

      <footer className="footer">© 2026 Athmakuri Ganesh</footer>
    </div>
  );
}

export default App;
