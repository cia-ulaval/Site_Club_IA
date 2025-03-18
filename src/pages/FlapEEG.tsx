import { useState, useRef, useEffect } from "react";
import {
  Users,
  Lightbulb,
  Target,
  Rocket,
  Braces,
  Rotate3d,
  Radical,
  Play,
  Pause,
} from "lucide-react";
import { motion } from "framer-motion";

function FlapEEG() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      setIsPlaying(!videoRef.current.paused);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const teamMembers = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Louis-Étienne Messier",
      description:
        "Main contributor to the project. Set up the server, custom interface and helped with coding",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Jordan Mathieu",
      description: "Handled data collection, annotation and cleaning",
    },
    {
      icon: <Rotate3d className="w-8 h-8" />,
      title: "Dereck Bélanger",
      description:
        "Author of this website, coded the baseline treshold and feature extraction algorithms",
    },
    {
      icon: <Braces className="w-8 h-8" />,
      title: "Amen Ouannes",
      description:
        "Trained the AI model and helped the team understand the challenges",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Estelle Tournassat",
      description: "Trained the AI model and ",
    },
    {
      icon: <Radical className="w-8 h-8" />,
      title: "Hedi Braham",
      description: "Dealt with the data collection and protocols",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "William Blanchet Lafrenière",
      description: "Main contributor to the game development.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="container w-3/4 mx-auto px-6 py-12 rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          {/* Hero Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/implication/flappyeegmain.jpeg"
                  alt="3 managers of the club, one with the EEG headset, smiling during a meeting"
                  className="rounded-xl shadow-2xl mt-8"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-6xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                    FlapEEG
                  </span>
                </h1>
                <p className="text-gray-400 mb-6 text-justify">
                  FlapEEG is a video game that is controlled by thought. We have
                  trained an AI model to interpret brain signals and translate
                  them into actions in the game. For this to work, we equipped
                  ourselves with the latest EEG (electroencephalogram)
                  technology and a lot of patience. It was hard at first, we
                  needed to test with simple algorithms, but once we got the
                  hang of it, we introduced our AI model and with trial and
                  error, got it to understand the brain signals. The game is now
                  fully functional and every thought you have counts: that's how
                  you control your character!
                </p>
                <p className="text-gray-400 text-justify">
                  The format of the game is simple; ever heard of flappy bird?
                  Well, it's the same simple yet fun concept. The only
                  difference is that you control the bird with your thoughts.
                  The simple will to make the little character avoid obstacles
                  is enough to make it move. We are very proud of the work we
                  have accomplished; it may only be the beginning of a video
                  game revolution! Think about it, what if we combined this
                  mechanic to a VR headset? 100% immersion, 100% fun! Or, what
                  if this is the skipping stone to helping people with
                  disabilities by giving them power from their own thoughts? The
                  possibilities are endless.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            className="mb-20 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">
              The Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-red-800/10 border custom-border-red custom-hover-border-red transition-colors text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                >
                  <div className="text-red-400 mb-4 flex justify-center">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.title}
                  </h3>
                  <p className="text-gray-400">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Remaining Sections */}
          <section id="Week1" className="mb-20 text-justify">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Our beginnings (Week 1)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="hero-card">
                <div className="video-container relative">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-xl"
                    src="/project/flappyproto.mp4"
                    autoPlay
                    loop
                    playsInline
                    poster=""
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
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-400 mb-6">
                  Just like any other project, FlapEEG had a beginning. It all
                  started during the spring semester of 2024. It was a rough
                  start: we had many participants and loads of ideas, but the
                  organization was very hard to manage. Members came and went,
                  and people of course had exams and other things to attend
                  which left us with a very different load of work to do.
                </p>
                <p className="text-gray-400">
                  All that to say, that semester, we didn't get as much as we
                  would've liked done, but in winter of 2025, we learnt from our
                  experience and came back strong! We approached the project
                  with a new concept: instead of open to everyone, we would
                  screen the participants and make a choice based on their
                  skills, their availability but most importantly, their
                  interest in the project. This way, we were able to work much
                  more efficiently and address any issues immediately. It was
                  indeed a great success! We were able to finish the first step
                  of FlapEEG before our deadline: Make it work with a simple
                  algorithm that would detect blinks. Our member Dereck worked
                  on this and Louis-Étienne helped him fix the bugs. You can see
                  on this preview the first prototype. In the meantime, our
                  other members were working on finishing the game, researching
                  and collecting data.
                </p>
              </div>
            </div>
            <p className="text-gray-400 mt-6">
              It was only a rough prototype, as you can see, some latency was
              still present and the game was not fully functional. But it was a
              step in the right direction which led us to week 2...
            </p>
          </section>

          <section id="Week2-4" className="mb-20 text-justify">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Collecting Data (Week 2 - Week 4)
            </h2>
            <p className="text-gray-400">
              After successfully the baseline, it was time to start collecting
              data. We needed to collect data from our participants to train our
              AI model to interpret brain signals. We had to find a way to
              collect this data and to make sure it was clean and usable. To do
              that, we asked many participants to perform a series of tests with
              the headset. We then had Jordan and Dereck work on a way to clean
              the data and make it usable.
            </p>

            <p className="text-gray-400 mt-6">
              In the meantime, Louis-Étienne installed a server to centralize
              our datasets, William finished the game. Everything was slowly
              coming together, but the hardest part was yet to come!
            </p>

            <div className="mt-12">
              <img
                src="/test.jpg"
                alt="test image (temporary)"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </section>

          <section id="Week4-6" className="mb-20">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Data Collection (Week 4 - Week 6)
            </h2>
            <p className="text-gray-400 pb-4">
              At this point in the project, we hit a challenge. Louis found out
              our data wasn't properly filtered and we had a lot of noise around
              the 60Hz frequency which made it unusable. Jordan took care of
              this and found a way to filter out the noise.
            </p>
            <p className="text-gray-400">
              This leads us to the middle of the semester; everyone is preparing
              for the exams so we decided to take the next week or two reading
              scientific papers and sharing our discoveries with each other to
              face the future challenges.
            </p>
          </section>

          <section id="Week6-9" className="mb-20">
            <h2 className="text-3xl font-bold gradient-text mb-6 mt-20">
              Training (Week 6 - Week 9)
            </h2>
            <p className="text-gray-400">
              Once the midterms out of the way, we regrouped and discussed of
              the next steps. The key step was to take out any noise from
              muscular or eye movements from our data and to focus on the
              intention signals only. it was hard because our our first
              protocols all included eye movements which were difficult to
              isolate from the intention signals, but after a meeting where the
              whole team shared their ideas, we were able to come up with a new
              optimized protocol that would allow us to train our AI model to
              understand the brain signals and to translate them into actions in
              the game.
            </p>
          </section>
        </div>
      </motion.div>
    </section>
  );
}

export default FlapEEG;
