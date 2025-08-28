import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Users, Lightbulb, Zap, Shield, Heart } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Globe,
      title: '글로벌 연결',
      subtitle: 'Global Connection',
      description: '일본과 한국을 넘어 전 세계와 연결되는 혁신적인 플랫폼',
      japanese: '日本と韓国を超えて世界とつながる革新的なプラットフォーム',
      color: 'primary'
    },
    {
      icon: Users,
      title: '다양한 팀',
      subtitle: 'Diverse Team',
      description: '다양한 문화와 배경을 가진 전문가들이 모여 만드는 창의적인 솔루션',
      japanese: '様々な文化と背景を持つ専門家が集まって作る創造的なソリューション',
      color: 'secondary'
    },
    {
      icon: Lightbulb,
      title: '혁신적 아이디어',
      subtitle: 'Innovative Ideas',
      description: '전통과 현대를 결합한 독창적인 접근 방식으로 문제를 해결',
      japanese: '伝統と現代を組み合わせた独創的なアプローチで問題を解決',
      color: 'primary'
    },
    {
      icon: Zap,
      title: '빠른 실행',
      subtitle: 'Fast Execution',
      description: '아이디어를 빠르게 구현하고 시장에 출시하는 민첩한 개발 프로세스',
      japanese: 'アイデアを素早く実装し、市場にリリースする敏捷な開発プロセス',
      color: 'secondary'
    },
    {
      icon: Shield,
      title: '안전한 보안',
      subtitle: 'Secure & Safe',
      description: '최신 보안 기술을 적용하여 사용자 데이터를 안전하게 보호',
      japanese: '最新のセキュリティ技術を適用してユーザーデータを安全に保護',
      color: 'primary'
    },
    {
      icon: Heart,
      title: '사용자 중심',
      subtitle: 'User-Centric',
      description: '사용자 경험을 최우선으로 생각하는 직관적이고 편리한 서비스',
      japanese: 'ユーザーエクスペリエンスを最優先に考える直感的で便利なサービス',
      color: 'secondary'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            왜 <span className="gradient-text">Spica 327</span>인가요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            우리만의 독특한 특징과 가치를 통해 고객에게 최고의 서비스를 제공합니다
            <br />
            <span className="text-lg text-gray-500">
              私たち独自の特徴と価値を通じて、お客様に最高のサービスを提供します
            </span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card group hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="text-center">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${feature.color}/10 flex items-center justify-center group-hover:bg-${feature.color}/20 transition-colors duration-300`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">
                  {feature.subtitle}
                </p>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.japanese}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            더 자세한 내용을 확인하고 싶으시다면
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              문의하기
            </button>
            <button className="btn-outline">
              데모 신청
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
