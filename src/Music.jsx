// npx shadcn@latest add button
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { ChevronLeft, ChevronRight, Home, Play, Search, Settings, SkipBack, SkipForward, User } from "lucide-react"

export default function Music() {
  return (
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          <aside className="w-64 bg-background border-r flex flex-col">
            <div className="p-4 flex items-center space-x-2">
              <User className="h-8 w-8" />
              <span className="font-semibold">用户名</span>
            </div>
            <nav className="flex-1 p-2">
              <Button variant="ghost" className="w-full justify-start mb-1">
                <Home className="mr-2 h-4 w-4" />
                首页
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-1">
                <Search className="mr-2 h-4 w-4" />
                探索
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-1">
                <Settings className="mr-2 h-4 w-4" />
                设置
              </Button>
            </nav>
          </aside>
          <main className="flex-1 flex flex-col overflow-hidden">
            <header className="border-b p-4 flex justify-between items-center">
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
            <ScrollArea className="flex-1">
              <div className="p-6 space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">歌单</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="space-y-2">
                          <div className="aspect-square bg-muted rounded-md overflow-hidden">
                            <img
                                alt="Playlist cover"
                                className="object-cover w-full h-full"
                                height="200"
                                src="/placeholder.svg"
                                width="200"
                            />
                          </div>
                          <div className="font-medium">歌单名称</div>
                          <div className="text-sm text-muted-foreground">作者名称</div>
                        </div>
                    ))}
                  </div>
                </section>
                <section>
                  <h2 className="text-2xl font-semibold mb-4">推荐艺人</h2>
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center space-y-2">
                          <div className="aspect-square rounded-full overflow-hidden bg-muted">
                            <img
                                alt="Artist avatar"
                                className="object-cover w-full h-full"
                                height="200"
                                src="/placeholder.svg"
                                width="200"
                            />
                          </div>
                          <div className="text-sm font-medium">艺人名称</div>
                        </div>
                    ))}
                  </div>
                </section>
              </div>
            </ScrollArea>
          </main>
        </div>
        <footer className="h-20 border-t flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <img
                alt="Current track cover"
                className="w-12 h-12 rounded"
                height="48"
                src="/placeholder.svg"
                width="48"
            />
            <div>
              <div className="font-medium">当前播放的歌曲</div>
              <div className="text-sm text-muted-foreground">艺术家名称</div>
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
          <div className="w-1/3 max-w-xs">
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
        </footer>
      </div>
  )
}