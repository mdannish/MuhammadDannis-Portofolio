"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lanyard from "../components/Lanyard";
import CurvedLoop from "../components/CurvedLoop";

const tools = [
  { name: "After Effects", icon: "/logos/AfterEffects.svg" },
  { name: "Photoshop", icon: "/logos/photoshop.svg" },
  { name: "Premiere", icon: "/logos/premiere.svg" },
  { name: "Unity", icon: "/logos/unity.svg" },
  { name: "HTML", icon: "/logos/html.svg" },
  { name: "CSS", icon: "/logos/css.svg" },
  { name: "React", icon: "/logos/reactjs.svg" },
  { name: "JavaScript", icon: "/logos/javascript.svg" },
];

const works = [
  {
    title: "Motion Graphic / VFX",
    slug: "motion",
    image: "/works/motion.jpg",
  },
  {
    title: "AR Experience",
    slug: "ar",
    image: "/works/ar.jpg",
  },
  {
    title: "Band / Music",
    slug: "music",
    image: "/works/music.jpg",
  },
];


export default function Home() {
  const headerRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const lastScroll = useRef(0);
  const [activeWork, setActiveWork] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      // Navbar hide / show
      if (headerRef.current) {
        if (currentScroll > lastScroll.current && currentScroll > 100) {
          headerRef.current.style.transform = "translateY(-120px)";
        } else {
          headerRef.current.style.transform = "translateY(0)";
        }
      }

      lastScroll.current = currentScroll;

      // Contact reveal
      if (contactRef.current) {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 50
        ) {
          contactRef.current.classList.add("active");
        } else {
          contactRef.current.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header ref={headerRef}>
        <div className="container">
          <nav>
            <Link href="#about">About</Link>
            <Link href="#work">Work</Link>
            <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  contactRef.current?.classList.add("active");
                }}
              >
                Contact
              </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="hero hero-wrapper">
        <div className="hero-lanyard">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>

        <h1>
          PORT<span style={{ color: "#1447e6" }}>O</span>FOLIO
        </h1>
      </div>

      {/* Curved Loop */}
      <section className="curved-loop-section">
        <CurvedLoop
          marqueeText="Muhammad Dannis ✦ Muhammad Dannis ✦ Muhammad Dannis ✦ "
          speed={2}
          curveAmount={0}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </section>

      <div className="container">
        {/* About */}
        <section id="about">
          <motion.div
            className="about-grid"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
          >
            {/* LEFT */}
            <div>
              <h2>About Me</h2>
              <p>
                I work between logic and visuals, blending IT, motion graphics, VFX,
                and AR as a space for exploration. To me, technology is not just a system,
                but a canvas to shape experiences, emotions, and stories through digital work.
              </p>

              <br />

              <div className="education">
                <h2>Education</h2>
                <p>
                  Universitas Mercubuana{" "}
                  <i>(Information Technology)</i> — 2021 - 2025
                </p>
              </div>
            </div>

            {/* RIGHT - TOOLS */}
            <motion.div
              className="tools"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  className="tool-mask"
                  style={{ maskImage: `url(${tool.icon})` }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    show: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Work */}
        <section id="work">
          <h2>Work</h2>

          <motion.div
            className="work-grid spotlight"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {works.map((work, index) => (
                <Link
                  key={work.title}
                  href={`/work/${work.slug}`}
                  className={`work-card ${
                    activeWork === null
                      ? ""
                      : activeWork === index
                      ? "active"
                      : "inactive"
                  }`}
                  onMouseEnter={() => setActiveWork(index)}
                  onMouseLeave={() => setActiveWork(null)}
                >
                  <div
                    className="work-image"
                    style={{ backgroundImage: `url(${work.image})` }}
                  />

                  <div className="work-footer">
                    <span className="work-title">{work.title}</span>
                  </div>
              </Link>
              ))}
          </motion.div>
        </section>

        <br /><br /><br /><br /><br /><br />
      </div>

      {/* Contact */}
      <section id="contact" ref={contactRef} className="contact">
        <div className="contact-inner">
          <h2>GET IN TOUCH</h2>
          <Link href="mailto:dannismuhammad33@email.com" className="email">
            dannismuhammad33@email.com
          </Link>

          <div className="social">
            <Link
                href="https://instagram.com/mdannish_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>

              <Link
                href="https://tiktok.com/@regaliaa_"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
