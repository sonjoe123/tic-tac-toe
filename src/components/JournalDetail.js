import React from "react";
import { useParams } from "react-router-dom";
import j1 from "../img/j1.jpg";
import j2 from "../img/j2.jpg";
import j3 from "../img/j3.jpg";
import j4 from "../img/j4.jpeg";
import j5 from "../img/j5.png";
import j6 from "../img/j6.webp";

const journalEntries = [
  {
    image: j1,
    name: "j1",
    heading:
      "The Ballad of Linh: A Tale of Questionable Decisions and Accidental Awesomeness",
    description: `Greetings, esteemed internet denizens! I, Linh, stand before you (well, technically, through the power of text on a screen) to unveil the epic saga of... well, me. Now, this might not be a story filled with world-saving heroes or mythical beasts (although, let's be honest, some of the code I've written feels like battling mythical beasts), but it's a tale of questionable decisions, unexpected turns, and a surprising amount of [your technical/creative skill] sprinkled in for good measure.

My journey began, as most journeys do, in the innocent years of childhood. Back then, my greatest challenges involved navigating the treacherous terrain of the playground (avoiding dodgeball bullies was an art form) and mastering the delicate art of constructing the most magnificent Lego castle ever seen (a feat that still eludes me to this day, much to the disappointment of my inner child). Little did I know, these early battles for playground dominance and plastic brick supremacy would foreshadow my future battles with code, pixels, and the ever-elusive perfect design.

Fast forward through the awkward teenage years (we'll spare you the details, trust me) and into the land of higher education.

 College, ah, college. A time of self-discovery, late-night ramen consumption, and, in my case, a complete and utter confusion about what I actually wanted to do with my life. Did I dream of becoming a [dream career you never pursued]? Absolutely. Did I possess the necessary skills and unwavering dedication for such a path? Let's just say my procrastination skills were more finely honed than anything else.

But then, amidst the existential dread and late-night pizza deliveries, a spark ignited within me. Maybe it was a particularly frustrating encounter with a piece of software that seemed determined to defy all logic. Maybe it was the mesmerizing beauty of a well-designed website. Whatever the catalyst, the world of [your technical/creative skill] beckoned, and I, ever the curious (and slightly impulsive) soul, decided to answer the call.

Thus began my descent (or maybe ascent, depending on how you look at it) into the wonderful world of [your technical/creative skill]. The learning curve was steeper than a ski slope on Mount Everest, and the technical jargon thrown around made even the most seasoned philosophers scratch their heads. But hey, there's something strangely satisfying about finally figuring out why that line of code is throwing a tantrum, or witnessing the pixel-perfect alignment of a design element after hours of tinkering.

The journey, of course, is far from over. There are still more lines of code to conquer, more pixels to manipulate, and more [your technical/creative skill] challenges to overcome. But through the frustration, the occasional meltdown (we've all been there), and the inevitable "why did I even think I could do this?" moments, a sense of accomplishment emerges. It's the satisfaction of creating something new, of learning something new, and of realizing that maybe, just maybe, this whole [your technical/creative skill] thing isn't so bad after all.

So, there you have it, folks. The (slightly exaggerated) saga of Linh, the accidental [your technical/creative skill] enthusiast. While my path to this point may have been paved with questionable decisions and a healthy dose of procrastination, the journey itself has been surprisingly fun (and occasionally frustrating, but hey, no pain, no gain, right?). And who knows, maybe someday I'll even manage to build that epic Lego castle of my dreams. Until then, I'll be here, wrangling code, pixels, and the occasional existential crisis, one [your technical/creative skill] challenge at a time.`,
  },
  {
    image: j2,
    name: "j2",
    heading: "Journal 2",
    description: `This is a detailed description for Journal 2.
    Another line of text here.`,
  },
  {
    image: j3,
    name: "j3",
    heading: "Journal 3",
    description: `This is a detailed description for Journal 3.
    Further information can be added here.`,
  },
  {
    image: j4,
    name: "j4",
    heading: "Journal 4",
    description: `This is a detailed description for Journal 4.
    More details and specifics can be included.`,
  },
  {
    image: j5,
    name: "j5",
    heading: "Journal 5",
    description: `This is a detailed description for Journal 5.
    Add any relevant information as needed.`,
  },
  {
    image: j6,
    name: "j6",
    heading: "Journal 6",
    description: `This is a detailed description for Journal 6.
    More content can be described here.`,
  },
];

export const JournalDetail = () => {
  const { imageName } = useParams();
  const journalEntry = journalEntries.find((entry) => entry.name === imageName);

  if (!journalEntry) {
    return <div>Journal entry not found</div>;
  }

  return (
    <div className="journal-detail-container">
      <img
        src={journalEntry.image}
        alt={journalEntry.name}
        className="journal-detail-image"
      />
      <h1 className="journal-detail-heading">{journalEntry.heading}</h1>
      <div className="description-container">
        <p className="journal-detail-description">{journalEntry.description}</p>
      </div>
    </div>
  );
};
