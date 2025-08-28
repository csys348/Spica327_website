import React from 'react'
import { motion } from 'framer-motion'
import { Users, Globe, Target, Award, Clock, Heart } from 'lucide-react'

const About = () => {
  const companyInfo = {
    name: 'Spica 327 (스피카 327)',
    founded: '2025년',
    headquarters: '도쿄, 일본 / 포항, 대한민국',
    employees: '6+',
    vision: '일본과 한국을 연결하는 혁신적인 소통 플랫폼의 선두주자',
    mission: '문화적 차이를 넘어선 창의적인 솔루션으로 고객의 성공을 이끌어내다'
  }

  const values = [
    {
      icon: Users,
      title: '협력',
      subtitle: 'Collaboration',
      description: '다양한 배경과 전문성을 가진 팀원들이 함께 협력하여 최고의 결과를 만들어냅니다.',
      japanese: '様々な背景と専門性を持つチームメンバーが協力して最高の結果を作り出します。'
    },
    {
      icon: Globe,
      title: '글로벌 마인드',
      subtitle: 'Global Mindset',
      description: '국경을 넘어선 사고와 문화적 이해를 바탕으로 세계적인 서비스를 제공합니다.',
      japanese: '国境を越えた思考と文化的理解に基づいて世界的なサービスを提供します。'
    },
    {
      icon: Target,
      title: '혁신',
      subtitle: 'Innovation',
      description: '전통과 현대를 결합한 독창적인 접근 방식으로 새로운 가치를 창출합니다.',
      japanese: '伝統と現代を組み合わせた独創的なアプローチで新しい価値を創造します。'
    },
    {
      icon: Award,
      title: '품질',
      subtitle: 'Quality',
      description: '최고의 품질과 사용자 경험을 제공하기 위해 끊임없이 노력합니다.',
      japanese: '最高の品質とユーザーエクスペリエンスを提供するために絶えず努力します。'
    }
  ]

  const timeline = [
    {
      year: '2025',
      title: '회사 설립',
      description: '한국 포항에서 Spica 327 설립',
      japanese: '韓国ポハンでスピカ327設立'
    },
    {
      year: '2025',
      title: '일본 진출',
      description: '도쿄에 일본 지사 설립 및 팀 확장',
      japanese: '東京に日本支社設立とチーム拡張'
    },
    {
      year: '2025',
      title: '첫 번째 프로젝트',
      description: '주요 고객사와의 협업 프로젝트 시작',
      japanese: '主要顧客との協業プロジェクト開始'
    },
    {
      year: '2025',
      title: '서비스 전개',
      description: '대학을 중심으로 한 서비스 전개',
      japanese: '大学を中心にサービス展開'
    },
    {
      year: '2025',
      title: '글로벌 확장',
      description: '동남아시아 시장 진출 준비',
      japanese: '東南アジア市場進出準備'
    }
  ]

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
              <span className="gradient-text">Spica 327</span> 소개
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              일본과 한국을 연결하는 혁신적인 회사
              <br />
              <span className="text-lg text-gray-500">
                日本と韓国をつなぐ革新的な会社
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                회사 개요
              </h2>
              <div className="space-y-6">
                {Object.entries(companyInfo).map(([key, value]) => (
                  <div key={key} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 capitalize">
                        {key === 'name' ? '회사명' : 
                         key === 'founded' ? '설립년도' :
                         key === 'headquarters' ? '본사 위치' :
                         key === 'employees' ? '직원 수' :
                         key === 'vision' ? '비전' : '미션'}
                      </h3>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-3xl font-bold">C</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Spica 327
                  </h3>
                  <p className="text-gray-600 mb-6">
                    스피카 327는 일본과 한국의 문화적 차이를 이해하고, 
                    이를 바탕으로 혁신적인 디지털 솔루션을 제공하는 회사입니다.
                  </p>
                  <p className="text-sm text-gray-500">
                    スピカ327は日本と韓国の文化的差異を理解し、
                    それを基に革新的なデジタルソリューションを提供する会社です。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              핵심 가치
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              우리가 추구하는 가치와 원칙
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 font-medium">
                      {value.subtitle}
                    </p>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {value.description}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {value.japanese}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              회사 연혁
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              스피카 327의 성장 과정
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-secondary" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary rounded-full z-10" />

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {item.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.japanese}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                미래 비전
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                스피카 327는 단순한 기술 회사를 넘어, 
                문화와 기술을 융합하여 새로운 가치를 창출하는 
                글로벌 혁신 기업으로 성장하고자 합니다.
              </p>
              <p className="text-lg text-gray-500 mb-8">
                スピカ327は単なる技術会社を超えて、
                文化と技術を融合させて新しい価値を創造する
                グローバル革新企業として成長したいと考えています。
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  우리의 목표
                </h3>
                <p className="text-gray-600">
                  아시아를 넘어 전 세계로 확장하여, 
                  문화적 다양성을 존중하면서도 혁신적인 
                  디지털 솔루션을 제공하는 글로벌 리더가 되겠습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
