---
description: 'Playwright MCP를 사용하여 서비스 오류 점검 및 안내'
allowed-tools:
  [
    'mcp__playwright__browser_navigate',
    'mcp__playwright__browser_console_messages',
    'mcp__playwright__browser_network_requests',
    'mcp__playwright__browser_snapshot',
    'mcp__playwright__browser_close',
    'Bash(lsof:*)',
    'Bash(curl:*)',
  ]
---

# Claude 명령어: Error Check

Playwright MCP를 사용하여 현재 개발 중인 서비스의 오류를 점검하고 안내합니다.

## 사용법

```
/error-check
```

## 점검 항목

1. **개발 서버 상태** - localhost:3000 실행 여부
2. **콘솔 에러** - 브라우저 콘솔 에러 메시지 수집
3. **네트워크 오류** - API 요청 및 리소스 로딩 오류 확인
4. **접근성 검사** - 페이지 구조 및 접근성 이슈 감지
5. **종합 리포트** - 발견된 모든 오류 정리 및 해결 안내

## 프로세스

1. 개발 서버 실행 상태 확인 (포트 3000)
2. 브라우저로 `http://localhost:3000` 접속
3. 페이지 로드 완료 대기
4. 콘솔 메시지 수집
5. 네트워크 요청 정보 분석
6. 페이지 스냅샷으로 접근성 점검
7. 발견된 오류들을 카테고리별로 정리하여 제시
8. 브라우저 종료

## 오류 분류

- **Critical (심각)**: 페이지 기능이 작동하지 않는 오류
- **Warning (경고)**: 기능은 작동하지만 개선이 필요한 이슈
- **Info (정보)**: 성능 또는 접근성 개선 제안

## 출력 형식

```
🔍 Error Check Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ 서버 상태: [상태]

🚨 Critical Errors: [개수]
  - [오류 항목들]

⚠️ Warnings: [개수]
  - [경고 항목들]

ℹ️ Info: [개수]
  - [정보 항목들]

✅ 점검 완료
```

## 참고사항

- 개발 서버가 실행 중이어야 합니다
- 로컬 환경 (localhost:3000)에서만 작동합니다
- 점검은 자동으로 진행되며 최종 리포트를 제공합니다
