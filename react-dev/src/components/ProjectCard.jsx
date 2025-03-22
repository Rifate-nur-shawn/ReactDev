import React from "react";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  demoLink,
  codeLink,
}) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:shadow-xl">
      <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex flex-wrap gap-2">
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 bg-indigo-600 text-white text-xs rounded-md hover:bg-indigo-700 transition-colors duration-200"
                >
                  Live Demo
                </a>
              )}
              {codeLink && (
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 bg-gray-800 text-white text-xs rounded-md hover:bg-gray-900 transition-colors duration-200"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
