/**
 * date-fns 스타일의 날짜 유틸리티 함수
 * (date-fns 설치 없이 기본 JavaScript Date 객체 사용)
 */

/**
 * 날짜를 지정된 형식으로 포맷
 * @param date - 포맷할 날짜
 * @param format - 포맷 문자열 (예: 'yyyy-MM-dd', 'MMMM d, yyyy')
 * @returns 포맷된 날짜 문자열
 */
export function formatDate(date: string | Date, format: string = 'MMM d, yyyy'): string {
  const d = typeof date === 'string' ? new Date(date) : date

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const year = d.getFullYear()
  const month = d.getMonth()
  const day = d.getDate()

  return format
    .replace('yyyy', String(year))
    .replace('MMMM', months[month])
    .replace('MMM', shortMonths[month])
    .replace('MM', String(month + 1).padStart(2, '0'))
    .replace('dd', String(day).padStart(2, '0'))
    .replace('d', String(day))
}

/**
 * 날짜를 상대 시간으로 표현 (예: "2일 전")
 * @param date - 비교할 날짜
 * @returns 상대 시간 문자열
 */
export function formatDistance(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffSecs = Math.floor(diffMs / 1000)
  const diffMins = Math.floor(diffSecs / 60)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffSecs < 60) return '방금 전'
  if (diffMins < 60) return `${diffMins}분 전`
  if (diffHours < 24) return `${diffHours}시간 전`
  if (diffDays < 7) return `${diffDays}일 전`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}개월 전`
  return `${Math.floor(diffDays / 365)}년 전`
}

/**
 * 날짜 문자열을 Date 객체로 파싱
 * @param dateString - 파싱할 날짜 문자열 (ISO 8601 형식 권장)
 * @returns Date 객체
 */
export function parseDate(dateString: string): Date {
  return new Date(dateString)
}

/**
 * 두 날짜 사이의 일 수 계산
 * @param from - 시작 날짜
 * @param to - 종료 날짜
 * @returns 날 수
 */
export function differenceInDays(from: Date | string, to: Date | string): number {
  const fromDate = typeof from === 'string' ? new Date(from) : from
  const toDate = typeof to === 'string' ? new Date(to) : to
  const diffTime = Math.abs(toDate.getTime() - fromDate.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}
