export default function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold text-gray-900 pb-3 border-b border-gray-100">
      {children}
    </h2>
  )
}
