import React from 'react';
import { 
  User, Building, Bot, Globe, Database, Bell, Target, Zap, 
  CheckCircle, AlertTriangle, Shield, DollarSign, BarChart3,
  TrendingUp, Users, Phone, Calendar
} from 'lucide-react';

const ProposalSection = () => {
  return (
    <div className="space-y-8">
      {/* 프로젝트 개요 */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-8 text-white">
        <h2 className="text-3xl font-bold mb-6">🏢 부동산 업계 자동화 컨설팅 & 대시보드 구축 제안서</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              프로젝트 목표
            </h3>
            <p className="mb-4 font-medium">기존 도구 활용 + 자동화로 부동산 업무 효율성 300% 향상</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" />채널톡 기반 고객 응대 자동화 및 성과 분석</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" />구글 워크스페이스 통합 데이터 관리 체계 구축</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" />슬랙 연동 실시간 알림 시스템</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" />웹 대시보드를 통한 실시간 성과 모니터링</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-2" />
              활용 도구
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-medium mb-2">기존 도구 최적화</p>
                <ul className="space-y-1">
                  <li>📱 채널톡</li>
                  <li>📊 구글 시트</li>
                  <li>📁 구글 드라이브</li>
                  <li>💬 슬랙</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-medium mb-2">신규 구축</p>
                <ul className="space-y-1">
                  <li>🌐 웹 대시보드</li>
                  <li>📈 퍼널 분석</li>
                  <li>🤖 자동화 봇</li>
                  <li>🕷️ 크롤링 시스템</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <User className="w-6 h-6 mr-2" />
            전담 컨설턴트 서비스
          </h3>
          <div className="flex items-center space-x-4">
            <div className="bg-white bg-opacity-20 rounded-full p-4">
              <User className="w-8 h-8" />
            </div>
            <div>
              <p className="font-medium text-lg">하상현 과장</p>
              <p className="text-sm opacity-90">주 2~3회 풀타임 현장 방문</p>
              <p className="text-sm opacity-90">모든 프로세스 직접 확인 및 최적화</p>
              <p className="text-sm opacity-90">실시간 업무 개선 컨설팅</p>
            </div>
          </div>
        </div>
      </div>

      {/* 시스템 아키텍처 */}
      <SystemArchitectureSection />

      {/* 주요 기능 */}
      <MainFeaturesSection />

      {/* 보안 시스템 */}
      <SecuritySection />

      {/* 크롤링 시스템 */}
      <CrawlingSection />

      {/* ROI 분석 */}
      <ROISection />

      {/* 프로젝트 일정 및 비용 */}
      <ScheduleAndCostSection />
    </div>
  );
};

// 시스템 아키텍처 섹션
const SystemArchitectureSection = () => (
  <div className="bg-white rounded-lg p-8 shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <Database className="w-8 h-8 mr-3 text-blue-600" />
      시스템 아키텍처
    </h2>
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <Globe className="w-8 h-8 mx-auto mb-2 text-blue-600" />
          <h3 className="font-bold mb-2">웹 프론트엔드</h3>
          <div className="space-y-2 text-sm">
            <span className="block bg-white p-2 rounded">👥 직원 관리</span>
            <span className="block bg-white p-2 rounded">👤 고객 관리</span>
            <span className="block bg-white p-2 rounded">📊 관리자 대시보드</span>
          </div>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <Database className="w-8 h-8 mx-auto mb-2 text-green-600" />
          <h3 className="font-bold mb-2">통합 API 레이어</h3>
          <div className="space-y-2 text-sm">
            <span className="block bg-white p-2 rounded">📱 채널톡</span>
            <span className="block bg-white p-2 rounded">📊 데이터베이스</span>
            <span className="block bg-white p-2 rounded">🤖 자동화 엔진</span>
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded-lg text-center">
          <Shield className="w-8 h-8 mx-auto mb-2 text-red-600" />
          <h3 className="font-bold mb-2">보안 및 권한 관리</h3>
          <div className="text-sm mt-2">
            <p>워터마크 자동 적용</p>
            <p>접근 로그 기록</p>
            <p>데이터 암호화</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 주요 기능 섹션
const MainFeaturesSection = () => (
  <div className="grid md:grid-cols-2 gap-8">
    {/* 채널톡 자동화 */}
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
        <Bot className="w-6 h-6 mr-2 text-blue-600" />
        채널톡 기반 고객 응대 자동화
      </h3>
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center">
            <Bot className="w-4 h-4 mr-2" />
            자동 응답 시스템
          </h4>
          <ul className="text-sm space-y-1">
            <li>• "매물 문의" → 자동 매물 정보 전송</li>
            <li>• "시세 문의" → 지역별 시세 자료 발송</li>
            <li>• "상담 예약" → 캘린더 링크 자동 전송</li>
            <li>• 업무시간 외 자동 응답</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center">
            <BarChart3 className="w-4 h-4 mr-2" />
            성과 추적
          </h4>
          <ul className="text-sm space-y-1">
            <li>• 평균 응답시간: 2분</li>
            <li>• 첫 응답률: 95%</li>
            <li>• 직원별 실시간 성과</li>
            <li>• 이탈 위험 고객 자동 감지</li>
          </ul>
        </div>
      </div>
    </div>

    {/* 웹 대시보드 */}
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
        <Globe className="w-6 h-6 mr-2 text-purple-600" />
        웹 대시보드 구축
      </h3>
      <div className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center">
            <Target className="w-4 h-4 mr-2" />
            고객 퍼널 분석
          </h4>
          <div className="text-sm space-y-1">
            {[
              { stage: '문의접수', count: 100, rate: 100 },
              { stage: '1차상담', count: 80, rate: 80 },
              { stage: '매물추천', count: 60, rate: 60 },
              { stage: '임장신청', count: 25, rate: 25 },
              { stage: '계약체결', count: 12, rate: 12 }
            ].map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.stage}</span>
                <span className="font-medium">{item.count}명 ({item.rate}%)</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center">
            <Users className="w-4 h-4 mr-2" />
            직원별 성과
          </h4>
          <ul className="text-sm space-y-1">
            <li>• 실시간 응답 현황</li>
            <li>• 목표 대비 달성률</li>
            <li>• 성약률 비교 분석</li>
            <li>• 자동 코칭 알림</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// 보안 시스템 섹션
const SecuritySection = () => (
  <div className="bg-white rounded-lg p-8 shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <Shield className="w-8 h-8 mr-3 text-red-600" />
      보안 시스템 (직원 데이터 유출 방지)
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-red-50 p-6 rounded-lg">
        <h3 className="font-bold mb-3 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
          자동 워터마크
        </h3>
        <ul className="text-sm space-y-2">
          <li>• 모든 파일에 자동 적용</li>
          <li>• 다운로드 사용자 정보 표시</li>
          <li>• 시간/날짜 스탬프</li>
          <li>• 회사명 및 경고문</li>
        </ul>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="font-bold mb-3 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-yellow-600" />
          다운로드 제한
        </h3>
        <ul className="text-sm space-y-2">
          <li>• 직원별 권한 세분화</li>
          <li>• 뷰어 전용 권한 설정</li>
          <li>• 근무시간 외 접근 차단</li>
          <li>• 실시간 접근 로그</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="font-bold mb-3 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
          모니터링
        </h3>
        <ul className="text-sm space-y-2">
          <li>• 이상 행동 자동 감지</li>
          <li>• 대량 다운로드 알림</li>
          <li>• 월간 보안 리포트</li>
          <li>• 자동 백업 시스템</li>
        </ul>
      </div>
    </div>
  </div>
);

// 크롤링 시스템 섹션
const CrawlingSection = () => (
  <div className="bg-white rounded-lg p-8 shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <Database className="w-8 h-8 mr-3 text-green-600" />
      네이버 부동산 크롤링 시스템
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-bold mb-4">🔄 자동 크롤링 프로세스</h3>
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <div className="flex items-center space-x-2">
            <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">09:00</span>
            <span className="text-sm">오전 크롤링 실행</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">14:00</span>
            <span className="text-sm">오후 크롤링 실행</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">18:00</span>
            <span className="text-sm">저녁 크롤링 실행</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-4">📊 수집 데이터</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between p-2 bg-gray-50 rounded">
            <span>오늘 수집</span>
            <span className="font-medium">234건</span>
          </div>
          <div className="flex justify-between p-2 bg-green-50 rounded">
            <span>신규 매물</span>
            <span className="font-medium text-green-600">18건</span>
          </div>
          <div className="flex justify-between p-2 bg-orange-50 rounded">
            <span>가격 변동</span>
            <span className="font-medium text-orange-600">7건</span>
          </div>
          <div className="flex justify-between p-2 bg-red-50 rounded">
            <span>매물 삭제</span>
            <span className="font-medium text-red-600">12건</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ROI 분석 섹션
const ROISection = () => (
  <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-white">
    <h2 className="text-2xl font-bold mb-6 flex items-center">
      <TrendingUp className="w-8 h-8 mr-3" />
      투자 대비 효과 (ROI) 분석
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white bg-opacity-20 rounded-lg p-6">
        <h3 className="font-bold text-lg mb-3 flex items-center">
          <Zap className="w-6 h-6 mr-2" />
          업무 효율성
        </h3>
        <ul className="space-y-2 text-sm">
          <li>• 고객 응답: 10분 → 2분 (80% 단축)</li>
          <li>• 정보 정리: 15분 → 1분 (93% 단축)</li>
          <li>• 매물 수집: 2시간 → 20분 (83% 단축)</li>
          <li>• 보고서 작성: 3시간 → 10분 (94% 단축)</li>
        </ul>
        <div className="mt-4 p-3 bg-white bg-opacity-30 rounded">
          <p className="font-bold">월 500만원 인건비 절약</p>
          <p className="text-sm">5명 팀 기준</p>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-20 rounded-lg p-6">
        <h3 className="font-bold text-lg mb-3 flex items-center">
          <DollarSign className="w-6 h-6 mr-2" />
          매출 향상
        </h3>
        <ul className="space-y-2 text-sm">
          <li>• 응답률: 70% → 95% 향상</li>
          <li>• 전환율: 12% → 18% 향상</li>
          <li>• 이탈 방지: 30% → 10% 감소</li>
          <li>• 종합 매출: 40% 증가</li>
        </ul>
        <div className="mt-4 p-3 bg-white bg-opacity-30 rounded">
          <p className="font-bold">월 8,000만원 추가 매출</p>
          <p className="text-sm">2억원 중개업소 기준</p>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-20 rounded-lg p-6">
        <h3 className="font-bold text-lg mb-3 flex items-center">
          <Target className="w-6 h-6 mr-2" />
          ROI 계산
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>연간 효과</span>
            <span className="font-bold">10억 2,000만원</span>
          </div>
          <div className="flex justify-between">
            <span>투자 비용</span>
            <span>5,960만원</span>
          </div>
          <div className="border-t border-white border-opacity-30 pt-2">
            <div className="flex justify-between font-bold text-lg">
              <span>ROI</span>
              <span className="text-yellow-300">1,612%</span>
            </div>
            <p className="text-xs mt-1">투자 회수 기간: 0.7개월</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 일정 및 비용 섹션
const ScheduleAndCostSection = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
        <Calendar className="w-8 h-8 mr-3 text-blue-600" />
        프로젝트 일정 (총 2개월)
      </h2>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-bold">1단계: 자동화 컨설팅 (2주)</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>• 현황 분석 및 설계</li>
            <li>• 채널톡 ↔ 구글 시트 연동</li>
            <li>• 슬랙 알림 시스템 구축</li>
            <li>• 기본 보안 설정</li>
          </ul>
        </div>
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold">2단계: 대시보드 개발 (4주)</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>• 웹 대시보드 UI/UX 디자인</li>
            <li>• 실시간 차트 구현</li>
            <li>• 퍼널 분석 기능</li>
            <li>• 크롤링 시스템 구축</li>
          </ul>
        </div>
        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="font-bold">3단계: 배포 및 교육 (2주)</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>• 운영 서버 배포</li>
            <li>• 직원 교육 (4시간)</li>
            <li>• 관리자 교육 (2시간)</li>
            <li>• 1개월 무료 지원</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
        <DollarSign className="w-8 h-8 mr-3 text-green-600" />
        비용 구조
      </h2>
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">컨설팅 + 개발 비용</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>자동화 컨설팅</span>
              <span className="font-medium">1,600만원</span>
            </div>
            <div className="flex justify-between">
              <span>웹 대시보드 개발</span>
              <span className="font-medium">2,200만원</span>
            </div>
            <div className="flex justify-between">
              <span>보안 시스템</span>
              <span className="font-medium">900만원</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>총 개발비</span>
              <span className="text-blue-600">4,700만원</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">월간 운영 비용</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>서버 호스팅</span>
              <span>30만원</span>
            </div>
            <div className="flex justify-between">
              <span>크롤링 서버</span>
              <span>15만원</span>
            </div>
            <div className="flex justify-between">
              <span>유지보수</span>
              <span>50만원</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>월 운영비</span>
              <span className="text-green-600">105만원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProposalSection; 