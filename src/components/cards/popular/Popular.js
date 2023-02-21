import React from "react";

export const Popular = ({ child }) => {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div className="card d-flex flex-row mb-3 pointer">
        <img src={child.img} className="" alt={child.alt} />
        <div className="card-body">
          <h6 className="mb-1 fw-bold">{child.foodName}</h6>
          <p className="small fw-bold text-black-50 mb-1">{child.restaurant}</p>
          <p className="mb-1  small">
            {child.status === "closed" ? (
              <span className="me-2 text-black-50">
                Opens {child.availability}
              </span>
            ) : null}

            <span
              className={
                child.status === "closed" ? `text-danger` : `text-success`
              }
            >
              {child.status}
            </span>
          </p>
          <h6 className="fw-bold mb-0">GHC {child.price}</h6>
        </div>
      </div>
    </div>
  );
};
