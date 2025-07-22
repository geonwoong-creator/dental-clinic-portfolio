// app/services/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Phone,
  Clock,
  ChevronRight,
  Star,
  Award,
  Shield,
} from "lucide-react";
import Link from "next/link";

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

const services = [
  {
    id: "implant",
    title: "임플란트",
    description: "자연치아와 같은 기능을 회복하는 최첨단 임플란트 치료",
    image: "🦷",
    duration: "60-90분",
    price: "상담 후 결정",
    highlights: ["무통 마취", "디지털 진단", "당일 시술 가능"],
    detailDescription:
      "상실된 치아를 인공치근으로 대체하여 자연치아와 동일한 기능과 심미성을 회복합니다.",
    benefits: [
      "반영구적 사용 가능",
      "주변 치아 손상 없음",
      "자연스러운 씹는 느낌",
      "뛰어난 심미성",
    ],
  },
  {
    id: "orthodontics",
    title: "치아교정",
    description: "아름답고 건강한 치열을 위한 맞춤형 교정 치료",
    image: "✨",
    duration: "45-60분",
    price: "300만원~",
    highlights: ["투명교정", "성인교정", "단기교정"],
    detailDescription:
      "고르지 않은 치아를 바르게 정렬하여 기능적, 심미적 개선을 도모합니다.",
    benefits: [
      "자신감 향상",
      "구강 건강 개선",
      "소화 기능 향상",
      "안면 균형 개선",
    ],
  },
  {
    id: "general",
    title: "일반치료",
    description: "충치, 신경치료 등 기본적인 구강건강 관리",
    image: "🏥",
    duration: "30-45분",
    price: "5만원~",
    highlights: ["무통치료", "정밀진단", "예방관리"],
    detailDescription:
      "충치치료, 신경치료, 잇몸치료 등 일반적인 치과 질환을 치료합니다.",
    benefits: ["통증 즉시 해결", "치아 보존", "합리적 가격", "빠른 치료"],
  },
  {
    id: "whitening",
    title: "치아미백",
    description: "안전하고 효과적인 전문 치아미백 시술",
    image: "💎",
    duration: "60-90분",
    price: "30만원",
    highlights: ["즉시효과", "안전시술", "지속효과"],
    detailDescription:
      "전문 미백제를 사용하여 치아를 안전하고 효과적으로 하얗게 만듭니다.",
    benefits: ["즉시 효과 확인", "안전한 성분", "오래 지속", "자신감 회복"],
  },
  {
    id: "prosthetics",
    title: "보철치료",
    description: "자연스럽고 기능적인 보철물 제작 및 시술",
    image: "🔧",
    duration: "60분",
    price: "상담 후 결정",
    highlights: ["맞춤제작", "정밀기술", "내구성"],
    detailDescription:
      "손상된 치아를 크라운, 브릿지 등의 보철물로 기능과 형태를 회복합니다.",
    benefits: ["자연스러운 외관", "뛰어난 내구성", "정확한 맞춤", "기능 회복"],
  },
  {
    id: "prevention",
    title: "예방치료",
    description: "구강질환 예방을 위한 스케일링 및 정기검진",
    image: "🛡️",
    duration: "30분",
    price: "5만원~",
    highlights: ["정기검진", "전문스케일링", "구강관리"],
    detailDescription:
      "정기적인 검진과 스케일링으로 구강질환을 미리 예방합니다.",
    benefits: [
      "질병 조기 발견",
      "치료비 절약",
      "구강 건강 유지",
      "상쾌한 입안",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header
        className="bg-white shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center text-teal-600 hover:text-teal-700"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-semibold">테스트 치과로 돌아가기</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">진료과목</h1>
            <div className="w-40"></div>
          </div>
        </div>
      </motion.header>

      {/* Floating Sidebar */}
      <motion.div
        className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40 space-y-3"
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            전문 진료과목
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            최신 장비와 체계적인 치료 시스템으로 환자분들께 최상의 치료를
            제공합니다
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={`/services/${service.id}`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
                    {/* Image Section */}
                    <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-8 text-center">
                      <div className="text-6xl mb-4">{service.image}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {service.detailDescription}
                      </p>

                      {/* Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2 text-teal-600" />
                          소요시간: {service.duration}
                        </div>
                        <div className="flex items-center text-sm text-teal-600 font-semibold">
                          <span className="mr-2">💰</span>
                          {service.price}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {service.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Benefits Preview */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          주요 장점
                        </h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                              {benefit}
                            </li>
                          ))}
                          {service.benefits.length > 2 && (
                            <li className="text-sm text-gray-400">
                              + {service.benefits.length - 2}개 더
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">
                          자세히 보기
                        </span>
                        <ChevronRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              테스트 치과만의 특별함
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Star,
                title: "최신 장비",
                description: "첨단 디지털 장비로 정확하고 안전한 진단과 치료",
              },
              {
                icon: Award,
                title: "전문 의료진",
                description: "풍부한 경험과 전문성을 갖춘 의료진의 맞춤 치료",
              },
              {
                icon: Shield,
                title: "안전한 치료",
                description: "철저한 감염관리와 안전 시스템으로 안심 치료",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              궁금한 치료가 있으시나요?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              전문 상담을 통해 맞춤 치료 계획을 세워드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/reservation" className="flex-1">
                <motion.button
                  className="w-full bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  예약 상담
                </motion.button>
              </Link>
              <motion.a
                href="tel:031-1234-5678"
                className="flex-1 border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                전화 상담
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
