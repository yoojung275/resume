import React from 'react';
import { Section } from 'react-fullpage';
import styled from 'styled-components';
import Item from './Item';
import {
  SiApachetomcat,
  SiThymeleaf,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGradle,
  SiGit,
  SiJenkins,
  SiDocker,
  SiOracle,
  SiDbeaver,
} from 'react-icons/si';
import { GrJava } from 'react-icons/gr';
import { FaAws, FaNodeJs } from 'react-icons/fa';
import { TbBrandReactNative, TbBrandNextjs } from 'react-icons/tb';

const Wrapper = styled.div`
  &.first {
    padding-top: 51px;
  }

  display: flex;
  flex-wrap: wrap;

  .item {
    width: 0;
    flex-grow: 1;
    margin: 20px 0;
  }

  .item + .item {
    margin-left: 20px;
  }

  @media all and (max-width: 650px) {
    .item {
      width: 100%;
    }

    .item + .item {
      margin-left: 0;
    }
  }
`;

const EducationContent = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;

  .entry {
    margin-bottom: 30px;
  }

  .date {
    color: #aaa; /* 흐릿한 색상 */
    font-style: italic; /* 이탤릭체 */
  }
`;

const CertificateContent = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;

  .entry {
    margin-bottom: 30px; /* 글자 사이 간격 */
  }

  .date {
    color: #aaa; /* 흐릿한 색상 */
    font-style: italic; /* 이탤릭체 */
  }
`;

const SkillContent = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;

  .category {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const WorkExperienceContent = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;

  .entry {
    margin-bottom: 30px;
  }

  .date {
    color: #aaa; /* 흐릿한 색상 */
    font-style: italic; /* 이탤릭체 */
  }
`;

const Experience = () => {
  return (
    <Section>
      <Wrapper className="layout-width first">
        <Item title="EDUCATION">
          <EducationContent>
            <div className="entry">
              <span className="date">Since 2024.03 - 09</span>
              <br />
              중앙정보기술인재개발원 프로젝트 기반 자바(JAVA) 응용 SW개발자
              취업과정 수료
            </div>
            <div className="entry">
              <span className="date">Since 2016.03 - 2021.08</span>
              <br />
              덕성여자대학교 정치외교학과 졸업
            </div>
            <div className="entry">
              <span className="date">Since 2013.02 - 2016.02</span>
              <br />
              부명고등학교 졸업
            </div>
          </EducationContent>
        </Item>
        <Item title="WORK EXPERIENCE">
          <WorkExperienceContent>
            <div className="entry">
              <span className="date">2021.09 - 2023.09</span>
              <br />
              덕성여자대학교 학생서비스센터 계약직 (2년)
            </div>
          </WorkExperienceContent>
        </Item>
      </Wrapper>
      <Wrapper className="layout-width width">
        <Item title="CERTIFICATE & AWARDS">
          <CertificateContent>
            <div className="entry">
              <span className="date">2024.09.20</span>
              <br />
              SQL 개발자 (SQLD)
            </div>
            <div className="entry">
              <span className="date">2020.01.31</span>
              <br />
              컴퓨터활용능력 2급
            </div>
            <div className="entry">
              <span className="date">2019.12.20</span>
              <br />
              2019 부천시 대학생 세계탐방 프로젝트 최우수상 (1등상)
            </div>
          </CertificateContent>
        </Item>
        <Item title="SKILL">
          <SkillContent>
            <div className="category">BackEnd Dev</div>
            <div className="skills">
              <div>
                <GrJava /> Java
              </div>
              <div>
                <SiSpring /> Spring
              </div>
              <div>
                <SiSpringboot /> Spring Boot
              </div>
              <div>
                <SiSpringsecurity /> Spring Security
              </div>
              <div>
                <SiThymeleaf /> Thymeleaf
              </div>
              <div>
                <SiApachetomcat /> Apache Tomcat
              </div>
              <div>
                <SiPython /> Python
              </div>
              <div>
                <FaNodeJs /> Node.js
              </div>
            </div>
            <div style={{ margin: '20px 0' }} />
            <div className="category">FrontEnd Dev</div>
            <div className="skills">
              <div>
                <SiJavascript /> JavaScript
              </div>
              <div>
                <SiReact /> React
              </div>
              <div>
                <TbBrandReactNative /> React Native
              </div>
              <div>
                <TbBrandNextjs /> Next.js
              </div>
              <div>
                <SiHtml5 /> HTML5
              </div>
              <div>
                <SiCss3 /> CSS3
              </div>
            </div>
            <div style={{ margin: '20px 0' }} />
            <div className="category">Build & CI/CD Tools</div>
            <div className="skills">
              <div>
                <SiGradle /> Gradle
              </div>
              <div>
                <SiGit /> Git
              </div>
              <div>
                <SiJenkins /> Jenkins
              </div>
              <div>
                <SiDocker /> Docker
              </div>
            </div>
            <div style={{ margin: '20px 0' }} />
            <div className="category">DataBase</div>
            <div className="skills">
              <div>
                <SiOracle /> Oracle
              </div>
              <div>
                <SiDbeaver /> DBeaver
              </div>
            </div>
            <div style={{ margin: '20px 0' }} />
            <div className="category">Cloud Service</div>
            <div className="skills">
              <div>
                <FaAws /> AWS
              </div>
            </div>
          </SkillContent>
        </Item>
      </Wrapper>
    </Section>
  );
};

export default React.memo(Experience);
