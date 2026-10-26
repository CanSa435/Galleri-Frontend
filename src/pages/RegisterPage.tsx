import { Button, TextField } from "@mui/material"

const RegisterPage = () => {
  return (
       <div className="w-full min-h-screen mt-32">
      <div className="container mx-auto">
        <h1 className="text-2xl text-center mb-3">Kayıt Ol</h1>
        <div className="h-screen flex justify-center flex-wrap mt-0 -mr-2 -ml-2">
          <div className="mx-auto flex-initial w-137.5">
            <div className="relative flex flex-col min-w-0 wrap-break-word mb-4 bg-white border border-solid border-[#e3ebf6] rounded-2xl">
              <div className="flex-[1_1_auto] mx-4 my-7">
                <TextField id="outlined-basic" label="Kullanıcı Adı" variant="outlined" className="w-121.5"/>
              </div>
              <div className="flex-[1_1_auto] mx-4 my-7">
                <TextField id="outlined-basic" label="Şifre" variant="outlined" type="password" className="w-121.5"/>
              </div>
              <div className="flex-[1_1_auto] mx-4 my-7">
                <Button variant="contained">Kayıt Ol</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage