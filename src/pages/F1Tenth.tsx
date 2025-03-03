import {
  Users,
  Lightbulb,
  Target,
  Braces,
  Rotate3d,
  UserRoundCog,
} from "lucide-react";

const team1 = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Deoth Guei",
    description: "Team Lead, feasability study, and much more",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Théophile Bertelot",
    description:
      "Jack of all trades: Helped with conception, research, development, deployment communication and more",
  },
  {
    icon: <UserRoundCog className="w-8 h-8" />,
    title: "Felix Ly",
    description:
      "Helped with software development, optimisation and validation",
  },
  {
    icon: <Rotate3d className="w-8 h-8" />,
    title: "Melek Sebri",
    description:
      "Helped with software development, optimisation and validation",
  },
  {
    icon: <Braces className="w-8 h-8" />,
    title: "Amy Randianodiasan",
    description: "Integration with F1 Tenth and partnership",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Kahina Moulfi",
    description: "Partnership optimization and integration",
  },
];

const team2 = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Alban Sarrazin",
    description: "Team Lead",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Alexandre Laforest",
    description: "Member",
  },
  {
    icon: <UserRoundCog className="w-8 h-8" />,
    title: "Jade Piller Cammal",
    description: "Member",
  },
  {
    icon: <Rotate3d className="w-8 h-8" />,
    title: "Karima Habbout",
    description: "Member",
  },
  {
    icon: <Braces className="w-8 h-8" />,
    title: "Simon Gouin",
    description: "Member",
  },
];

function F1Tenth() {
  return (
    <div className="container mx-auto p-4">
      <section className="mb-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 md:order-2">
            <img
              src="/img/test.jpg"
              alt="test image (temporary)"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 flex flex-col text-justify">
            <h2 className="text-5xl font-bold gradient-text mb-6">F1 Tenth</h2>
            <p className="text-gray-400 mb-6">
              Thrill-seeker? This project will capture your interest! F1 Tenth
              is a team of students passionate about AI who have successfully
              combined human and machine. Using an electromyographic bracelet,
              they managed to control a miniature race car with their muscles.
              While the concept may seem simple, months of work and research
              were necessary to achieve this result. Not only did they need to
              understand muscle electrical signals, but also translate them into
              actions and, of course, minimize any latency.
            </p>
            <p className="text-gray-400">
              To be more precise, the team had to train an AI model to read
              muscle electrical signals and translate them into actions. This
              involved extensive trial and error to adjust the model's
              sensitivity and accuracy. The bracelet has multiple sensors, each
              responsible for a different response like accelerating, braking,
              or turning. The project was very complex because it required
              controlling multiple dimensions simultaneously.
            </p>
          </div>
        </div>
      </section>

      <section id="team1" className="mb-20 mt-20">
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">
          Team 1
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {team1.map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-red-800/10 border custom-border-red custom-hover-border-red transition-colors text-center"
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

      <section id="team2" className="mb-20 mt-20">
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">
          Team 2
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {team2.map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-red-800/10 border custom-border-red custom-hover-border-red transition-colors text-center"
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
    </div>
  );
}

export default F1Tenth;
