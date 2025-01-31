import { Users, Lightbulb, Target, Rocket } from "lucide-react";

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="text-center mb-20">
        <h1 className="text-6xl font-bold gradient-text mb-6">FlappyEEG</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor,
          felis id tincidunt interdum, mi justo gravida arcu, nec placerat
          lectus quam id ligula. Maecenas et faucibus urna. Proin maximus nisi
          convallis, pharetra nisi at, bibendum tellus. Phasellus ultricies
          condimentum tortor a ultricies. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Morbi in neque
          lorem. Etiam vitae libero mattis, accumsan ex sit amet, fringilla ex.
        </p>
      </header>

      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="" // Add the path to the image
              alt=""
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              What is it?
            </h2>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              auctor, felis id tincidunt interdum, mi justo gravida arcu, nec
              placerat lectus quam id ligula. Maecenas et faucibus urna. Proin
              maximus nisi convallis, pharetra nisi at, bibendum tellus.
              Phasellus ultricies condimentum tortor a ultricies. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Morbi in neque lorem. Etiam vitae libero mattis,
              accumsan ex sit amet, fringilla ex.
            </p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              auctor, felis id tincidunt interdum, mi justo gravida arcu, nec
              placerat lectus quam id ligula. Maecenas et faucibus urna. Proin
              maximus nisi convallis, pharetra nisi at, bibendum tellus.
              Phasellus ultricies condimentum tortor a ultricies. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Morbi in neque lorem. Etiam vitae libero mattis,
              accumsan ex sit amet, fringilla ex.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-bold gradient-text text-center mb-12">
          Collaborators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Louis-Étienne Messier",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              icon: <Lightbulb className="w-8 h-8" />,
              title: "Jordan Mathieu",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "Dereck Bélanger",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "AJOUTER LES AUTRES MEMBRES",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-colors text-center"
            >
              <div className="text-purple-400 mb-4 flex justify-center">
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
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold gradient-text mb-8">
            Interested in participating?
          </h2>
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            auctor, felis id tincidunt interdum, mi justo gravida arcu, nec
            placerat lectus quam id ligula. Maecenas et faucibus urna. Proin
            maximus nisi convallis, pharetra nisi at, bibendum tellus. Phasellus
            ultricies condimentum tortor a ultricies. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Morbi in neque lorem. Etiam vitae libero mattis, accumsan ex sit
            amet, fringilla ex.
          </p>
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold transition-colors">
            TEST
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
