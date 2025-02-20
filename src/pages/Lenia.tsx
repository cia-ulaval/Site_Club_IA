import React from "react";
import { Apple, Baby, Asterisk, Bean } from "lucide-react";

const teamMembers = [
  {
    icon: <Apple className="w-8 h-8" />,
    title: "Théophile Berteloot",
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Jordan Mathieu",
  },
  {
    icon: <Bean className="w-8 h-8" />,
    title: "Louis-Étienne Messier",
  },
  {
    icon: <Asterisk className="w-8 h-8" />,
    title: "And others",
  },
];

const TeamSection = () => (
  <section className="mb-20 mt-20">
    <h2 className="text-3xl font-bold gradient-text text-center mb-12">
      The Team
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="p-6 rounded-xl bg-red-800/10 border custom-border-red custom-hover-border-red transition-colors text-center"
        >
          <div className="text-red-400 mb-4 flex justify-center">
            {member.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{member.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

const ImageWithGlow = ({ src, alt }: { src: string; alt: string }) => (
  <div className="text-center mb-8 grid place-items-center">
    <img src={src} alt={alt} className="w-3/4 md:w-2/3 rounded-xl glow-red" />
  </div>
);

function Lenia() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-5xl font-bold gradient-text mb-6">Lenia</h1>
      <h2 className="text-4xl mb-6">What is Lenia?</h2>
      <p className="w-full md:w-3/4 mx-auto text-lg mt-4 text-gray-400 text-justify mb-10">
        Artificial intelligence isn't just about neural networks or traditional
        algorithms. Some systems, based on simple rules, can generate
        astonishingly complex behaviors. This is the case with Lenia, an
        advanced cellular automaton inspired by the famous Game of Life by John
        Conway. <br></br>
        <br></br>Unlike the Game of Life, where cells are either alive or dead
        and evolve in discrete steps, Lenia operates with continuous values and
        fluid time. This allows for the emergence of dynamic, self-organizing
        structures that behave in ways reminiscent of living organisms. Each
        pixel (or "cell") in Lenia has a numerical value, which can be thought
        of as the concentration of a chemical species. These cells interact with
        their surroundings using convolution filters, which determine how a cell
        "perceives" its neighbors. A convolution filter is essentially a
        weighted sum of nearby cell values, meaning that instead of just
        checking immediate neighbors, Lenia applies a structured pattern—often
        in the shape of a ring—to determine how different distances contribute
        to a cell’s evolution. The result is then passed through a growth
        function, which decides whether a cell's value increases or decreases
        based on the surrounding environment. When applied across the entire
        grid, this process generates complex, lifelike behaviors from simple
        mathematical rules.
      </p>
      <ImageWithGlow src="/media/lenia.png" alt="lenia" />
      <p className="w-full md:w-3/4 mx-auto text-lg mt-4 text-gray-400 text-justify">
        Our team successfully implemented a single-channel version of Lenia,
        where only one "chemical species" exists. However, we faced challenges
        in extending it to three channels, where multiple interacting species
        (represented as RGB values in visualization) would dramatically expand
        the possibilities for emergent behaviors. Unlike the Game of Life, which
        has a well-documented "bestiary" of interesting starting configurations,
        Lenia lacks a standardized library of known patterns, making it harder
        to find stable and fascinating structures.
      </p>
      <img
        className="w-3/4 md:w-2/3 rounded-xl glow-red mx-auto mt-10"
        src="/media/leniaexample.gif"
        alt="lenia gif"
      ></img>
      <h5 className="text-xs mb-16 mt-2 text-gray-400">
        https://levelup.gitconnected.com/playing-with-lenia-a-continuous-version-of-conways-game-of-life-a26a5a7f1680
      </h5>

      <p className="w-full md:w-3/4 mx-auto text-lg mt-4 text-gray-400 text-justify">
        This project offers an exciting opportunity to explore emergence in
        artificial intelligence, where complex behaviors arise from simple
        interactions. We invite students, researchers, and AI enthusiasts to
        join us in pushing the boundaries of self-organizing systems and
        discovering the hidden potential of Lenia.
      </p>
      <TeamSection />
    </div>
  );
}

export default Lenia;
