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
    title: "And others",
    description: "",
  },
];

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
          <h3 className="text-xl text-gray-600 dark:text-white font-bold  mb-2"> {member.title}</h3>
          <p className="text-gray-500">{member.description}</p>
        </div>
      ))}
    </div>
  </section>
);

function DecisionTree() {
  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 id="test" className="text-5xl font-bold gradient-text mb-6">
          Decision Tree
        </h2>
        <p className="text-xl text-gray-400 mb-16">
          Decision trees are inherently interpretable as they provide a simple
          explanation (based on decision rules) of their decision-making
          process, making them essential tools for data scientists. However,
          when dealing with massive datasets, training algorithms can generate
          unnecessarily complex trees where the decision-making process becomes
          obscured by an overabundance of rules. Is it possible to find a
          representative subset of the data that would produce simpler yet
          equally effective decision trees? This is the question we aim to
          answer in this research project.
        </p>
        <TeamSection />
      </div>
    </section>
  );
}

export default DecisionTree;
