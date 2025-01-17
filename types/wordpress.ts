export interface WordPressCategory {
  id: string
  name: string
  slug: string
  count: number // 記事数
  description?: string
  parent?: {
    node: {
      id: string
    }
  }
}

export interface Category extends WordPressCategory {
  isTrending?: boolean
}

