import Link from "next/link";
import TeamMember from "../../elements/TeamMember";

// adjust path based on your project setup
import { teamMembers } from "../../../../utils/marketing/teamMemberData";

interface Section8Props {
  classList?: string;
}

export default function Section8({ classList = "" }: Section8Props) {
  return (
    <>
      {/*=====TEAM AREA START=======*/}
      <div className={`team1 sp overflow-hidden ${classList}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto text-center">
              <div className="heading1">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration={800}
                >
                  Our Team
                </span>
                <h2 className="text-anime-style-3">
                  Get to Know Our Professionals
                </h2>
                <div className="space16" />
                <p data-aos="fade-up" data-aos-duration={700}>
                  We take pride in fostering a collaborative environment where
                  innovation <br />
                  thrives and clients receive personalized attention at every
                  step
                </p>
              </div>
            </div>
          </div>
          <div className="space30" />

          <div className="row">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
      {/*=====TEAM AREA END=======*/}
    </>
  );
}
