import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink, Github, Globe, Users, Calendar, Tag, Star } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Cammunity Platform',
      japaneseTitle: 'キャミュニティプラットフォーム',
      subtitle: '메인 프로젝트',
      japaneseSubtitle: 'メインプロジェクト',
      description: '일본과 대학생들을 서로 연결하는 혁신적인 커뮤니티 플랫폼입니다. 서로 이해하고 이를 바탕으로 사용자들이 쉽게 소통할 수 있는 환경을 제공합니다.',
      japaneseDescription: '日本と韓国の大学生をつなぐ革新的なコミュニティプラットフォームです。文化的差異を理解し、それを基にユーザーが簡単にコミュニケーションできる環境を提供します。',
      category: 'main',
      status: 'active',
      technologies: ['React', 'Node.js', 'Electron', 'SQL'],
      team: ['김정민', '최재훈', '최윤성', '松村 太郎'],
      startDate: '2025년 8월',
      endDate: '진행중',
      image: '/api/placeholder/600/400',
      features: [
        '통합 학사 정보 알림 기능',
        '교내 인증 중고 장터 기능',
        '책임 있는 익명 커뮤니티 기능',
        '스마트 캠퍼스 맵 기능',
        '동아리·서클 지원 기능',
      ],
      japaneseFeatures: [
        '学業情報通知機能',
        '認証済み中古市場機能',
        '責任ある匿名コミュニティ機能',
        'スマートキャンパスマップ機能',
        'サークル・サークルサポート機能',
      ],
      challenges: [
        '실시간 학사 정보와 캠퍼스 공간 정보의 융합',
        '책임 있는 익명성 기반의 건전한 커뮤니티 구축',
        '일본 대학 문화와 사용자 심리를 반영한 현지화',
        '캠퍼스 단위 네트워크 효과 조기 활성화',
        '분산된 대학내 학사정보의 실시간 연동'
      ],
      japaneseChallenges: [
        '学業情報とキャンパス空間情報の融合',
        '責任ある匿名性ベースの健全なコミュニティ構築',
        '日本の大学文化とユーザー心理を反映したローカライゼーション',
        'キャンパス単位のネットワーク効果の早期活性化',
        '分散された大学內学業情報のリアルタイム連携'
      ],
      results: [
        '월간 활성 사용자 10,000명 달성',
        '일본 주요 대학 15곳 이상 확장',
        '사용자 만족도 4.8/5.0 달성'
      ],
      japaneseResults: [
        '月間アクティブユーザー10,000人達成',
        '日本の主要大学15校以上拡大',
        'ユーザー満足度4.8/5.0達成'
      ],
      demoUrl: 'https://22500735.github.io/demo2/',
      githubUrl: 'https://github.com/cammunity/platform',
      caseStudyUrl: '/cammunity'
    },
    {
      id: 2,
      title: 'Global Connect',
      japaneseTitle: 'グローバルコネクト',
      subtitle: '비즈니스 네트워킹',
      japaneseSubtitle: 'ビジネスネットワーキング',
      description: '일본과 한국의 기업들이 비즈니스 파트너를 찾고 협력할 수 있는 B2B 네트워킹 플랫폼입니다.',
      japaneseDescription: '日本と韓国の企業がビジネスパートナーを見つけ、協力できるB2Bネットワーキングプラットフォームです。',
      category: 'business',
      status: 'planning',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      team: ['김정민', '최재훈', '최윤성', '松村 太郎'],
      startDate: '2025년 9월',
      endDate: '계획중',
      image: '/api/placeholder/600/400',
      features: [
        '기업 프로필 및 매칭 시스템',
        'AI 기반 파트너 추천 엔진',
        '비즈니스 미팅 스케줄링',
        '계약 및 협약 관리 도구',
        '다국어 지원 및 통역 서비스'
      ],
      japaneseFeatures: [
        '企業プロフィール・マッチングシステム',
        'AIベースパートナー推薦エンジン',
        'ビジネスミーティングスケジューリング',
        '契約・協定管理ツール',
        '多言語対応・通訳サービス'
      ],
      challenges: [
        '기업 간 신뢰도 평가 시스템 구축',
        '문화적 차이를 고려한 매칭 알고리즘',
        '보안 및 개인정보 보호',
        '실시간 통역 서비스 구현'
      ],
      japaneseChallenges: [
        '企業間信頼度評価システム構築',
        '文化的差異を考慮したマッチングアルゴリズム',
        'セキュリティ・個人情報保護',
        'リアルタイム通訳サービス実装'
      ],
      results: [
        '프로젝트 계획 단계',
        '초기 투자 유치 진행중',
        '2026년 하반기 출시 예정'
      ],
      japaneseResults: [
        'プロジェクト計画段階',
        '初期投資誘致進行中',
        '2026年下半期リリース予定'
      ],
      demoUrl: 'https://globalconnect.cammunity.com',
      githubUrl: 'https://github.com/cammunity/global-connect',
      caseStudyUrl: '/projects/global-connect'
    },
    {
      id: 3,
      title: 'Spica Music',
      japaneseTitle: 'スピカミュージック',
      subtitle: '음악 플랫폼',
      japaneseSubtitle: '音楽プラットフォーム',
      description: '일본의 사용자들이 자신이 개발한 다양한 창작물을 자유롭게 공유하고, 자신만의 공연을 시작하고, 다른 사람의 공연을 예매할 수 있는 통합 음악 플랫폼 입니다.',
      japaneseDescription: '日本のユーザーが自分が開発した様々な創作物を自由に共有し、自分の演奏会を開始し、他のユーザーの演奏会を予約できる統合音楽プラットフォームです。',
      category: 'music',
      status: 'planning',
      technologies: ['React', 'Node.js', 'Electron', 'SQL', 'Docker'],
      team: ['김정민', '최재훈', '최윤성', '松村 太郎'],
      startDate: '2025년 9월',
      endDate: '계획중',
      image: '/api/placeholder/600/400',
      features: [
        '창작물 공유 및 평가 시스템',
        '공연 예매 및 관리 시스템',
        '라이브 및 연습실 검색 및 예약 시스템',
        '음악 플랫폼 통합 커뮤니티 시스템',
        '자유로운 라이브 녹화 및 공유 시스템'
      ],
      japaneseFeatures: [
        '創作物共有・評価システム',
        '演奏会予約・管理システム',
        'ライブ・練習室検索・予約システム',
        '統合音楽プラットフォーム統合コミュニティシステム',
        '自由なライブ録画・共有システム'
      ],
      challenges: [
        '일본 문화와 사용자 심리를 반영한 현지화',
        '책임 있는 익명성 기반의 건전한 커뮤니티 구축',
        '일본 음악 및 공연 문화와 사용자 심리를 반영한 현지화',
        '전국 단위 네트워크 효과 조기 활성화',
        '분산된 다양한 공연정보의 실시간 연동'
      ],
      japaneseChallenges: [
        '日本の文化とユーザー心理を反映したローカライゼーション',
        '責任ある匿名性ベースの健全なコミュニティ構築',
        '日本の音楽と演奏会文化とユーザー心理を反映したローカライゼーション',
        '全国単位のネットワーク効果の早期活性化',
        '分散された様々な演奏会情報のリアルタイム連携'
      ],
      results: [
        '프로젝트 계획 단계',
        '초기 투자 유치 진행중',
        '2026년 하반기 출시 예정'
      ],
      japaneseResults: [
        'プロジェクト計画段階',
        '初期投資誘致進行中',
        '2026年下半期リリース予定'
      ],
      demoUrl: 'https://spica-music.cammunity.com',
      githubUrl: 'https://github.com/cammunity/spica-music',
      caseStudyUrl: '/projects/spica-music'
    },
    {
      id: 4,
      title: 'TechSync',
      japaneseTitle: 'テックシンク',
      subtitle: '기술 협력',
      japaneseSubtitle: '技術協力',
      description: '일본과 한국의 기술 기업들이 연구 개발 프로젝트를 협력하여 진행할 수 있는 플랫폼입니다.',
      japaneseDescription: '日本と韓国の技術企業が研究開発プロジェクトを協力して進められるプラットフォームです。',
      category: 'technology',
      status: 'planning',
      technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Kubernetes'],
      team: ['김정민', '최재훈', '최윤성'],
      startDate: '2025년 9월',
      endDate: '계획중',
      image: '/api/placeholder/600/400',
      features: [
        '프로젝트 매칭 및 팀 구성',
        '연구 개발 자원 공유 시스템',
        '지적재산권 관리 및 라이센싱',
        '실시간 협업 도구 및 커뮤니케이션',
        '프로젝트 진행 상황 추적 및 분석'
      ],
      japaneseFeatures: [
        'プロジェクトマッチング・チーム構成',
        '研究開発資源共有システム',
        '知的財産権管理・ライセンス',
        'リアルタイム協業ツール・コミュニケーション',
        'プロジェクト進行状況追跡・分析'
      ],
      challenges: [
        '기술적 호환성 및 표준화',
        '지적재산권 보호 및 분쟁 해결',
        '국제 협력 프로젝트 관리',
        '보안 및 기밀 정보 보호'
      ],
      japaneseChallenges: [
        '技術的互換性・標準化',
        '知的財産権保護・紛争解決',
        '国際協力プロジェクト管理',
        'セキュリティ・機密情報保護'
      ],
      results: [
        '프로젝트 계획 단계',
        '초기 투자 유치 진행중',
        '2026년 하반기 출시 예정'
      ],
      japaneseResults: [
        'プロジェクト計画段階',
        '初期投資誘致進行中',
        '2026年下半期リリース予定'
      ],
      demoUrl: null,
      githubUrl: null,
      caseStudyUrl: '/projects/techsync'
    },
    {
      id: 5,
      title: 'Camp',
      japaneseTitle: 'キャンプ',
      subtitle: '캠프',
      japaneseSubtitle: 'キャンプ',
      description: '일본에서 서비스하는 통합 지도 및 지도 포함 여러 서비스를 통합한 플랫폼입니다.',
      japaneseDescription: '日本で提供される統合地図と地図を含む複数のサービスを統合したプラットフォームです。',
      category: 'main',
      status: 'planning',
      technologies: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker'],
      team: ['김정민', '최재훈', '최윤성', '松村 太郎'],
      startDate: '2025년 9월',
      endDate: '계획중',
      image: '/api/placeholder/600/400',
      features: [
        '통합 지도 서비스',
        '지도 포함 여러 서비스 통합',
        '캠프 플랫폼 통합 커뮤니티 시스템',
        '부동산, 예약, 예매, 쇼핑, 결제 등 다양한 서비스 통합',
        '다양한 발전을 통해 다양한 서비스 경험 제공 목표'
      ],
      japaneseFeatures: [
        '統合地図サービス',
        '地図を含む複数のサービスを統合',
        '統合コミュニティシステム',
        '不動産、予約、予約、ショッピング、決済などの様々なサービスの統合',
        '様々な発展を通じて様々なサービス体験を提供する目標'
      ],
      challenges: [
        '일본 문화와 사용자 심리를 반영한 현지화',
        '일본의 다양한 지리적 정보와 사용자 심리를 반영한 현지화',
        '전국 단위 네트워크 효과 조기 활성화',
        '분산된 다양한 서비스 정보의 실시간 연동',
        '다양한 발전을 통한 다양한 미래 지향적 기술 개발'
      ],
      japaneseChallenges: [
        '日本の文化とユーザー心理を反映したローカライゼーション',
        '日本の地理情報とユーザー心理を反映したローカライゼーション',
        '全国単位のネットワーク効果の早期活性化',
        '分散された様々なサービス情報のリアルタイム連携',
        '様々な発展を通じて様々な未来志向的技術開発'
      ],
      results: [
        '프로젝트 계획 단계',
        '초기 투자 유치 진행중',
        '2026년 하반기 출시 예정'
      ],
      japaneseResults: [
        'プロジェクト計画段階',
        '初期投資誘致進行中',
        '2026年下半期リリース予定'
      ],
      demoUrl: null,
      githubUrl: null,
      caseStudyUrl: '/projects/camp'
    }
    
  ]

  const categories = [
    { id: 'all', label: '전체', japanese: '全体' },
    { id: 'main', label: '메인 프로젝트', japanese: 'メインプロジェクト' },
    { id: 'business', label: '비즈니스', japanese: 'ビジネス' },
    { id: 'education', label: '교육', japanese: '教育' },
    { id: 'technology', label: '기술', japanese: '技術' }
  ]

  const statuses = {
    active: { label: '진행중', japanese: '進行中', color: 'bg-green-500' },
    completed: { label: '완료', japanese: '完了', color: 'bg-blue-500' },
    planning: { label: '계획중', japanese: '計画中', color: 'bg-yellow-500' }
  }

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/20">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              우리 <span className="gradient-text">프로젝트</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              일본과 한국을 연결하는 혁신적인 프로젝트들
              <br />
              문화와 기술의 융합으로 새로운 가치를 창출합니다
            </p>
            <p className="text-lg text-gray-500 mt-4">
              日本と韓国をつなぐ革新的なプロジェクト
              <br />
              文化と技術の融合で新しい価値を創造します
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Tag, number: '5', label: '프로젝트', japanese: 'プロジェクト' },
              { icon: Users, number: '6+', label: '팀원 참여', japanese: 'チーム参加' },
              { icon: Calendar, number: '2025', label: '시작년도', japanese: '開始年' },
              { icon: Star, number: '95%', label: '성공률', japanese: '成功率' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.japanese}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <span className="block">{category.label}</span>
                <span className="text-xs opacity-75">{category.japanese}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card hover:shadow-xl transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-xl font-bold">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${statuses[project.status].color}`}>
                      {statuses[project.status].label}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {project.japaneseTitle}
                    </p>
                    <p className="text-lg font-medium text-primary mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      {project.japaneseSubtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{project.startDate} ~ {project.endDate}</span>
                    <span>{project.team.length}명 참여</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-primary hover:text-primary-dark font-medium transition-colors duration-200">
                      자세히 보기
                    </button>
                    <div className="flex space-x-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-lg text-gray-500 mb-1">
                      {selectedProject.japaneseTitle}
                    </p>
                    <p className="text-xl font-semibold text-primary mb-2">
                      {selectedProject.subtitle}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {selectedProject.japaneseSubtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                  >
                    <span className="text-xl">×</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">프로젝트 설명</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {selectedProject.description}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {selectedProject.japaneseDescription}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">기술 스택</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-3">팀 구성</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.team.map((member, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">주요 기능</h3>
                    <ul className="space-y-2 mb-4">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2">
                      {selectedProject.japaneseFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-500 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">도전 과제</h3>
                    <ul className="space-y-2 mb-4">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2">
                      {selectedProject.japaneseChallenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-500 text-xs">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-semibold text-gray-800 mb-3">성과 및 결과</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.results.map((result, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full" />
                          <span className="text-gray-800 font-medium">{result}</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          {selectedProject.japaneseResults[index]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>데모 보기</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {selectedProject.caseStudyUrl && (
                    <Link
                      to={selectedProject.caseStudyUrl}
                      className="btn-secondary flex items-center space-x-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>케이스 스터디</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                프로젝트에 참여하세요
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                일본과 한국을 연결하는 혁신적인 프로젝트에 함께 참여하여
                <br />
                새로운 가치를 창출해보세요
              </p>
              <p className="text-lg text-white/80 mb-8">
                日本と韓国をつなぐ革新的なプロジェクトに一緒に参加して
                <br />
                新しい価値を創造してみませんか
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/cammunity"
                  className="btn-secondary bg-white text-secondary hover:bg-gray-100 flex items-center space-x-2"
                >
                  <span>캐뮤니티 프로젝트 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
                  문의하기
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
