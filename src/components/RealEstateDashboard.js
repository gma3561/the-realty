import React, { useState } from 'react';
import { 
  Search, Building2, Home, BarChart3, Users, TrendingUp, 
  MapPin, Edit3, Eye, Download, MessageCircle, Phone, Mail,
  ArrowRight, CheckCircle, AlertTriangle, Target, Zap,
  Settings, Calendar, FileText, TrendingDown
} from 'lucide-react';

const RealEstateDashboard = () => {
  const [selectedProperties, setSelectedProperties] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('dashboard');

  // 통계 데이터
  const stats = {
    total: 186,
    myProperties: 47,
    interest: 7,
    consultations: 15
  };

  // 샘플 매물 데이터
  const properties = [
    {
      id: '3340846',
      type: '아파트',
      name: '한남동 센트럴파크',
      address: '서울시 용산구 한남동 10층 102호',
      area: '84.67㎡',
      rooms: '3룸',
      price: '12억',
      date: '2024.12.20',
      status: '매매'
    },
    {
      id: '3269846',
      type: '아파트',
      name: '논현동 래미안',
      address: '서울시 강남구 논현동 15층 301호',
      area: '104.91㎡',
      rooms: '4룸',
      price: '18억',
      date: '2024.12.15',
      status: '매매'
    },
    {
      id: '3268824',
      type: '아파트',
      name: '청담동 아이파크',
      address: '서울시 강남구 청담동 20층 401호',
      area: '134.41㎡',
      rooms: '4룸',
      price: '25억',
      date: '2024.12.10',
      status: '매매'
    },
    {
      id: '3265414',
      type: '오피스텔',
      name: '역삼동 타워팰리스',
      address: '서울시 강남구 역삼동 12층 205호',
      area: '45.76㎡',
      rooms: '1룸',
      price: '6억',
      date: '2024.12.08',
      status: '전세'
    },
    {
      id: '3253023',
      type: '빌라',
      name: '서초동 현대빌라',
      address: '서울시 서초구 서초동 3층',
      area: '66.79㎡',
      rooms: '2룸',
      price: '8억',
      date: '2024.12.05',
      status: '매매'
    }
  ];

  const handleSelectProperty = (id) => {
    const newSelected = new Set(selectedProperties);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedProperties(newSelected);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">
                부동산 관리 시스템
              </h1>
            </div>
            <nav className="flex space-x-1">
              <button 
                onClick={() => setActiveSection('dashboard')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeSection === 'dashboard' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                대시보드
              </button>
              <button 
                onClick={() => setActiveSection('proposal')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeSection === 'proposal' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                자동화 제안서
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeSection === 'dashboard' && <DashboardSection />}
        {activeSection === 'proposal' && <ProposalSection />}
      </div>
    </div>
  );

  // 대시보드 섹션
  function DashboardSection() {
    return (
      <div className="space-y-8">
        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard 
            title="전체 매물" 
            value={stats.total} 
            icon={<Home className="w-6 h-6" />}
            color="bg-blue-500"
          />
          <StatCard 
            title="MY 매물" 
            value={stats.myProperties} 
            icon={<Building2 className="w-6 h-6" />}
            color="bg-green-500"
          />
          <StatCard 
            title="관심 매물" 
            value={stats.interest} 
            icon={<TrendingUp className="w-6 h-6" />}
            color="bg-orange-500"
          />
          <StatCard 
            title="상담 완료" 
            value={stats.consultations} 
            icon={<Users className="w-6 h-6" />}
            color="bg-purple-500"
          />
        </div>

        {/* 검색 섹션 */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center mb-6">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">매물 검색</h3>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="매물명 또는 주소를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <select className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
                <option>전체 지역</option>
                <option>강남구</option>
                <option>서초구</option>
                <option>용산구</option>
              </select>
              <select className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
                <option>전체 유형</option>
                <option>아파트</option>
                <option>오피스텔</option>
                <option>빌라</option>
              </select>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                검색
              </button>
            </div>
          </div>
        </div>

        {/* 매물 목록 */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">매물 목록</h3>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <Download className="w-4 h-4" />
                  엑셀 다운로드
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <Eye className="w-4 h-4" />
                  미리보기
                </button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">선택</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">매물정보</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">면적/구조</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">가격</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">등록일</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">상태</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {properties.map((property) => (
                  <PropertyRow key={property.id} property={property} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // 매물 행 컴포넌트
  function PropertyRow({ property }) {
    return (
      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-6 py-4">
          <input
            type="checkbox"
            checked={selectedProperties.has(property.id)}
            onChange={() => handleSelectProperty(property.id)}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </td>
        <td className="px-6 py-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-900">{property.name}</div>
              <div className="text-sm text-gray-500 flex items-center mt-1">
                <MapPin className="w-3 h-3 mr-1" />
                {property.address}
              </div>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded mt-1 inline-block">
                {property.type}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">{property.area}</div>
          <div className="text-sm text-gray-500">{property.rooms}</div>
        </td>
        <td className="px-6 py-4">
          <div className="font-semibold text-gray-900">{property.price}</div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-500">{property.date}</div>
        </td>
        <td className="px-6 py-4">
          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
            property.status === '매매' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-blue-100 text-blue-700'
          }`}>
            {property.status}
          </span>
        </td>
        <td className="px-6 py-4">
          <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors">
            <Edit3 className="w-4 h-4" />
            수정
          </button>
        </td>
      </tr>
    );
  }

  // 통계 카드 컴포넌트
  function StatCard({ title, value, icon, color }) {
    return (
      <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
          </div>
          <div className={`p-3 rounded-lg ${color} text-white`}>
            {icon}
          </div>
        </div>
      </div>
    );
  }

  // 제안서 섹션 - 완전히 새로 개선
  function ProposalSection() {
    return (
      <div className="space-y-12">
        {/* 메인 헤더 */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h1 className="text-4xl font-bold mb-4">
            🏢 부동산 업계 자동화 컨설팅 제안서
          </h1>
          <p className="text-xl opacity-90 mb-8">
            기존 도구 통합 + 자동화로 업무 효율성 300% 향상
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">📱 채널톡 통합관리</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">📊 실시간 대시보드</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">🤖 자동화 시스템</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">📈 성과 분석</span>
          </div>
        </div>

        {/* AS-IS vs TO-BE 채널 관리 비교 */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <MessageCircle className="w-8 h-8 mr-3 text-blue-600" />
            고객 채널 관리 혁신: AS-IS vs TO-BE
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* AS-IS */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2" />
                AS-IS (현재 상황)
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-600 mb-3">📱 분산된 채널 관리</h4>
                  <div className="space-y-2 text-sm text-red-700">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                      인스타그램 DM (별도 앱)
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                      카카오 채널 (별도 관리)
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                      네이버 톡톡 (별도 시스템)
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                      전화 문의 (수기 기록)
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                      웹사이트 문의 (이메일)
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-600 mb-3">⚠️ 문제점</h4>
                  <div className="space-y-1 text-sm text-red-700">
                    <p>• 5개 앱을 동시에 관리해야 함</p>
                    <p>• 고객 정보가 분산되어 일관된 관리 불가</p>
                    <p>• 응답 속도 지연 (앱 간 이동 시간)</p>
                    <p>• 상담 이력 추적 어려움</p>
                    <p>• 직원별 성과 측정 불가</p>
                    <p>• 놓치는 문의 발생</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-600 mb-3">📊 현재 성과</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center p-2 bg-red-100 rounded">
                      <div className="font-bold text-red-700">평균 응답시간</div>
                      <div className="text-red-600">15분</div>
                    </div>
                    <div className="text-center p-2 bg-red-100 rounded">
                      <div className="font-bold text-red-700">놓친 문의</div>
                      <div className="text-red-600">25%</div>
                    </div>
                    <div className="text-center p-2 bg-red-100 rounded">
                      <div className="font-bold text-red-700">고객 만족도</div>
                      <div className="text-red-600">3.2/5</div>
                    </div>
                    <div className="text-center p-2 bg-red-100 rounded">
                      <div className="font-bold text-red-700">전환율</div>
                      <div className="text-red-600">12%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TO-BE */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                TO-BE (채널톡 도입 후)
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-600 mb-3">🎯 통합 채널 관리</h4>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="font-bold text-green-700">채널톡 ONE Platform</div>
                  </div>
                  <div className="space-y-2 text-sm text-green-700">
                    <div className="flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
                      인스타그램 DM 자동 연동
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
                      카카오톡 비즈니스 연결
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
                      네이버 톡톡 통합
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
                      웹사이트 채팅 위젯
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
                      전화 문의 자동 기록
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-600 mb-3">✨ 개선 효과</h4>
                  <div className="space-y-1 text-sm text-green-700">
                    <p>• 하나의 화면에서 모든 채널 관리</p>
                    <p>• 고객별 통합 상담 이력 자동 저장</p>
                    <p>• 실시간 알림으로 즉시 응답</p>
                    <p>• 자동 응답으로 24시간 대응</p>
                    <p>• 직원별 성과 실시간 추적</p>
                    <p>• AI 챗봇으로 기본 문의 자동 처리</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-600 mb-3">📈 예상 성과</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center p-2 bg-green-100 rounded">
                      <div className="font-bold text-green-700">평균 응답시간</div>
                      <div className="text-green-600">2분</div>
                    </div>
                    <div className="text-center p-2 bg-green-100 rounded">
                      <div className="font-bold text-green-700">놓친 문의</div>
                      <div className="text-green-600">3%</div>
                    </div>
                    <div className="text-center p-2 bg-green-100 rounded">
                      <div className="font-bold text-green-700">고객 만족도</div>
                      <div className="text-green-600">4.5/5</div>
                    </div>
                    <div className="text-center p-2 bg-green-100 rounded">
                      <div className="font-bold text-green-700">전환율</div>
                      <div className="text-green-600">18%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 고객 퍼널 로직 정리 */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Target className="w-8 h-8 mr-3 text-blue-600" />
            고객 여정 퍼널 & 자동화 로직
          </h2>

          <div className="space-y-8">
            {/* 퍼널 단계별 로직 */}
            <div className="grid gap-6">
              {[
                {
                  step: 1,
                  title: "문의 접수",
                  current: "100명",
                  target: "120명",
                  color: "blue",
                  automation: [
                    "모든 채널 문의 채널톡으로 자동 집중",
                    "문의 유형별 자동 분류 (매물, 시세, 상담)",
                    "고객 정보 자동 수집 및 CRM 연동",
                    "1분 내 자동 응답 메시지 발송"
                  ],
                  kpi: "문의 접수율 20% 향상"
                },
                {
                  step: 2,
                  title: "1차 상담",
                  current: "80명 (80%)",
                  target: "102명 (85%)",
                  color: "green",
                  automation: [
                    "고객 관심사별 맞춤 매물 자동 추천",
                    "상담 예약 캘린더 자동 연동",
                    "고객 정보 사전 분석 후 상담 준비",
                    "상담 내용 자동 기록 및 정리"
                  ],
                  kpi: "문의→상담 전환율 5%p 향상"
                },
                {
                  step: 3,
                  title: "매물 추천",
                  current: "60명 (75%)",
                  target: "82명 (80%)",
                  color: "purple",
                  automation: [
                    "고객 선호도 분석 기반 매물 필터링",
                    "실시간 매물 정보 업데이트",
                    "VR/사진 자료 자동 전송",
                    "매물별 상세 분석 자료 제공"
                  ],
                  kpi: "상담→매물추천 전환율 5%p 향상"
                },
                {
                  step: 4,
                  title: "임장 신청",
                  current: "25명 (42%)",
                  target: "33명 (40%)",
                  color: "orange",
                  automation: [
                    "임장 일정 자동 조율 시스템",
                    "임장 전 체크리스트 자동 발송",
                    "임장 후 피드백 자동 수집",
                    "관심도 점수 자동 산출"
                  ],
                  kpi: "매물→임장 전환율 안정적 유지"
                },
                {
                  step: 5,
                  title: "계약 체결",
                  current: "12명 (48%)",
                  target: "18명 (55%)",
                  color: "red",
                  automation: [
                    "계약 조건 비교 분석 자동 제공",
                    "필요 서류 체크리스트 자동 안내",
                    "계약 일정 자동 관리",
                    "사후 관리 자동 시작"
                  ],
                  kpi: "임장→계약 전환율 7%p 향상"
                }
                             ].map((funnel) => {
                 const getColorClasses = (color) => {
                   const colorMap = {
                     blue: {
                       border: 'border-blue-500',
                       bg: 'bg-blue-50',
                       bgIcon: 'bg-blue-500',
                       text: 'text-blue-800',
                       textSecondary: 'text-blue-600',
                       textTertiary: 'text-blue-700',
                       textIcon: 'text-blue-500',
                       borderSecondary: 'border-blue-200'
                     },
                     green: {
                       border: 'border-green-500',
                       bg: 'bg-green-50',
                       bgIcon: 'bg-green-500',
                       text: 'text-green-800',
                       textSecondary: 'text-green-600',
                       textTertiary: 'text-green-700',
                       textIcon: 'text-green-500',
                       borderSecondary: 'border-green-200'
                     },
                     purple: {
                       border: 'border-purple-500',
                       bg: 'bg-purple-50',
                       bgIcon: 'bg-purple-500',
                       text: 'text-purple-800',
                       textSecondary: 'text-purple-600',
                       textTertiary: 'text-purple-700',
                       textIcon: 'text-purple-500',
                       borderSecondary: 'border-purple-200'
                     },
                     orange: {
                       border: 'border-orange-500',
                       bg: 'bg-orange-50',
                       bgIcon: 'bg-orange-500',
                       text: 'text-orange-800',
                       textSecondary: 'text-orange-600',
                       textTertiary: 'text-orange-700',
                       textIcon: 'text-orange-500',
                       borderSecondary: 'border-orange-200'
                     },
                     red: {
                       border: 'border-red-500',
                       bg: 'bg-red-50',
                       bgIcon: 'bg-red-500',
                       text: 'text-red-800',
                       textSecondary: 'text-red-600',
                       textTertiary: 'text-red-700',
                       textIcon: 'text-red-500',
                       borderSecondary: 'border-red-200'
                     }
                   };
                   return colorMap[color] || colorMap.blue;
                 };

                 const colors = getColorClasses(funnel.color);

                 return (
                   <div key={funnel.step} className={`border-l-4 ${colors.border} ${colors.bg} p-6 rounded-r-lg`}>
                     <div className="flex items-center justify-between mb-4">
                       <div className="flex items-center">
                         <div className={`w-8 h-8 ${colors.bgIcon} text-white rounded-full flex items-center justify-center font-bold mr-4`}>
                           {funnel.step}
                         </div>
                         <h3 className={`text-xl font-bold ${colors.text}`}>{funnel.title}</h3>
                       </div>
                       <div className="text-right">
                         <div className={`text-sm ${colors.textSecondary}`}>현재 → 목표</div>
                         <div className={`font-bold ${colors.text}`}>{funnel.current} → {funnel.target}</div>
                       </div>
                     </div>
                     
                     <div className="grid md:grid-cols-2 gap-6">
                       <div>
                         <h4 className={`font-medium ${colors.textTertiary} mb-3`}>🤖 자동화 로직</h4>
                         <ul className={`space-y-1 text-sm ${colors.textTertiary}`}>
                           {funnel.automation.map((item, idx) => (
                             <li key={idx} className="flex items-start">
                               <Zap className={`w-4 h-4 mr-2 mt-0.5 ${colors.textIcon} flex-shrink-0`} />
                               {item}
                             </li>
                           ))}
                         </ul>
                       </div>
                       <div className={`bg-white p-4 rounded-lg border ${colors.borderSecondary}`}>
                         <h4 className={`font-medium ${colors.textTertiary} mb-2`}>📊 핵심 KPI</h4>
                         <p className={`text-lg font-bold ${colors.text}`}>{funnel.kpi}</p>
                       </div>
                     </div>
                   </div>
                 );
               })}
            </div>
          </div>
        </div>

        {/* 지표 관리 개선안 */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <BarChart3 className="w-8 h-8 mr-3 text-blue-600" />
            스마트 지표 관리 & 개선 액션
          </h2>

          <div className="grid gap-8">
            {[
              {
                category: "응답 효율성",
                icon: <MessageCircle className="w-6 h-6" />,
                color: "blue",
                metrics: [
                  {
                    name: "평균 응답 시간",
                    current: "15분",
                    target: "2분",
                    status: "위험",
                    action: "채널톡 자동응답 설정, 모바일 푸시 알림 활성화",
                    improvement: "87% 단축"
                  },
                  {
                    name: "첫 응답률",
                    current: "75%",
                    target: "95%",
                    status: "개선필요",
                    action: "업무시간 외 자동응답 봇 구축, 긴급 문의 에스컬레이션",
                    improvement: "20%p 향상"
                  }
                ]
              },
              {
                category: "고객 관리",
                icon: <Users className="w-6 h-6" />,
                color: "green",
                metrics: [
                  {
                    name: "고객 이탈률",
                    current: "30%",
                    target: "10%",
                    status: "위험",
                    action: "이탈 위험 고객 자동 감지, 맞춤 리텐션 캠페인 실행",
                    improvement: "67% 감소"
                  },
                  {
                    name: "재문의율",
                    current: "15%",
                    target: "35%",
                    status: "개선필요",
                    action: "고객 만족도 조사 자동화, 사후 관리 프로세스 구축",
                    improvement: "133% 증가"
                  }
                ]
              },
              {
                category: "영업 성과",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "purple",
                metrics: [
                  {
                    name: "전체 전환율",
                    current: "12%",
                    target: "18%",
                    status: "개선필요",
                    action: "퍼널별 최적화 자동화, A/B 테스트 기반 개선",
                    improvement: "50% 향상"
                  },
                  {
                    name: "평균 거래 금액",
                    current: "15억",
                    target: "18억",
                    status: "양호",
                    action: "고가 매물 추천 로직 고도화, VIP 고객 전용 서비스",
                    improvement: "20% 증가"
                  }
                ]
              }
                         ].map((category) => {
               const getColorClasses = (color) => {
                 const colorMap = {
                   blue: {
                     border: 'border-blue-200',
                     bg: 'bg-blue-50',
                     bgIcon: 'bg-blue-500',
                     text: 'text-blue-800',
                     textSecondary: 'text-blue-600'
                   },
                   green: {
                     border: 'border-green-200',
                     bg: 'bg-green-50',
                     bgIcon: 'bg-green-500',
                     text: 'text-green-800',
                     textSecondary: 'text-green-600'
                   },
                   purple: {
                     border: 'border-purple-200',
                     bg: 'bg-purple-50',
                     bgIcon: 'bg-purple-500',
                     text: 'text-purple-800',
                     textSecondary: 'text-purple-600'
                   }
                 };
                 return colorMap[color] || colorMap.blue;
               };

               const colors = getColorClasses(category.color);

               return (
                 <div key={category.category} className={`border ${colors.border} rounded-xl p-6 ${colors.bg}`}>
                   <div className="flex items-center mb-6">
                     <div className={`p-3 ${colors.bgIcon} rounded-lg text-white mr-4`}>
                       {category.icon}
                     </div>
                     <h3 className={`text-xl font-bold ${colors.text}`}>{category.category}</h3>
                   </div>

                   <div className="space-y-4">
                     {category.metrics.map((metric, idx) => (
                       <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                         <div className="flex items-center justify-between mb-3">
                           <h4 className="font-medium text-gray-900">{metric.name}</h4>
                           <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                             metric.status === '위험' ? 'bg-red-100 text-red-700' :
                             metric.status === '개선필요' ? 'bg-yellow-100 text-yellow-700' :
                             'bg-green-100 text-green-700'
                           }`}>
                             {metric.status}
                           </span>
                         </div>
                         
                         <div className="grid md:grid-cols-3 gap-4">
                           <div>
                             <div className="text-sm text-gray-600 mb-1">현재 → 목표</div>
                             <div className="font-bold text-gray-900">{metric.current} → {metric.target}</div>
                             <div className={`text-sm font-medium ${colors.textSecondary}`}>{metric.improvement}</div>
                           </div>
                           <div className="md:col-span-2">
                             <div className="text-sm text-gray-600 mb-2">개선 액션 플랜</div>
                             <p className="text-sm text-gray-800">{metric.action}</p>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               );
             })}
          </div>
        </div>


      </div>
    );
  }
};

export default RealEstateDashboard; 