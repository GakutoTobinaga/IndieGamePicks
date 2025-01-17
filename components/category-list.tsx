import { CategoryCard } from "./category-card"
import { Category } from "@/types/wordpress"

interface CategoryListProps {
  categories: Category[]
}

export function CategoryList({ categories }: CategoryListProps) {
  if (!categories || categories.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">カテゴリーがありません</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  )
}

