import img from '../images/4.jpg';

const Products = () => {
    return (
        <>
        <h1>Products</h1>
        <h2>What is Jazz?</h2>
            <p>Jazz is a captivating genre celebrated for its rich history of improvisation, complex harmonies,
             and expressive melodies. Originating in the African-American communities of New Orleans, jazz has evolved 
             into a diverse genre with sub-genres like swing, bebop, and fusion. It's known for its unique ability to 
             connect with the emotions of both the musicians and the audience.
            </p>
            {/* link img from images folder */}
        <img src={img} alt="jazz" />

        <h2>How to get started?</h2>
            <p>Begin your exploration of jazz by immersing yourself in the sounds of legends such as Louis Armstrong, 
            Duke Ellington, and Miles Davis. To truly appreciate jazz, delve into its historical roots and cultural context. 
            Consider learning an instrument, like the saxophone or trumpet, and experiment with improvisation. 
            Dancing to jazz music can also help you connect with the genre's rhythmic complexities.
            </p>
        </>
    );
}

export default Products;