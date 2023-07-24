const Income = () => {
  return (
    <div className="w-full mt-12 mx-auto">
      <div className="card w-full bg-base-100 shadow-xl p-4">
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-3xl">
              Enter your income amount
            </span>
          </label>
          <label className="input-group">
            <span>By Income</span>
            <input
              type="text"
              placeholder="Enter Amount"
              className="input input-bordered"
            />
            <span>BDT</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Income;
