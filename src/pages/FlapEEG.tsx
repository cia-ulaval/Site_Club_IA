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
import Head from "next/head";

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
      description:
        "Trained the AI model and helped the team understand the challenges",
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
      <Head>
        <title>
          FlapEEG - Revolutionizing Gaming with Thought-Controlled AI
        </title>
        <meta
          name="description"
          content="FlapEEG is a groundbreaking thought-controlled video game powered by AI and EEG technology. Discover how we trained an AI model to interpret brain signals and control the game."
        />
        <link rel="canonical" href="https://cialaval.vercel.app/flapeeg" />
        <meta
          name="keywords"
          content="FlapEEG, EEG, thought-controlled game, brain signals, AI, video game, innovation"
        />
        <meta name="author" content="Dereck Bélanger" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="FlapEEG - Thought-Controlled Video Game"
        />
        <meta
          property="og:description"
          content="Discover FlapEEG, a video game controlled by thought. Learn about our journey in training an AI model to interpret brain signals."
        />
        <meta property="og:image" content="/banner/cia_ico.ico" />
        <meta property="og:url" content="https://cialaval.vercel.app/flapeeg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FlapEEG - Thought-Controlled Video Game"
        />
        <meta
          name="twitter:description"
          content="FlapEEG is a revolutionary video game controlled by thought. Learn how we trained an AI model to interpret brain signals and control the game."
        />
        <meta name="twitter:image" content="/banner/cia_ico.ico" />
      </Head>
      <motion.div
        className="container w-full md:w-11/12 lg:w-3/4 mx-auto px-4 md:px-6 py-8 md:py-16 rounded-lg md:rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h1 className="sr-only">FlapEEG - Thought-Controlled Video Game</h1>
          {/* Hero Section */}
          <motion.section
            className="mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="sr-only">Introduction to FlapEEG</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <img
                  src="/implication/flappyeegmain.jpeg"
                  alt="Three managers of the club, one wearing an EEG headset, smiling during a meeting"
                  className="rounded-xl shadow-2xl mt-4 sm:mt-8 w-full"
                />
              </div>
              <div className="flex flex-col justify-center mt-6 md:mt-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                    FlapEEG
                  </span>
                </h1>
                <p className="sr-only">
                  FlapEEG is a thought-controlled video game powered by AI and
                  EEG technology.
                </p>
                <p className="text-gray-400 mb-4 sm:mb-6 text-justify">
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
            className="mb-12 sm:mb-20 mt-12 sm:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-8 sm:mb-12">
              Meet the Team Behind FlapEEG
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 px-4 md:px-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="p-3 md:p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/10 border custom-border-red hover:border-red-500/50 transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <div className="text-red-400 mb-2 md:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {member.icon}
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-1">
                    {member.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Remaining Sections */}
          <section id="Week1" className="mb-12 sm:mb-20 text-justify">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-6 sm:mb-8 text-center">
              The Beginning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              <div className="hero-card">
                <div
                  className="video-container relative rounded-xl overflow-hidden shadow-lg"
                  style={{ height: "auto" }}
                >
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="/project/flappyproto.mp4"
                    autoPlay
                    loop
                    playsInline
                    poster="/project/flappyproto-poster.jpg"
                    aria-label="FlapEEG prototype video"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={togglePlay}
                        className="p-2 rounded-full bg-rose-500/70 hover:bg-rose-500/60 transition-colors shadow-md"
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
              <div className="flex flex-col justify-center">
                <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  FlapEEG is a project that started in January 2025.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The team consists of 8 members, some of whom are experienced
                  in AI and EEG technology, while others are passionate about
                  video games and coding. They all have different backgrounds
                  and skills, but share the same goal.
                </p>
              </div>
            </div>
            <p className="text-gray-400 mt-6 sm:mt-8 leading-relaxed">
              In the video above, you can see the first prototype of the game.
              Dereck and Louis-Étienne managed to get a simple version of the
              game up and running where the player could control the character
              by blinking with an activation threshold.
            </p>
          </section>

          <section id="Week2-4" className="mb-12 sm:mb-20 text-justify">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-4 sm:mb-6">
              Collecting Data (Week 2 - Week 4)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <p className="text-gray-400">
                  After successfully establishing the baseline, Jordan recruited
                  volunteers to collect brain data. The goal was to gather a
                  dataset of brain signals while the volunteers played the game
                  to train the AI model.
                </p>
                <p className="text-gray-400 mt-4 sm:mt-6">
                  In the meantime, William finished the game and helped
                  deploying the server with the help of Louis-Étienne.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/project/FlappyBrain.png"
                  alt="Screenshot of the FlapEEG game interface"
                  className="rounded-2xl shadow-2xl w-full max-w-lg border-4 border-red-500/50"
                  style={{ boxShadow: "0 4px 20px rgba(255, 0, 0, 0.5)" }}
                />
              </div>
            </div>
          </section>

          <section id="Week4-6" className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-4 sm:mb-6">
              Data Collection
            </h2>
            <p className="text-gray-400 pb-3 sm:pb-4">
              At this point in the project Louis found out our data wasn't
              properly filtered and there had a lot of noise which made it
              unusable. Jordan took care of this and found a way to filter out
              the noise.
            </p>
            <p className="text-gray-400">
              In the meantime, Amen and Estelle were working hard training the
              AI model behind the scenes and paiving the way for the others to
              understand the challenges of training a model.
            </p>
          </section>

          <section id="Week6-9" className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-4 sm:mb-6 mt-12 sm:mt-20">
              First challenge
            </h2>
            <p className="text-gray-400">
              At this point in the project, the team faced a significant
              challenge: the AI model was not performing as well as needed. They
              opted to start reseaarching and reading papers to understand the
              challenges of training a model.
            </p>
          </section>
        </div>
      </motion.div>
    </section>
  );
}

export default FlapEEG;
