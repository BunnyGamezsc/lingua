import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

function SidebarIcon(props: { link: string; children: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; 
    tooltipText: string }) {
  return (
    <>
    <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={props.link}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                 {props.children}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{props.tooltipText}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          </>
  )
}

SidebarIcon.propTypes = {}

export default SidebarIcon
