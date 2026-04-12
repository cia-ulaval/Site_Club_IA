import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Globe, X, User } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  mission?: string;
  imgSrc?: string;
  linkedIn?: string;
  github?: string;
  portfolio?: string;
  additionalDetails?: string;
  isVacant?: boolean;
}

interface MemberModalProps {
  member: TeamMember;
  onClose: () => void;
  translations: {
    name: string;
    role: string;
    mission: string;
    aboutMe: string;
    connect: string;
    noDetails: string;
  };
}

const MemberModal: React.FC<MemberModalProps> = ({
  member,
  onClose,
  translations,
}) => {
  const hasLinks = member.linkedIn || member.github || member.portfolio;
  const hasContent = member.mission || member.additionalDetails || hasLinks;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-base/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="theme-modal-surface rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side - Full Height Image */}
        <div className="w-1/3 relative bg-gradient-to-b from-primary-950 to-base flex-shrink-0">
          {member.imgSrc ? (
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary-900/20">
              <User className="w-24 h-24 theme-text-accent" />
            </div>
          )}
          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base/60 to-transparent" />
        </div>

        {/* Right Side - Content */}
        <div className="w-2/3 p-8 overflow-y-auto relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-primary-900/50 hover:bg-accent-300 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-base-inverse" />
          </button>

          {/* Content with bullet-point style layout */}
          <div className="space-y-6 pr-8">
            {/* Name */}
            <div>
              <span className="theme-text-accent text-sm font-medium uppercase tracking-wider">
                {translations.name}
              </span>
              <h2 className="text-3xl font-bold text-base-inverse mt-1">
                {member.name}
              </h2>
            </div>

            {/* Role */}
            <div>
              <span className="theme-text-accent text-sm font-medium uppercase tracking-wider">
                {translations.role}
              </span>
              <p className="text-xl text-primary-300 mt-1">{member.role}</p>
            </div>

            {/* Mission */}
            {member.mission && (
              <div>
                <span className="theme-text-accent text-sm font-medium uppercase tracking-wider">
                  {translations.mission}
                </span>
                <p className="theme-text-secondary mt-1 leading-relaxed">
                  {member.mission}
                </p>
              </div>
            )}

            {/* About Me / Additional Details */}
            {member.additionalDetails && (
              <div>
                <span className="theme-text-accent text-sm font-medium uppercase tracking-wider">
                  {translations.aboutMe}
                </span>
                <p className="theme-text-secondary mt-1 leading-relaxed">
                  {member.additionalDetails}
                </p>
              </div>
            )}

            {/* Connect */}
            {hasLinks && (
              <div>
                <span className="theme-text-accent text-sm font-medium uppercase tracking-wider">
                  {translations.connect}
                </span>
                <div className="flex flex-wrap gap-3 mt-3">
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-300 text-base-inverse rounded-lg transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 theme-btn-secondary rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  )}
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-300 text-base-inverse rounded-lg transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span className="text-sm font-medium">Portfolio</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* No details message */}
            {!hasContent && (
              <p className="theme-text-muted italic mt-8">
                {translations.noDetails}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MemberModal;
