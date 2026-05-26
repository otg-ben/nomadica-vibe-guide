type AlertType = 'warning' | 'info' | 'good'

const styles: Record<AlertType, { bg: string; border: string; icon: string }> = {
  warning: { bg: 'bg-amber-50',   border: 'border-l-amber-400',  icon: '⚠️' },
  info:    { bg: 'bg-blue-50',    border: 'border-l-blue-400',   icon: 'ℹ️' },
  good:    { bg: 'bg-emerald-50', border: 'border-l-emerald-400', icon: '✅' },
}

export default function KBYGItem({ type, text }: { type: AlertType; text: string }) {
  const s = styles[type]
  return (
    <div className={`flex gap-3 items-start ${s.bg} border-l-4 ${s.border} rounded-r-lg px-4 py-3`}>
      <span className="text-sm mt-0.5 shrink-0">{s.icon}</span>
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </div>
  )
}
