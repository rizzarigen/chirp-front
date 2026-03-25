import { api } from "../../index";
import type { PostDto } from "../../../types/post/post.type";
import type { Pageable } from "../../../types/common/pageable.type";
import type { PageableObject } from "../../../types/page/page.types";

export const postsController = {
    getPosts: (pageable: Pageable) => {
        return api.get<PageableObject>(`/posts/?page=${pageable.page}&size=${pageable.size}&sort=${pageable.sort?.join(",")}`);
    },

    getPostId: (id: number) => {
        return api.get<PostDto>(`/posts/${id}`)
    },

    editPost: (id: number, data: PostDto) => {
        return api.patch<PostDto>(`/posts/${id}`, data);
    },

    createPost: (data: PostDto) => {
        return api.post<PageableObject>(`/posts/`, data);
    }
}