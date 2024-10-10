import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    "Full-cycle recruitment",
    "Sourcing strategies",
    "Talent pipeline development",
    "Applicant tracking systems",
    "Employer branding",
    "Interview techniques",
    "Talent market analysis",
    "Recruitment marketing",
    "Diversity and inclusion initiatives",
    "Recruitment automation tools"
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <p className="text-gray-700 dark:text-gray-300">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;