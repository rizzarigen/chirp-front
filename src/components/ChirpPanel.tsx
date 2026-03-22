
import PostComponent from "./PostComponent";


const ChirpPanel = () => {
    return [
        <div className="relative w-100 md:w-135 h-full overflow-hidden">
            <div className="h-full w-full bg-panel rounded-5xl overflow-scroll no-scrollbar px-4">
                <PostComponent author={'test'} content={"Lorem ipsum dolor sit amet"}/>
                <PostComponent author={'test'} content={"Lorem ipsum dolor sit amet"}/>
                <PostComponent author={'test'} content={"Lorem ipsum dolor sit amet"}/>
                <PostComponent author={'test'} content={"Lorem ipsum dolor sit amet"}/>
                <PostComponent author={'test'} content={"Lorem ipsum dolor sit amet"}/>
                <PostComponent author={'test'} content={"Lorem ipsum dolor sit amet"}/>
                <PostComponent author={'test'} content={"Lorem ipsum dolor sit amet"}/>
                <PostComponent author={'test'} content={"Lorem ipsum dolor sit amet"}/>
            </div>
            <div className="bg-chirp-red rounded-full font-jura text-6xl p-4 text-white
            flex justify-center items-center shadow-card hover:scale-102 transition-transform ease-out cursor-pointer size-15 absolute bottom-4 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>

            </div>
        </div >
    ]
}

export default ChirpPanel;