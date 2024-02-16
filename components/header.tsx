import { createClient } from "@/prismicio"
import { PrismicText } from "@prismicio/react"
import { HeaderStyle } from "./styles"
import { PrismicNextLink } from "@prismicio/next"

export default async function Header() {
    const client = createClient()
    const nav = await client.getSingle('global_nav')

    return (
        <HeaderStyle>
                <ul style={{display: 'flex', gap:'50px', listStyle:'none'}}>
                    {nav.data.menu_items.map((item) => {
                        return (
                            <li key={JSON.stringify(item)}>
                                <PrismicNextLink field={item.menu_link}>
                                    {item.menu_label}
                                </PrismicNextLink>
                            </li>
                        )
                    })}
                </ul>
        </HeaderStyle>
    )
}