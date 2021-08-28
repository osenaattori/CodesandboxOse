import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;

  return (
    <ResumeStyled>
      <Title title={"Työ kokemus"} span={"Työ kokemus"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Työ kokemus"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2021 - 2021"}
            title={""}
            subTitle={""}
            text={"Ei kokemusta"}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
