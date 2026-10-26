import {createContext,useState,useEffect } from "react";
import axios from "axios";
import type UserModel from "../models/UserModel";
import type ApiResponse from "../models/ApiResponse";
import type AuthResponse from "../models/AuthResponse";

const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({children} : any) => {
    const [user,setUser] = useState<any>();
    const [loading,setLoading] = useState<boolean>(true);
 
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const username = localStorage.getItem('username');
        if(token && username){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            fetchUserData(token, username);
        }else{
            setLoading(false)
        }
    },[])

    const fetchUserData = async(token:string, username:string) => {
        try{
           const response = await axios.get<ApiResponse<UserModel>>('http://localhost:8080/rest/api/user/get-user-by-username',{
            params: { username },
            headers:{ Authorization : `Bearer ${token}`}
           });
           console.log("user cevabı : " + response.data);
           setUser(response.data.payload);
        } catch(error:any) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    const login = async (credentials:any) => {
        try {
            const response = await axios.post<ApiResponse<AuthResponse>>('http://localhost:8080/authenticate',credentials);
            const { accessToken, refreshToken } = response.data.payload;
            localStorage.setItem('accessToken',accessToken);
            localStorage.setItem('refreshToken',refreshToken);
            localStorage.setItem('username', credentials.username);

            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
            await fetchUserData(accessToken, credentials.username);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('username');
        delete axios.defaults.headers.common['Authorization'];
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{user,login,logout,loading}}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContext;