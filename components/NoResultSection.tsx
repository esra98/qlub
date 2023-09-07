import * as React from "react"
import { Box, Typography } from "@mui/material"

export default function NoResultsFound({
  title = "No Result Found",
  subtitle = "You can try to reset date filters. Also, title you typed might be too short or there might be some typos.",
}: {
  decorative?: React.ReactNode
  title?: React.ReactNode
  subtitle?: React.ReactNode
}) {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        my: 6,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          
          fontWeight: 800,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "lg",
          color: "gray.500",
          maxWidth: "54ch",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  )
}