interface PostProps {
    author: String,
    content: String
}

const PostComponent = ({author, content}: PostProps) => {
    return [
        <div className="my-4 bg-white py-4 px-8 shadow-card rounded-4xl text-[32px]">
            <p className="font-jura font-bold text-author">@{author}</p>
            <p className="mt-4 font-montserrat leading-10">{content}</p>
        </div>
    ]
}

export default PostComponent