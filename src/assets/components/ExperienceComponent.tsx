import { styles } from '../../utils/styles';
import type { ExperienceComponentProps } from '../../utils/types/ExperienceComponentProps';

const ExperienceComponent = ({ exp }: ExperienceComponentProps) => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex w-full justify-between items-center">
                <p className={`${styles.subheading}`}>
                    /&ensp;
                    <span className="text-red">{exp.title}</span> @{' '}
                    <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue hover:text-blue-hover hover:font-semibold">
                        {exp.company}
                    </a>{' '}
                </p>
                <p className="font-outfit text-xs lg:text-sm text-right">
                    {exp.period}
                </p>
            </div>
            <div className="mx-4 lg:mx-6 max-w-[90%] flex flex-col gap-y-2">
                <p className="font-outfit text-justify lg:text-base text-sm">
                    {exp.description}
                </p>
                {exp.links
                    ? Object.entries(exp.links as Record<string, string>).map(
                          ([key, value]) => (
                              <a
                                  key={key}
                                  href={value}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex text-blue font-outfit hover:text-blue-hover hover:underline hover:font-semibold transition-all ease-in">
                                  {key}
                              </a>
                          )
                      )
                    : null}
            </div>
            <hr className="border-dotted border-black/40 border-t-3 my-4" />
        </div>
    );
};

export default ExperienceComponent;
