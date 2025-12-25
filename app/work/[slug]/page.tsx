"use client";

import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =====================
   DATA PER SLUG
===================== */
const mediaBySlug: Record<
  string,
  {
    id: number;
    type: "image" | "video";
    src: string;
    span: number;
    title: string;
    desc: string;
  }[]
> = {
  motion: [
    {
      id: 1,
      type: "video",
      src: "/gallery/motion/1.mp4",
      span: 32,
      title: "Ripple Vibration",
      desc: "Vibration transition effect made for capcut vfx  .",
    },
    {
      id: 2,
      type: "video",
      src: "/gallery/motion/2.mp4",
      span: 24,
      title: "Ryo Yamada",
      desc: "Ryo Yamada Artwork Animation for steam profile artwork.",
    },
    {
      id: 3,
      type: "video",
      src: "/gallery/motion/3.mp4",
      span: 40,
      title: "Shockwave",
      desc: "Shockwave vfx for overlay editing.",
    },
    {
      id: 4,
      type: "video",
      src: "/gallery/motion/4.mp4",
      span: 40,
      title: "Light Trails",
      desc: "Trails vfx made for capcut.",
    },
    {
      id: 5,
      type: "video",
      src: "/gallery/motion/5.mp4",
      span: 40,
      title: "Hand Click",
      desc: "Hand Click effects made for capcut vfx.",
    },
    {
      id: 6,
      type: "video",
      src: "/gallery/motion/6.mp4",
      span: 40,
      title: "Experimental Fire Particle",
      desc: "Testing particle on character made for steam artwork.",
    },
    {
      id: 7,
      type: "video",
      src: "/gallery/motion/7.mp4",
      span: 40,
      title: "Anthemache Logo VJ",
      desc: "Band Logo 3D Animation for Visual Jockey.",
    },
    {
      id: 8,
      type: "video",
      src: "/gallery/motion/8.mp4",
      span: 40,
      title: "VHS Effects",
      desc: "VHS Effects overlay made for capcut vfx.",
    },
    {
      id: 9,
      type: "video",
      src: "/gallery/motion/9.mp4",
      span: 40,
      title: "Light Leaks",
      desc: "Light Leaks overlay made for capcut vfx.",
    },
    {
      id: 10,
      type: "video",
      src: "/gallery/motion/10.mp4",
      span: 40,
      title: "Retro TV Glitch VFX",
      desc: "Retro TV Glitch effects made for capcut vfx.",
    },
  ],

  ar: [
    {
      id: 1,
      type: "video",
      src: "/gallery/ar/1.mp4",
      span: 36,
      title: "Bocil vs Ustad",
      desc: "Tiktok AR Filter Game made for ramadhan tiktok events.",
    },
    {
      id: 2,
      type: "video",
      src: "/gallery/ar/2.mp4",
      span: 24,
      title: "Asta The Devil",
      desc: "Instagram AR Target Tracker Filter made for clothing brand named @faith.industries.",
    },
    {
      id: 3,
      type: "video",
      src: "/gallery/ar/3.mp4",
      span: 40,
      title: "Virus Run",
      desc: "Instagram AR Game Filter made for instagram event.",
    },
    {
      id: 4,
      type: "video",
      src: "/gallery/ar/4.mp4",
      span: 40,
      title: "Makan Nyambel",
      desc: "A Collaboration creating Instagram AR target tracker Filter with Food Vlogger @mgdalenaf.",
    },
    {
      id: 5,
      type: "image",
      src: "/gallery/ar/5.jpg",
      span: 40,
      title: "Metavolution Pitch",
      desc: "Had the opportunity to showcase AR works that have been made for several brands at the Meta Office.",
    },
    {
      id: 6,
      type: "image",
      src: "/gallery/ar/6.jpg",
      span: 40,
      title: "Bootcamp Metavolution",
      desc: "Participating in Metavolution Bootcamp, there I gained a lot of knowledge about AR and even UI/UX, because the people there had very diverse backgrounds. There I was asked to create 5 AR effects for Instagram.",
    },
    {
      id: 7,
      type: "video",
      src: "/gallery/ar/7.mp4",
      span: 40,
      title: "Ayam Nyebrang",
      desc: "Tiktok AR Game Filter made for tiktok event Mentor and Mentees.",
    },
    {
      id: 8,
      type: "video",
      src: "/gallery/ar/8.mp4",
      span: 40,
      title: "Blink Race",
      desc: "Tiktok AR Game Filter made for tiktok event Blink for play!.",
    },
    {
      id: 9,
      type: "video",
      src: "/gallery/ar/9.mp4",
      span: 40,
      title: "Guardian of the Galaxy RNG",
      desc: "Tiktok AR Game Filter made for tiktok event Mentor and Mentees.",
    },
    {
      id: 10,
      type: "image",
      src: "/gallery/ar/10.jpg",
      span: 40,
      title: "AR Creator Community Gathering",
      desc: "Participating in the AR Creator Community Gathering, where there was Cassie Q. As AR Product Specialist Meta. I learned many things there. Includes showcase for Meta Quest Pro.",
    },
  ],

  music: [
    {
      id: 1,
      type: "image",
      src: "/gallery/music/1.jpg",
      span: 28,
      title: "Japanmusicology",
      desc: "Become an additional player and committee in event called Japanmusicology at Rossi Music Fatmawati.",
    },
    {
      id: 2,
      type: "image",
      src: "/gallery/music/2.jpg",
      span: 24,
      title: "Saturday District",
      desc: "My band Anthemache had opportunity to play in event called Saturday District at Bloc Bar.",
    },
    {
      id: 3,
      type: "image",
      src: "/gallery/music/3.jpg",
      span: 40,
      title: "Beyond de Tour",
      desc: "My band Anthemache had opportunity to join tour at Jabodetabek.",
    },
    {
      id: 4,
      type: "image",
      src: "/gallery/music/4.jpg",
      span: 40,
      title: "Recluse Showcase by Heathersfall",
      desc: "My band Anthemache had opportunity to play in Showcase Event at Vam Social Space, South Jakarta.",
    },
    {
      id: 5,
      type: "image",
      src: "/gallery/music/5.jpg",
      span: 40,
      title: "Panik Night Road to INA",
      desc: "Had the opportunity to groove in Showcase Event at Bali Terrace, Cikarang with RE;Lize.",
    },
    {
      id: 6,
      type: "image",
      src: "/gallery/music/6.jpg",
      span: 40,
      title: "Otaku Story",
      desc: "Had the opportunity to groove in Event called Otaku Story at Revo Mall, Bekasi with RE;Lize.",
    },
    {
      id: 7,
      type: "image",
      src: "/gallery/music/7.jpg",
      span: 40,
      title: "Karawitan",
      desc: "Played Traditional Betawi Music Gambang Kromong at SMKn 51 Jakarta with guest star Anwar Sanjaya",
    },
    {
      id: 8,
      type: "image",
      src: "/gallery/music/8.jpg",
      span: 40,
      title: "Jakarta Memotret",
      desc: "Accompany Temon the comedian in Jakarta Memotret at Tebet Eco Park.",
    },
    {
      id: 9,
      type: "video",
      src: "/gallery/music/9.mp4",
      span: 40,
      title: "Don't let it go",
      desc: "Anthemache's first single released on digital platform music like spotify, etc.",
    },
    {
      id: 10,
      type: "image",
      src: "/gallery/music/10.jpg",
      span: 40,
      title: "Set to Off",
      desc: "Anthemache's second single released on digital platform music like spotify, etc.",
    },
    {
      id: 11,
      type: "video",
      src: "/gallery/music/11.mp4",
      span: 40,
      title: "React Freely Rock & Metal Night eps. 2",
      desc: "Had the opportunity to become additional player with BR in event called React Freely.",
    },
  ],
};

