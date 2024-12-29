interface SkillsLearntProps {
  skills: string[];
}

const SkillsLearnt: React.FC<SkillsLearntProps> = ({ skills }) => {
  return (
    <div className="bg-white rounded-lg p-2 opacity-50 text-black">
      <p className="italic text-lg">Key Skills Learnt:</p>
      <ul className="list-disc pl-8 text-sm font-semibold">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsLearnt;