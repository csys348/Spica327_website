import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10" />
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              함께 성장할 준비가 되셨나요?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Spica 327와 함께 혁신적인 프로젝트를 시작해보세요.
              <br />
              <span className="text-lg text-white/80">
                スピカ327と一緒に革新的なプロジェクトを始めましょう。
              </span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 group flex items-center space-x-2"
            >
              <span>프로젝트 문의하기</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/cammunity"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200"
            >
              프로젝트 보기
            </Link>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">이메일</h3>
              <p className="text-white/80 text-sm mb-2">Email</p>
              <a
                href="mailto:spica327@gmail.com"
                className="text-white hover:text-primary-light transition-colors duration-200"
              >
                spica327@gmail.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">전화</h3>
              <p className="text-white/80 text-sm mb-2">Phone</p>
              <a
                href="tel:+82 010-4172-0868"
                className="text-white hover:text-primary-light transition-colors duration-200"
              >
                +82 010-4172-0868
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">채팅</h3>
              <p className="text-white/80 text-sm mb-2">Chat</p>
              <button className="text-white hover:text-primary-light transition-colors duration-200">
                실시간 채팅 시작
              </button>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-white/80 text-sm">
              평일 오전 9시 - 오후 6시 (JST) / 平日午前9時 - 午後6時 (JST)
            </p>
            <p className="text-white/60 text-xs mt-2">
              * 응답 시간: 24시간 이내 / * 応答時間: 24時間以内
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
