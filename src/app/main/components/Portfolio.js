import React, { useState, useCallback } from 'react';
import { Section } from 'react-fullpage';
import styled from 'styled-components';
import classNames from 'classnames';
import { HiCursorClick } from 'react-icons/hi';
import {
  SiVisualstudio,
  SiThymeleaf,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGradle,
  SiJenkins,
  SiDocker,
  SiOracle,
  SiDbeaver,
  SiIntellijidea,
} from 'react-icons/si';
import { GrJava } from 'react-icons/gr';
import { FaAws } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiAptana } from 'react-icons/di';

const Tab1Content = () => {
  return (
    <>
      <div className="video">
        <iframe
          width="1050"
          height="550"
          src="https://www.youtube.com/embed/hXwrj8Rhu60"
          title="Tab3Content"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content1">
        <h3>1. 개발배경 및 목적</h3>
        <p>
          이 프로젝트는 외부 API를 활용하여 포켓몬 정보를 수집하고, 이를
          바탕으로 포켓몬 도감 웹사이트를 개발하는 것을 목표로 하였습니다. 또한,
          기본적인 회원 관리 기능(회원가입, 로그인, 마이페이지)과 홈페이지의
          기본 구조(헤더, 메인, 푸터)를 구성하는 연습을 통해 웹 개발의 기초를
          익히고자 하였습니다.
        </p>

        <h3>2. 개발환경 및 개발언어</h3>
        <ul>
          <li>
            프로그래밍 언어: <GrJava /> Java (17.0.10), <SiJavascript />{' '}
            JavaScript (6)
          </li>
          <li>
            백엔드: <DiAptana /> MyBatis (3.5.16), <DiAptana /> Lombok (1.18.32)
          </li>
          <li>
            프론트엔드: <DiAptana /> JSP, <SiCss3 /> CSS3, <SiHtml5 /> HTML5
          </li>
          <li>
            데이터베이스: <SiOracle /> Oracle (11), <SiDbeaver /> DBeaver
          </li>
          <li>
            DevOps: <SiDocker /> Docker
          </li>
          <li>
            개발 도구: <SiIntellijidea /> IntelliJ
          </li>
        </ul>

        <h3>3. 시스템 구성 및 아키텍처</h3>
        <ul>
          <li>백엔드: MyBatis 기반의 API 서버</li>
          <li>프론트엔드: JSP를 이용한 사용자 인터페이스</li>
          <li>데이터베이스: Oracle을 사용하여 이용자 데이터 관리</li>
          <li>
            그 외: MVC(Model-View-Controller) 구조이며 TDD(Test-Driven
            Development) 방식의 개발
          </li>
        </ul>

        <h3>4. 프로젝트 주요 기능</h3>
        <ul>
          <li>
            포켓몬 API: 외부 포켓몬 API를 활용하여 포켓몬 정보를 받아오고, 이를
            기반으로 도감을 생성.
          </li>
          <li>
            찜하기 기능: 사용자가 원하는 포켓몬을 찜할 수 있는 기능을 제공.
          </li>
          <li>
            전투 기능: 각 포켓몬의 전투력을 수치화하여 표시하고, 사용자의
            포켓몬과 PC에서 랜덤으로 제시된 포켓몬 간의 VS 게임 기능 제공.
          </li>
        </ul>
      </div>
    </>
  );
};

