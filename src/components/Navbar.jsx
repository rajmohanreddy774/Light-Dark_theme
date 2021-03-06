import { useContext } from "react"
import { ThemeContext } from '../context/Themecontext'
import { Button } from "../styled/Button"
import { Nav } from "../styled/Nav"


export const Navbar = () => {
    const { theme, handleTheme } = useContext(ThemeContext)
    return (
        <Nav theme={theme}>

            <Button
            style={{
                position:"absolute",
                right: 570,
                borderRadius:"6px",
                top:20,
                justifyContent:"space-around",
                alignItems:"center",
                display: "flex",
            }}
                theme={theme}
                onClick={() => {
                    handleTheme()
                }}
            >   {theme==="dark" ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}
                {theme}</Button></Nav>
    )
}