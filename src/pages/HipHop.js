import img from '../images/5.jpg';

const HipHop = () => {
    return (
        <>
        <h1>Hip-Hop</h1>
        <h2>What is Rock?</h2>
            <p>Summary: Hip-hop, an urban music genre, combines elements of rapping, DJing, and beatboxing,
             often delivering powerful messages and social commentary. It has given rise to diverse sub-genres, 
             including trap and mumble rap, and serves as a platform for self-expression and storytelling.
            </p>
            {/* link img from images folder */}
        <img src={img} alt="hip-hop" />

        <h2>How to get started?</h2>
            <p>Embark on your hip-hop journey by immersing yourself in the works of influential artists like
             Tupac Shakur, Notorious B.I.G., and Kendrick Lamar. To gain a deeper understanding of hip-hop's 
             cultural significance, explore the historical and societal contexts of the genre. Experiment with
              writing your own rhymes and beats to express your thoughts and experiences. Participating in open mic events and collaborations with local artists can also be an enriching experience.
            </p>
        </>
    );
}

export default HipHop;