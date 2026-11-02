
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Code2,
  Presentation,
  BrainCircuit,
  Bot,
  Gamepad2,
  Clapperboard,
  Image,
  Mail,
  Phone,
  Instagram,
  Trophy,
  Users,
  Sparkles,
  Clock3,
  CheckCircle2
} from "lucide-react";

import { SITE } from "./config";

const events = [
  {
    name: "Intelli Talk",
    type: "Technical",
    desc: "Present your research, ideas and innovations with confidence.",
    icon: Presentation,
    number: "01",
    detail: "Paper Presentation"
  },
  {
    name: "Code Sprint",
    type: "Technical",
    desc: "Solve coding challenges, think logically and race against time.",
    icon: Code2,
    number: "02",
    detail: "Coding Competition"
  },
  {
    name: "Capture the Flag",
    type: "Technical",
    desc: "Put your technical knowledge and problem-solving skills to the test.",
    icon: BrainCircuit,
    number: "03",
    detail: "Technical Quiz"
  },
  {
    name: "Poster Presentation",
    type: "Technical",
    desc: "Turn complex ideas into compelling visual stories.",
    icon: Image,
    number: "04",
    detail: "Creative Showcase"
  },
  {
    name: "Build a Bot",
    type: "Technical",
    desc: "Showcase your robotics skills and bring your ideas to life.",
    icon: Bot,
    number: "05",
    detail: "Robotics Challenge"
  },
  {
    name: "Free Fire",
    type: "Non-technical",
    desc: "Team up, strategize and compete for the ultimate gaming win.",
    icon: Gamepad2,
    number: "06",
    detail: "Gaming Tournament"
  },
  {
    name: "Reel Making",
    type: "Non-technical",
    desc: "Create a short, engaging video and let your creativity shine.",
    icon: Clapperboard,
    number: "07",
    detail: "Creative Video"
  }
];

function Header() {
  const [menu, setMenu] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Events", "#events"],
    ["Schedule", "#schedule"],
    ["Register", "#register"],
    ["Contact", "#contact"]
  ];

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>SRI SAIRAM COLLEGE OF ENGINEERING</span>
          <span>
            <CalendarDays size={14} /> 26 NOVEMBER 2026
            <i />
            <MapPin size={14} /> COLLEGE CAMPUS
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap header-inner">
          <a className="college-brand" href="#home">
            <img src={SITE.logo} alt="Sri Sairam College of Engineering logo" />
            <span>
              <b>{SITE.college}</b>
              <small>{SITE.department}</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
            {menu ? <X /> : <Menu />}
          </button>

          <nav className={menu ? "main-nav nav-show" : "main-nav"}>
            {links.map(([n, h]) => (
              <a key={n} href={h} onClick={() => setMenu(false)}>
                {n}
              </a>
            ))}

            <a
              className="nav-register"
              href="#register"
              onClick={() => setMenu(false)}
            >
              Register <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

