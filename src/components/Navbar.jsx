import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from '../utils/constants'
import SearchBar from "./SearchBar"

const Navbar = () => {
  return (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
    >

    <Link to="/" style= {{display: 'flex', alignItems:'center'}}>
        <img src={logo} alt="logo" height={45}/>
        <Typography variant="h5" sx={{color: '#fff', ml: 1}}>WeTube</Typography>
    </Link>
    <SearchBar/>
    </Stack>
  )
}

export default Navbar