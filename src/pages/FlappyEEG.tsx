import {
  Users,
  Lightbulb,
  Target,
  Rocket,
  Braces,
  Rotate3d,
  UserRoundCog,
  Radical,
} from "lucide-react";

import { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="/media/test.jpg"
              alt="test image (temporary)"
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-bold gradient-text mb-6">FlappyEEG</h2>
            <p className="text-gray-400 mb-6">
              FlappyEEG is a video game that is controlled by thought. We have
              trained an AI model to interpret brain signals and translate them
              into actions in the game. For this to work, we equipped ourselves
              with the latest EEG (electroencephalogram) technology and and a
              lot of patience. It was hard at first, we needed to test with
              simple algorithms, but once we got the hang of it, we introduced
              our AI model and with trial and error, got it to understand the
              brain signals. The game is now fully functional and every thought
              you have counts: that's how you control your caracter!
            </p>
            <p className="text-gray-400">
              The format of the game is simple; ever heard of flappy bird? Well,
              it's the same simple yet fun concept. The only difference is that
              you control the bird with your thoughts. The simple will to make
              the little caracter avoid obstacles is enough to make it move. We
              are very proud of the work we have accomplished; it may only be
              the beginning of a video game revolution! Think about it, what if
              we combined this mechanic to a VR headset? 100% immersion, 100%
              fun! Or, what if this is the skipping stone to helping people with
              disabilities by giving them power from their own thoughts? The
              possibilities are endless.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20 mt-20">
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">
          The Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Louis-Étienne Messier",
              description:
                "Team Lead and project manager. He is the one who makes sure everything goes smoothly.",
            },
            {
              icon: <Lightbulb className="w-8 h-8" />,
              title: "Jordan Mathieu",
              description:
                "VP and partnership manager. He is the one who finds the best partners for our projects.",
            },
            {
              icon: <UserRoundCog className="w-8 h-8" />,
              title: "Nathaniel D'Amours",
              description:
                "President of the CIA. He is the one who makes sure the team is always coordinated.",
            },
            {
              icon: <Rotate3d className="w-8 h-8" />,
              title: "Dereck Bélanger",
              description:
                "The author of this website and contributor to FlappyEEG's early beginnings.",
            },
            {
              icon: <Braces className="w-8 h-8" />,
              title: "Amen Ouannes",
              description: "Responsible of the AI model.",
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "Estelle Tournassat",
              description:
                "Responsible for the AI model's training and testing.",
            },
            {
              icon: <Radical className="w-8 h-8" />,
              title: "Hedi Braham",
              description: "Dealt with the data and it's collection.",
            },
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "William Blanchet Lafrenière",
              description: "Helped with the game's development.",
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

      <section className="mb-20">
        <h2 className="text-3xl font-bold gradient-text mb-6">
          Our begginings (Week 1)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hero-card">
            <div className="video-container relative">
              <video
                className="w-full h-full object-cover rounded-xl"
                src="/media/flappyproto.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                poster="/media/test.jpg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-rose-500/70 hover:bg-rose-500/60 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-rose-500/70 hover:bg-rose-500/60 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-400">
              Just like any other project, FlappyEEG had a beginning. It all
              started during the the spring semester of 2024. It was a rough
              start: we had many participants and loads of ideas, but the
              organisation was very hard to manage. Members came and went, and
              people of course had exmans and other things to attend which left
              us with a very different load of work to do. All that to say, that
              semester, we didn't get as much as we would've liked done, but in
              winter of 2025, we leanrt from our experience and came back
              strong! We approached the project with a new concept: instead of
              open to everyone, we would screen the participants and make a
              choice based on their skills, their availability but most
              importantly, their interest in the project. This way, we were able
              to work much more efficiently and adress any issues immediately.
              It was indeed a great success! We were able to finish the first
              step of FlappyEEG before our deadline: Make it work with a simple
              algorithm that would detect blinks. Our member Dereck worked on
              this and Louis-Étienne helped him fix the bugs. You can see on
              this preview the first prototype. In the meantime, our other
              members were working on finishing the game, researching and
              collecting data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
