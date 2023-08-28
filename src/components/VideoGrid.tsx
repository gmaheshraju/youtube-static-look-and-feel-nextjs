import { VIDEOS } from "@/videos"
import { VideoCard } from "./VideoCard"

export const VideoGrid = () => {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4">
            {VIDEOS.map((video, index) => (
                <div className="p-2" key={`video-${index}`}>
                    <VideoCard video={video} />
                </div>
            ))}
        </div>
    );
}