const Tab2Content = () => {
  return (
    <>
      <div className="video">
        <iframe
          width="1050"
          height="550"
          src="https://www.youtube.com/embed/nB4fG4DARG4"
          title="Tab3Content"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content2">
        <h3>1. 개발배경 및 목적</h3>
        <p>
          현대 사회에는 인터넷에 방대한 양의 여행 정보가 존재하지만, 정작 필요한
          정보를 찾는 것은 쉽지 않습니다. 흩어진 정보들로 인해 사용자들이 혼란을
          겪는 경우가 빈번하며, 개인의 취향을 고려한 맞춤형 정보 제공이 부족한
          상황입니다. 따라서, 사용자 개개인의 선호도를 반영한 여행지 추천
          시스템의 필요성이 절실하게 대두되고 있습니다. 이러한 문제를 해결하고자
          본 프로젝트에서는 사용자에게 최적화된 여행지를 추천하는 기능을
          개발하였습니다. 또한, 사용자는 여행 중의 소중한 순간들을 여행노트에
          기록함으로써 추억을 오래도록 간직할 수 있게 됩니다. 이를 통해
          사용자들이 더욱 풍부하고 만족스러운 여행 경험을 할 수 있도록
          지원하고자 합니다.
        </p>

        <h3>2. 개발환경 및 개발언어</h3>
        <ul>
          <li>
            프로그래밍 언어: <GrJava /> Java(17.0.10), <SiJavascript />
            JavaScript(6)
          </li>
          <li>
            백엔드: <SiSpring /> Spring(6.1.12), <SiSpringboot /> Spring
            Boot(3.3.3), <SiSpringsecurity /> Spring Security(6.3.3),
            <SiGradle /> Gradle(8.10)
          </li>
          <li>
            프론트엔드: <SiThymeleaf /> Spring Thymeleaf(3.1.2), <SiCss3 />{' '}
            CSS3, <SiHtml5 /> HTML5
          </li>
          <li>
            데이터베이스: <SiOracle /> Oracle(11), <SiDbeaver /> DBeaver(24.0.3)
          </li>
          <li>
            DevOps: <SiDocker /> Docker(26.0.0), <FaAws /> AWS EC2(21),
            <SiJenkins /> Jenkins(2.470)
          </li>
          <li>
            개발 도구: <SiIntellijidea /> IntelliJ
          </li>
        </ul>

        <h3>3. 시스템 구성 및 아키텍처</h3>
        <ul>
          <li>백엔드: Spring Boot 기반의 API 서버</li>
          <li>프론트엔드: Thymeleaf를 이용한 사용자 인터페이스</li>
          <li>데이터베이스: Oracle을 사용하여 이용자 데이터 관리</li>
          <li>DevOps: AWS EC2를 사용한 MSA 서버 구축</li>
        </ul>

        <h3>4. 프로젝트 주요 기능</h3>
        <ul>
          <li>
            여행지 추천: 개인 회원가입별 정보(나이 및 관심사)에 따른 여행지 추천
          </li>
          <li>
            여행지 정보: 여행지 정보 API 연동. 테마별, 지역별, 범주별 검색 및
            인기순, 이름순, 거리순 정렬
          </li>
          <li>
            여행지도: 지역 선택(시도 및 구군), 선택별 검색(관광지, 숙박, 쇼핑,
            문화시설), 주소 이름으로 검색
          </li>
          <li>
            여행노트 조회 및 좋아요 기능: 좋아요를 누르면 찜한 여행노트에 표시
          </li>
          <li>
            여행노트 조회 및 작성: 회원인 경우 여행노트 작성 가능, 여행노트
            탭에서 글쓰기 클릭 시 여행지 정보 탭으로 이동, 달력 클릭하여 일정
            선택 후 여행지 선택하고 작성
          </li>
        </ul>
      </div>
    </>
  );
};

const Tab3Content = () => {
  return (
    <>
      <div className="video">
        <iframe
          width="1050"
          height="550"
          src="https://www.youtube.com/embed/47nQ1yoZNvw"
          title="Tab3Content"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content3">
        <h3>1. 개발배경 및 목적</h3>
        <p>
          현대 사회에서 정신건강의 중요성이 커짐에 따라 대학생들의 심리적 지원을
          제공하는 상담센터의 역할이 중요해지고 있습니다. 하지만 많은 대학에서는
          상담 예약 및 기록 관리가 체계적이지 않아 비효율적인 부분이 존재합니다.
          이 프로젝트는 대학생들이 상담 예약을 보다 쉽게 하고, 상담사들이 상담
          기록을 효율적으로 관리할 수 있는 웹 솔루션을 개발하여 대학 내 심리상담
          서비스를 개선하고자 합니다.
        </p>

        <h3>2. 개발환경 및 개발언어</h3>
        <ul>
          <li>
            프로그래밍 언어: <GrJava /> Java(17.0.10), <SiJavascript />
            JavaScript(6)
          </li>
          <li>
            백엔드: <SiSpring /> Spring(6.1.12), <SiSpringboot /> Spring
            Boot(3.3.3), <SiSpringsecurity /> Spring Security(6.3.3),{' '}
            <SiGradle /> Gradle(8.10)
          </li>
          <li>
            프론트엔드: <SiReact /> React(18), <TbBrandNextjs />,
            Next.js(20.12.0), <SiCss3 /> CSS3, <SiHtml5 /> HTML5
          </li>
          <li>
            데이터베이스: <SiOracle /> Oracle(11), <SiDbeaver /> DBeaver(24.0.3)
          </li>
          <li>
            DevOps: <SiDocker /> Docker(26.0.0), <FaAws /> AWS EC2(21),
            <SiJenkins /> Jenkins(2.470)
          </li>
          <li>
            개발 도구: <SiIntellijidea /> IntelliJ IDEA, <SiVisualstudio />{' '}
            Visual Studio Code
          </li>
        </ul>

        <h3>3. 시스템 구성 및 아키텍처</h3>
        <ul>
          <li>백엔드: Spring Boot 기반의 API 서버</li>
          <li>프론트엔드: React를 이용한 사용자 인터페이스</li>
          <li>데이터베이스: Oracle을 사용하여 이용자 데이터관리</li>
          <li>DevOps: AWS EC2를 사용한 MSA 서버 구축</li>
        </ul>

        <h3>4. 프로젝트 주요 기능</h3>
        <ul>
          <li>
            상담 예약 시스템: 학생들이 원하는 시간에 상담을 예약할 수 있으며,
            가용한 상담사가 자동 배정됩니다. 단, 집단상담의 경우 정해진 상담
            프로그램 일정에 따라 예약이 진행됩니다. 예) a프로그램 10/08 화 오후
            2:30 진행. 이 경우 a프로그램 신청을 원하는 학생은 10/08 화 오후 2:30
            일정을 따라야 합니다.
          </li>
          <li>
            상담 기록 관리: 상담사는 상담 내용을 기록하고, 학생의 상담 이력을
            관리할 수 있습니다.
          </li>
          <li>
            상담 유형 관리: 개인 상담, 그룹 상담 등 다양한 상담 유형을 선택할 수
            있습니다.
          </li>
          <li>
            설문조사 모듈: 상담 후 설문조사를 통해 피드백을 수집하고, 결과를
            시각화하여 상담 서비스 품질을 평가할 수 있습니다.
          </li>
          <li>
            프로필 관리: 학생 및 상담사 모두 개인정보를 관리하고, 프로필을
            수정할 수 있습니다.
          </li>
          <li>
            관리자 대시보드: 상담 기록과 예약 상태를 통합적으로 관리할 수 있는
            관리자 대시보드를 제공합니다.
          </li>
          <li>채팅: 기본적인 CS 처리를 할 수 있도록 채팅을 제공합니다.</li>
        </ul>
      </div>
    </>
  );
};

