import React, { useState, useEffect } from 'react';
import { 
  Star, Search, Download, Eye, Heart, Phone, MapPin, Calendar, User, 
  TrendingUp, Filter, Building, Users, DollarSign, BarChart3, Shield,
  Bot, Globe, Database, Bell, Target, Zap, CheckCircle, AlertTriangle
} from 'lucide-react';
import ProposalSectionComponent from './ProposalSection';

const RealEstateDashboard = () => {
  const [selectedProperties, setSelectedProperties] = useState(new Set());
  const [sortBy, setSortBy] = useState('recent');
  const [filterRegion, setFilterRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('dashboard');

  // 통계 데이터
  const stats = {
    total: 186,
    naver: 26,
    kakao: 0,
    myProperties: 47,
    interest: 7,
    calls: 315,
    consultations: 0
  };

  // 샘플 매물 데이터
  const properties = [
    {
      id: '3340846',
      type: '아파트',
      name: '한남동',
      address: '한남동로2길 10층 102호',
      area: '276.67',
      room: '2437',
      price: '6억2000',
      date: '25.05.20',
      status: '광고미허',
      tags: ['수정하기']
    },
    {
      id: '3269846',
      type: '아파트',
      name: '논현동',
      address: '강남안암수길 10층 301호',
      area: '267.91',
      room: '2449',
      price: '6억',
      date: '25.04.14',
      status: '광고미허',
      tags: ['수정하기']
    },
    {
      id: '3268824',
      type: '아파트',
      name: '논현동',
      address: '논현동한성길 50층 401호',
      area: '284.41',
      room: '2449',
      price: '6억5000',
      date: '25.04.14',
      status: '매매',
      tags: ['광고하기', '수정하기']
    }
  ];

  const handleSelectAll = () => {
    if (selectedProperties.size === properties.length) {
      setSelectedProperties(new Set());
    } else {
      setSelectedProperties(new Set(properties.map(p => p.id)));
    }
  };

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Building className="w-8 h-8 text-blue-600 mr-2" />
                <h1 className="text-xl font-bold text-gray-900">더부동산 - 자동화 솔루션</h1>
              </div>
              <nav className="flex space-x-8">
                <button 
                  onClick={() => setActiveSection('dashboard')}
                  className={`font-medium pb-4 border-b-2 ${
                    activeSection === 'dashboard' 
                      ? 'text-blue-600 border-blue-600' 
                      : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
                >
                  매물관리
                </button>
                <button 
                  onClick={() => setActiveSection('proposal')}
                  className={`font-medium pb-4 border-b-2 ${
                    activeSection === 'proposal' 
                      ? 'text-blue-600 border-blue-600' 
                      : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
                >
                  자동화 제안서
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeSection === 'dashboard' && <DashboardSection />}
        {activeSection === 'proposal' && <ProposalSection />}
      </div>
    </div>
  );

  // 대시보드 섹션 컴포넌트
  function DashboardSection() {
    return (
      <>
        {/* 성과 현황 카드 */}
        <div className="bg-white rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">MY 영업활동 현황</h2>
            <button className="bg-red-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-500">
              광고등록
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-4">
            <div className="bg-orange-500 text-white rounded-lg p-4 text-center">
              <div className="text-sm mb-1">출래이지</div>
              <div className="text-2xl font-bold">{stats.total}</div>
            </div>
            <StatCard title="네이버광고" value={stats.naver} color="gray" />
            <StatCard title="광고율" value={stats.kakao} color="gray" />
            <StatCard title="MY 매물" value={stats.myProperties} color="blue" />
            <StatCard title="잠정전화" value={stats.interest} color="gray" />
            <StatCard title="월전전화" value={stats.calls} color="gray" />
            <StatCard title="계약전화" value={stats.consultations} color="green" />
          </div>
        </div>

        {/* 매물찾기 섹션 */}
        <PropertySearchSection />

        {/* 매물 리스트 */}
        <PropertyListSection />
      </>
    );
  }

  // 매물 검색 섹션 컴포넌트
  function PropertySearchSection() {
    return (
      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <h3 className="font-medium text-gray-900">매물찾기</h3>
          <span className="ml-2 text-sm text-gray-500">* 매물명과 전체물건 거래전과 속기업체니다.</span>
        </div>

        <div className="space-y-4">
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">매물 검색</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 w-64"
                placeholder="매물명을 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">지역조건</label>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>매물주유</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">시/도</label>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>서울</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">구/군</label>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>강남구</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">읍/면/동</label>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>전체</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
              초기화
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
              검색
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 매물 리스트 섹션 컴포넌트
  function PropertyListSection() {
    return (
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-900">매물 리스트</h3>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-1 border border-gray-300 px-3 py-1 rounded text-sm">
              <Download className="w-4 h-4" />
              <span>엑셀하기</span>
            </button>
            <button className="flex items-center space-x-1 border border-gray-300 px-3 py-1 rounded text-sm">
              <Eye className="w-4 h-4" />
              <span>백업내용</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-600 text-white">
              <tr>
                <th className="p-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedProperties.size === properties.length}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300"
                  />
                </th>
                <th className="p-3 text-left">
                  <Star className="w-4 h-4" />
                </th>
                <th className="p-3 text-left">매물번호</th>
                <th className="p-3 text-left">매물주유</th>
                <th className="p-3 text-left">지역명/상세주소</th>
                <th className="p-3 text-left">면적</th>
                <th className="p-3 text-left">거래유형/관리비유</th>
                <th className="p-3 text-left">광고내역</th>
                <th className="p-3 text-left">등록자</th>
                <th className="p-3 text-left">등록일</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <PropertyRow key={property.id} property={property} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">이전</button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">다음</button>
          </div>
        </div>
      </div>
    );
  }

  // 매물 행 컴포넌트
  function PropertyRow({ property }) {
    return (
      <tr className="border-b border-gray-100 hover:bg-gray-50">
        <td className="p-3">
          <input
            type="checkbox"
            checked={selectedProperties.has(property.id)}
            onChange={() => handleSelectProperty(property.id)}
            className="rounded border-gray-300"
          />
        </td>
        <td className="p-3">
          <Star className="w-4 h-4 text-gray-400 cursor-pointer hover:text-yellow-400" />
        </td>
        <td className="p-3">
          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
            A
          </span>
          <span className="ml-2 text-blue-600 font-medium">{property.id}</span>
        </td>
        <td className="p-3 text-gray-700">{property.type}</td>
        <td className="p-3">
          <div className="font-medium text-gray-900">{property.name}</div>
          <div className="text-sm text-gray-500">{property.address}</div>
        </td>
        <td className="p-3">
          <div className="text-sm">
            <div>[전]{property.area}</div>
            <div>[전]{property.room}</div>
          </div>
        </td>
        <td className="p-3">
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
            매매
          </span>
        </td>
        <td className="p-3">
          <div className="space-y-1">
            {property.tags.map((tag, index) => (
              <button
                key={index}
                className={`px-2 py-1 rounded text-xs font-medium ${
                  tag === '광고하기' 
                    ? 'bg-orange-100 text-orange-600 border border-orange-200' 
                    : 'bg-blue-100 text-blue-600 border border-blue-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </td>
        <td className="p-3 text-gray-700">성의</td>
        <td className="p-3 text-gray-700">{property.date}</td>
      </tr>
    );
  }

  // 제안서 섹션 컴포넌트
  function ProposalSection() {
    return <ProposalSectionComponent />;
  }

  // StatCard 컴포넌트
  function StatCard({ title, value, color = 'blue' }) {
    return (
      <div className={`bg-white rounded-lg p-4 shadow-sm border-l-4 border-${color}-500`}>
        <div className="text-sm text-gray-600 mb-1">{title}</div>
        <div className={`text-2xl font-bold text-${color}-600`}>{value}</div>
      </div>
    );
  }
};

export default RealEstateDashboard; 