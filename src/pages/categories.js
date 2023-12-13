import { Link, Outlet } from 'react-router-dom';

const Categories = () => {
    // List of categories (this can be dynamic or fetched from a database)
    const categories = [
        { name: 'texture', description: 'Explore our unique textures.' },
        { name: 'chair', description: 'Find comfortable and stylish chairs.' },
        { name: 'layout', description: 'Discover layout ideas for your space.' },
        // Add more categories here as needed
    ];

    return (
        <>
            <section className="categories-cont">
                <h1>Categories-banner</h1>
                <ul className="genres-list">
                    {categories.map((category) => (
                        <li key={category.name} className="genres-item">
                            <Link to={`/categories/${category.name}`} className="genres-title">
                                {category.name}
                            </Link>
                            <p className="genres-para">{category.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <Outlet />
        </>
    );
}

export default Categories;
