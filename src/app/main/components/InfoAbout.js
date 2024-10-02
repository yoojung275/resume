import React from 'react';
import { Section } from 'react-fullpage';
import ProfileImage from './ProfileImage';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
  padding-top: 51px;
  .inner {
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
  }
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 1.2rem;
  padding: 10px; 

  .info-row {
    display: flex;
    /*justify-content: space-between; */
    margin-bottom: 30px;
  }

  .info-group {
    display: flex;
    flex-direction: column;
    width: 0;
    flex-grow: 1;
    div {
      &:first-child {
        font-weight: bold; /* 제목을 두껍게 */
      }
    }
  }
`;

const AboutContent = styled.div`
  margin-top: 10px;
  line-height: 1.5; /* 가독성을 위해 줄 간격을 조절 */
  font-size: 1.2rem;
`;

const InfoAbout = () => {
  return (
    <Section>
      <Wrapper>
        <ProfileImage />
        <div className="layout-width inner">
          <Item title="INFO">
            <InfoContent>
              <div className="info-row">
                <div className="info-group">
                  <div>NAME</div>
                  <div>PARK YOOJUNG</div>
                </div>
                <div className="info-group">
                  <div>BIRTH</div>
                  <div>1997.11.11</div>
                </div>
              </div>
              <div className="info-row">
                <div className="info-group">
                  <div>ADDRESS</div>
                  <div>Bucheon, Gyeonggi-do</div>
                </div>
                <div className="info-group">
                  <div>EMAIL</div>
                  <div>yoojung275@gmail.com</div>
                </div>
              </div>
              <div className="info-group">
                <div>GITHUB</div>
                <div>
                  <a
                    href="https://github.com/yoojung275"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/yoojung275
                  </a>
                </div>
              </div>
            </InfoContent>
          </Item>
          <Item title="ABOUT">
            <AboutContent>
              저는 비전공지만 소프트웨어 개발에 깊은 흥미를 느껴 풀스택
              개발자라는 진로를 가지게 되었습니다. 개발자의 코드 한 줄로 웹에서
              다양한 기능을 창조한다는 점이 제게 큰 매력으로 다가왔습니다. 비록
              제 학문적 배경은 정치외교학으로 컴퓨터 및 개발 분야와 거리가 있지만,
              저는 프로그래밍의 무한한 발전 가능성과 창조성에 깊이 매료되었습니다. 
              이러한 열정은 단순한 호기심을 넘어, 새로운 기술을 배우고
              활용하고자 하는 강한 욕구로 이어졌습니다.
              <br />
              <br />
              저의 개발자로서의 시작은 '프로젝트 기반 자바(JAVA) 응용 SW개발자
              취업과정'입니다. 그곳에서 저는 개발자를 꿈꾸는 다양한 사람들을
              만났고 소통과 협업을 통해 지식을 나누고 문제를 해결하는 방법을
              배웠습니다. 세 번의 협동 프로젝트를 통해 프로그래밍의 기초를
              배우며 문제 해결 능력을 키웠습니다. 특히, 프론트엔드와 백엔드 개발
              모두에 흥미를 느끼게 되었고, 이러한 기술적 다양성이 저의 성장에
              크게 기여했습니다.
              <br />
              <br />
              최근에는 다양한 프로그래밍 언어와 프레임워크에 대한 개인적인
              학습을 통해 지식을 계속해서 보강해 나가고 있습니다. 그동안 쌓아온
              지식과 기술을 바탕으로 이제는 더 심화된 프로젝트에도 도전하고
              싶습니다.
            </AboutContent>
          </Item>
        </div>
      </Wrapper>
    </Section>
  );
};

export default React.memo(InfoAbout);
