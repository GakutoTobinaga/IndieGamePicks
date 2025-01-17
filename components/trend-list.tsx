import { TrendItem } from './trend-item'

interface Article {
  id: string
  title: string
  imageUrl: string
  link: string
  views: number
  category: string
  isHot: boolean
}

interface TrendListProps {
  articles: Article[]
}

export function TrendList({ articles }: TrendListProps) {
  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <TrendItem
          key={article.id}
          title={article.title}
          imageUrl={article.imageUrl}
          link={article.link}
          views={article.views}
          category={article.category}
          isHot={article.isHot}
        />
      ))}
    </div>
  )
}

