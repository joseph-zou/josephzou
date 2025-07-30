export interface Section {
  id: string;
  title: string;
}

interface SectionNavigatorProps {
  sections: Section[];
  handleClick: (id: string) => void;
}

const SectionNavigator = ({ sections, handleClick }: SectionNavigatorProps) => {
  // const header = document.querySelector('header')
  // const offset = header ? header.clientHeight: 0

  return (
    <>
      <div
        className="sticky top-20 overflow-auto"
        style={{ height: "calc(100vh - 10rem)" }}
      >
        <div className="flex flex-col gap-y-3 text-p text-sm md:text-xl h-full">
          {sections.map((item) => (
            <div
              className="cursor-pointer"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <p className="focus:outline-none select-none">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionNavigator;
