import React, { useEffect, useRef, useState } from "react";
import "./LetsConnect.css";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const LetsConnect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
 let date = new Date();
  let year = date.getFullYear();
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

  // Store the **component itself** in icon
  const links = [
    { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/harsh_artz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", delay: "0.6s" },
    { label: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/@harshartz56?app=desktop", delay: "0.75s" },
    { label: "Email", icon: FaEnvelope, href:"https://mail.google.com/mail/?view=cm&fs=1&to=harshartz56@gmail.com", delay: "1.05s" },
  ];

  return (
    <div className="lc-root top" ref={containerRef}>
      {/* Cursor orb */}
      <div
        className="lc-orb"
        style={{ left: `${mousePos.x}%`, top: `${mousePos.y}%` }}
      />

      {/* Top bar */}
      <header className="lc-topbar">
        <span className="lc-logo">Portfolio — 2026</span>
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
                <span className="lc-headline-line">Harsh</span>
              </div>
              <div className="lc-headline">
                <span className="lc-headline-line">Gautam.</span>
              </div>
            </div>
            <p className="lc-sub">
              I'm always open to thoughtful conversations, new collaborations,
              and ideas worth building together.
            </p>
            <p className="lc-sub">
              I create expressive artworks across charcoal & graphite, digital art,
              watercolor, acrylics, and mixed media. I also take commissions for
              customized portraits, apparel painting, and shoe customization.
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

          {links.map((link) => {
            const Icon = link.icon; // assign the component
            return (
              <a
                key={link.label}
                className="lc-link-item"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: link.delay }}
              >
                <span className="lc-link-left">
                  <span className="lc-link-icon"><Icon /></span>
                  <span className="lc-link-name">{link.label}</span>
                </span>
                <span className="lc-link-arrow">↗</span>
              </a>
            );
          })}

          {/* Decorative number */}
          <div className="lc-bg-number">{year}</div>
        </div>

        {/* Vertical index */}
        <div className="lc-index">Connect — 24 / 7</div>
      </main>

      {/* Footer */}
      <footer className="lc-footer">
        <div className="lc-footer-cell">
          <span>ballabgarh, faridabad-Haryana, India</span>
          <span>IST +05:30</span>
        </div>
        <div className="lc-footer-cell">
          <span> </span>
          <span>© {year}</span>
        </div>
      </footer>
    </div>
  );
};

export default LetsConnect;