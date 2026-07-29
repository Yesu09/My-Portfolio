import SkillsHeader from "./SkillsHeader";
import SkillGrid from "./SkillsGrid";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-50 py-5 px-6 md:px-12 lg:px-20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <SkillsHeader />
        <SkillGrid />
      </div>
    </section>
  );
};

export default Skills;