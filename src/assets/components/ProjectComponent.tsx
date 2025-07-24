import React from 'react';
import type { ProjectComponentProps } from '../../utils/types/ProjectComponentProps';

const ProjectComponent: React.FC<ProjectComponentProps> = ({projectProps, key} : ProjectComponentProps) => {
    return (
        <div id={key} className='border-1 border-black/25 flex-col flex gap-y-4 bg-white/40 rounded-xl hover:scale-95 transition-all ease-in cursor-pointer'>
            <img src={projectProps.image} alt={projectProps.title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
    );
};

export default ProjectComponent;