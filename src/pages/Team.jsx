import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, MapPin, Mail, Linkedin, Github, Globe, Award, Clock } from 'lucide-react'

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const [filter, setFilter] = useState('all')

  const teamMembers = [
    {
      id: 1,
      name: '김정민',
      japaneseName: 'キム・ジョンミン',
      position: 'CEO & Founder',
      japanesePosition: 'CEO & 創業者',
      location: '울산, 대한민국',
      japaneseLocation: '울산、韓国',
      department: 'leadership',
      image: '/api/placeholder/300/300',
      bio: '일본과 한국의 문화적 차이를 이해하고 이를 바탕으로 혁신적인 비즈니스 모델을 창출하는 것을 전문으로 합니다. 한동대학교에서 데이터과학을 전공하고, 다양한 프로젝트 경험을 바탕으로 Cammunity를 설립했습니다.',
      japaneseBio: '日本と韓国の文化的差異を理解し、それを基に革新的なビジネスモデルを創造することを専門としています。韓国の大学でデータサイエンスを専攻し、様々なプロジェクトの経験を基にキャミュニティを設立しました。',
      skills: ['전략 기획', '비즈니스 개발', '글로벌 마케팅'],
      japaneseSkills: ['戦略企画', 'ビジネス開発', 'グローバルマーケティング'],
      email: 'kimjeongmin0714kjm@gmail.com',
      linkedin: 'https://linkedin.com/in/jungmin-kim',
      github: 'https://github.com/jungmin-kim',
      experience: '1년',
      education: '한동대학교 경영학과'
    },
    {
      id: 2,
      name: '최재훈',
      japaneseName: 'ジョンヒョン',
      position: 'COO & Co-founder',
      japanesePosition: 'COO & 共同創業者',
      location: '서울, 대한민국',
      japaneseLocation: 'ソウル、韓国',
      department: 'leadership',
      image: '/api/placeholder/300/300',
      bio: '일본과 한국의 문화적 차이를 이해하고 이를 바탕으로 혁신적인 비즈니스 모델을 창출하는 것을 전문으로 합니다. 한동대학교에서 경영학을 전공하고, 다양한 프로젝트 경험을 바탕으로 Cammunity를 설립했습니다.',
      japaneseBio: '日本と韓国の文化的差異を理解し、それを基に革新的なビジネスモデルを創造することを専門としています。韓国の大学でデータサイエンスを専攻し、様々なプロジェクトの経験を基にキャミュニティを設立しました。',
      skills: ['전략 기획', '비즈니스 개발', '글로벌 마케팅'],
      japaneseSkills: ['戦略企画', 'ビジネス開発', 'グローバルマーケティング'],
      email: 'chlwogns2001@gmail.com',
      linkedin: 'https://www.linkedin.com/in/jaehoon-choi-7304572bb/',
      github: 'https://github.com/jaehun-choi',
      experience: '2년',
      education: '한동대학교 경영학과'
    },
    {
      id: 3,
      name: '장채연',
      japaneseName: 'ジャン・チェヨン',
      position: 'Head of Design',
      japanesePosition: 'デザイン責任者',
      location: '판교, 대한민국',
      japaneseLocation: 'パンギョ、韓国',
      department: 'design',
      image: '/api/placeholder/300/300',
      bio: '사용자 경험과 인터페이스 디자인을 전문으로 하는 디자이너입니다. 토스에서 1년간 근무하며 다양한 제품의 UX/UI를 담당했고, 현재 Cammunity의 브랜드 아이덴티티와 사용자 경험을 설계하고 있습니다.',
      japaneseBio: 'ユーザーエクスペリエンスとインターフェースデザインを専門とするデザイナーです。トスで1年間勤務し、様々な製品のUX/UIを担当し、現在キャミュニティのブランドアイデンティティとユーザーエクスペリエンスを設計しています。',
      skills: ['UX/UI 디자인', '브랜드 디자인', '프로토타이핑'],
      japaneseSkills: ['UX/UIデザイン', 'ブランドデザイン', 'プロトタイピング'],
      email: 'chae@cammunity.com',
      linkedin: 'https://linkedin.com/in/chae-jang',
      github: 'https://github.com/chae-jang',
      experience: '6년',
      education: '홍익대학교 디자인학과'
    },
    {
      id: 4,
      name: '최윤성',
      japaneseName: 'チョン・ユンソン',
      position: 'Lead Developer & Co-founder',
      japanesePosition: 'リード開発者 & 共同創業者',
      location: '서울, 대한민국',
      japaneseLocation: 'ソウル、韓国',
      department: 'engineering',
      image: '/api/placeholder/300/300',
      bio: '풀스택 개발과 서버 및 보안을 전문으로 하는 엔지니어입니다. 다양한 스타트업에서 1년간 근무하며 대규모 서버 및 핀테크 프로젝트를 개발했고, 현재 Cammunity의 핵심 플랫폼 개발을 담당하고 있습니다.',
      japaneseBio: 'フルスタック開発とサーバーとセキュリティを専門とするエンジニアです。様々なスタートアップで1年間勤務し、大規模サーバーとフィンテックプロジェクトを開発し、現在キャミュニティのコアプラットフォーム開発を担当しています。',
      skills: ['React/Node.js', 'SQL', 'DevOps', 'Server'],
      japaneseSkills: ['React/Node.js', 'SQL', 'DevOps', 'Server'],
      email: 'yunsung@cammunity.com',
      linkedin: 'https://linkedin.com/in/yunsung-choi',
      github: 'https://github.com/yunsung-choi',
      experience: '5년',
      education: '한동대학교 전산학과'
    },
    {
      id: 5,
      name: '정타로',
      japaneseName: '松村 太郎',
      position: 'Japan & Marketing Manager',
      japanesePosition: '日本 & マーケティングマネージャー',
      location: '도쿄, 일본',
      japaneseLocation: '東京、日本',
      department: 'marketing',
      image: '/api/placeholder/300/300',
      bio: '디지털 마케팅과 브랜드 전략을 전문으로 하는 마케터입니다. 높은 열정과 리더십으로 현재 Cammunity의 글로벌 마케팅 전략을 수립하고 있습니다.',
      japaneseBio: 'デジタルマーケティングとブランド戦略を専門とするマーケターです。高い熱意とリーダーシップで、現在キャミュニティのグローバルマーケティング戦略を策定しています。',
      skills: ['디지털 마케팅', '브랜드 전략', '콘텐츠 마케팅', '리더십'],
      japaneseSkills: ['デジタルマーケティング', 'ブランド戦略', 'コンテンツマーケティング'],
      email: 'taro@cammunity.com',
      linkedin: 'https://linkedin.com/in/taro-matsumura',
      github: 'https://github.com/taro-matsumura',
      experience: '1년',
      education: '아오야마가쿠인대학 경영학과'
    },
    {
      id: 6,
      name: '토키와 카에',
      japaneseName: '常盤 佳永',
      position: "Product Manager",
      japanesePosition: "プロダクトマネージャー",
      location: "도쿄, 일본",
      japaneseLocation: "東京、日本",
      department: "product",
      image: "/api/placeholder/300/300",
      bio: "국제 커뮤니케이션 전공자로서, 문화 간 커뮤니케이션과 심리에 대한 이해를 바탕으로 사회에 기여하고 사람들을 연결하는 프로젝트에 열정을 가지고 있는 프로덕트 매니저입니다.",
      japaneseBio: "国際コミュニケーションを専攻し、異文化コミュニケーションや心理学への理解を活かして、人と人をつなぎ、社会に貢献するプロジェクトに情熱を持つプロダクトマネージャーです。",
      skills: ["제품 기획", "사용자 리서치", "사회적 임팩트 프로젝트", "커뮤니케이션"],
      japaneseSkills: ["製品企画", "ユーザーリサーチ", "社会的インパクトプロジェクト", "コミュニケーション"],
      email: "misaki@cammunity.com",
      linkedin: "https://linkedin.com/in/someone",
      github: "https://github.com/someone",
      experience: "1년",
      education: "아오야마가쿠인대학 국제 커뮤니케이션 학과"
    },
    {
      id: 7,
      name: '누군가',
      japaneseName: 'ナナシ・ナナシ',
      position: 'Product Manager',
      japanesePosition: 'プロダクトマネージャー',
      location: '대한민국',
      japaneseLocation: '韓国',
      department: 'product',
      image: '/api/placeholder/300/300',
      bio: '제품 기획과 사용자 리서치를 전문으로 하는 프로덕트 매니저입니다.',
      japaneseBio: '製品企画とユーザーリサーチを専門とするプロダクトマネージャーです。',
      skills: ['제품 기획', '사용자 리서치', '애자일 개발'],
      japaneseSkills: ['製品企画', 'ユーザーリサーチ', 'アジャイル開発'],
      email: 'misaki@cammunity.com',
      linkedin: 'https://linkedin.com/in/someone',
      github: 'https://github.com/someone',
      experience: '1년',
      education: '뭐시기 뭐시기'
    }
  ]

  const departments = [
    { id: 'all', label: '전체', japanese: '全体' },
    { id: 'leadership', label: '경영진', japanese: '経営陣' },
    { id: 'engineering', label: '개발팀', japanese: '開発チーム' },
    { id: 'design', label: '디자인팀', japanese: 'デザインチーム' },
    { id: 'marketing', label: '마케팅팀', japanese: 'マーケティングチーム' },
    { id: 'product', label: '제품팀', japanese: 'プロダクトチーム' }
  ]

  const filteredMembers = filter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === filter)

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
              우리 <span className="gradient-text">팀</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              일본과 한국의 다양한 전문가들이 모여 만드는
              <br />
              혁신적인 솔루션
            </p>
            <p className="text-lg text-gray-500 mt-4">
              日本と韓国の様々な専門家が集まって作る
              <br />
              革新的なソリューション
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '6+', label: '팀원', japanese: 'チームメンバー' },
              { icon: Globe, number: '2', label: '국가', japanese: '国' },
              { icon: Award, number: '4+', label: '평균 경력', japanese: '平均経験年数' },
              { icon: Clock, number: '2025', label: '설립년도', japanese: '設立年' }
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

      {/* Department Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setFilter(dept.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  filter === dept.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <span className="block">{dept.label}</span>
                <span className="text-xs opacity-75">{dept.japanese}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="card hover:shadow-xl transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {member.japaneseName}
                    </p>
                    <p className="text-lg font-medium text-primary mb-1">
                      {member.position}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      {member.japanesePosition}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {member.location}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      {selectedMember.name}
                    </h2>
                    <p className="text-lg text-gray-500 mb-1">
                      {selectedMember.japaneseName}
                    </p>
                    <p className="text-xl font-semibold text-primary mb-2">
                      {selectedMember.position}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {selectedMember.japanesePosition}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                  >
                    <span className="text-xl">×</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">위치</h3>
                    <p className="text-gray-600 mb-4">{selectedMember.location}</p>
                    <p className="text-sm text-gray-500">{selectedMember.japaneseLocation}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">경력</h3>
                    <p className="text-gray-600 mb-4">{selectedMember.experience}</p>
                    <h3 className="font-semibold text-gray-800 mb-2">학력</h3>
                    <p className="text-gray-600">{selectedMember.education}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">소개</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {selectedMember.bio}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {selectedMember.japaneseBio}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">전문 분야</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedMember.japaneseSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>이메일 보내기</span>
                  </a>
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center space-x-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Join Our Team */}
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
                우리 팀에 합류하세요
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
                <button className="btn-secondary bg-white text-secondary hover:bg-gray-100">
                  채용 정보 보기
                </button>
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

export default Team
