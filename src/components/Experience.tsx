import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Talent Acquisition Specialist",
      company: "Playson",
      date: "May 2022 - Present",
      description: "Responsible for full-cycle recruitment, sourcing strategies, and talent pipeline development."
    },
    {
      title: "Talent Acquisition Specialist",
      company: "Intellias",
      date: "Sep 2021 - May 2022",
      description: "Focused on IT recruitment, sourcing, and employer branding initiatives."
    },
    {
      title: "Recruiter",
      company: "Ciklum",
      date: "Apr 2021 - Sep 2021",
      description: "Managed end-to-end recruitment process for IT professionals."
    },
    {
      title: "Talent Acquisition Specialist",
      company: "EPAM Systems",
      date: "Sep 2019 - Apr 2021",
      description: "Specialized in technical recruitment and talent sourcing strategies."
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company} | {exp.date}</p>
              <p className="text-gray-700 dark:text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;