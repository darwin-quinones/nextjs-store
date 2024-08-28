// cuando trabajamos con TypeScript tenemos que crear una interfaz para recibir las props

interface CategoryProps {
    params: {
        categories: string[],
    }

    searchParams: {
        
    }
}


export default function Category(props: CategoryProps){

    const { categories } = props.params
    console.log(categories)

    return (
        <h1>Categorias dinámicas: { categories }</h1>
    )
}