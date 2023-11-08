import React from "react";

const Specification = (specification) => {

  const listSpecification = Object.keys(specification.specification).map((key) => {
    return             <tr>
    <td>
      <h5>{key}</h5>
    </td>
    <td>
      <h5>{specification.specification[key]}</h5>
    </td>
  </tr>
  });
  
  return (
    <div class="tab-pane fade show active">
      <div class="table-responsive">
        <table class="table">
          <tbody>
            {listSpecification}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Specification;