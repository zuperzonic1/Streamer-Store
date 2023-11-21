import img from "../images/3.jpg";

const Rock = () => {
    return (
        <>
        <h1>Rock</h1>
        <h2>What is Rock?</h2>
            <p>Rock music is a dynamic genre characterized by its amplified instruments, powerful vocals, and a defiant,
             often rebellious spirit. It spans a wide spectrum, including classic rock, punk, metal, and indie rock.
              Rock has been a significant cultural force, with its roots deeply embedded in youth rebellion and individuality.
            </p>
            {/* link img from images folder */}
        <img src={img} alt="rock" />
        <h2>How to get started?</h2>
            <p>Dive into rock by listening to iconic bands such as The Beatles, Led Zeppelin, and Nirvana. To fully 
            appreciate this genre, explore the historical context and cultural impact of rock music. If you have a 
            passion for playing instruments, the guitar, bass, or drums are excellent choices. Attending rock concerts 
            is a great way to experience the genre's high-energy performances and passionate fanbase.
            </p>
        </>
    );
}

export default Rock;