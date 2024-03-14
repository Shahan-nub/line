import { selectChannelName } from "@/lib/features/channelSlice"
import { useSelector } from "react-redux"

export default function ChatHeaderTitle() {
  const activeChannel = useSelector(selectChannelName);
  return (
    <div className="flex text-slate-200  items-center text-nowrap basis-[40%] md:ml-2 text-lg md:text-2xl font-semibold font-sans lg:pl-0 pl-10">
      <span className="text-color-1 text-base md:text-2xl lg:text-3xl mr-1 md:mr-2">#</span> {activeChannel? activeChannel : "Text Channels"}
    </div>
  )
}