function Hero() {
  const [left, setLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--"
  });

  useEffect(() => {
    const target = new Date(SITE.eventDateISO);

    const tick = () => {
      let d = Math.max(0, target - Date.now());

      setLeft({
        days: String(Math.floor(d / 86400000)).padStart(2, "0"),
        hours: String(Math.floor(d / 3600000) % 24).padStart(2, "0"),
        minutes: String(Math.floor(d / 60000) % 60).padStart(2, "0"),
        seconds: String(Math.floor(d / 1000) % 60).padStart(2, "0")
      });
    };

    tick();

    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-shape shape-one" />
      <div className="hero-shape shape-two" />

      <div className="wrap hero-layout">
        <div className="hero-copy">
          <div className="event-pill">
            <span /> DEPARTMENT SYMPOSIUM · 2026
          </div>

          <p className="hero-kicker">THE NEXT WAVE OF INNOVATION</p>

          <h1>
            TECHNO
            <br />
            <em>VISTA</em> <sup>'26</sup>
          </h1>

          <div className="hero-rule" />

          <p className="hero-description">
            Where ideas meet innovation. Discover, compete, create and
            experience a day of technology and talent.
          </p>

          <div className="hero-buttons">
            <a className="button button-yellow" href="#register">
              Register now <ArrowRight size={17} />
            </a>

            <a className="button button-outline" href="#events">
              Explore events
            </a>
          </div>

          <div className="hero-facts">
            <span>
              <CalendarDays /> 26 November 2026
            </span>
            <span>
              <MapPin /> Sri Sairam Campus
            </span>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-orbit orbit-1" />
          <div className="art-orbit orbit-2" />

          <div className="art-center">
            <img src={SITE.logo} alt="Sri Sairam College logo" />
            <strong>
              TECHNO VISTA <b>2026</b>
            </strong>
            <small>INNOVATE · CREATE · ELEVATE</small>
          </div>

          <div className="art-stamp">
            <Sparkles />
            <span>
              THINK
              <br />
              BEYOND
            </span>
          </div>

          <div className="art-index">01 / 07</div>
        </div>
      </div>

      <div className="count-strip">
        <div className="wrap count-inner">
          <div className="count-title">
            <Clock3 />
            <span>
              COUNTDOWN TO
              <br />
              <b>THE BIG DAY</b>
            </span>
          </div>

          {Object.entries(left).map(([k, v]) => (
            <div className="count-unit" key={k}>
              <b>{v}</b>
              <small>{k.toUpperCase()}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, highlight, desc }) {
  return (
    <div className="section-title">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>
        {title} <em>{highlight}</em>
      </h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <div className="about-visual">
          <div className="about-image">
            <div className="image-grid" />
            <span className="big-26">26</span>
            <span className="image-caption">
              NOVEMBER
              <br />
              2026
            </span>
            <div className="image-label">
              A DAY OF IDEAS & INNOVATION
            </div>
          </div>

          <div className="about-badge">
            <Trophy />
            <b>
              LEARN
              <br />
              COMPETE
              <br />
              INSPIRE
            </b>
          </div>
        </div>

        <div className="about-copy">
          <span className="section-eyebrow">ABOUT THE SYMPOSIUM</span>

          <h2>
            Curiosity fuels
            <br />
            <em>the future.</em>
          </h2>

          <p>
            Techno Vista 2026 is the departmental symposium of the
            Information Science and Engineering department at Sri Sairam
            College of Engineering. A platform for curious minds to exchange
            ideas, demonstrate skills and celebrate innovation.
          </p>

          <p>
            From technical challenges to creative competitions, bring your
            talent, meet new people and make your mark.
          </p>

          <div className="about-points">
            <span>
              <CheckCircle2 /> Explore new ideas
            </span>
            <span>
              <CheckCircle2 /> Showcase your skills
            </span>
            <span>
              <CheckCircle2 /> Connect with innovators
            </span>
          </div>

          <a href="#events" className="inline-link">
            Discover the events <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Events() {
  const [filter, setFilter] = useState("All");

  let list = events.filter(
    e => filter === "All" || e.type === filter
  );

  return (
    <section className="section events" id="events">
      <div className="wrap">
        <SectionTitle
          eyebrow="THE EVENT LINE-UP"
          title="Find your"
          highlight="arena."
          desc="Pick your challenge, bring your best and make this symposium yours."
        />

        <div className="event-filters">
          {["All", "Technical", "Non-technical"].map(f => (
            <button
              className={filter === f ? "selected" : ""}
              key={f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="event-grid">
          {list.map(e => {
            let Icon = e.icon;

            return (
              <article className="event-card" key={e.name}>
                <div className="event-card-head">
                  <span className="event-icon">
                    <Icon />
                  </span>
                  <span className="event-num">{e.number}</span>
                </div>

                <small>
                  {e.type.toUpperCase()} · {e.detail.toUpperCase()}
                </small>

                <h3>{e.name}</h3>
                <p>{e.desc}</p>

                <a href="#register">
                  Register for this event <ArrowUpRight size={15} />
                </a>
              </article>
            );
          })}
        </div>

        <p className="event-disclaimer">
          Event rules, team size, timings and prizes will be shared by the
          organizing team.
        </p>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section className="section schedule" id="schedule">
      <div className="wrap schedule-layout">
        <div>
          <span className="section-eyebrow">MARK YOUR CALENDAR</span>

          <h2>
            One day.
            <br />
            <em>Many possibilities.</em>
          </h2>

          <p>
            Get ready for a full day of learning, friendly competition and
            unforgettable moments.
          </p>

          <a className="button button-yellow" href="#register">
            Be part of it <ArrowRight size={17} />
          </a>
        </div>

        <div className="schedule-card">
          <div className="schedule-date">
            <b>26</b>
            <span>
              NOV
              <br />
              2026
            </span>
          </div>

          <div>
            <small>EVENT DAY</small>
            <h3>Techno Vista 2026</h3>
            <p>
              <MapPin size={15} /> College Campus
            </p>
            <p>
              <Users size={15} /> Students & innovators
            </p>
            <p>
              <Clock3 size={15} /> Timing to be announced
            </p>
          </div>

          <div className="schedule-star">✳</div>
        </div>
      </div>
    </section>
  );
}

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    event: ""
  });

  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const change = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Send registration details to Google Sheets
  async function submit(e) {
    e.preventDefault();

    if (!SITE.appsScriptUrl) {
      setStatus(
        "Registration is not connected yet. Please contact the organizers."
      );
      return;
    }

    setBusy(true);
    setStatus("");

    try {
      const formData = new URLSearchParams();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("college", form.college);
      formData.append("event", form.event);
      formData.append("teamSize", "1");

      await fetch(SITE.appsScriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      setStatus(
        "Registration request sent! Please check with the organizers if you need confirmation."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        college: "",
        year: "",
        event: ""
      });

    } catch (error) {
      console.error("Registration error:", error);

      setStatus(
        "Unable to send registration. Please try again or contact the organizers."
      );

    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="section register" id="register">
      <div className="wrap">
        <SectionTitle
          eyebrow="JOIN THE EXPERIENCE"
          title="Your next chapter"
          highlight="starts here."
          desc="Complete the participant details to register your interest."
        />

        <div className="register-grid">
          <div className="register-note">
            <div className="register-number">
              TV<span>26</span>
            </div>

            <h3>
              Bring your ideas.
              <br />
              <em>Leave your mark.</em>
            </h3>

            <p>
              Choose an event and register for Techno Vista 2026. Our
              organizing team will share further instructions and event
              updates.
            </p>

            <div className="register-detail">
              <CalendarDays /> 26 November 2026
            </div>

            <div className="register-detail">
              <MapPin /> College Campus
            </div>
          </div>

          <form className="register-form" onSubmit={submit}>
            <div className="form-title">
              <div>
                <small>PARTICIPANT DETAILS</small>
                <h3>Registration form</h3>
              </div>
              <span>* Required</span>
            </div>

            <div className="form-fields">
              <label>
                Full name *
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={change}
                  placeholder="Your full name"
                />
              </label>

              <label>
                Email address *
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={change}
                  placeholder="name@example.com"
                />
              </label>

              <label>
                Phone number *
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9+ ()-]{8,16}"
                  value={form.phone}
                  onChange={change}
                  placeholder="Contact number"
                />
              </label>

              <label>
                College name *
                <input
                  name="college"
                  required
                  value={form.college}
                  onChange={change}
                  placeholder="Your institution"
                />
              </label>

              <label>
                Year of study *
                <select
                  name="year"
                  required
                  value={form.year}
                  onChange={change}
                >
                  <option value="">Select year</option>
                  {["1st Year", "2nd Year", "3rd Year", "4th Year", "Other"].map(x => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Choose event *
                <select
                  name="event"
                  required
                  value={form.event}
                  onChange={change}
                >
                  <option value="">Select event</option>
                  {events.map(x => (
                    <option key={x.name} value={x.name}>
                      {x.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <button
              className="button button-blue submit"
              type="submit"
              disabled={busy}
            >
              {busy ? "Submitting..." : "Submit registration"}
              <ArrowRight size={17} />
            </button>

            {status && (
              <p className="form-status" role="status">
                {status}
              </p>
            )}

            <div className="or-line">
              <span>OR</span>
            </div>

            <a
              className="google-link"
              href={SITE.googleFormUrl || "#"}
              target="_blank"
              rel="noreferrer"
              onClick={e => {
                if (!SITE.googleFormUrl) {
                  e.preventDefault();
                  setStatus("Google Form link has not been added yet.");
                }
              }}
            >
              Register using Google Forms <ArrowUpRight size={15} />
            </a>

            <small className="privacy">
              Your information will be used for symposium registration and
              event communication.
            </small>
          </form>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact-panel">
          <div>
            <span className="section-eyebrow">HAVE A QUESTION?</span>
            <h2>Let's connect.</h2>
            <p>
              Reach out to the Information Science and Engineering department.
            </p>
          </div>

          <div className="contact-links">
            <a href={`mailto:${SITE.email}`}>
              <Mail /> {SITE.email}
            </a>

            <a href={`tel:${SITE.phone}`}>
              <Phone /> {SITE.phone}
            </a>

            <span>
              <MapPin /> {SITE.college}, {SITE.venue}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <img src={SITE.logo} alt="Sri Sairam College logo" />

          <div>
            <b>
              TECHNO VISTA <em>2026</em>
            </b>
            <small>{SITE.department}</small>
          </div>
        </div>

        <p>Innovate. Create. Elevate.</p>
        <a href="#home">Back to top ↑</a>
      </div>

      <div className="wrap footer-bottom">
        <span>© 2026 Sri Sairam College of Engineering</span>
        <span>Department of Information Science and Engineering</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Events />
        <Schedule />
        <Register />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
