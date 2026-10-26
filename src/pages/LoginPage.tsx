import { Button, TextField } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
 
const LoginPage = () => {
  const [credentials,setCredentials ] = useState<any>({username:'',password:''});
  const { user,login,logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      navigate('/admin/users',{ replace : true })
    }
  },[user,navigate])

  const handleSubmit = async (e:React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(credentials)
  }
  return (
    <div className="w-full min-h-screen mt-32">
      <div className="container mx-auto">
        <h1 className="text-2xl text-center mb-3">Giriş Yap</h1>
        <div className="h-screen flex justify-center flex-wrap mt-0 -mr-2 -ml-2">
          <div className="mx-auto flex-initial w-137.5">
            <div className="relative flex flex-col min-w-0 wrap-break-word mb-4 bg-white border border-solid border-[#e3ebf6] rounded-2xl">
              <form onSubmit={handleSubmit}>
                <div className="flex-[1_1_auto] mx-4 my-7">
                  <TextField 
                  id="username" 
                  name="username"
                  label="Kullanıcı Adı" 
                  variant="outlined" 
                  type="text"
                  autoComplete="false"
                  className="w-121.5"
                  value={credentials.username} 
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCredentials({...credentials,username:e.target.value})}/>
                 </div>
                 <div className="flex-[1_1_auto] mx-4 my-7">
                   <TextField 
                   id="password" 
                   name="password"
                   label="Şifre" 
                   variant="outlined"
                   type="password" 
                   autoComplete="false"
                   className="w-121.5"
                   value={credentials.password}
                   onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCredentials({...credentials,password:e.target.value})}/>
                  </div>
                  <div className="flex-[1_1_auto] mx-4 my-7 ">
                    <Button type="submit" variant="contained">Giriş Yap</Button>
                    <Button type="button" className="m-5" variant="outlined" color="error" onClick={() => logout()}>Çıkış Yap</Button>
                  </div>
                 </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage