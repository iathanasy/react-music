import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Repeat, SkipBack, Play, SkipForward, List } from "lucide-react"

export default function MusicPlay() {
    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-pink-50 to-blue-50 p-8">
            <div className="flex-1 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex items-center justify-center">
                    <div className="w-full max-w-xs aspect-square rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/placeholder.svg"
                            alt="Album cover"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="md:w-2/3 flex flex-col">
                    <h1 className="text-3xl font-bold mb-2">残酷な天使のテーゼ</h1>
                    <p className="text-lg text-gray-600 mb-4">スターライト九九組</p>
                    <ScrollArea className="flex-1 pr-4">
                        <div className="space-y-4">
                            <p className="text-gray-800">流れ星飛んでいった</p>
                            <p className="text-gray-600">流星划过天际</p>
                            <p className="text-gray-800">あの星のカケラ</p>
                            <p className="text-gray-600">一起去寻找</p>
                            <p className="text-gray-800">見つけに行こう</p>
                            <p className="text-gray-600">那颗星星的碎片吧</p>
                            <p className="text-gray-800">輝くことは誰かを影に</p>
                            <p className="text-gray-600">自身闪耀并不是将别人</p>
                            <p className="text-gray-800">隠すことじゃない</p>
                            <p className="text-gray-600">隐藏在影子之中</p>
                            <p className="text-gray-800">負けたくはないけれど</p>
                            <p className="text-gray-600">虽然不想认输</p>
                        </div>
                    </ScrollArea>
                </div>
            </div>
            <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">01:31</span>
                    <Slider defaultValue={[35]} max={100} step={1} className="w-[70%]" />
                    <span className="text-sm text-gray-500">04:25</span>
                </div>
                <div className="flex justify-center space-x-4">
                    <Button size="icon" variant="ghost">
                        <Repeat className="h-6 w-6" />
                    </Button>
                    <Button size="icon" variant="ghost">
                        <SkipBack className="h-6 w-6" />
                    </Button>
                    <Button size="icon" variant="default" className="h-12 w-12 rounded-full">
                        <Play className="h-6 w-6" />
                    </Button>
                    <Button size="icon" variant="ghost">
                        <SkipForward className="h-6 w-6" />
                    </Button>
                    <Button size="icon" variant="ghost">
                        <List className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </div>
    )
}