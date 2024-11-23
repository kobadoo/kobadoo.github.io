import ReactGA from "react-ga4";

export const initGA = (trackingID) => {           
    ReactGA.initialize(trackingID, {
        gaOptions: {
            storage: 'none',
            storeGac: false
        }
    });
}

export const PageView = () => {  
    ReactGA.send("pageview");
}

export const eventGA = (category, action, label) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label
    });
};