


export const getCurrentLoc = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(function(position) {
            resolve({lat: position.coords.latitude, lon: position.coords.longitude});
        }, function(error) {
            reject(error);
        });
    });

};