

const SandMolds = ({sandMold}) => {
    return (
        <div className="card w-full  bg-base-100 shadow-xl">
  <figure><img src={sandMold.picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {sandMold.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{sandMold.rating}</div>
      <div className="badge badge-outline">View Details</div>
    </div>
  </div>
</div>
    );
};

export default SandMolds;