import { Braces, TextCursorInput, SwatchBook, Rss } from "lucide-react";

function MangaAI() {
  return (
    <section className="mb-20 ">
      <div className="text-center max-w-3xl mx-auto">
        <h2 id="test" className="text-5xl font-bold gradient-text mb-6">
          Automatic Manga Translator
        </h2>
        <p className="text-xl text-gray-400 mb-16">
          If you are a manga enthusiast, you've probably been in a situation
          where you wanted to read a manga that wasn't translated yet. This is
          where our project comes in! We have developed an automatic manga
          translator that uses AI to translate the text in real time. This way,
          you can read your favorite manga without having to wait for the
          translation. The AI model we have developed is able to recognize the
          text in the manga panels and translate it into the language of your
          choice.
        </p>
        <section className="mb-20">
          <h2 className="text-3xl font-bold gradient-text text-center mb-12">
            The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <TextCursorInput className="w-8 h-8" />,
                title: "Théophile Berteloot",
                description: "", // Add the description
              },
              {
                icon: <SwatchBook className="w-8 h-8" />,
                title: "Loïc Baret",
                description: "", // Add the description
              },
              {
                icon: <Rss className="w-8 h-8" />,
                title: "Xavier Legault",
                description: "", // Add the description
              },
              {
                icon: <Braces className="w-8 h-8" />,
                title: "And others",
                description: "",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-red-800/10 border border-red-950/90 hover:border-red-900/70 transition-colors text-center"
              >
                <div className="text-red-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
        <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-colors">
          Wanna try it out?
        </button>
      </div>
    </section>
  );
}

export default MangaAI;
