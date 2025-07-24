// components/modals/ProjectModal.tsx
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectProps } from '../../utils/types/ProjectProps';
import { projects } from '../../utils/data/projects';

interface ProjectModalProps {
    onClose: () => void;
    index: number;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ onClose, index }) => {
    const [projectIndex, setProjectIndex] = React.useState(index);
    const project: ProjectProps = projects[projectIndex];

    const changeProject = (num: number) => {
        let newIndex = projectIndex + num;
        if (newIndex < 0) {
            newIndex = projects.length - 1; // Loop to last project
        }
        if (newIndex >= projects.length) {
            newIndex = 0; // Loop to first project
        }
        setProjectIndex(newIndex);
    };

    const changeKeyFormatToHashtag = (key: string) => {
        const joinedKey = key.replaceAll(' ', '');
        const formattedKey = '#' + joinedKey;
        return formattedKey;
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                changeProject(-1);
            } else if (e.key === 'ArrowRight') {
                changeProject(1);
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [projectIndex]); // include projectIndex so effect reflects latest

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
            <button
                className="absolute left-1 lg:left-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                onClick={() => changeProject(-1)}>
                <ChevronLeft size={36} />
            </button>
            <button
                className="absolute right-1 lg:right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                onClick={() => changeProject(1)}>
                <ChevronRight size={36} />
            </button>

            <div className="relative bg-white rounded-xl shadow-2xl xl:max-w-3xl xl:w-full w-[80%] z-50 max-h-[90vh] scrollable overflow-y-auto">
                <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-t-xl w-full h-auto"
                />
                <div className="p-4 flex flex-col gap-y-2">
                    <p className="text-2xl md:text-3xl font-instrument-serif">
                        {project.title}
                    </p>
                    <div>
                        {project.tags?.map((tag, idx) => (
                            <span
                                key={idx}
                                className={`inline-block ${
                                    tag.includes('Inactive')
                                        ? 'bg-red/75 text-white'
                                        : 'bg-blue/20 text-black'
                                }  px-3 py-1 rounded-full text-xs md:text-sm mr-2 mb-2 font-outfit`}>
                                {tag.toUpperCase()}
                            </span>
                        ))}
                    </div>
                    <div>
                        <p className="text-xs md:text-sm text-black/50 font-outfit">
                            {' '}
                            Built with{' '}
                            {project.techStack?.map((tech, idx, array) => (
                                <span
                                    key={idx}
                                    className="inline-block font-semibold">
                                    {tech}
                                    {idx < array.length - 1 && ',\u00A0'}
                                </span>
                            ))}
                        </p>
                    </div>
                    <p className="text-sm md:text-base text-black font-outfit text-justify">
                        {project.description}
                    </p>
                    <div>
                        {Object.entries(project.links).map(([key, value]) => (
                            <>
                                <a
                                    key={key}
                                    href={value}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue hover:underline text-sm md:text-base font-outfit mr-2">
                                    {changeKeyFormatToHashtag(key)}
                                </a>
                                {/* {index < array.length - 1 && (
                                        <span className="mx-2 font-outfit">
                                            |
                                        </span>
                                    )} */}
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <button
                className="absolute top-6 right-6 text-white z-50 cursor-pointer"
                onClick={onClose}>
                <X size={28} />
            </button>
        </div>
    );
};

export default ProjectModal;
