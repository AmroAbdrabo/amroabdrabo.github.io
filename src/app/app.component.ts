import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <section class="hero">
        <img
          class="hero__image"
          src="assets/bridge.jpg"
          alt="Bridge structure used as the portfolio hero image"
        />
        <div class="hero__overlay"></div>

        <nav class="nav" aria-label="Primary navigation">
          <a class="brand" href="#top" aria-label="Amro Abdrabo home">AA</a>
          <div class="nav__links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div id="top" class="hero__content">
          <h1>Amro Abdrabo</h1>
          <p class="eyebrow">MSc Computer Science, ETH Zürich</p>
          <p class="hero__lead">
            Computer scientist working across security, full-stack systems,
            structural monitoring, and teaching.
          </p>
          <div class="hero__actions" aria-label="Contact actions">
            <a class="button button--primary" href="mailto:amro.abdrabo@unil.ch">
              <span aria-hidden="true">✉</span>
              Email
            </a>
            <a class="button" href="https://github.com/AmroAbdrabo" target="_blank" rel="noreferrer">
              <span aria-hidden="true">⌘</span>
              GitHub
            </a>
            <a class="button" href="assets/amro-abdrabo-cv.pdf" target="_blank" rel="noreferrer">
              <span aria-hidden="true">↓</span>
              CV
            </a>
          </div>
        </div>
      </section>

      <section class="intro section">
        <div>
          <p class="section__label">Profile</p>
          <h2>Research-focused with a practical edge.</h2>
        </div>

      </section>

      <section class="metrics" aria-label="Highlights">
        @for (metric of metrics; track metric.value) {
          <article>
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </article>
        }
      </section>

      <section id="experience" class="section section--split">
        <div class="section__header">
          <p class="section__label">Experience</p>
          <h2>Teaching, research, and live survey systems.</h2>
        </div>

        <div class="timeline">
          @for (item of experience; track item.title) {
            <article class="timeline__item">
              <div>
                <p class="timeline__date">{{ item.date }}</p>
                <h3>{{ item.title }}</h3>
                <p class="timeline__place">{{ item.org }} · {{ item.location }}</p>
              </div>
              <p>{{ item.summary }}</p>
            </article>
          }
        </div>
      </section>

      <section id="projects" class="section">
        <div class="section__header section__header--wide">
          <p class="section__label">Selected Projects</p>
          <h2>Security analysis, acoustic AI, medical AI, and forecasting.</h2>
        </div>

        <div class="project-grid">
          @for (project of projects; track project.title) {
            <article class="project-card">
              <p>{{ project.kind }}</p>
              <h3>{{ project.title }}</h3>
              <span>{{ project.summary }}</span>
            </article>
          }
        </div>
      </section>

      <section class="section awards">
        <div>
          <p class="section__label">Awards</p>
          <h2>Awards.</h2>
        </div>
        <div class="award-list">
          @for (award of awards; track award) {
            <p>{{ award }}</p>
          }
        </div>
      </section>

      <section id="contact" class="contact">
        <div>
          <p class="section__label">Contact</p>
          <h2>Based in Lausanne, working on cutting-edge research.</h2>
        </div>
        <div class="contact__links">
          <a href="mailto:amro.abdrabo@unil.ch">amro.abdrabo&#64;unil.ch</a>
          <a href="https://github.com/AmroAbdrabo" target="_blank" rel="noreferrer">github.com/AmroAbdrabo</a>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }

      main {
        overflow: hidden;
      }

      .hero {
        position: relative;
        min-height: 92svh;
        color: #fbfaf6;
        background: #121817;
        isolation: isolate;
      }

      .hero__image {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: -2;
      }

      .hero__overlay {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(90deg, rgba(14, 20, 19, 0.9) 0%, rgba(14, 20, 19, 0.68) 42%, rgba(14, 20, 19, 0.18) 100%),
          linear-gradient(180deg, rgba(14, 20, 19, 0.12) 0%, rgba(14, 20, 19, 0.68) 100%);
        z-index: -1;
      }

      .nav {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: min(1120px, calc(100% - 40px));
        margin: 0 auto;
        padding: 24px 0;
      }

      .brand {
        display: grid;
        place-items: center;
        width: 44px;
        height: 44px;
        border: 1px solid rgba(255, 255, 255, 0.32);
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff;
        font-weight: 800;
        text-decoration: none;
      }

      .nav__links {
        display: flex;
        gap: 24px;
        font-size: 0.92rem;
      }

      .nav__links a {
        color: rgba(255, 255, 255, 0.82);
        text-decoration: none;
      }

      .hero__content {
        width: min(1120px, calc(100% - 40px));
        margin: 0 auto;
        padding: clamp(88px, 14vh, 154px) 0 104px;
      }

      .eyebrow,
      .section__label {
        margin: 0 0 14px;
        color: #dcae57;
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0;
        text-transform: uppercase;
      }

      h1,
      h2,
      h3,
      p {
        margin-top: 0;
      }

      h1 {
        max-width: 760px;
        margin-bottom: 18px;
        font-weight: 400;
        font-family: "Microsoft JhengHei", sans-serif;
        font-size: clamp(4.25rem, 12vw, 9.5rem);
        line-height: 0.9;
        letter-spacing: 0;
      }

      h2 {
        margin-bottom: 0;
        color: #15201d;
        font-size: clamp(2rem, 4vw, 4.2rem);
        line-height: 1.02;
        letter-spacing: 0;
      }

      h3 {
        margin-bottom: 8px;
        color: #17201e;
        font-size: 1.08rem;
        line-height: 1.25;
      }

      .hero__lead {
        max-width: 620px;
        margin-bottom: 34px;
        color: rgba(255, 255, 255, 0.82);
        font-size: clamp(1.1rem, 2.2vw, 1.45rem);
        line-height: 1.55;
      }

      .hero__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 46px;
        padding: 0 18px;
        border: 1px solid rgba(255, 255, 255, 0.28);
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff;
        font-weight: 750;
        text-decoration: none;
        backdrop-filter: blur(18px);
      }

      .button span {
        margin-right: 9px;
        font-weight: 900;
      }

      .button--primary {
        border-color: #dcae57;
        background: #dcae57;
        color: #151c1a;
      }

      .section,
      .metrics,
      .contact {
        width: min(1120px, calc(100% - 40px));
        margin: 0 auto;
      }

      .intro {
        display: grid;
        grid-template-columns: minmax(0, 0.9fr) minmax(280px, 0.75fr);
        gap: clamp(32px, 7vw, 88px);
        padding: 88px 0 54px;
        margin-bottom: 40px;
      }

      .intro p:last-child {
        align-self: end;
        margin-bottom: 8px;
        color: #4c5a56;
        font-size: 1.15rem;
        line-height: 1.75;
      }

      .metrics {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        border-top: 1px solid #d9d1c3;
        border-bottom: 1px solid #d9d1c3;
      }

      .metrics article {
        padding: 28px 24px;
        border-right: 1px solid #d9d1c3;
      }

      .metrics article:last-child {
        border-right: 0;
      }

      .metrics strong {
        display: block;
        margin-bottom: 8px;
        color: #14211e;
        font-size: clamp(2rem, 4vw, 3.8rem);
        line-height: 1;
      }

      .metrics span,
      .project-card span,
      .timeline__item > p,
      .award-list p {
        color: #4c5a56;
        line-height: 1.65;
      }

      .section {
        padding: 92px 0 0;
      }

      .section--split {
        display: grid;
        grid-template-columns: minmax(230px, 0.38fr) minmax(0, 1fr);
        gap: clamp(32px, 7vw, 84px);
      }

      .section__header {
        position: sticky;
        top: 24px;
        align-self: start;
      }

      .section__header--wide {
        max-width: 820px;
        position: static;
      }

      .timeline {
        display: grid;
        gap: 18px;
      }

      .timeline__item {
        display: grid;
        grid-template-columns: minmax(190px, 0.42fr) minmax(0, 1fr);
        gap: 24px;
        padding: 26px 0;
        border-top: 1px solid #d9d1c3;
      }

      .timeline__date,
      .timeline__place,
      .project-card p {
        margin-bottom: 6px;
        color: #68746f;
        font-size: 0.88rem;
      }

      .project-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
        margin-top: 34px;
      }

      .project-card {
        min-height: 226px;
        padding: 28px;
        border: 1px solid #d9d1c3;
        background: #fbfaf6;
      }

      .project-card h3 {
        font-size: 1.35rem;
      }

      .capabilities,
      .awards {
        display: grid;
        grid-template-columns: minmax(0, 0.8fr) minmax(280px, 0.95fr);
        gap: clamp(28px, 7vw, 78px);
      }

      .chip-group {
        display: flex;
        flex-wrap: wrap;
        align-content: start;
        gap: 10px;
      }

      .chip-group span {
        padding: 10px 14px;
        border: 1px solid #cfc6b6;
        background: #ffffff;
        color: #24302d;
        font-weight: 700;
      }

      .award-list {
        display: grid;
        gap: 12px;
      }

      .award-list p {
        margin: 0;
        padding: 18px 0;
        border-top: 1px solid #d9d1c3;
      }

      .contact {
        display: grid;
        grid-template-columns: minmax(0, 0.9fr) minmax(280px, 0.7fr);
        gap: clamp(28px, 7vw, 78px);
        margin-top: 96px;
        padding: 56px 0;
        border-top: 1px solid #d9d1c3;
      }

      .contact__links {
        display: grid;
        align-content: center;
        gap: 14px;
      }

      .contact__links a {
        color: #18211f;
        font-size: 1.05rem;
        font-weight: 750;
      }

      @media (max-width: 820px) {
        .hero {
          min-height: 86svh;
        }

        .hero__overlay {
          background:
            linear-gradient(90deg, rgba(14, 20, 19, 0.92), rgba(14, 20, 19, 0.58)),
            linear-gradient(180deg, rgba(14, 20, 19, 0.1), rgba(14, 20, 19, 0.78));
        }

        .nav__links {
          gap: 14px;
          font-size: 0.84rem;
        }

        .intro,
        .section--split,
        .capabilities,
        .awards,
        .contact,
        .timeline__item {
          grid-template-columns: 1fr;
        }

        .section__header {
          position: static;
        }

        .metrics {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .metrics article:nth-child(2) {
          border-right: 0;
        }

        .metrics article:nth-child(-n + 2) {
          border-bottom: 1px solid #d9d1c3;
        }

        .project-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 560px) {
        .nav {
          width: min(100% - 28px, 1120px);
        }

        .nav__links {
          display: none;
        }

        .hero__content,
        .section,
        .metrics,
        .contact {
          width: min(100% - 28px, 1120px);
        }

        h1 {
          font-size: clamp(3.5rem, 18vw, 5.8rem);
        }

        .hero__actions {
          display: grid;
          grid-template-columns: 1fr;
          max-width: 320px;
        }

        .metrics {
          grid-template-columns: 1fr;
        }

        .metrics article,
        .metrics article:nth-child(2) {
          border-right: 0;
          border-bottom: 1px solid #d9d1c3;
        }

        .metrics article:last-child {
          border-bottom: 0;
        }

        .project-card {
          min-height: auto;
          padding: 22px;
        }
      }
    `
  ]
})
export class AppComponent {
  protected readonly metrics = [
    { value: '500+', label: 'students taught in Python and algorithms' },
    { value: '3', label: 'hackathon and project awards in 2024' },
    { value: '4', label: 'professional working languages (EN - DE - AR - FR)' }
  ];

  protected readonly experience = [
    {
      date: '02/2025 - Present',
      title: 'Graduate Assistant (PhD)',
      org: 'HEC - UNIL',
      location: 'Lausanne',
      summary:
        'Teaching assistant for Python programming and algorithms, supporting a cohort of 500+ students while maintaining data-driven survey systems website: https://www.datadrivensurvey.com/.'
    },
    {
      date: '2024',
      title: 'Master\'s Thesis',
      org: 'Irmos Technologies AG',
      location: 'Zurich',
      summary:
        'Applied unsupervised AI to bridge vibration time-series data and built a physical ANSYS bridge model for modal shape analysis.'
    },
    {
      date: '10/2022 - 01/2023',
      title: 'Full-stack Developer',
      org: 'ETH Juniors',
      location: 'Zurich',
      summary:
        'Built C#, JavaScript, Python, Docker, and Azure systems for photogrammetric workflows, including architecture, security review, and geometric computation.'
    },
    {
      date: '09/2019 - 12/2019',
      title: 'Teaching Assistant',
      org: 'EPFL',
      location: 'Lausanne',
      summary:
        'Assisted EPFL analysis coursework, helping students develop mathematical fluency and problem-solving discipline.'
    }
  ];

  protected readonly projects = [
    {
      kind: 'Security · ETH Zürich',
      title: 'Ethereum Smart Contract Security Analysis',
      summary:
        'Security analysis of smart contracts with 1,000 lines of Datalog, earning a 6.0 grade.'
    },
    {
      kind: 'AI · ETH AI Center Winner',
      title: 'VOJ - Voice of Jungle',
      summary:
        'Bird species identification from acoustic data using a wav2vec2 transformer trained on Xeno Canto recordings.'
    },
    {
      kind: 'Medical AI · Hackathon Winner',
      title: 'OpenEye',
      summary:
        'Early disease detection with AI-powered retinal scanners and medical data anonymization.'
    },
    {
      kind: 'Forecasting · Datathon',
      title: 'Electricity Consumption Forecasting',
      summary:
        'Third-lowest error forecasting ALPIQ electricity consumption across Spain and Italy.'
    }
  ];

  protected readonly skills = [
    'Python',
    'PyTorch',
    'Java',
    'React',
    'SQL',
    'REST',
    'C#',
    'Docker',
    'Azure',
    'Blender',
    'Security',
    'Statistics'
  ];

  protected readonly awards = [
    'AI for Good Hackathon - 1st place, Entrepreneur First, Visium, and EPFL AI Team.',
    'Best Project - EcoHackathon, ETH AI Center and Gainforest.',
    'Peter Berlow Award - highest first-year average in Applied Sciences at Dawson College.'
  ];
}
