// app/reservation/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import { ArrowLeft, Clock, User, Phone, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const services = [
  { id: 'implant', name: '임플란트', duration: '60분', price: '상담 후 결정' },
  { id: 'orthodontics', name: '치아교정', duration: '45분', price: '상담 후 결정' },
  { id: 'general', name: '일반치료', duration: '30분', price: '10만원~' },
  { id: 'whitening', name: '치아미백', duration: '90분', price: '30만원' },
  { id: 'prosthetics', name: '보철치료', duration: '60분', price: '상담 후 결정' },
  { id: 'prevention', name: '예방치료', duration: '30분', price: '5만원~' }
];

const doctors = [
  { id: 'kim', name: '김철수 원장', specialty: '구강악안면외과 전문의', avatar: '👨‍⚕️' },
  { id: 'lee', name: '이영희 원장', specialty: '치과교정과 전문의', avatar: '👩‍⚕️' },
  { id: 'park', name: '박민수 원장', specialty: '치주과 전문의', avatar: '👨‍⚕️' }
];

const timeSlots = {
  morning: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
  afternoon: ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30']
};

export default function ReservationPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    phone: '',
    birthdate: '',
    message: ''
  });

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0; // 일요일만 휴진
  };

  const isValidDate = (date: Date) => {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 2); // 2개월 후까지 예약 가능
    
    return date >= today && date <= maxDate && !isWeekend(date);
  };

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedService;
      case 2: return selectedDoctor;
      case 3: return selectedDate && selectedTime;
      case 4: return patientInfo.name && patientInfo.phone;
      default: return false;
    }
  };

  const handleSubmit = () => {
    // 실제로는 API 호출
    alert('예약이 성공적으로 접수되었습니다! 확인 후 연락드리겠습니다.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom CSS for Calendar */}
      <style jsx global>{`
        .react-calendar {
          width: 100% !important;
          background: white;
          border: none !important;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          padding: 20px;
        }
        .react-calendar__tile {
          border-radius: 8px;
          padding: 12px 8px;
          transition: all 0.2s;
        }
        .react-calendar__tile:enabled:hover {
          background-color: #0d9488;
          color: white;
        }
        .react-calendar__tile--active {
          background: #0d9488 !important;
          color: white !important;
        }
        .react-calendar__tile:disabled {
          background-color: #f3f4f6;
          color: #9ca3af;
        }
        .react-calendar__navigation button {
          color: #0d9488;
          font-weight: 600;
        }
        .react-calendar__navigation button:enabled:hover {
          background-color: #f0fdfa;
        }
      `}</style>

      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center text-teal-600 hover:text-teal-700">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-semibold">테스트 치과로 돌아가기</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">진료 예약</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Desktop Progress Bar */}
          <div className="hidden md:flex items-center justify-between mb-4">
            {['진료과목', '의료진', '날짜/시간', '개인정보'].map((label, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step > index + 1 ? 'bg-teal-600 text-white' :
                  step === index + 1 ? 'bg-teal-600 text-white' :
                  'bg-gray-200 text-gray-500'
                }`}>
                  {step > index + 1 ? <CheckCircle className="w-5 h-5" /> : index + 1}
                </div>
                <span className={`ml-2 text-sm ${step >= index + 1 ? 'text-gray-900' : 'text-gray-500'}`}>
                  {label}
                </span>
                {index < 3 && (
                  <div className={`w-16 h-0.5 mx-4 ${step > index + 1 ? 'bg-teal-600' : 'bg-gray-200'}`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Progress Bar */}
          <div className="md:hidden">
            <div className="flex items-center justify-center mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step === 1 ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > 1 ? <CheckCircle className="w-5 h-5" /> : 1}
              </div>
              <div className={`flex-1 h-0.5 mx-2 ${step > 1 ? 'bg-teal-600' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step === 2 ? 'bg-teal-600 text-white' : step > 2 ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > 2 ? <CheckCircle className="w-5 h-5" /> : 2}
              </div>
              <div className={`flex-1 h-0.5 mx-2 ${step > 2 ? 'bg-teal-600' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step === 3 ? 'bg-teal-600 text-white' : step > 3 ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > 3 ? <CheckCircle className="w-5 h-5" /> : 3}
              </div>
              <div className={`flex-1 h-0.5 mx-2 ${step > 3 ? 'bg-teal-600' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step === 4 ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                4
              </div>
            </div>
            <div className="text-center">
              <span className="text-lg font-semibold text-gray-900">
                {step === 1 && '진료과목 선택'}
                {step === 2 && '의료진 선택'}
                {step === 3 && '날짜/시간 선택'}
                {step === 4 && '개인정보 입력'}
              </span>
              <div className="text-sm text-gray-500 mt-1">
                {step}/4 단계
              </div>
            </div>
          </div>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Step 1: 진료과목 선택 */}
          {step === 1 && (
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">진료과목을 선택해주세요</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedService === service.id
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="text-sm text-teal-600 font-medium">{service.price}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: 의료진 선택 */}
          {step === 2 && (
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">담당 의료진을 선택해주세요</h2>
              <div className="space-y-4">
                {doctors.map((doctor) => (
                  <motion.div
                    key={doctor.id}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedDoctor === doctor.id
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setSelectedDoctor(doctor.id)}
                  >
                    <div className="flex items-center">
                      <div className="text-4xl mr-4">{doctor.avatar}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                        <p className="text-teal-600">{doctor.specialty}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: 날짜/시간 선택 */}
          {step === 3 && (
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">날짜와 시간을 선택해주세요</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">날짜 선택</h3>
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    tileDisabled={({ date }) => !isValidDate(date)}
                    locale="ko"
                    formatDay={(locale, date) => date.getDate().toString()}
                  />
                  <p className="text-sm text-gray-500 mt-2">* 일요일은 휴진입니다</p>
                </div>
                
                {selectedDate && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">시간 선택</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">오전 (09:00 - 12:00)</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.morning.map((time) => (
                            <button
                              key={time}
                              className={`p-2 text-sm rounded-lg border transition-colors ${
                                selectedTime === time
                                  ? 'bg-teal-600 text-white border-teal-600'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-teal-300'
                              }`}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">오후 (14:00 - 18:00)</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.afternoon.map((time) => (
                            <button
                              key={time}
                              className={`p-2 text-sm rounded-lg border transition-colors ${
                                selectedTime === time
                                  ? 'bg-teal-600 text-white border-teal-600'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-teal-300'
                              }`}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 4: 개인정보 입력 */}
          {step === 4 && (
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">개인정보를 입력해주세요</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      성함 *
                    </label>
                    <input
                      type="text"
                      value={patientInfo.name}
                      onChange={(e) => setPatientInfo({...patientInfo, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      value={patientInfo.phone}
                      onChange={(e) => setPatientInfo({...patientInfo, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    생년월일
                  </label>
                  <input
                    type="date"
                    value={patientInfo.birthdate}
                    onChange={(e) => setPatientInfo({...patientInfo, birthdate: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의사항
                  </label>
                  <textarea
                    rows={4}
                    value={patientInfo.message}
                    onChange={(e) => setPatientInfo({...patientInfo, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="추가로 문의하실 내용이 있으시면 입력해주세요"
                  />
                </div>

                {/* 예약 정보 요약 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">예약 정보 확인</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-900">진료과목:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {services.find(s => s.id === selectedService)?.name}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-900">담당의:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {doctors.find(d => d.id === selectedDoctor)?.name}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-900">예약일시:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {selectedDate instanceof Date && 
                          `${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일 ${selectedTime}`
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <motion.button
              onClick={handlePrevStep}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                step === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              disabled={step === 1}
              whileHover={step > 1 ? { scale: 1.02 } : {}}
              whileTap={step > 1 ? { scale: 0.98 } : {}}
            >
              이전
            </motion.button>

            <motion.button
              onClick={step === 4 ? handleSubmit : handleNextStep}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                canProceed()
                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!canProceed()}
              whileHover={canProceed() ? { scale: 1.02 } : {}}
              whileTap={canProceed() ? { scale: 0.98 } : {}}
            >
              {step === 4 ? '예약 완료' : '다음'}
            </motion.button>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div 
          className="mt-8 bg-teal-600 rounded-xl p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-semibold mb-4">전화 예약도 가능합니다</h3>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>031-1234-5678</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>평일 09:00-18:00, 토 09:00-15:00</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}