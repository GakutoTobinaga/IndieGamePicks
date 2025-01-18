import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from 'lucide-react'

interface TrendItemProps {
  title: string
  imageUrl: string
  link: string
  views: number
  category: string
  isHot: boolean
}

export function TrendItem({ title, imageUrl, link, views, category, isHot }: TrendItemProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
            {isHot && (
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                HOT
              </div>
            )}
          </div>
          <div className="p-4 flex-grow">
            <Link href={link} className="text-lg font-semibold hover:underline">
              {title}
            </Link>
            <div className="flex items-center mt-2 text-sm text-muted-foreground">
              <span>{views.toLocaleString()} views</span>
              <Badge variant="secondary" className="ml-2">{category}</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

