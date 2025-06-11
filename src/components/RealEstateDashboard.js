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
        <div className="max-w-6xl mx-auto px-6">
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

      <div className="max-w-6xl mx-auto px-6 py-8">
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
      <div className="space-y-8">
        {/* 헤더 */}
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            부동산 업계 자동화 솔루션
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            AI와 자동화 기술로 부동산 업무 효율성을 300% 향상시키는 종합 솔루션
          </p>
        </div>

        {/* 주요 특징 */}
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="데이터 기반 의사결정"
            description="실시간 시장 분석과 통계로 정확한 판단을 지원합니다."
            color="bg-gradient-to-r from-blue-500 to-cyan-500"
          />
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="업무 자동화"
            description="반복 작업을 자동화하여 생산성을 극대화합니다."
            color="bg-gradient-to-r from-emerald-500 to-teal-500"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="고객 관리 시스템"
            description="체계적인 고객 관리로 만족도를 향상시킵니다."
            color="bg-gradient-to-r from-purple-500 to-pink-500"
          />
        </div>

        {/* ROI 섹션 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">예상 효과</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">정량적 효과</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-600">업무 처리 시간</span>
                  <span className="font-semibold text-emerald-600">70% 단축</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-600">매물 등록 시간</span>
                  <span className="font-semibold text-emerald-600">85% 감소</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-600">고객 응답 속도</span>
                  <span className="font-semibold text-emerald-600">400% 향상</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">ROI 전망</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-600">1년차</span>
                  <span className="font-semibold text-indigo-600">150% ROI</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-600">2년차</span>
                  <span className="font-semibold text-indigo-600">300% ROI</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-600">3년차</span>
                  <span className="font-semibold text-indigo-600">500% ROI</span>
                </div>
              </div>
            </div>
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