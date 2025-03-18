import {
  TextCursorInput,
  SwatchBook,
  Rss,
  Zap,
  Languages,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    icon: <TextCursorInput className="w-8 h-8" />,
    title: "Théophile Berteloot",
    role: "",
    description: "",
  },
  {
    icon: <SwatchBook className="w-8 h-8" />,
    title: "Loïc Baret",
    role: "",
    description: "",
  },
  {
    icon: <Rss className="w-8 h-8" />,
    title: "Xavier Legault",
    role: "",
    description: "",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Louis-Jacob Lebel",
    role: "",
    description: "",
  },
  {
    icon: <Languages className="w-8 h-8" />,
    title: "John-William Lebel",
    role: "",
    description: "",
  },
];

// Project features with icons
const features = [
  {
    icon: <Zap className="w-6 h-6 text-red-400" />,
    title: "Real-time Translation",
    description:
      "Instantly translate manga panels without waiting for official releases",
  },
  {
    icon: <Languages className="w-6 h-6 text-red-400" />,
    title: "Multiple Languages",
    description:
      "Support for translations between Japanese, English, French, and more",
  },
  {
    icon: <Layers className="w-6 h-6 text-red-400" />,
    title: "Context-Aware",
    description:
      "Our AI understands character relationships and narrative context",
  },
];

interface ImageWithGlowProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageWithGlow = ({ src, alt, caption }: ImageWithGlowProps) => (
  <motion.div
    className="text-center mb-2 relative overflow-hidden rounded-xl"
    whileHover={{
      scale: 1.03,
      transition: { duration: 0.3 },
    }}
  >
    <motion.img
      src={src}
      alt={alt}
      className="w-full md:w-4/5 mx-auto rounded-xl shadow-xl border border-red-800/30"
      initial={{ y: 10, opacity: 0.8 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    />
    {caption && <div className="text-xs text-gray-500 mt-2">{caption}</div>}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-red-900/20 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
  </motion.div>
);

// Animated step progress component
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => (
  <motion.div
    className="flex items-start gap-4 mb-8"
    initial={{ x: -10, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.4, delay: number * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-white font-bold">
        {number}
      </div>
    </div>
    <div>
      <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const TeamSection = () => (
  <section className="py-16 relative">
    {/* Background design element */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-800/5 rounded-full blur-3xl -z-10"></div>

    <motion.h2
      className="text-4xl font-bold gradient-text text-center mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Meet Our Team
    </motion.h2>

    <motion.p
      className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      A diverse group of experts passionate about bringing manga to global
      audiences through cutting-edge AI technology.
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mx-6">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/10 border custom-border-red hover:border-red-500/50 transition-all duration-300 text-center group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="text-red-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
            {member.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{member.title}</h3>
          <p className="text-red-400/80 text-sm mb-2">{member.role}</p>
          <p className="text-gray-400 text-sm">{member.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

function MangaAI() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="w-3/4 mx-auto px-6 py-16 border border-red-800 hover:border-red-500 transition-colors rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero section with animated title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 id="test" className="text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
              Manga
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              Translator
            </span>
          </h1>
          <h2 className="text-4xl font-bold text-white mb-6">
            AI-Powered Manga Translation
          </h2>
        </motion.div>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-red-900/20 rounded-full border border-red-800/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              {feature.icon}
              <span className="text-sm font-medium text-white">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-xl text-gray-300 mb-12 text-center mx-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Ever wanted to read a manga that wasn't translated yet? Our AI-powered
          translator breaks the language barrier, bringing untranslated manga to
          readers worldwide in real-time.
        </motion.p>

        {/* Main content section */}
        <motion.section
          id="learn-more"
          className="mb-20 text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
              Our Approach
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <p className="mb-6">
                  Our project utilizes{" "}
                  <span className="text-red-400 font-semibold">Manga109</span>,
                  a renowned dataset in the field, frequently employed for
                  speech bubble detection, optical character recognition (OCR),
                  and emotion recognition in illustrations.
                </p>
                <p>
                  This comprehensive collection serves as the foundation for
                  training our AI models to understand the unique visual
                  language of manga and accurately translate text while
                  preserving context.
                </p>
              </div>
              <ImageWithGlow
                src="/project/manga109.png"
                alt="Manga 109 Dataset"
                caption="Source: http://www.manga109.org/ja/index.html"
              />
            </div>

            <h4 className="text-2xl font-semibold mb-6 text-center text-red-300">
              Development Process
            </h4>

            <div className="mb-12">
              <ProcessStep
                number={1}
                title="Prototype Development"
                description="We started by leveraging existing tools to quickly build a functional prototype that could demonstrate the concept."
              />
              <ProcessStep
                number={2}
                title="Core Components"
                description="Our system consists of bubble detection with U-Net segmentation, OCR-based text extraction, and automatic translation integration."
              />
              <ProcessStep
                number={3}
                title="Translation & Reinsertion"
                description="After translation, we use advanced image processing to place the translated text back into speech bubbles while respecting visual context."
              />
              <ProcessStep
                number={4}
                title="Continuous Refinement"
                description="We're constantly improving our models to handle challenges like text length differences and maintaining artistic integrity."
              />
            </div>

            <ImageWithGlow
              src="/project/mangaai.png"
              alt="Manga AI Translation Example"
              caption="Sample output from our automatic translation system"
            />

            <div className="mt-12 pt-8 border-t border-red-800/20">
              <h4 className="text-2xl font-semibold mb-6 text-center text-red-300">
                Future Enhancements
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="p-5 rounded-xl bg-red-900/10 border border-red-800/30 hover:border-red-500/40 transition-colors"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h5 className="text-lg font-semibold mb-2 text-red-500">
                    Dynamic Text Resizing
                  </h5>
                  <p className="text-gray-400">
                    Intelligent adjustment of font size and text layout to
                    ensure proper fitting within speech bubbles of varying sizes
                    and shapes.
                  </p>
                </motion.div>

                <motion.div
                  className="p-5 rounded-xl bg-red-900/10 border border-red-800/30 hover:border-red-500/40 transition-colors"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h5 className="text-lg font-semibold mb-2 text-red-500">
                    Character Gender Detection
                  </h5>
                  <p className="text-gray-400">
                    Analyzing visual cues to detect character gender, improving
                    translation accuracy for languages with grammatical gender
                    like French.
                  </p>
                </motion.div>

                <motion.div
                  className="p-5 rounded-xl bg-red-900/10 border border-red-800/30 hover:border-red-500/40 transition-colors"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h5 className="text-lg font-semibold mb-2 text-red-500">
                    Character Identification
                  </h5>
                  <p className="text-gray-400">
                    Recognizing recurring characters to maintain consistent
                    speech patterns and personality traits throughout
                    translations.
                  </p>
                </motion.div>

                <motion.div
                  className="p-5 rounded-xl bg-red-900/10 border border-red-800/30 hover:border-red-500/40 transition-colors"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h5 className="text-lg font-semibold mb-2 text-red-500">
                    Context-Aware Translation
                  </h5>
                  <p className="text-gray-400">
                    Incorporating narrative context and visual information to
                    produce more natural and accurate translations that respect
                    the story's tone.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team section */}
        <TeamSection />

        {/* Footer/Contact section */}
        <motion.section
          className="pt-8 pb-16 mx-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.section>
      </motion.div>
    </section>
  );
}

export default MangaAI;
