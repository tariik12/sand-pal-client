import howTo from '../../../assets/howTo.avif'

const HowToSand = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${howTo})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">How to use Sand Pal</h1>
      <p className="mb-5 text-xl">Choose a flat surface to work on. Use sand clean of seashells and stones. Fill mold with damp sand and pack tightly. Situate and eject shape with both thumbs pushing down.</p>
      <button className="btn btn-primary btn-outline">Learn More</button>
    </div>
  </div>
</div>
    );
};

export default HowToSand;