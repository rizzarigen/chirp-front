import { api } from "../../index";
import type { loginDto, resLoginDto } from "../../../types/auth/login.type";

export const authController = {
    login: (data: loginDto) => {
        return api.post<resLoginDto>('/api/v1/auth/login', data);
    }
}