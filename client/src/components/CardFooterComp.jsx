import React, { useState } from "react"
import { CardFooter, Tickers } from "@styles/newsCard/cardStyles"
import { ExpandMoreIcon } from "@styles/svgIcon"
const CardFooterComp = ({ assetTags, idx, nluLabels }) => {
  const [open, setOpen] = useState({})
  const handleExpand = (e) => {
    setOpen({ [e.target.id]: !open[e.target.id] })
  }
  return (
    <CardFooter>
      <Tickers $expand={`${open[idx] ? "expand" : "none"}`}>
        {nluLabels.slice(0, 3).map((label, index) => (
          <li key={label + index}>
            <strong>Related Symbols</strong> {label}
          </li>
        ))}
      </Tickers>

      <div className="tags">
        {assetTags.map((tag, index) => (
          <span key={tag + index}>#{tag}</span>
        ))}
      </div>

      <ExpandMoreIcon
        id={idx}
        onClick={(e) => {
          handleExpand(e, idx)
        }}
        $expand={`${open[idx] ? "expand" : "none"}`}
      />
    </CardFooter>
  )
}

export default CardFooterComp
