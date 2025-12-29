// TeamMember.tsx
import Link from "next/link";
import React from "react";

export interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  email: string;
  aosDuration?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageSrc,
  email,
  aosDuration = 700,
}) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="team1-box overlay-anim"
        data-aos="zoom-in-up"
        data-aos-duration={aosDuration}
      >
        <div className="image">
          <img src={imageSrc} alt={name} />
        </div>

        <div className="heading-area">
          <div className="heading1">
            <h4>
              <Link href="#">{name}</Link>
            </h4>
            <p>{role}</p>
          </div>

          {/* EMAIL ONLY */}
          <div className="team-email">
            <Link href={`mailto:${email}`}>{email}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
