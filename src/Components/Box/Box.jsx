import { List, Section } from "./Box.styled"

export const Box = ({ children }) => {
    return (
        <Section>
            <List>{children}</List>
        </Section>
    )
}