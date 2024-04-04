import goku from '../img/goku.jpg'
const Cards = ({name,title}) => {
  return (
    <>
        <div className="card " style={{width:"300px"}} >
            <div className="imagen" >
            <img src={goku} className="card-img-top goku img-fluid" / >
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{title}</p>
                <div className='d-flex justify-content-center'>
                <button href="#" className="btn btn-primary">Ver más</button>
                </div>
            </div>
        </div>
      </>
  )
}

export default Cards
