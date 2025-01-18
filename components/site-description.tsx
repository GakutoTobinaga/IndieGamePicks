import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SiteDescription() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">🎮IndieGamePicksへようこそ👋</h1>
        <p className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
          「インディ」を選択肢に。
        </p>
        <div className="space-y-6 text-sm md:text-lg">
          <p>
            私たちは、インディゲームの魅力を掘り起こし、創造性と多様性が輝くゲーム文化を広めるメディアです。
          </p>
          <p>大手タイトルでは味わえない独創的なアイデアや多様な価値観を楽しめる作品を、あなたの新しい選択肢としてお届けします。</p>
          <p>
            ここでは、攻略やネタバレではなく、ゲームの世界観や魅力を存分に楽しむための入り口をご用意しています。
          </p>
        </div>
        <div className="mt-8 space-x-4">
          <Button asChild className="bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700">
            <Link href="/games">ゲームを探す</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
            <Link href="/about">もっと詳しく</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

