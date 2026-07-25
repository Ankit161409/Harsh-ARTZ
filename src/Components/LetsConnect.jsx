import React, { useEffect, useRef, useState } from "react";

const LetsConnect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const links = [
    { label: "GitHub", icon: "⌥", href: "#", delay: "0.6s" },
    { label: "LinkedIn", icon: "⬡", href: "#", delay: "0.75s" },
    { label: "Twitter", icon: "◈", href: "#", delay: "0.9s" },
    { label: "Email", icon: "◎", href: "#", delay: "1.05s" },
    { label: "Dribbble", icon: "⬟", href: "#", delay: "1.2s" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');

        :root {
          --ink: #0c0c0f;
          --paper: #f4f0e8;
          --accent: #c8401a;
          --muted: #8a8070;
          --line: rgba(12,12,15,0.12);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .lc-root {
          min-height: 100vh;
          background: var(--paper);
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: var(--ink);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          cursor: crosshair;
        }

        /* Grain overlay */
        .lc-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 100;
          opacity: 0.6;
        }

        /* Magnetic orb following cursor */
        .lc-orb {
          position: fixed;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,64,26,0.08) 0%, transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 0;
        }

        /* Top bar */
        .lc-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 3rem;
          border-bottom: 1px solid var(--line);
          animation: fadeDown 0.6s ease forwards;
          opacity: 0;
        }

        .lc-logo {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--muted);
          text-transform: uppercase;
        }

        .lc-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--muted);
          text-transform: uppercase;
        }

        .lc-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3dba6c;
          animation: pulse 2s ease infinite;
        }

        /* Main content */
        .lc-main {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          position: relative;
          z-index: 1;
        }

        /* Left panel */
        .lc-left {
          padding: 5rem 3rem 5rem 3rem;
          border-right: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .lc-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          color: var(--accent);
          text-transform: uppercase;
          animation: fadeUp 0.7s ease 0.2s forwards;
          opacity: 0;
          margin-bottom: 2rem;
        }

        .lc-headline {
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .lc-headline-line {
          display: block;
          font-size: clamp(4rem, 7vw, 7rem);
          font-weight: 300;
          line-height: 0.9;
          letter-spacing: -0.02em;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(110%);
        }
        .lc-headline-line:nth-child(1) { animation-delay: 0.3s; }
        .lc-headline-line:nth-child(2) { animation-delay: 0.45s; font-style: italic; color: var(--accent); }

        .lc-sub {
          font-size: 1.1rem;
          font-weight: 300;
          line-height: 1.7;
          color: var(--muted);
          max-width: 340px;
          animation: fadeUp 0.7s ease 0.7s forwards;
          opacity: 0;
          margin-top: 2.5rem;
        }

        .lc-bottom-left {
          animation: fadeUp 0.7s ease 1.4s forwards;
          opacity: 0;
        }

        .lc-scroll-hint {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: var(--muted);
          text-transform: uppercase;
        }

        .lc-scroll-line {
          width: 40px;
          height: 1px;
          background: var(--muted);
          animation: expandLine 1.5s ease 1.6s forwards;
          transform-origin: left;
          transform: scaleX(0);
        }

        /* Right panel */
        .lc-right {
          padding: 5rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }

        .lc-links-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          color: var(--muted);
          text-transform: uppercase;
          margin-bottom: 2.5rem;
          animation: fadeUp 0.6s ease 0.5s forwards;
          opacity: 0;
        }

        .lc-link-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--line);
          text-decoration: none;
          color: var(--ink);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: fadeUp 0.6s ease forwards;
          opacity: 0;
          transition: color 0.3s ease;
        }

        .lc-link-item::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background: var(--accent);
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .lc-link-item:hover::before { width: 100%; }
        .lc-link-item:hover { color: var(--accent); }

        .lc-link-item:hover .lc-link-icon {
          transform: rotate(180deg) scale(1.2);
          color: var(--accent);
        }

        .lc-link-item:hover .lc-link-arrow {
          transform: translate(4px, -4px);
          opacity: 1;
        }

        .lc-link-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .lc-link-icon {
          font-size: 1.2rem;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
          color: var(--muted);
          width: 24px;
          text-align: center;
        }

        .lc-link-name {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 300;
          letter-spacing: -0.01em;
        }

        .lc-link-arrow {
          font-size: 1rem;
          opacity: 0.3;
          transition: transform 0.3s ease, opacity 0.3s ease;
          font-family: 'DM Mono', monospace;
        }

        /* Footer */
        .lc-footer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--line);
          animation: fadeUp 0.6s ease 1.5s forwards;
          opacity: 0;
          position: relative;
          z-index: 1;
        }

        .lc-footer-cell {
          padding: 1.5rem 3rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: var(--muted);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .lc-footer-cell:first-child {
          border-right: 1px solid var(--line);
        }

        /* Floating index number */
        .lc-index {
          position: absolute;
          top: 5rem;
          right: 3rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: var(--muted);
          writing-mode: vertical-rl;
          animation: fadeUp 0.6s ease 1s forwards;
          opacity: 0;
        }

        /* Decorative large number */
        .lc-bg-number {
          position: absolute;
          bottom: 4rem;
          right: 3rem;
          font-size: 12rem;
          font-weight: 300;
          color: transparent;
          -webkit-text-stroke: 1px rgba(12,12,15,0.06);
          line-height: 1;
          pointer-events: none;
          font-style: italic;
          animation: fadeUp 1s ease 0.8s forwards;
          opacity: 0;
          user-select: none;
        }

        /* Keyframes */
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(110%); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.8); }
        }

        @keyframes expandLine {
          to { transform: scaleX(1); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .lc-main { grid-template-columns: 1fr; }
          .lc-left { border-right: none; border-bottom: 1px solid var(--line); padding: 3rem 1.5rem; }
          .lc-right { padding: 3rem 1.5rem; }
          .lc-topbar { padding: 1.5rem; }
          .lc-footer { grid-template-columns: 1fr; }
          .lc-footer-cell:first-child { border-right: none; border-bottom: 1px solid var(--line); }
          .lc-footer-cell { padding: 1rem 1.5rem; }
          .lc-bg-number { display: none; }
          .lc-index { display: none; }
        }
      `}</style>

      <div className="lc-root" ref={containerRef}>
        {/* Cursor orb */}
        <div
          className="lc-orb"
          style={{ left: `${mousePos.x}%`, top: `${mousePos.y}%` }}
        />

        {/* Top bar */}
        <header className="lc-topbar">
          <span className="lc-logo">Portfolio — 2025</span>
          <span className="lc-status">
            <span className="lc-dot" />
            Available for work
          </span>
        </header>

        {/* Main grid */}
        <main className="lc-main">
          {/* Left */}
          <div className="lc-left">
            <div>
              <p className="lc-eyebrow">Let's Connect</p>
              <div>
                <div className="lc-headline">
                  <span className="lc-headline-line">Say</span>
                </div>
                <div className="lc-headline">
                  <span className="lc-headline-line">Hello.</span>
                </div>
              </div>
              <p className="lc-sub">
                I'm always open to thoughtful conversations, new collaborations,
                and ideas worth building together.
              </p>
            </div>

            <div className="lc-bottom-left">
              <div className="lc-scroll-hint">
                <span className="lc-scroll-line" />
                Scroll to explore
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lc-right">
            <p className="lc-links-label">Find me on</p>

            {links.map((link) => (
              <a
                key={link.label}
                className="lc-link-item"
                href={link.href}
                style={{ animationDelay: link.delay }}
              >
                <span className="lc-link-left">
                  <span className="lc-link-icon">{link.icon}</span>
                  <span className="lc-link-name">{link.label}</span>
                </span>
                <span className="lc-link-arrow">↗</span>
              </a>
            ))}

            {/* Decorative number */}
            <div className="lc-bg-number">05</div>
          </div>

          {/* Vertical index */}
          <div className="lc-index">Connect — 01 / 01</div>
        </main>

        {/* Footer */}
        <footer className="lc-footer">
          <div className="lc-footer-cell">
            <span>Based in New Delhi, India</span>
            <span>IST +05:30</span>
          </div>
          <div className="lc-footer-cell">
            <span>hello@youremail.com</span>
            <span>© 2025</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LetsConnect;
