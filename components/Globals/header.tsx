'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '../theme/theme-toggle'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, } from '@/components/ui/sheet'
import { TrendingUp, Star, Users, Grid, Search, Menu } from 'lucide-react'

const navItems = [
  { name: 'トレンド', href: '/', icon: TrendingUp },
  { name: 'レビュー', href: '/', icon: Star },
  { name: 'インタビュー', href: '/', icon: Users },
  { name: 'カテゴリ', href: '/', icon: Grid },
  { name: 'ゲームを探す', href: '/', icon: Search },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        {/* ロゴ */}
        <Link href="/" className="font-bold text-xl">
          IndieGamePicks
        </Link>

        {/* デスクトップナビゲーション */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.name}</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild>
            <Link href="/contact">ライター募集</Link>
          </Button>
        </div>

        {/* 右側のコントロール */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          {/* モバイルメニュー */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="flex md:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
  <SheetHeader className="mb-6">
    <SheetTitle>IndieGamePicks</SheetTitle>
  </SheetHeader>
  <nav className="flex flex-col space-y-6">
    {navItems.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className={cn(
          "flex items-center justify-end text-sm font-medium text-muted-foreground",
          pathname === item.href && "text-foreground"
        )}
      >
        <item.icon className="mr-2 h-4 w-4" />
        <span>{item.name}</span>
      </Link>
    ))}
    <Button asChild className="mt-4 self-end">
      <Link href="/contact">ライター募集</Link>
    </Button>
  </nav>
</SheetContent>

          </Sheet>
        </div>
      </div>
    </header>
  )
}
