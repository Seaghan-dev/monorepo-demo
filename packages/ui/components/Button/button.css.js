import { css } from "@stitches/react"

export const buttonCss = css({
    backgroundColor: "#1DB954",
    borderRadius: '22px',
    border: "1px solid White",

    textTransform: "uppercase",
    fontSize: '16px',
    letterSpacing: "2px",
    fontWeight: "bold",
    color: "#191414",

    padding: '12px 24px',
    '&:hover': {
        transform: "scale(1.2)",
        backgroundColor: "#1ED760",
    }
})