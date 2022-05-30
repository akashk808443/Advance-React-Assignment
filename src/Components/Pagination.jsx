import "../app.css";

export const Pagination = ({ total, selected, onPageChange }) => {

  const array = []
    
  for(let i=1;i<=total;i++){
array.push(i)
  }
  return <div className="pageContainer">

<button>Prev</button>
{array.map((e)=>(
  <button className="button">{e}</button>
))}
<button>Next</button>

  </div>;
};
