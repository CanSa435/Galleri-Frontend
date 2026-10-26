 
interface BreadCrumbTitle{
    title:string
}

const Breadcrumb = ({title}:BreadCrumbTitle) => {
  return (
    <div className="flex items-center justify-between gap-4">
        <h1>Admin Paneli</h1> <p className="text-2xl">/</p> <h1 className="text-gray-700 font-bold">{title}</h1>
    </div>
  )
}

export default Breadcrumb