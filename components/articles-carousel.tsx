'use client'

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Article {
  id: number
  title: string
  description: string
  imageUrl: string
  publishedAt: Date
}

const dummyArticles: Article[] = [
  {
    id: 1,
    title: "Hollow Knight: Silksong",
    description: "待望の続編、最新情報をチェック",
    imageUrl: "/man.jpg",
    publishedAt: new Date('2023-06-15')
  },
  {
    id: 2,
    title: "Stardew Valley 開発者インタビュー",
    description: "ConcernedApe氏が語る開発秘話",
    imageUrl: "/man.jpeg",
    publishedAt: new Date('2023-06-14')
  },
  {
    id: 3,
    title: "2023年後半 期待のインディーゲーム",
    description: "注目の10タイトルをピックアップ",
    imageUrl: "/man.jpg",
    publishedAt: new Date('2023-06-13')
  },
  {
    id: 4,
    title: "Hades II 早期アクセス",
    description: "人気ローグライクの続編、遂に登場",
    imageUrl: "/man.jpg",
    publishedAt: new Date('2023-06-12')
  },
  {
    id: 5,
    title: "インディーゲームの資金調達",
    description: "Kickstarterで成功を収めた事例分析",
    imageUrl: "/man.jpg",
    publishedAt: new Date('2023-06-11')
  },
]


export function ArticlesCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {dummyArticles.map((article) => (
            <CarouselItem key={article.id} className="pl-2 md:pl-4 md:basis-2/3 lg:basis-1/2">
              <div className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="p-0 relative aspect-[3/2]">
                    <Image
                      src={article.imageUrl || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent pt-20 pb-4 px-4">
                      <h3 className="font-semibold text-xl text-white mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-200 mb-1">{article.description}</p>
                      {/* <p className="text-xs text-gray-400">
                        {formatDistanceToNow(article.publishedAt, { addSuffix: true, locale: ja })}
                      </p> */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}

