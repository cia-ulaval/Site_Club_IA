import React, { useState } from "react";
import { Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-6xl font-bold gradient-text mb-4">TEST TEXT</h1>
        <p className="text-xl text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </header>

      <div className="hero-card mb-16">
        <div className="video-container mb-4">
          <video
            className="w-full h-full object-cover"
            src="" // Add the path to the video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="" // Add the path to the poster image
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="p-6 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
          <h2 className="text-2xl font-bold mb-4 gradient-text">TEST H2</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            auctor, felis id tincidunt interdum, mi justo gravida arcu, nec
            placerat lectus quam id ligula.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            TEMPORARY H2
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            auctor, felis id tincidunt interdum, mi justo gravida arcu, nec
            placerat lectus quam id ligula.
          </p>
        </div>
      </div>

      <section className="mb-20">
        <h2 className="text-4xl font-bold gradient-text text-center mb-12">
          TEMP MAIN TITLE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "TITLE1",
              image: "", // Add the path to the image
              description: "", // Add the description
            },
            {
              title: "TITLE2",
              image: "", // Add the path to the image
              description: "", // Add the description
            },
            {
              title: "TITLE3",
              image: "", // Add the path to the image
              description: "", // Add the description
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-4xl font-bold gradient-text mb-8">Lorem Ipsum</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor,
          felis id tincidunt interdum, mi justo gravida arcu, nec placerat
          lectus quam id ligula.
        </p>
        <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold transition-colors">
          BOUTON TEST
        </button>
      </section>
    </div>
  );
}

export default Home;
