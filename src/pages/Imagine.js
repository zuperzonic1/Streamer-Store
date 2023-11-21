import { Link, Outlet } from 'react-router-dom';

const Categories = () => {
    return (
        <>
            <section className="genres">
                <h1>Categories</h1>
                <ul className="genres-list">
                    <li className="genres-item">
                        <Link to="/genres/rock" className="genres-title">Categorie-1</Link>
                        <p className="genres-para">Rock music is a dynamic genre characterized by its amplified instruments, powerful vocals, and a defiant, often rebellious spirit.</p>
                    </li>
                    <li className="genres-item">
                        <Link to="/genres/jazz" className="genres-title">Categories-2</Link>
                        <p className="genres-para">Jazz is a captivating genre celebrated for its rich history of improvisation, complex harmonies, and expressive melodies.</p>
                    </li>
                    <li className="genres-item">
                        <Link to="/genres/hiphop" className="genres-title">Categorie-3</Link>
                        <p className="genres-para">Hip-hop, an urban music genre, combines elements of rapping, DJing, and beatboxing, often delivering powerful messages.</p>
                    </li>
                </ul>
            </section>
            <Outlet />
        </>
    );
}

export default Categories;