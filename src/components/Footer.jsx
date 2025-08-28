import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: '회사소개', path: '/about', japanese: '会社概要' },
      { label: '팀원', path: '/team', japanese: 'チーム' },
      { label: '채용정보', path: '/careers', japanese: '採用情報' },
      { label: '뉴스', path: '/news', japanese: 'ニュース' },
    ],
    services: [
      { label: '프로젝트', path: '/projects', japanese: 'プロジェクト' },
      { label: '캐뮤니티', path: '/cammunity', japanese: 'キャミュニティ' },
      { label: '솔루션', path: '/solutions', japanese: 'ソリューション' },
      { label: '컨설팅', path: '/consulting', japanese: 'コンサルティング' },
    ],
    support: [
      { label: '고객지원', path: '/support', japanese: 'カスタマーサポート' },
      { label: '문의하기', path: '/contact', japanese: 'お問い合わせ' },
      { label: 'FAQ', path: '/faq', japanese: 'よくある質問' },
      { label: '개발자센터', path: '/developers', japanese: '開発者センター' },
    ]
  }

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Globe, href: '#', label: 'Website' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <h3 className="text-xl font-bold">Spica 327</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              일본 및 한국에서 활동하는 혁신적인 회사입니다.
              <br />
              日本と韓国で活動する革新的な会社です。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">회사 / 会社</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    <span className="block">{link.label}</span>
                    <span className="block text-xs text-gray-500">{link.japanese}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">서비스 / サービス</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    <span className="block">{link.label}</span>
                    <span className="block text-xs text-gray-500">{link.japanese}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">연락처 / お問い合わせ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-300">campuslink@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-300">+82 010-4172-0868</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-300">
                  도쿄, 일본 / 東京、日本
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Spica 327. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-primary transition-colors duration-200">
                개인정보처리방침 / プライバシーポリシー
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors duration-200">
                이용약관 / 利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
