'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'

interface Article {
  id: string
  title: string
  imageUrl: string
  link: string
}

interface ArticleCarouselProps {
  articles?: Article[]
}

const sampleArticles: Article[] = [
  {
    id: '1',
    title: '注目のインディーゲーム「Stardew Valley」',
    imageUrl: '/placeholder.svg?height=400&width=600',
    link: '/articles/stardew-valley'
  },
  {
    id: '2',
    title: '「Hades」開発者インタビュー',
    imageUrl: '/placeholder.svg?height=400&width=600',
    link: '/articles/hades-interview'
  },
  {
    id: '3',
    title: '「Hollow Knight」レビュー',
    imageUrl: '/placeholder.svg?height=400&width=600',
    link: '/articles/hollow-knight-review'
  },
  {
    id: '4',
    title: 'インディーゲーム開発のトレンド2025',
    imageUrl: '/placeholder.svg?height=400&width=600',
    link: '/articles/indie-trends-2025'
  },
  {
    id: '5',
    title: '「Celeste」の隠されたストーリー',
    imageUrl: '/placeholder.svg?height=400&width=600',
    link: '/articles/celeste-hidden-story'
  },
]

export function ArticleCarousel({ articles = sampleArticles }: ArticleCarouselProps) {
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    onSelect()

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full max-w-5xl mx-auto"
      setApi={setApi}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {articles.map((article, index) => (
          <CarouselItem key={article.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-opacity duration-300">
            <div className="relative">
              <Card className={index === current ? 'opacity-100' : 'opacity-50'}>
                <CardContent className="p-0">
                  <Link href={article.link} className="relative block aspect-video">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent">
                      <h3 className="text-xl font-semibold text-white">{article.title}</h3>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      <div className="flex justify-center w-full py-4 gap-2">
        {articles.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === current ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </Carousel>
  )
}

