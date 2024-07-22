import React from 'react';

const skills = [
    { name: 'CSS3', level: '90%' },
    { name: 'HTML5', level: '95%' },
    { name: 'JS', level: '60%' },
    { name: 'Bootsrap', level: '90%' },
    { name: 'Tailwind', level: '70%' },
    { name: 'react', level: '50%' },
];

const Skills = () => {
    return (
        <div className="bg-black text-white p-8">
            <h1 className="text-4xl font-bold mb-10 grid justify-items-center">My Skills</h1>
            <p className="text-gray-400 mb-6">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <div className="space-y-4">
        {skills.map((skill) => (
            <div key={skill.name}>
            <div className="flex justify-between mb-4">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-[#1810aa] h-2.5 rounded-full" style={{ width: skill.level }}></div>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
};

export default Skills;