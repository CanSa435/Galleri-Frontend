import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import type ApiResponse from "../../models/ApiResponse"
import type UserModel from "../../models/UserModel"
 
const UserAdminList = () => {
  const [userList,setUserList] = useState<UserModel[]>([]);
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    axios.get<ApiResponse<UserModel[]>>('http://localhost:8080/rest/api/user/get-all-users',{
      headers:{Authorization:`Bearer ${token}`}
     }).then((data:any) => {
      setUserList(data.data.payload)
    }).catch((err) => {
      console.log(err)
    })
  })
  return (
    <div className="container mx-4 my-7">
        <h1>Kullanıcılar Listesi</h1>
        <div className="mt-5">
          <TableContainer component={Paper}>
            <Table sx={{minWidth:650}}>
              <TableHead>
                <TableRow>
                  <TableCell>Kullanıcı Adı</TableCell>
                  <TableCell>Kullanıcı Bilgilerini Düzenle</TableCell>
                  <TableCell>Kullanıcı Sil</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  userList.map((user:UserModel) => (
                    <TableRow key={user.id} sx={{'&:last-child td,&:last-child th':{border:0}}}>
                  <TableCell scope="row">
                    {user.username}
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="error">Sil</Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="success">Düzenle</Button>
                  </TableCell>
                </TableRow>
                  ))
                }
                
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
  )
}

export default UserAdminList