const items = {
  tab1: {
    title: (
      <>
        <HiCursorClick style={{ fontSize: '1.2rem' }} />{' '}
        <a
          href="https://github.com/Class502GroupStudy4/pokemonProject"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '1.2rem' }}
        >
          GitHub에서 코드 보기
        </a>
      </>
    ),
    Content: Tab1Content,
  },
  tab2: {
    title: (
      <>
        <div style={{ marginBottom: '5px' }}>
          <HiCursorClick style={{ fontSize: '1.2rem' }} />{' '}
          <a
            href="https://github.com/Class502GroupStudy4/G9Project4"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '1.2rem' }}
          >
            GitHub에서 코드 보기 (메인프론트 페이지)
          </a>
        </div>
        <div>
          <HiCursorClick style={{ fontSize: '1.2rem' }} />{' '}
          <a
            href="https://github.com/Class502GroupStudy4/AdminServer"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '1.2rem' }}
          >
            GitHub에서 코드 보기 (관리자 페이지)
          </a>
        </div>
      </>
    ),
    Content: Tab2Content,
  },
  tab3: {
    title: (
      <>
        <HiCursorClick style={{ fontSize: '1.2rem' }} />{' '}
        <a
          href="https://github.com/ThxForService"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '1.2rem' }}
        >
          GitHub에서 코드 보기
        </a>
      </>
    ),
    Content: Tab3Content,
  },
};

const Wrapper = styled.div`
  padding-top: 100px;

  .tab-group {
    display: flex;
    height: 45px;
    border-bottom: 2px solid #000;

    li {
      padding: 0 25px;
      cursor: pointer;
      border: 1px solid #000;
      border-bottom: 0;
      margin-right: 5px;
      line-height: 42px;
      font-size: 1.4rem;
    }

    li.on {
      background: #000;
      color: #fff;
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

  .tab-content {
    padding: 20px;
  }

  /* 각 탭 내용에 대한 스타일 추가 */
  .content1,
  .content2,
  .content3 {
    margin-top: 20px; /* 탭 내용과 구분을 위한 여백 */
    padding: 15px; /* 내부 여백 */
    font-size: 1.2rem;
  }

  /* 제목 스타일 */
  .content1 h3,
  .content2 h3,
  .content3 h3 {
    padding: 0;
    margin: 10px 0;
    color: #333; /* 제목 색상 */
  }

  /* 리스트 스타일 */
  .content1 ul,
  .content2 ul,
  .content3 ul {
    list-style-type: disc; /* 글머리 기호 스타일 */
    padding-left: 20px; /* 왼쪽 여백 */
    margin-bottom: 20px;
  }

  .content1 p,
  .content2 p,
  .content3 p {
    margin: 0 0 20px;
  }

  .video {
    margin-top: 10px;
  }
`;

const Portfolio = () => {
  const [item, setItem] = useState(items.tab1);
  const [tab, setTab] = useState('tab1');

  const onClick = useCallback((tab) => {
    setItem(items[tab]);
    setTab(tab);
  }, []);

  const { title, Content } = item;

  return (
    <Section>
      <Wrapper className="layout-width">
        <h2>PORTFOLIO</h2>

        <ul className="tab-group">
          <li
            onClick={() => onClick('tab1')}
            className={classNames({ on: tab === 'tab1' })}
          >
            포켓몬 도감
          </li>
          <li
            onClick={() => onClick('tab2')}
            className={classNames({ on: tab === 'tab2' })}
          >
            여행어때
          </li>
          <li
            onClick={() => onClick('tab3')}
            className={classNames({ on: tab === 'tab3' })}
          >
            상담관리
          </li>
        </ul>
        <div className="tab-content">
          <div class="title">{title}</div>
          <Content />
        </div>
      </Wrapper>
    </Section>
  );
};

export default React.memo(Portfolio);
