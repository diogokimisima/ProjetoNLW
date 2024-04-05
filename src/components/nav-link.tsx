import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'>{
    children: string
}

export function NavLink (props: NavLinkProps) {
    
    return (
            <a {...props} className="font-midium text-sm">
                {props.children}
            </a>
        
    )
}