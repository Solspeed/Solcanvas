export default function ProjectDetails({
    params,
}: {
    params: { projectId: string };
}) {
    return (
        <div className="text-green-900">
            Hello! {params.projectId}
        </div>
    )
}