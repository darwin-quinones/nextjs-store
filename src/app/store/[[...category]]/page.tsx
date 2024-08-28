// cuando trabajamos con TypeScript tenemos que crear una interfaz para recibir las props

interface CategoryProps {
    params: {
        category: string[],
    }

    searchParams?: { [key: string] : string }
}


export default function Category(props: CategoryProps){

    console.log('props: ', props)

    const { category } = props.params
    const searchParams = props.searchParams

    console.log('searchParams: ', searchParams)

    return (
        <header>
            <h1>Categorias dinámicas: { category }</h1>
            <ul>
                { searchParams && Object.entries(searchParams).map(([key, value]) => (
                    <li key={key}> {key}: {value}</li>
                ))}
            </ul>
        </header>
        
    )
}