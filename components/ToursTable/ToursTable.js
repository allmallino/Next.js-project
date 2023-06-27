import { useCollectionOnce } from 'react-firebase-hooks/firestore'
import firebase_app from '@/firebase/config'
import { collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import Filters from "../Filters/Filters"
import ToursTableContent from "./ToursTableContent"
import _ from 'lodash'


function filterTours(filters, tours) {
    let date = filters.date.split("-");
    return _.filter(tours, (tour) => {
        return (
            _.toLower(tour.title).includes(_.toLower(filters.name)) &&
            tour.price >= filters.price * 500 &&
            _.toLower(tour.city).includes(_.toLower(filters.city)) &&
            (tour.duration + "" === filters.duration || filters.duration === "0") &&
            (tour.date === (date[2] + "." + date[1]) || filters.date === '')
        )
    });
}

export default function ToursTable() {
    const [tours, toursLoading, toursError] = useCollectionOnce(collection(getFirestore(firebase_app), "tours-thumbnails"), []);

    const [filters, changeFilter] = useState({
        name: "",
        price: 0,
        city: "",
        duration: "0",
        date: ''
    })

    function setFilter(prop) {
        return (e) => {
            changeFilter((v) => {
                let nFilters = { ...v };
                nFilters[prop] = e.target.value;
                return nFilters;
            });
        }
    }

    let formattedTours;
    if (!toursLoading && tours) {
        formattedTours = tours.docs.map((v) => { return { key: v._document.key.path.segments[v._document.key.path.segments.length - 1], ...v.data() }; });
        return (<>
            <Filters onChange={setFilter} selectedFilters={filters} />
            <ToursTableContent tours={filterTours(filters, formattedTours)} />
        </>
        );
    }
}