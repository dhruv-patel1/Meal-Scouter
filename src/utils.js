const calcDistance =(lat, long, lat2, long2) =>
{
    if((lat === lat2) && (long === long2)){
        return 0;
    }
    else{
        const rLat1 = Math.PI * lat / 180;
        const rLat2 = Math.PI * lat2 / 180;
        const theta = long - long2;
        const rTheta = Math.PI * theta / 180;
        let distance = Math.sin(rLat1) * Math.sin(rLat2) + Math.cos(rLat1) * Math.cos(rLat2) * Math.cos(rTheta);

        if(distance > 1){
            distance = 1;
        }
        distance = Math.acos(distance);
        distance = distance * 180 / Math.PI;
        distance = distance * 60 * 1.1515;
        return Math.round(distance * 100) / 100;
    }
}

export default calcDistance;