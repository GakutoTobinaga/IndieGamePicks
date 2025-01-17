import { Category, WordPressCategory } from '../types/wordpress'

export function sortAndEnhanceCategories(categories: WordPressCategory[], topCount: number = 4): Category[] {
  if (!categories || categories.length === 0) {
    return []
  }

  // 記事数で降順ソート
  const sortedByCount = [...categories].sort((a, b) => b.count - a.count)
  
  // トレンドカテゴリを設定
  const enhancedCategories = sortedByCount.map((category, index) => ({
    ...category,
    isTrending: index < topCount
  }))

  // トレンドカテゴリとそれ以外で分割
  const trendingCategories = enhancedCategories.filter(c => c.isTrending)
  const normalCategories = enhancedCategories.filter(c => !c.isTrending)

  // 通常カテゴリを50音順でソート
  const sortedNormalCategories = normalCategories.sort((a, b) => a.name.localeCompare(b.name, 'ja'))

  // トレンドカテゴリと通常カテゴリを結合
  return [...trendingCategories, ...sortedNormalCategories]
}

