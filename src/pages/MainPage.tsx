import ChirpPanel from "../components/ChirpPanel";
import { postsController } from "../services/api/controllers/post-controller";
import { getDefaultPageable, type Pageable } from '../types/common/pageable.type';
import { useEffect, useState } from "react";
import type { PostDto } from "../types/post/post.type";

const MainPage = () => {
    const [posts, setPosts] = useState<PostDto[]>();
    const [error, setError] = useState('');
    const [contentPost, setContentPost] = useState('');

    const [pageable] = useState<Pageable>(getDefaultPageable());

    const fetchPosts = () => {
        postsController.getPosts(pageable)
            .then(response => {
                setPosts(response.data.content as PostDto[]);
            })
            .catch(() => setError('Ошибка загрузки'));
    };

    const createNewPost = () => {
        if (!contentPost.trim()) return;

        postsController.createPost({ content: contentPost })
            .then(() => {
                fetchPosts();
                setContentPost('');
                setError('');
            })
            .catch(() => setError('Ошибка создания'));
    };

    useEffect(() => {
        fetchPosts()
    }, []);

    return [
        <div className="w-screen h-dvh flex flex-col items-center pb-4 relative">
            <p className="my-4 mx-auto text-6xl font-jura font-bold text-shadow-chirp">chirps.</p>
            <ChirpPanel posts={posts} />
        </div>
    ]
}

export default MainPage;