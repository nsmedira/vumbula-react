import React from 'react';
import PropTypes from 'prop-types';

//TODO 13: Add onChange to the argument list
//TODO 14: Use an arrow function which accepts an event and  returns the onChange prop as the value to the onChange attribute
// TODO: to both the name and price input elements passing it the event and index.

//TODO 4: Destructure the props within the function argument list and also make the necesaary changes for the to keep function. Do not forget to add the toggleEdit prop to the destrucured list.
export const ItemCard = ({image, item, toggleEdit}) => (
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3">

        {/* use destructured props */}
        {/* <img className="card-img-top" src={props.image}/> */}
        <img className="card-img-top" src={image}/>

        <div className="card-body">

          {/* TODO 8: Use the item.isEditing property to show either the input fields or just display the name and price of the item within the card body. */}
          {    
            item.isEditing ?  
              <div className="mb-4">

                {/* TODO 9: Add the value attribute to the name input element with a value of item.name and the price input element with item.price */}
                <input 
                  type="text"
                  name="name"
                  className="form-control mb-2 mr-sm-2"
                  placeholder="Item"
                  value={item.name}
                  required
                />

                {/* TODO 9: Add the value attribute to the name input element with a value of item.name and the price input element with item.price */}
                <input 
                  type="number"
                  name="price"
                  className="form-control"
                  placeholder="Price"
                  value={item.price}
                  required
                />
              </div>
              :
              <div>

                {/* use destructured props */}
                {/* <h4 className="card-title text-center">{props.item.name}</h4> */}
                <h4 className="card-title text-center">{item.name}</h4>

                <div className="row justify-content-center mb-4">
                  <p className="card-text">
                    <span className="badge badge-secondary py-2 mr-5">Price</span>

                    {/* use destructured props */}
                    {/* <span>${props.item.price}</span> */}
                    <span>${item.price}</span>

                  </p>
                </div>
              </div>
          }

          <div className="row justify-content-center">
            <div>

              {/* TODO 5: Add an onClick attribute to the edit button with the toggleEditing prop as its value. */}
              <button
                  type="button"
                  className="btn btn-primary mr-2"
                  onClick={toggleEdit}
              >

                {/* TODO 6: Use the isEditing property of the item to toggle between showing Edit or Save as the button text. */}
                {item.isEditing ? "Save" : "Edit"}

              </button>
              <button
                  type="button"
                  className="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
)

//TODO 7: Add toggleEdit to the list of propTypes.
//TODO 15: Add onChange to the list of propTypes.
ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }),
  toggleEdit: PropTypes.func.isRequired
};