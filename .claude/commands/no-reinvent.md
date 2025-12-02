---
description: '프로젝트 유틸리티 함수를 분석하여 대체 가능한 검증된 라이브러리 제안'
allowed-tools:
  [
    'Glob',
    'Grep',
    'Read',
    'Bash(cat:*)',
    'Bash(ls:*)',
    'Bash(find:*)',
    'WebSearch',
  ]
---

# Claude 명령어: No Reinvent

프로젝트에 작성된 유틸리티 함수들을 철저히 분석하여, 검증된 유명한 라이브러리로 대체 가능한 기능을 찾고 최적의 라이브러리를 추천합니다.

## 사용법

```
/no-reinvent
```

## 분석 프로세스

1. **유틸리티 함수 수집**
   - `src/lib/`, `src/utils/`, `lib/`, `utils/` 등의 폴더 스캔
   - 모든 함수 정의 추출

2. **함수 기능 분석**
   - 각 함수의 목적과 기능 파악
   - 함수의 복잡도 및 테스트 여부 확인

3. **기존 의존성 확인**
   - `package.json` 분석
   - 이미 설치된 라이브러리 검토

4. **라이브러리 매칭**
   - npm의 인기 있는 라이브러리 조사
   - GitHub 별 개수, 다운로드 수, 유지보수 상태 확인

5. **추천 보고서 생성**
   - 카테고리별 분류 (날짜, 유틸리티, 검증 등)
   - 각 함수별 대체 라이브러리 추천
   - 마이그레이션 복잡도 평가

## 출력 형식

```
🔍 No Reinvent Analysis Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 분석 결과
  • 발견된 유틸리티 함수: [개수]
  • 라이브러리 대체 가능: [개수]
  • 추천 라이브러리: [개수]

🎯 추천 항목

📅 Date/Time 유틸리티
  ├─ 함수명: formatDate()
  ├─ 현재 방식: 커스텀 구현
  ├─ 추천 라이브러리: date-fns, Day.js
  ├─ npm 다운로드: [월 다운로드 수]
  ├─ 복잡도: ⭐⭐ (마이그레이션 난이도)
  └─ 마이그레이션: import { format } from 'date-fns'

🔤 String/Text 유틸리티
  ├─ 함수명: truncate()
  ├─ 현재 방식: 커스텀 구현
  ├─ 추천 라이브러리: lodash, string-utils
  ├─ npm 다운로드: [월 다운로드 수]
  ├─ 복잡도: ⭐ (마이그레이션 난이도)
  └─ 마이그레이션: import { truncate } from 'lodash'

⚡ 성능 개선 지표
  • 전체 번들 크기 감소: [예상 크기]
  • 유지보수성 향상: [향상도]
  • 테스트 커버리지: [기대값]

✅ 분석 완료
```

## 분석 카테고리

- 📅 **날짜/시간**: formatDate, parseDate, isDate 등
- 🔤 **문자열**: slugify, truncate, capitalize, camelCase 등
- 🔢 **숫자**: formatNumber, round, clamp 등
- 🎨 **스타일**: cn, classNames, mergeClasses 등
- 🔍 **배열**: flatten, unique, groupBy, chunk 등
- 🧪 **검증**: validateEmail, validateUrl, isValid 등
- 📦 **타입 체크**: isObject, isArray, isPrimitive 등

## 우선순위 기준

1. **High**: 매우 인기 있고 유지보수가 잘되는 라이브러리 추천
2. **Medium**: 좋은 라이브러리이나 단순한 함수
3. **Low**: 매우 특수한 경우만 대체 추천

## 참고사항

- 현재 번들 크기 및 성능 영향 분석 포함
- 마이그레이션 복잡도 평가
- 라이브러리의 유지보수 상태 확인
- 실제 프로젝트에 맞는 추천 제공
