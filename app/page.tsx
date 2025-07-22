// app/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  MapPin,
  Clock,
  Star,
  Users,
  Heart,
  Award,
} from "lucide-react";
import { link } from "fs";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-teal-600">
                  <link href="/">테스트 치과</link>
                </span>
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                <link
                  href="#home"
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  홈
                </link>
                <link
                  href="/services"
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  진료과목
                </link>
                <link
                  href="#doctors"
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  의료진
                </link>
                <link
                  href="#contact"
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  예약문의
                </link>
              </div>
            </nav>
            <motion.button
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/reservation">예약하기</Link>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-20 bg-gradient-to-br from-teal-50 to-cyan-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                건강한 미소를
                <span className="block text-teal-600">만드는 곳</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                최신 장비와 풍부한 경험으로 환자분들의 구강건강을 책임집니다.
                편안하고 안전한 치료를 약속드립니다.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link href="/reservation" className="flex-1">
                  <motion.button
                    className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    진료 예약하기
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </Link>
                {/* 데스크톱용 - 같은 페이지 스크롤 */}
                <motion.a
                  href="#services"
                  className="hidden md:flex flex-1 border border-teal-600 text-teal-600 px-6 py-3 rounded-lg text-base font-semibold hover:bg-teal-50 transition-colors text-center items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  진료과목 보기
                </motion.a>

                {/* 모바일용 - 별도 페이지 이동 */}
                <Link href="/services" className="md:hidden flex-1">
                  <motion.div
                    className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg text-base font-semibold hover:bg-teal-50 transition-colors text-center cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    진료과목 보기
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-600">치과 이미지 영역</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "5,000+", label: "치료 환자" },
              { icon: Award, number: "15+", label: "풍부한 경험" },
              { icon: Star, number: "4.9", label: "만족도" },
              { icon: Heart, number: "100%", label: "안전한 치료" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              전문 진료과목
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최신 장비와 체계적인 치료 시스템으로 환자분들께 최상의 치료를
              제공합니다
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "임플란트",
                link : "/services/implant",
                description:
                  "자연치아와 같은 기능을 회복하는 최첨단 임플란트 치료",
                image: "🦷",
                features: ["무통 마취", "디지털 진단", "당일 시술"],
              },
              {
                title: "치아교정",
                description: "아름답고 건강한 치열을 위한 맞춤형 교정 치료",
                image: "✨",
                features: ["투명교정", "성인교정", "단기교정"],
              },
              {
                title: "일반치료",
                description: "충치, 신경치료 등 기본적인 구강건강 관리",
                image: "🏥",
                features: ["무통치료", "정밀진단", "예방관리"],
              },
              {
                title: "치아미백",
                description: "안전하고 효과적인 전문 치아미백 시술",
                image: "💎",
                features: ["즉시효과", "안전시술", "지속효과"],
              },
              {
                title: "보철치료",
                description: "자연스럽고 기능적인 보철물 제작 및 시술",
                image: "🔧",
                features: ["맞춤제작", "정밀기술", "내구성"],
              },
              {
                title: "예방치료",
                description: "구강질환 예방을 위한 스케일링 및 정기검진",
                image: "🛡️",
                features: ["정기검진", "전문스케일링", "구강관리"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {service.link ? (
                  <Link href={service.link} className="block cursor-pointer">
                    <div className="text-4xl mb-4">{service.image}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-500"
                        >
                          <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Link>
                ) : (
                  <>
                    <div className="text-4xl mb-4">{service.image}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-500"
                        >
                          <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              의료진 소개
            </h2>
            <p className="text-xl text-gray-600">
              풍부한 경험과 전문성을 갖춘 의료진이 함께합니다
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                name: "김철수 원장",
                specialty: "구강외과 전문의",
                experience: "15년",
                education: "서울대학교 치과대학 졸업",
                image: "👨‍⚕️",
              },
              {
                name: "이영희 원장",
                specialty: "치과교정과 전문의",
                experience: "12년",
                education: "연세대학교 치과대학 졸업",
                image: "👩‍⚕️",
              },
              {
                name: "박민수 원장",
                specialty: "치주과 전문의",
                experience: "10년",
                education: "고려대학교 치과대학 졸업",
                image: "👨‍⚕️",
              },
            ].map((doctor, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-6xl mb-4">{doctor.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-teal-600 font-semibold mb-2">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  경력 {doctor.experience}
                </p>
                <p className="text-gray-500 text-sm">{doctor.education}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              위치 및 문의
            </h2>
            <p className="text-xl text-teal-100">
              언제든지 편안하게 문의해 주세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-white mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">전화 예약</h3>
                    <p className="text-teal-100">031-1234-5678</p>
                    <p className="text-teal-200 text-sm">평일 09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-white mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">오시는 길</h3>
                    <p className="text-teal-100">
                      경기도 의정부시 테스트로 123
                    </p>
                    <p className="text-teal-200 text-sm">
                      지하철 1호선 의정부역 도보 5분
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-white mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">진료시간</h3>
                    <div className="text-teal-100 space-y-1">
                      <p>평일: 09:00 - 18:00</p>
                      <p>토요일: 09:00 - 15:00</p>
                      <p className="text-teal-200 text-sm">
                        일요일, 공휴일 휴진
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                찾아오시는 길
              </h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>지도 영역</p>
                  <p className="text-sm">(구글맵 또는 네이버맵 삽입)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">
                    경기도 의정부시 테스트로 123
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 ml-8">
                    지하철 1호선 의정부역 도보 5분
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 ml-8">
                    주차장 완비 (30대 가능)
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Sidebar */}
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 space-y-3"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {/* 전화 예약 */}
        <motion.a
          href="tel:031-1234-5678"
          className="flex items-center bg-teal-600 text-white px-4 py-3 rounded-l-full shadow-lg hover:bg-teal-700 transition-colors group"
          whileHover={{ x: -10, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium whitespace-nowrap  group-hover:opacity-100 transition-opacity duration-300">
            전화예약
          </span>
        </motion.a>

        {/* 카카오톡 상담 */}
        <motion.a
          href="#"
          className="flex items-center bg-yellow-400 text-gray-900 px-4 py-3 rounded-l-full shadow-lg hover:bg-yellow-500 transition-colors group"
          whileHover={{ x: -10, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-5 h-5 mr-2 text-lg">💬</div>
          <span className="text-sm font-medium whitespace-nowrap  group-hover:opacity-100 transition-opacity duration-300">
            카톡상담
          </span>
        </motion.a>

        {/* 네이버 예약 */}
        <motion.a
          href="#"
          className="flex items-center bg-green-500 text-white px-4 py-3 rounded-l-full shadow-lg hover:bg-green-600 transition-colors group"
          whileHover={{ x: -10, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-5 h-5 mr-2 text-lg">📅</div>
          <span className="text-sm font-medium whitespace-nowrap  group-hover:opacity-100 transition-opacity duration-300">
            네이버예약
          </span>
        </motion.a>

        {/* 온라인 상담 */}
        <motion.a
          href="#contact"
          className="flex items-center bg-blue-600 text-white px-4 py-3 rounded-l-full shadow-lg hover:bg-blue-700 transition-colors group"
          whileHover={{ x: -10, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-5 h-5 mr-2 text-lg">💻</div>
          <span className="text-sm font-medium whitespace-nowrap  group-hover:opacity-100 transition-opacity duration-300">
            온라인상담
          </span>
        </motion.a>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">테스트 치과</h3>
              <p className="text-gray-400 mb-4">
                건강한 미소를 만드는 믿을 수 있는 파트너
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">진료과목</h4>
              <ul className="space-y-2 text-gray-400">
                <li>임플란트</li>
                <li>치아교정</li>
                <li>일반치료</li>
                <li>치아미백</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">병원정보</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 031-1234-5678</p>
                <p>📍 경기도 의정부시 테스트로 123</p>
                <p>🕒 평일 09:00-18:00, 토 09:00-15:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 테스트 치과. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
