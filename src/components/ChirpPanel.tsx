
import type { PostDto } from "../types/post/post.type";
import PostComponent from "./PostComponent";

interface PanelProps {
    posts: PostDto[] | undefined
}

const ChirpPanel = ({posts}: PanelProps) => {

    return [
        <div className="relative w-100 md:w-135 h-full overflow-hidden">
            <div className="h-full w-full bg-panel rounded-5xl overflow-scroll no-scrollbar px-4">
                <ul>
                    <ul>
                        {
                            posts && posts.length !== 0 ?
                                posts.map((item, key) => (
                                    <li key={key}>
                                        <PostComponent author={item.userId.toString()} content={item.content} postId={item.postId} />
                                    </li>
                                ))
                                :
                                <li>Нет постов</li>
                        }
                    </ul>
                </ul>
            </div>
            <button className="bg-chirp-red rounded-full font-jura text-6xl p-4 text-white
            flex justify-center items-center shadow-card hover:scale-102 transition-transform ease-out cursor-pointer size-15 absolute bottom-4 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>

            </button>
        </div >
    ]
}

export default ChirpPanel;