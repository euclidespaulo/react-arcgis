import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import Search from "@arcgis/core/widgets/Search";
import { useEffect, useRef } from "react";
import "../App.css";



const Mapview = () => {
    const mapRef = useRef(null);

    useEffect(()=>{
        if (!mapRef?.current) return;

        const map = new Map({
            basemap: "topo-vector"
          });
      
        const view = new MapView ({
            map:map,
            container: mapRef.current,
            center: [67, 39],
            zoom: 10
        });

        const searchWidget = new Search({
            view: view
          });

        // Add the search widget to the top right corner of the view
        view.ui.add(searchWidget, {
            position: "top-right"
          });

        return () => view && view.destroy()

    }, [])

    return(
        <div className="viewDiv" ref={mapRef}></div>
    )
};

export default Mapview;