const titleBySlug: Record<string, string> = {
  motion: "Motion Graphic Works",
  ar: "Augmented Reality Experience",
  music: "Audio / Music / Gigs",
};


export default function WorkGallery({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const items = mediaBySlug[slug] || [];
  const [active, setActive] = useState<typeof items[0] | null>(null);

  return (
    <>
      {/* HEADER */}
      <header className="work-header">
        <a href="/" className="work-header-title">
          MUHAMMAD DANNIS
        </a>
      </header>

      {/* TITLE */}
      <section className="work-title work-title-center">
        <h1>{titleBySlug[slug] ?? slug.toUpperCase()}</h1>
      </section>

      {/* GALLERY */}
      <section className="work-gallery">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="work-card"
            style={{ ["--row" as any]: item.span }}
            layoutId={`card-${slug}-${item.id}`}
            onClick={() => setActive(item)}
            whileHover={{ scale: 0.98 }}
          >
            {item.type === "image" ? (
              <motion.img
                src={item.src}
                alt={item.title}
                layoutId={`media-${slug}-${item.id}`}
              />
            ) : (
              <motion.video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                layoutId={`media-${slug}-${item.id}`}
              />
            )}
          </motion.div>
        ))}
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className="overlay"
              onClick={() => setActive(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="modal-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
              className="modal"
              layoutId={`card-${slug}-${active.id}`}
            >
              {active.type === "image" ? (
                <motion.img
                  src={active.src}
                  layoutId={`media-${slug}-${active.id}`}
                />
              ) : (
                <motion.video
                  src={active.src}
                  autoPlay
                  muted
                  loop
                  controls
                  layoutId={`media-${slug}-${active.id}`}
                />
              )}

              <div className="modal-content">
                <h2>{active.title}</h2>
                <p>{active.desc}</p>
              </div>
            </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
