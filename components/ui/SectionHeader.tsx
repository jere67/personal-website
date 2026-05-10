import { cn } from "@/utils/cn"
import Star from "./Star"

interface SectionHeaderProps {
  label: string
  className?: string
}

const SectionHeader = ({ label, className }: SectionHeaderProps) => (
  <div className={cn("flex items-center gap-6", className)}>
    <Star className="text-white w-5 h-5 animate-pulse" />
    <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">{label}</h2>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-neutral-800 to-transparent" />
  </div>
)

export default SectionHeader
