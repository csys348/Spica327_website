import React from 'react'
import { motion } from 'framer-motion'
import { Users, Globe, Award, Heart } from 'lucide-react'

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '6+',
      label: '팀원',
      japanese: 'チームメンバー',
      description: '다양한 전문 분야의 전문가들',
      color: 'primary'
    },
    {
      icon: Globe,
      number: '2',
      label: '국가',
      japanese: '国',
      description: '일본과 한국에서 활동',
      color: 'secondary'
    },
    {
      icon: Award,
      number: '1+',
      label: '프로젝트',
      japanese: 'プロジェクト',
      description: '성공적으로 완료된 프로젝트',
      color: 'primary'
    },
    {
      icon: Heart,
      number: '95%',
      label: '고객 만족도',
      japanese: '顧客満足度',
      description: '고객의 높은 만족도',
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
    <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
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
            <span className="gradient-text">Spica 327</span>의 성과
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            지금까지의 성과와 성장 과정을 숫자로 확인해보세요
            <br />
            <span className="text-lg text-gray-500">
              これまでの成果と成長過程を数字で確認してください
            </span>
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
            >
              <div className="card hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${stat.color}/10 flex items-center justify-center group-hover:bg-${stat.color}/20 transition-colors duration-300`}>
                  <stat.icon className={`w-10 h-10 text-${stat.color}`} />
                </div>

                {/* Number */}
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {stat.japanese}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              지속적인 성장과 혁신
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Spica 327는 끊임없는 도전과 혁신을 통해 더 나은 미래를 만들어가고 있습니다.
              우리의 성과는 단순한 숫자가 아닌, 고객과 함께 성장한 이야기입니다.
            </p>
            <p className="text-sm text-gray-500">
              持続的な成長と革新 / Sustainable Growth & Innovation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
