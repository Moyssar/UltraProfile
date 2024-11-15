import React from "react";
import {
  ProfileSection,
  ProfileSkills,
  ProfileUl,
  ProfileLi,
  LiSpan,
  Span,
  OrngLink,
  Title,
  Skills,
  SkillsDesc,
  SkillsBar,
  BarTitle,
  BarPerc,
  BarParent,
  Sp1,
  Sp2,
  Sp3,
} from "./Profile";

const Profile = () => {
  return (
    <ProfileSection id="resume">
      <div className="container">
        <ProfileSkills>
          <Title>
            <Span>My</Span>Profile
          </Title>
          <ProfileUl>
            <ProfileLi>
              <LiSpan>Name</LiSpan>
              Moyssar Magdi
            </ProfileLi>
            <ProfileLi>
              <LiSpan>Birthday</LiSpan>
              06/07/2000
            </ProfileLi>
            <ProfileLi>
              <LiSpan>Address</LiSpan>
              Khartoum
            </ProfileLi>
            <ProfileLi>
              <LiSpan>Phone</LiSpan>
              4444 5555 6666
            </ProfileLi>
            <ProfileLi>
              <LiSpan>Email</LiSpan>
              example@gmail.com
            </ProfileLi>
            <ProfileLi>
              <LiSpan>MySite</LiSpan>
              <OrngLink href="https://www.google.com">www.google.com</OrngLink>
            </ProfileLi>
          </ProfileUl>
        </ProfileSkills>

        <Skills>
          <Title>
            Some <Span>skills</Span>
          </Title>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          <SkillsBar>
            <BarTitle>Bootstrap</BarTitle>
            <BarPerc>77%</BarPerc>
            <BarParent>
              <Sp1></Sp1>
            </BarParent>
          </SkillsBar>

          <SkillsBar>
            <BarTitle>CSS3</BarTitle>
            <BarPerc>90%</BarPerc>
            <BarParent>
              <Sp2></Sp2>
            </BarParent>
          </SkillsBar>
          <SkillsBar>
            <BarTitle>Photoshop</BarTitle>
            <BarPerc>80%</BarPerc>
            <BarParent>
              <Sp3></Sp3>
            </BarParent>
          </SkillsBar>
        </Skills>
      </div>
    </ProfileSection>
  );
};

export default Profile;
