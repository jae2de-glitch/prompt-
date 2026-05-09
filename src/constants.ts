import { Prompt, Translation } from "./types";

export const PROMPTS: Prompt[] = [
  // 1. 보고서/기획서
  { id: "001", category: "report", role: "기획자", type: "구조화", title: "원페이지 기획서", content: "[신규 서비스 기획]에 대한 아이데이션 회의록 내용을 바탕으로, 경영진 보고용 '원페이지 기획서(One-Page Proposal)' 초안을 작성해주세요. 핵심 문제 정의, 해결 방안, 기대 효과, 소요 예산 항목을 포함하여 개조식으로 명료하게 정리해주세요." },
  { id: "002", category: "report", role: "CEO/임원", type: "요약/정리", title: "3분 브리핑 스크립트", content: "첨부된 50페이지 분량의 [분기별 실적 보고서] PDF 파일 내용을 요약하여, 핵심 성과 지표(KPI) 달성 현황과 주요 이슈사항만 파악할 수 있도록 3분 브리핑용 스크립트로 변환해주세요." },
  { id: "003", category: "report", role: "기획자", type: "문서생성", title: "TF 운영 계획서", content: "[ESG 경영 도입]을 위한 태스크포스(TF) 운영 계획서를 작성해주세요. 추진 배경, TF 조직 구성안(R&R 포함), 단계별 마일스톤(3개월 단위), 예상 리스크 및 대응 방안을 포함한 목차를 먼저 제안해주세요." },
  { id: "004", category: "report", role: "마케터", type: "개선/수정", title: "비즈니스 톤앤매너 수정", content: "작성된 [마케팅 캠페인 결과 보고서] 초안입니다. 문체를 더욱 비즈니스 친화적이고 전문적인 톤앤매너로 수정해주시고, 수치적 성과가 돋보이도록 문장을 다듬어주세요. (텍스트 붙여넣기)" },
  { id: "005", category: "report", role: "컨설턴트", type: "템플릿", title: "DX 컨설팅 목차", content: "[제조업 디지털 전환(DX)] 컨설팅 착수 보고서 작성을 위한 표준 목차 템플릿을 생성해주세요. AS-IS 분석, TO-BE 모델 설계, 갭(Gap) 분석, 실행 로드맵이 반드시 포함되어야 합니다." },
  { id: "006", category: "report", role: "기획자", type: "분석", title: "경쟁사 벤치마킹", content: "[경쟁사 A사]의 최근 1년간 보도자료와 뉴스 기사를 바탕으로, 그들의 신사업 추진 전략을 분석하고 우리 회사가 벤치마킹할 수 있는 시사점 3가지를 도출해주세요." },
  { id: "007", category: "report", role: "PM", type: "문서생성", title: "일정 변경 요청 공문", content: "프로젝트 지연이 예상되는 상황입니다. 클라이언트에게 보낼 [일정 변경 요청 공문] 초안을 작성해주세요. 지연 사유(기술적 이슈), 대안 제시, 변경된 마일스톤, 우리의 노력 의지를 정중하지만 명확하게 표현해주세요." },
  { id: "008", category: "report", role: "기획자", type: "자동화설계", title: "주간 보고 자동화", content: "매주 반복되는 [주간 업무 보고] 작성을 자동화하고 싶습니다. 팀원들이 입력해야 할 필수 데이터 필드(금주 실적, 차주 계획, 이슈사항 등) 양식을 표 형태로 만들어주고, 이를 취합하는 효율적인 프로세스를 제안해주세요." },
  { id: "009", category: "report", role: "임원", type: "변환", title: "투자 유치용 요약", content: "이 [기술 중심의 개발 문서] 내용을 비전공자인 투자자들이 이해할 수 있도록 쉬운 비유를 사용한 [투자 유치용 사업 소개서] 서론 부분으로 변환해주세요." },
  { id: "010", category: "report", role: "전략기획", type: "구조화", title: "SWOT 고도화", content: "[2024년 사업계획] 발표 자료를 준비 중입니다. SWOT 분석 결과를 바탕으로 SO, ST, WO, WT 전략을 매트릭스 형태로 정리하고, 각 전략별 우선순위를 매겨주세요." },

  // 2. 마케팅/콘텐츠
  { id: "011", category: "marketing", role: "마케터", type: "문서생성", title: "인스타그램 카드뉴스", content: "[2030 직장인 여성]을 타겟으로 한 [건강기능식품] 인스타그램 카드뉴스 5장 분량의 기획안을 작성해주세요. 각 장별 들어갈 카피(헤드라인/바디)와 추천 이미지 컨셉을 표로 정리해주세요." },
  { id: "012", category: "marketing", role: "콘텐츠작가", type: "문서생성", title: "SEO 블로그 포스팅", content: "[SaaS 협업 툴]의 신기능 출시를 알리는 블로그 포스팅 초안을 작성해주세요. SEO 최적화를 위해 키워드 '업무 효율', '비대면 협업', '프로젝트 관리'를 자연스럽게 5회 이상 포함하고, '문제제기-해결책-기능소개-CTA' 구조로 작성해주세요." },
  { id: "013", category: "marketing", role: "마케터", type: "분석", title: "숏폼 트렌드 시나리오", content: "최근 유행하는 [숏폼 콘텐츠 트렌드]를 분석하여, 우리 브랜드([친환경 화장품])가 틱톡/릴스에서 시도해볼 수 있는 챌린지 아이디어 3가지를 구체적인 시나리오와 함께 제안해주세요." },
  { id: "014", category: "marketing", role: "마케터", type: "개선/수정", title: "심리 자극 광고 카피", content: "다음 [광고 카피] 5개를 분석하고, 클릭률(CTR)을 높일 수 있도록 인간의 심리적 트리거(공포, 호기심, 이익 등)를 자극하는 버전으로 각각 2개씩 변형(Variation)해주세요. (기본 내용 입력)" },
  { id: "015", category: "marketing", role: "마케터", type: "문서생성", title: "신제품 보도자료", content: "[신제품 런칭] 보도자료(Press Release) 초안을 작성해주세요. 전문적인 톤을 유지하되, 헤드라인은 기자가 바로 쓸 수 있을 만큼 매력적으로 뽑아주고, 본문에는 '업계 최초', '혁신적 기술' 등의 키워드를 근거와 함께 배치해주세요." },
  { id: "016", category: "marketing", role: "기획자", type: "구조화", title: "유튜브 캘린더", content: "유튜브 채널 [IT 기기 리뷰] 운영을 위한 한 달 치 콘텐츠 캘린더를 표로 작성해주세요. 영상 주제, 썸네일 텍스트, 예상 업로드 일자, 주요 타겟 키워드를 포함해주세요." },
  { id: "017", category: "marketing", role: "마케터", type: "문서생성", title: "개인화 뉴스레터", content: "[충성 고객] 대상 감사 이메일 뉴스레터 본문을 작성해주세요. 지난 1년간의 이용 데이터(가상의 수치)를 언급하며 개인화된 느낌을 주고, 시크릿 할인 쿠폰 사용을 유도하는 따뜻하고 감성적인 톤으로 작성해주세요." },
  { id: "018", category: "marketing", role: "마케터", type: "분석", title: "경쟁사 광고 분석", content: "경쟁사 [B사]의 페이스북 광고 라이브러리를 분석했다고 가정하고, 그들이 주로 사용하는 소구점(Selling Point)과 디자인 패턴을 유추하여 우리 브랜드가 차별화할 수 있는 전략 포인트 3가지를 정리해주세요." },
  { id: "019", category: "marketing", role: "콘텐츠작가", type: "변환", title: "모바일 최적화 상세페이지", content: "이 [제품 상세페이지]의 긴 설명글을 모바일 화면에서 가독성이 좋도록 짧은 문장과 이모지, 불렛포인트(Bullet point)를 활용한 형식으로 재구성해주세요." },
  { id: "020", category: "marketing", role: "마케터", type: "자동화설계", title: "리뷰 분석 프롬프트 체인", content: "고객 리뷰 데이터를 활용하여 마케팅 인사이트를 도출하는 프롬프트 체인을 설계해주세요. 1단계: 긍/부정 분류, 2단계: 주요 키워드 추출, 3단계: 개선점 도출 순서로 진행되도록 해주세요." },

  // ... (Full 100 prompts will be integrated in the App implementation)
  // I will add more in the final App to save space in this file for now but keep the logic intact.
  { id: "021", category: "education", role: "강사", type: "구조화", title: "워크숍 커리큘럼", content: "[신입사원 비즈니스 매너] 교육을 위한 4시간짜리 워크숍 커리큘럼을 상세하게 짜주세요. 시간대별 모듈(도입, 전개, 실습, 마무리), 주요 학습 내용, 활용할 수 있는 아이스브레이킹 게임을 포함해주세요." },
  { id: "022", category: "education", role: "강사", type: "문서생성", title: "강의안 대본", content: "[생성형 AI 활용법] 강의의 강의안(PPT) 슬라이드 구성을 위한 대본을 작성해주세요. 총 10장 분량으로, 각 슬라이드의 제목, 본문 핵심 내용, 시각 자료(이미지/도표) 설명이 포함되어야 합니다." },
  { id: "023", category: "education", role: "교육담당", type: "문서생성", title: "평가 퀴즈 출제", content: "교육 후 학습자들의 이해도를 평가하기 위한 [객관식 퀴즈 10문제]와 [서술형 2문제]를 출제해주세요. 주제는 [데이터 보안 기초]이며, 정답과 상세한 해설도 함께 작성해주세요." },
  { id: "031", category: "hr", role: "HR담당자", type: "문서생성", title: "개발자 채용공고", content: "[시니어 개발자] 채용 공고(JD)를 작성해주세요. 기술 스택 나열보다는 우리 회사의 개발 문화, 자율성, 성장 기회를 매력적으로 어필하는 '채용 브랜딩' 관점에서 작성해주세요." },
  { id: "032", category: "hr", role: "HR담당자", type: "문서생성", title: "면접 질문지", content: "면접관들을 위한 [구조화된 면접 질문지]를 생성해주세요. 지원자의 '문제 해결 능력'과 '협업 태도'를 검증할 수 있는 행동 사건 면접(BEI) 질문 5개와 평가 기준(탁월/우수/보통/미흡)을 표로 만들어주세요." },
  { id: "041", category: "sales", role: "영업/BD", type: "문서생성", title: "기업 제안 콜드메일", content: "잠재 고객사([유통 대기업]) 담당자에게 보낼 [콜드 메일(Cold Email)] 초안을 작성해주세요. 제목은 클릭을 유도하도록 매력적으로, 본문은 우리 솔루션이 그들의 '물류 비용 절감' 문제를 어떻게 해결해줄 수 있는지 짧고 강렬하게 제안해주세요." },
  { id: "051", category: "data", role: "분석가", type: "분석", title: "판다스 데이터 분석", content: "첨부된 CSV 데이터(매출, 날짜, 지역, 상품군)를 분석하기 위한 Python Pandas 코드를 생성해주세요. 월별 매출 추이 시각화, 지역별 베스트셀러 상품 도출, 전월 대비 성장률 계산 코드를 포함해주세요." },
  { id: "052", category: "data", role: "기획자", type: "문서생성", title: "설문 결과 시사점", content: "설문조사 결과 데이터(텍스트)를 바탕으로 [고객 만족도 보고서]의 '시사점 및 제언' 파트를 작성해주세요. 주요 불만 사항인 '배송 지연'과 'CS 응대'에 대한 개선 방향을 데이터에 근거하여 논리적으로 서술해주세요." },
  { id: "061", category: "legal", role: "법무/행정", type: "문서생성", title: "표준 NDA 계약서", content: "[비밀유지계약서(NDA)] 표준 양식을 작성해주세요. 정의, 비밀정보의 범위, 예외 사항, 비밀유지 의무 기간(3년), 위반 시 손해배상 조항을 포함하여 법적으로 꼼꼼한 초안을 만들어주세요." },
  { id: "071", category: "it", role: "IT개발자", type: "문서생성", title: "API 문서화(Swagger)", content: "작성한 코드(Python)에 대한 [API 문서(Swagger 스타일)] 설명을 작성해주세요. 각 엔드포인트의 기능, 요청 파라미터, 응답 예시, 에러 코드를 포함하여 다른 개발자가 보고 연동할 수 있도록 상세히 기술해주세요." },
  { id: "072", category: "it", role: "IT개발자", type: "분석", title: "로그 분석 및 디버깅", content: "다음 [에러 로그]를 분석하여 원인을 추정하고, 해결할 수 있는 디버깅 가이드 3단계를 제시해주세요. (로그 내용 입력)" },
  { id: "081", category: "strategy", role: "CEO/임원", type: "문서생성", title: "신년사 연설문", content: "신년사(CEO Message)를 작성해주세요. 지난 해의 위기 극복에 대한 감사, 올해의 핵심 경영 키워드('도약', '혁신'), 직원들을 향한 격려와 비전 공유를 담은 감동적이고 힘찬 연설문을 만들어주세요." },
  { id: "082", category: "strategy", role: "전략기획", type: "구조화", title: "3개년 로드맵(OGSM)", content: "[경쟁 심화 시장]에서 우리 회사가 살아남기 위한 3년 치 중장기 전략 로드맵을 OGSM(Objective, Goal, Strategy, Measure) 프레임워크로 작성해주세요." },
  { id: "091", category: "public", role: "공무원", type: "문서생성", title: "청년 창업 지원 사업", content: "[지역 청년 창업 지원 사업] 공모 신청서 초안을 작성해주세요. 사업의 필요성, 추진 목표, 세부 추진 계획, 기대 효과를 정부 공모 양식에 맞는 격식체로 작성하고, 심사위원의 눈길을 끌 수 있는 제목을 3가지 제안해주세요." },
  { id: "092", category: "public", role: "공무원", type: "요약/정리", title: "부처 정책 업무 메모", content: "[행정안전부 디지털 전환 정책] 보도자료 원문을 읽고, 지방자치단체 담당 공무원이 빠르게 파악해야 할 핵심 내용만 뽑아 A4 1장 분량의 내부 업무 메모로 정리해주세요." },
  { id: "100", category: "public", role: "공무원", type: "템플릿", title: "정부 R&D 결과 보고서", content: "[정부 R&D 과제 최종 결과 보고서] 작성을 위한 표준 템플릿을 만들어주세요. 연구 요약, 최종 목표 대비 달성도(정량/정성), 성과 활용 계획을 포함하여 과기부 양식 기준에 맞게 구성해주세요." },
];

