import React from "react";
import { BiSearch } from "react-icons/bi";
import { Popular, Recommendations } from "../../components";

const recommendations = [
  {
    img: "https://images-gmi-pmc.edge-generalmills.com/48f3b267-4408-4773-9951-ffa15d4bdd96.jpg",
    alt: "image 1",
    foodName: "Potato Chips with Chicken",
    restaurant: "KFC - Adenta",
    status: "closed",
    price: "45",
    availability: "11:00AM",
  },
  {
    img: "https://images-gmi-pmc.edge-generalmills.com/f40b32fb-8da9-4f28-96ca-e5dbe9dca09d.jpg",
    alt: "image 2",
    foodName: "Sweet Potato-Pear Soup",
    restaurant: "Green Leaf Eatery",
    status: "open",
    price: "30",
    availability: "11:00AM",
  },
  {
    img: "https://images-gmi-pmc.edge-generalmills.com/9b5a87af-2a9a-48ab-9138-2411618dd676.jpg",
    alt: "image 3",
    foodName: "Healthy Split Pea Soup with Veggies",
    restaurant: "Green Leaf Eatery",
    status: "open",
    price: "55",
    availability: "11:00AM",
  },
];

const popular = [
    {
      img: "https://images-gmi-pmc.edge-generalmills.com/48f3b267-4408-4773-9951-ffa15d4bdd96.jpg",
      alt: "image 1",
      foodName: "Potato Chips with Chicken",
      restaurant: "KFC - Adenta",
      status: "closed",
      price: "45",
      availability: "11:00AM",
    },
    {
      img: "https://images-gmi-pmc.edge-generalmills.com/f40b32fb-8da9-4f28-96ca-e5dbe9dca09d.jpg",
      alt: "image 2",
      foodName: "Sweet Potato-Pear Soup",
      restaurant: "Green Leaf Eatery",
      status: "open",
      price: "30",
      availability: "11:00AM",
    },
    {
      img: "https://images-gmi-pmc.edge-generalmills.com/9b5a87af-2a9a-48ab-9138-2411618dd676.jpg",
      alt: "image 3",
      foodName: "Healthy Split Pea Soup with Veggies",
      restaurant: "Green Leaf Eatery",
      status: "open",
      price: "55",
      availability: "11:00AM",
    },
  ];

export const Food = () => {
  return (
    <div className="container">
      <h5 className="fw-bold mb-3">Welcome Seyram</h5>

      <div>
        <div className="input-group mb-3">
          <span
            className="input-group-text text-black-50 bg-white border-end-0"
            id="basic-addon1"
          >
            <BiSearch style={{ width: 25, height: 25 }} />
          </span>
          <input
            type="text"
            className="form-control rounded-0 rounded-end border-start-0"
            placeholder="What do you want to eat"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>

      <div className="mb-3">
        <p className="fw-bold">Recommendations for you</p>

        <div className="recommendation-cards d-flex" id="scroll">
          {recommendations.map((obj) => (
            <Recommendations child = {obj} key={obj.alt}/>
          ))}
        </div>
      </div>

      <div>
        <p className="fw-bold">Popular Food</p>

        <div className="popular-cards">
          <div className="row g-0">
            {popular.map((obj) => (
                <Popular child = {obj} key={obj.alt}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
