
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="overflow-x-hidden min-h-screen bg-black flex py-6 justify-center px-6">
      <div className="flex flex-col sm:ml-24 mx-auto">
        {children}
      </div>
    </div>
  )
}
