import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const PrivateRoute = ({children}:any) => {
   const { user,loading } = useContext(AuthContext);
   if(loading) {
    return  <>
       <Box sx={{ display: 'flex' }}>
        <CircularProgress aria-label="Loading…" />
      </Box>
    </>
   }
   if(!user){
    return <Navigate to="/login" replace/>
   }
   return children;
}

export default PrivateRoute