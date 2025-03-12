import { Braces, TextCursorInput, SwatchBook, Rss } from "lucide-react";

const teamMembers = [
  {
    icon: <TextCursorInput className="w-8 h-8" />,
    title: "Théophile Berteloot",
    description: "", // Add description
  },
  {
    icon: <SwatchBook className="w-8 h-8" />,
    title: "Loïc Baret",
    description: "", // Add description
  },
  {
    icon: <Rss className="w-8 h-8" />,
    title: "Xavier Legault",
    description: "", // Add description
  },
  {
    icon: <Braces className="w-8 h-8" />,
    title: "Louis-Jacob Lebel",
    description: "",
  },
  {
    icon: <Braces className="w-8 h-8" />,
    title: "John-William Lebel",
    description: "",
  },
];

const ImageWithGlow = ({ src, alt }: { src: string; alt: string }) => (
  <div className="text-center mb-2 grid place-items-center">
    <img src={src} alt={alt} className="w-3/4 rounded-xl glow-red" />
  </div>
);

const TeamSection = () => (
  <section className="mb-20">
    <h2 className="text-3xl font-bold gradient-text text-center mb-12">
      The Team
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-6">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="p-6 rounded-xl bg-red-800/10 border custom-border-red custom-hover-border-red transition-colors text-center"
        >
          <div className="text-red-400 mb-4 flex justify-center">
            {member.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{member.title}</h3>
          <p className="text-gray-400">{member.description}</p>
        </div>
      ))}
    </div>
  </section>
);

function MangaAI() {
  return (
    <section className="mb-20">
      <div className="text-center max-w-4xl mx-auto">
        <h2 id="test" className="text-5xl font-bold gradient-text mb-6">
          Automatic Manga Translator
        </h2>
        <p className="text-xl text-gray-400 mb-16 text-justify mx-6">
          If you are a manga enthusiast, you've probably been in a situation
          where you wanted to read a manga that wasn't translated yet. This is
          where our project comes in! We have developed an automatic manga
          translator that uses AI to translate the text in real time. This way,
          you can read your favorite manga without having to wait for the
          translation. The AI model we have developed is able to recognize the
          text in the manga panels and translate it into the language of your
          choice.
        </p>
        <section
          id="middle"
          className="mb-20 text-gray-400 text-justify text-xl"
        >
          <p className="mb-8 mx-10">
            We have used Manga109, a well-known dataset in the field, often used
            for speech bubble detection, optical character recognition (OCR),
            and emotion recognition in illustrations.
          </p>
          <ImageWithGlow src="/manga109.png" alt="Manga 109" />
          <h5 className="text-xs text-center mb-10 mt-2">
            http://www.manga109.org/ja/index.html
          </h5>
          <p className="mb-10 mx-10">
            The initial goal was to develop a functional prototype by leveraging
            existing tools to quickly obtain a working solution. This first
            version included the following components:
            <ul className="list-disc">
              <li className="mt-2 mb-3">
                Bubble detection: Segmentation using a U-Net model, trained as
                part of an academic deep learning project.
              </li>
              <li className="mb-3">
                Text extraction: OCR-based text recognition from the detected
                speech bubbles.
              </li>
              <li className="mb-3">
                Automatic translation: Integration of Google Translate for text
                translation.
              </li>
              <li className="mb-3">
                Text reinsertion: Image processing using OpenCV to place the
                translated text back into the speech bubbles. This approach
                resulted in a functional system, though some limitations
                remained. For instance, translated French text often exceeded
                the boundaries of speech bubbles due to differences in text
                length, as the font size was not automatically adjusted.
              </li>
            </ul>
          </p>
          <ImageWithGlow src="/mangaai.png" alt="Manga AI" />
          <p className="mb-8 mx-10 mt-10">
            The next phase of the project focuses on replacing existing tools
            with custom models and improving translation quality by leveraging
            additional visual information. We will work on Dynamic text resizing
            to ensure proper text fitting within speech bubbles, character
            gender detection to refine translations, (particularly due to the
            absence of grammatical gender in Japanese) and character
            identification to maintain dialogue consistency and adapt
            translations based on narrative context. <br></br>
            This project provides an opportunity to explore challenges in
            computer vision, natural language processing, and deep learning
            while applying these techniques to a concrete and innovative domain.
          </p>
        </section>
        <TeamSection />
      </div>
    </section>
  );
}

export default MangaAI;
