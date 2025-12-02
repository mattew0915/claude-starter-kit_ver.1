import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * URL 슬러그로 변환 (공백, 특수문자 제거, 소문자 변환)
 * @param text - 변환할 텍스트
 * @returns 슬러그
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

/**
 * 텍스트를 지정된 길이로 자르기
 * @param text - 자를 텍스트
 * @param length - 최대 길이
 * @param suffix - 끝에 붙을 문자열 (기본값: '...')
 * @returns 잘린 텍스트
 */
export function truncate(text: string, length: number, suffix: string = '...'): string {
  if (text.length <= length) return text
  return text.slice(0, length - suffix.length) + suffix
}

/**
 * 날짜를 포맷된 문자열로 변환
 * @param date - 변환할 날짜
 * @returns 포맷된 날짜 문자열 (예: "Dec 2, 2024")
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }
  return d.toLocaleDateString('en-US', options)
}
