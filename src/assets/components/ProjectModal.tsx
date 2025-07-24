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
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" onClick={() => changeProject(-1)}>
                <ChevronLeft size={36} />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" onClick={() => changeProject(1)}>
                <ChevronRight size={36} />
            </button>

            <div className="relative bg-white rounded-xl p-6 shadow-2xl max-w-3xl w-full z-50">
                <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full h-auto"
                />
                {/* Additional content can go here */}
            </div>

            {/* Close Button */}
            <button
                className="absolute top-6 right-6 text-white z-50"
                onClick={onClose}
            >
                <X size={28} />
            </button>
        </div>
    );
};

export default ProjectModal;
