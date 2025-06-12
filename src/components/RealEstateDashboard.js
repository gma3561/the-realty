import React, { useState } from 'react';
import { 
  Search, Building2, Home, BarChart3, Users, TrendingUp, 
  MapPin, Edit3, Eye, Download
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* 헤더 */}
      <header className="bg-white shadow-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="w-8 h-8 text-indigo-600 mr-3" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                부동산 관리 시스템
              </h1>
            </div>
            <nav className="flex space-x-1">
              <button 
                onClick={() => setActiveSection('dashboard')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeSection === 'dashboard' 
                    ? 'bg-indigo-100 text-indigo-700 shadow-sm' 
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100'
                }`}
              >
                대시보드
              </button>
              <button 
                onClick={() => setActiveSection('proposal')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeSection === 'proposal' 
                    ? 'bg-indigo-100 text-indigo-700 shadow-sm' 
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100'
                }`}
              >
                자동화 제안서
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {activeSection === 'dashboard' && <DashboardSection />}
        {activeSection === 'proposal' && <ProposalSection />}
      </div>
    </div>
  );

  // 대시보드 섹션
  function DashboardSection() {
    return (
      <div className="space-y-6">
        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard 
            title="전체 매물" 
            value={stats.total} 
            icon={<Home className="w-6 h-6" />}
            color="bg-gradient-to-r from-blue-500 to-cyan-500"
          />
          <StatCard 
            title="MY 매물" 
            value={stats.myProperties} 
            icon={<Building2 className="w-6 h-6" />}
            color="bg-gradient-to-r from-emerald-500 to-teal-500"
          />
          <StatCard 
            title="관심 매물" 
            value={stats.interest} 
            icon={<TrendingUp className="w-6 h-6" />}
            color="bg-gradient-to-r from-orange-500 to-amber-500"
          />
          <StatCard 
            title="상담 완료" 
            value={stats.consultations} 
            icon={<Users className="w-6 h-6" />}
            color="bg-gradient-to-r from-purple-500 to-pink-500"
          />
        </div>

        {/* 검색 섹션 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center mb-4">
            <Search className="w-5 h-5 text-slate-400 mr-2" />
            <h3 className="text-lg font-semibold text-slate-800">매물 검색</h3>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="매물명 또는 주소를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <select className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>전체 지역</option>
                <option>강남구</option>
                <option>서초구</option>
                <option>용산구</option>
              </select>
              <select className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>전체 유형</option>
                <option>아파트</option>
                <option>오피스텔</option>
                <option>빌라</option>
              </select>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                검색
              </button>
            </div>
          </div>
        </div>

        {/* 매물 리스트 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-800">매물 목록</h3>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors">
                  <Download className="w-4 h-4" />
                  엑셀 다운로드
                </button>
                <button className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors">
                  <Eye className="w-4 h-4" />
                  미리보기
                </button>
              </div>
            </div>
          </div>
          
          <div className="overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">선택</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">매물정보</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">면적/구조</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">가격</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">등록일</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">상태</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
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
      <tr className="hover:bg-slate-50 transition-colors">
        <td className="px-6 py-4">
          <input
            type="checkbox"
            checked={selectedProperties.has(property.id)}
            onChange={() => handleSelectProperty(property.id)}
            className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
          />
        </td>
        <td className="px-6 py-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <div className="font-medium text-slate-900">{property.name}</div>
              <div className="text-sm text-slate-500 flex items-center mt-1">
                <MapPin className="w-3 h-3 mr-1" />
                {property.address}
              </div>
              <div className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded mt-1 inline-block">
                {property.type}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-slate-900">{property.area}</div>
          <div className="text-sm text-slate-500">{property.rooms}</div>
        </td>
        <td className="px-6 py-4">
          <div className="font-semibold text-slate-900">{property.price}</div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-slate-500">{property.date}</div>
        </td>
        <td className="px-6 py-4">
          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
            property.status === '매매' 
              ? 'bg-emerald-100 text-emerald-700' 
              : 'bg-blue-100 text-blue-700'
          }`}>
            {property.status}
          </span>
        </td>
        <td className="px-6 py-4">
          <button className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 transition-colors">
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
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-slate-900">{value}</p>
          </div>
          <div className={`p-3 rounded-lg ${color} text-white`}>
            {icon}
          </div>
        </div>
      </div>
    );
  }

  // 제안서 섹션
  function ProposalSection() {
    return (
      <div className="space-y-12">
        {/* 헤더 */}
        <div className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            🏢 부동산 업계 자동화 컨설팅 & 대시보드 구축 제안서
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-6">
            기존 도구 활용 + 자동화로 부동산 업무 효율성 300% 향상
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white px-4 py-2 rounded-full text-indigo-600 font-medium shadow-sm">📱 채널톡 기반 자동화</span>
            <span className="bg-white px-4 py-2 rounded-full text-indigo-600 font-medium shadow-sm">📊 구글 워크스페이스 통합</span>
            <span className="bg-white px-4 py-2 rounded-full text-indigo-600 font-medium shadow-sm">💬 슬랙 연동 알림</span>
            <span className="bg-white px-4 py-2 rounded-full text-indigo-600 font-medium shadow-sm">🌐 웹 대시보드</span>
          </div>
        </div>

        {/* 프로젝트 개요 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            📋 프로젝트 개요
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                🎯 프로젝트 목표
              </h4>
              <div className="space-y-3 text-slate-600">
                <p>• 채널톡 기반 고객 응대 자동화 및 성과 분석</p>
                <p>• 구글 워크스페이스 통합 데이터 관리 체계 구축</p>
                <p>• 슬랙 연동 실시간 알림 시스템</p>
                <p>• 웹 대시보드를 통한 실시간 성과 모니터링</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                🛠️ 활용 도구
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h5 className="font-medium text-slate-700 mb-2">기존 도구 최적화</h5>
                  <div className="space-y-1 text-sm text-slate-600">
                    <p>📱 채널톡</p>
                    <p>📊 구글 시트</p>
                    <p>📁 구글 드라이브</p>
                    <p>💬 슬랙</p>
                  </div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h5 className="font-medium text-indigo-700 mb-2">신규 구축</h5>
                  <div className="space-y-1 text-sm text-indigo-600">
                    <p>🌐 웹 대시보드</p>
                    <p>📈 퍼널 분석</p>
                    <p>🤖 자동화 봇</p>
                    <p>🕷️ 크롤링 시스템</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 시스템 아키텍처 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            🔄 시스템 아키텍처 (기존 도구 중심)
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-slate-800 mb-4">📐 데이터 흐름도</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                <span className="text-slate-700">고객 문의 (다양한 채널)</span>
                <span className="text-indigo-600 text-xl">↓</span>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-orange-800">📱 채널톡</div>
                    <div className="text-sm text-orange-600">카톡 연동, 네이버톡톡, 웹채팅</div>
                  </div>
                  <span className="text-indigo-600 text-xl">↓</span>
                </div>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-green-800">📊 구글 시트</div>
                    <div className="text-sm text-green-600">고객정보, 상담이력, 매물정보, 영업실적</div>
                  </div>
                  <span className="text-indigo-600 text-xl">↓</span>
                </div>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-blue-800">🌐 웹 대시보드</div>
                    <div className="text-sm text-blue-600">퍼널분석, 전환율추적, 직원실적, 매물현황</div>
                  </div>
                  <span className="text-indigo-600 text-xl">↓</span>
                </div>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <div className="font-medium text-purple-800">💬 슬랙</div>
                <div className="text-sm text-purple-600">신규문의, 목표달성, 이탈위험 실시간 알림</div>
              </div>
            </div>
          </div>
        </div>

        {/* 채널톡 자동화 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            👨‍💼 1. 채널톡 기반 고객 응대 자동화
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">🤖 자동 응답 시스템</h4>
              <div className="space-y-3">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="font-medium text-slate-700 mb-2">📋 기본 문의 (80% 자동 처리)</div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• "매물 문의" → 자동 매물 정보 전송</p>
                    <p>• "시세 문의" → 지역별 시세 자료 발송</p>
                    <p>• "상담 예약" → 캘린더 링크 자동 전송</p>
                    <p>• "회사 정보" → 회사 소개 자료 발송</p>
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="font-medium text-orange-700 mb-2">🔄 업무시간 외 응답</div>
                  <div className="space-y-1 text-sm text-orange-600">
                    <p>• 자동 응답 메시지 발송</p>
                    <p>• 다음날 할 일에 자동 추가</p>
                    <p>• 긴급연락처 안내</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">📊 채널톡 성과 추적</h4>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="font-medium text-indigo-700 mb-3">실시간 모니터링 지표</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-slate-700">📈 응답 성과</div>
                    <div className="space-y-1 text-slate-600">
                      <p>평균 응답시간: 2분</p>
                      <p>첫 응답률: 95%</p>
                      <p>해결률: 85%</p>
                      <p>만족도: 4.2/5</p>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-700">👥 직원별 성과</div>
                    <div className="space-y-1 text-slate-600">
                      <p>박소현: 25건/일</p>
                      <p>김효석: 18건/일</p>
                      <p>이직원: 22건/일</p>
                      <p>평균: 21.7건/일</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg mt-4">
                <div className="font-medium text-red-700 mb-2">⚠️ 이탈 위험 감지</div>
                <div className="space-y-1 text-sm text-red-600">
                  <p>• 3시간 무응답 → 슬랙 알림</p>
                  <p>• 부정적 키워드 감지 → 팀장 알림</p>
                  <p>• VIP 고객 문의 → 즉시 알림</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 웹 대시보드 기능 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            🌐 3. 웹 대시보드 구축
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">🎯 고객 퍼널 분석</h4>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">문의접수</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-blue-200 h-2 rounded-full">
                        <div className="w-full bg-blue-600 h-2 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">100명</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">1차상담</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-blue-200 h-2 rounded-full">
                        <div className="w-4/5 bg-blue-600 h-2 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">80명</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">매물추천</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-blue-200 h-2 rounded-full">
                        <div className="w-3/5 bg-blue-600 h-2 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">60명</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">임장신청</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-blue-200 h-2 rounded-full">
                        <div className="w-1/4 bg-blue-600 h-2 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">25명</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">계약체결</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-blue-200 h-2 rounded-full">
                        <div className="w-1/5 bg-blue-600 h-2 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">12명</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">👥 직원별 성과 대시보드</h4>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700">👤 박소현</span>
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">13.3% 🟢</span>
                  </div>
                  <div className="text-sm text-slate-600 mt-1">응답: 45건 | 상담: 38건 | 계약: 6건</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700">👤 김효석</span>
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">15.6% 🟢</span>
                  </div>
                  <div className="text-sm text-slate-600 mt-1">응답: 32건 | 상담: 28건 | 계약: 5건</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700">👤 이직원</span>
                    <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">10.7% 🔴</span>
                  </div>
                  <div className="text-sm text-slate-600 mt-1">응답: 28건 | 상담: 22건 | 계약: 3건</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 프로젝트 비용 및 일정 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            💰 프로젝트 비용 및 일정
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">📅 개발 일정 (총 2개월)</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-2">1단계: 자동화 컨설팅 (2주)</h5>
                  <div className="text-sm text-blue-600 space-y-1">
                    <p>• Week 1: 현황 분석 및 설계</p>
                    <p>• Week 2: 기본 자동화 구축</p>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">2단계: 대시보드 개발 (4주)</h5>
                  <div className="text-sm text-green-600 space-y-1">
                    <p>• Week 3-4: 대시보드 개발</p>
                    <p>• Week 5-6: 고도화 및 테스트</p>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">3단계: 배포 및 교육 (2주)</h5>
                  <div className="text-sm text-purple-600 space-y-1">
                    <p>• Week 7: 배포 및 안정화</p>
                    <p>• Week 8: 교육 및 지원</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">💸 비용 구조</h4>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h5 className="font-medium text-slate-700 mb-3">컨설팅 + 개발 비용</h5>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>자동화 컨설팅</span>
                      <span className="font-medium">1,600만원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>웹 대시보드 개발</span>
                      <span className="font-medium">2,200만원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>보안 및 권한 시스템</span>
                      <span className="font-medium">900만원</span>
                    </div>
                    <div className="border-t pt-2 mt-2 border-slate-300">
                      <div className="flex justify-between font-semibold text-slate-800">
                        <span>총 개발비</span>
                        <span>4,700만원</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h5 className="font-medium text-indigo-700 mb-3">월간 운영 비용</h5>
                  <div className="space-y-2 text-sm text-indigo-600">
                    <div className="flex justify-between">
                      <span>기존 도구 (고객 부담)</span>
                      <span className="font-medium">22만원/월</span>
                    </div>
                    <div className="flex justify-between">
                      <span>신규 운영비 (저희 제공)</span>
                      <span className="font-medium">105만원/월</span>
                    </div>
                    <div className="border-t pt-2 mt-2 border-indigo-300">
                      <div className="flex justify-between font-semibold text-indigo-800">
                        <span>월 총 운영비</span>
                        <span>127만원</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 효과 및 ROI 분석 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            📈 효과 및 ROI 분석
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">⏱️ 업무 효율성 개선</h4>
              <div className="space-y-3">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="font-medium text-slate-700 mb-2">업무 시간 단축 효과</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">고객 문의 응답</span>
                      <span className="font-medium text-emerald-600">80% 단축</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">고객 정보 정리</span>
                      <span className="font-medium text-emerald-600">93% 단축</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">매물 정보 수집</span>
                      <span className="font-medium text-emerald-600">83% 단축</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">실적 보고서 작성</span>
                      <span className="font-medium text-emerald-600">94% 단축</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="font-medium text-green-700 mb-2">💰 인건비 절약 효과</div>
                  <div className="text-sm text-green-600">
                    <p>직원 1명당 하루 2시간 절약 = 월 40시간</p>
                    <p>5명 팀 기준 = <span className="font-semibold">월 500만원 절약</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">🎯 매출 향상 효과</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-medium text-blue-700 mb-2">퍼널 개선을 통한 매출 증대</div>
                  <div className="space-y-2 text-sm text-blue-600">
                    <p>• 응답률 향상: 70% → 95%</p>
                    <p>• 전환율 향상: 12% → 18%</p>
                    <p>• 이탈 방지: 30% → 10%</p>
                    <p className="font-semibold text-blue-800">종합 매출 증가: 평균 40% 향상</p>
                  </div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="font-medium text-indigo-700 mb-2">🎯 ROI 계산</div>
                  <div className="space-y-2 text-sm text-indigo-600">
                    <div className="flex justify-between">
                      <span>월 매출 2억원 중개업소 기준</span>
                    </div>
                    <div className="flex justify-between">
                      <span>추가 매출</span>
                      <span className="font-medium">월 8,000만원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>연간 추가 매출</span>
                      <span className="font-semibold">9억 6,000만원</span>
                    </div>
                    <div className="border-t pt-2 mt-2 border-indigo-300">
                      <div className="font-bold text-indigo-800 text-center">
                        ROI: 1,612% (투자 회수: 0.7개월)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 성공 지표 정의 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            🎯 성공 지표 정의
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">⚡ 업무 효율성 지표</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-medium text-blue-700 mb-2">응답 속도 개선</div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-blue-600">
                    <div>평균 응답 시간: 10분 → 2분</div>
                    <div>첫 응답률: 70% → 95%</div>
                    <div>문의 처리량: 20건 → 35건/일</div>
                    <div>고객 만족도: 3.2 → 4.5/5</div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="font-medium text-green-700 mb-2">데이터 관리 효율성</div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-green-600">
                    <div>입력 시간: 15분 → 1분/건</div>
                    <div>오류율: 15% → 2%</div>
                    <div>중복 작업: 40% → 5%</div>
                    <div>검색 시간: 5분 → 30초</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">💰 매출 성과 지표</h4>
              <div className="space-y-3">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-medium text-purple-700 mb-2">퍼널 전환율 개선</div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-purple-600">
                    <div>문의→상담: 70% → 85%</div>
                    <div>상담→임장: 25% → 35%</div>
                    <div>임장→계약: 45% → 55%</div>
                    <div>전체 성약률: 12% → 18%</div>
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="font-medium text-orange-700 mb-2">고객 관리 성과</div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-orange-600">
                    <div>이탈률: 30% → 10%</div>
                    <div>재문의율: 15% → 35%</div>
                    <div>추천 고객: 월2명 → 월8명</div>
                    <div>VIP 고객: 20% → 40%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 제안 요청 */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            📞 제안 요청
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">🤝 컨설팅 + 개발 패키지 제안</h4>
              <div className="space-y-3 text-indigo-100">
                <p>• <span className="font-medium">현실적 접근</span>: 기존 도구 최대 활용 + 필요한 부분만 개발</p>
                <p>• <span className="font-medium">단계적 도입</span>: 2개월 완성, 즉시 효과 체감</p>
                <p>• <span className="font-medium">지속적 지원</span>: 1개월 무료 + 이후 월 50만원 유지보수</p>
                <p>• <span className="font-medium">성과 보장</span>: 3개월 내 효과 미달시 50% 환불</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">📋 다음 단계</h4>
              <div className="space-y-2 text-indigo-100">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xs mr-3">1</span>
                  <span><span className="font-medium">무료 상담</span>: 현재 업무 프로세스 분석 (2시간)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xs mr-3">2</span>
                  <span><span className="font-medium">시연</span>: 실제 동작하는 프로토타입 시연 (1시간)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xs mr-3">3</span>
                  <span><span className="font-medium">파일럿</span>: 1개월 소규모 테스트 운영</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xs mr-3">4</span>
                  <span><span className="font-medium">본격 도입</span>: 전체 시스템 구축 및 이관</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg">
                <div className="text-sm space-y-1">
                  <p><span className="font-medium">📧 이메일</span>: automation@realestate-consulting.com</p>
                  <p><span className="font-medium">📞 전화</span>: 02-1234-5678</p>
                  <p><span className="font-medium">💬 카카오톡</span>: @부동산자동화</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-xl font-semibold mb-2">간단하지만 강력한 자동화로 업무 혁신을 시작하세요! 🚀</p>
            <p className="text-indigo-200 italic">"복잡한 시스템이 아닌, 실용적인 자동화로 즉시 효과를 체감하실 수 있습니다."</p>
          </div>
        </div>
      </div>
    );
  }

  // 특징 카드 컴포넌트
  function FeatureCard({ icon, title, description, color }) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all hover:-translate-y-1">
        <div className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center text-white mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    );
  }
};

export default RealEstateDashboard; 