import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Category } from "@/types/wordpress"
import { TrendingUp } from 'lucide-react'

export function CategoryCard({ name, slug, count, isTrending }: Category) {
  return (
    <Link href={`/categories/${slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-medium">{name}</h3>
            {isTrending && (
              <TrendingUp className="h-5 w-5 text-red-500" />
            )}
          </div>
          <div className="mt-4">
            <div className="text-4xl font-bold">{count}</div>
            <p className="text-sm text-muted-foreground mt-1">記事</p>
          </div>
          {isTrending && (
            <Badge variant="secondary" className="mt-4 bg-red-100 text-red-800 hover:bg-red-200">
              トレンド
            </Badge>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}

