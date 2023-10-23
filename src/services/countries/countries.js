import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCountries } from "../../redux/actions/actions";
export const UsefetchCountries = () => {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getAllCountries())
    },[dispatch])

    return {countries}
}