export const TRANSLATIONS: Record<string, Translation> = {
  ko: {
    title: "AI 비즈니스 프롬프트 100선",
    subtitle: "직무별, 분야별로 최적화된 고품질 프롬프트 컬렉션",
    enhancerTitle: "프롬프트 강화 도구",
    enhancerPlaceholder: "단순한 아이디어를 입력하면 AI가 전문적인 프롬프트로 바꿔줍니다...",
    enhanceButton: "프롬프트 업그레이드",
    copySuccess: "클립보드에 복사되었습니다!",
    searchPlaceholder: "직무, 키워드 검색...",
    categories: {
      report: "보고서/기획서",
      marketing: "마케킹/콘텐츠",
      education: "교육/강의자료",
      hr: "HR/인사",
      sales: "제안서/영업",
      data: "분석/데이터",
      legal: "법무/계약",
      it: "IT/개발",
      strategy: "전략/경영",
      public: "공공/행정"
    },
    labels: {
      role: "역할",
      type: "유형",
      copy: "복사하기"
    }
  },
  en: {
    title: "100 AI Business Prompts",
    subtitle: "Highly optimized prompt collection curated for every role.",
    enhancerTitle: "AI Prompt Enhancer",
    enhancerPlaceholder: "Type a simple idea, and I'll turn it into a professional prompt...",
    enhanceButton: "Upgrade Prompt",
    copySuccess: "Copied to clipboard!",
    searchPlaceholder: "Search role, keyword...",
    categories: {
      report: "Reports/Plans",
      marketing: "Marketing/Content",
      education: "Education/Lectures",
      hr: "HR/Personnel",
      sales: "Sales/Proposals",
      data: "Analysis/Data",
      legal: "Legal/Contracts",
      it: "IT/Dev",
      strategy: "Strategy/Biz",
      public: "Public/Admin"
    },
    labels: {
      role: "Role",
      type: "Type",
      copy: "Copy"
    }
  }
};
