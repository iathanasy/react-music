import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronLeft, ChevronRight, Home, Play, Search, Settings, SkipBack, SkipForward, User } from "lucide-react"
import Image from "next/image"
import React from "react"

export default function Music() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        <aside className="w-64 bg-gray-100 p-4 flex flex-col">
          <div className="flex items-center mb-6">
            <User className="h-8 w-8 mr-2" />
            <span className="font-semibold">用户名</span>
          </div>
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              首页
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Search className="mr-2 h-4 w-4" />
              探索
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              设置
            </Button>
          </nav>
        </aside>
        <main className="flex-1 overflow-hidden">
          <header className="bg-white p-4 flex justify-between items-center border-b">
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Input className="max-w-sm" placeholder="搜索" />
          </header>
          <ScrollArea className="h-full">
            <div className="p-6 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">推荐</h2>
                <div className="grid grid-cols-5 gap-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg"
                          alt="Playlist cover"
                          width={200}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="font-medium">歌单名称</p>
                      <p className="text-sm text-gray-500">作者名称</p>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">推荐艺人</h2>
                <div className="flex space-x-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-center">
                      <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mb-2">
                        <Image
                          src="/placeholder.svg"
                          alt="Artist avatar"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="font-medium">艺人名称</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </ScrollArea>
        </main>
      </div>
      <footer className="h-20 bg-white border-t flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/placeholder.svg"
            alt="Current track cover"
            width={48}
            height={48}
            className="rounded"
          />
          <div>
            <p className="font-medium">当前播放的歌曲</p>
            <p className="text-sm text-gray-500">艺术家名称</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button size="icon" className="rounded-full">
            <Play className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
        <div className="w-64">
          {/* 这里可以添加进度条组件 */}
        </div>
      </footer>
    </div>
  )
}