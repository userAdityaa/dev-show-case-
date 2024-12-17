import { createContext, ReactNode, useContext, useState } from "react";

type NavbarThemeContext = { 
    theme: string, 
    setTheme: (theme: string) => void,
}; 

type Props = { 
    children: ReactNode; 
}

const navbarThemeDefaultValue: NavbarThemeContext = { 
    theme: "LandingPage",
    setTheme: () => {},
};

const NavbarContext = createContext<NavbarThemeContext>(navbarThemeDefaultValue); 

export function useNavbarTheme() { 
    return useContext(NavbarContext); 
}

export function NavbarThemeProvider({children}: Props) { 
    const [theme, setTheme] = useState("LandingPage");

    return (
        <NavbarContext.Provider value={{ theme, setTheme }}>
            {children}
        </NavbarContext.Provider>
    );
}