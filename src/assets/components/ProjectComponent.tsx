import React, { useState } from 'react';
import type { ProjectComponentProps } from '../../utils/types/ProjectComponentProps';
import ProjectModal from './ProjectModal';
import { createPortal } from 'react-dom';

const ProjectComponent: React.FC<ProjectComponentProps> = ({
    projectProps,
    key,
    index,
}: ProjectComponentProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                id={key}
                onClick={() => setIsModalOpen(true)}
                className="border-1 border-black/25 flex-col flex gap-y-4 bg-white/40 rounded-xl hover:scale-95 transition-all ease-in cursor-pointer">
                <img
                    src={projectProps.image}
                    alt={projectProps.title}
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>
            {isModalOpen &&
                createPortal(
                    <ProjectModal
                        onClose={() => setIsModalOpen(false)}
                        index={index}
                    />,
                    document.body
                )}
        </>
    );
};

export default ProjectComponent;
