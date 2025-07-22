// app/services/implant/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Phone,
  Calendar,
  CheckCircle,
  Star,
  Users,
  Award,
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

export default function ImplantDetailPage() {
  return (
    <div className="min-h-screen bg-white">
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
              href="/services"
              className="flex items-center text-teal-600 hover:text-teal-700"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-semibold">진료과목으로 돌아가기</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">임플란트</h1>
            <div className="w-48"></div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-6">🦷</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                임플란트 치료
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                상실된 치아를 인공치근으로 대체하여 자연치아와 동일한 기능과
                심미성을 회복하는 최첨단 치료입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/reservation" className="flex-1">
                  <motion.button
                    className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    예약 상담
                  </motion.button>
                </Link>
                <motion.a
                  href="tel:031-1234-5678"
                  className="flex-1 border border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  전화 상담
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl text-white">🦷</div>
                    </div>
                    <p className="text-gray-600">임플란트 시술 과정 이미지</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              임플란트의 장점
            </h2>
            <p className="text-xl text-gray-600">
              왜 많은 분들이 임플란트를 선택하시는지 알아보세요
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: "💪",
                title: "반영구적 사용",
                description: "적절한 관리 시 반영구적으로 사용 가능합니다",
              },
              {
                icon: "🦷",
                title: "자연스러운 느낌",
                description: "자연치아와 동일한 씹는 느낌과 기능을 제공합니다",
              },
              {
                icon: "✨",
                title: "뛰어난 심미성",
                description: "자연치아와 구별되지 않는 아름다운 외관",
              },
              {
                icon: "🛡️",
                title: "주변 치아 보존",
                description: "주변 건강한 치아를 손상시키지 않습니다",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              임플란트 치료 과정
            </h2>
            <p className="text-xl text-gray-600">
              체계적이고 안전한 치료 과정을 안내해드립니다
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                step: "1",
                title: "정밀 검진",
                description: "3D CT 촬영을 통한 정확한 진단과 치료 계획 수립",
                duration: "30분",
              },
              {
                step: "2",
                title: "임플란트 식립",
                description: "인공치근을 턱뼈에 정밀하게 식립하는 수술",
                duration: "60분",
              },
              {
                step: "3",
                title: "골유착 기간",
                description: "임플란트와 뼈가 단단히 결합되는 치유 기간",
                duration: "3-6개월",
              },
              {
                step: "4",
                title: "보철물 장착",
                description: "맞춤 제작된 크라운을 임플란트에 장착",
                duration: "30분",
              },
            ].map((process, index) => (
              <motion.div key={index} className="relative" variants={fadeInUp}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{process.description}</p>
                  <div className="flex items-center justify-center text-sm text-teal-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {process.duration}
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-teal-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              임플란트 종류
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
                title: "일반 임플란트",
                description:
                  "가장 기본적인 임플란트로 대부분의 경우에 적용 가능",
                features: ["높은 성공률", "검증된 안전성", "합리적 가격"],
                price: "100만원~",
              },
              {
                title: "즉시 임플란트",
                description: "발치와 동시에 임플란트를 식립하는 원데이 시술",
                features: ["시술 시간 단축", "잇몸 절개 최소화", "빠른 회복"],
                price: "150만원~",
              },
              {
                title: "디지털 임플란트",
                description: "3D 시뮬레이션을 통한 정밀한 임플란트 시술",
                features: ["정확한 식립", "수술 시간 단축", "안전성 향상"],
                price: "180만원~",
              },
            ].map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6">{type.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">특징</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-lg font-semibold text-teal-600">
                  {type.price}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                question: "임플란트 수술이 아픈가요?",
                answer:
                  "국소마취를 통해 수술 중 통증은 거의 없습니다. 수술 후에도 처방된 진통제로 충분히 관리 가능합니다.",
              },
              {
                question: "임플란트는 얼마나 오래 사용할 수 있나요?",
                answer:
                  "적절한 관리와 정기검진을 받으신다면 반영구적으로 사용하실 수 있습니다. 일반적으로 10년 이상 사용률이 95% 이상입니다.",
              },
              {
                question: "임플란트 후 관리법은 어떻게 되나요?",
                answer:
                  "자연치아와 동일하게 양치질을 하시고, 정기적인 스케일링과 검진을 받으시면 됩니다. 특별한 관리법이 필요하지 않습니다.",
              },
              {
                question: "당뇨가 있어도 임플란트가 가능한가요?",
                answer:
                  "당뇨가 잘 조절되고 있다면 임플란트 시술이 가능합니다. 다만 치유 기간이 조금 더 길어질 수 있습니다.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q. {faq.question}
                </h3>
                <p className="text-gray-600">A. {faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              테스트 치과 임플란트 실적
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { number: "2,000+", label: "임플란트 시술", icon: "🦷" },
              { number: "98%", label: "성공률", icon: "✅" },
              { number: "15년", label: "풍부한 경험", icon: "🏆" },
              { number: "100%", label: "환자 만족도", icon: "😊" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center text-white"
                variants={fadeInUp}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-teal-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              임플란트 상담 받아보세요
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              정확한 진단과 맞춤 치료 계획으로 건강한 미소를 되찾아드립니다
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/reservation" className="flex-1">
                <motion.button
                  className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  온라인 예약
                </motion.button>
              </Link>
              <motion.a
                href="tel:031-1234-5678"
                className="flex-1 border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-2 w-5 h-5" />
                전화 상담
              </motion.a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-2">📞 031-1234-5678</p>
              <p className="text-gray-400">
                평일 09:00-18:00 | 토요일 09:00-15:00
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
