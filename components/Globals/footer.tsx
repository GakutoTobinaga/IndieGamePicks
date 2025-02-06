import Link from 'next/link'
import { Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-blue-300 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">IndieGamePicks</h2>
            <p className="text-sm text-muted-foreground">
              インディを選択肢に。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">ナビゲーション</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:underline">ホーム</Link></li>
              <li><Link href="/games" className="text-sm hover:underline">ゲーム一覧</Link></li>
              <li><Link href="/news" className="text-sm hover:underline">ニュース</Link></li>
              <li><Link href="/about" className="text-sm hover:underline">私たちについて</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">コンタクト</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm hover:underline">お問い合わせ</Link></li>
              <li><Link href="/privacy" className="text-sm hover:underline">プライバシーポリシー</Link></li>
              <li><Link href="/terms" className="text-sm hover:underline">利用規約</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">フォローする</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
                <span className="sr-only">X (旧Twitter)</span>
              </Link>
              <Link href="#" className="text-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span></span>
            <Link href={"https://zuboshilab.com"} >zuboshi lab.</Link>All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

