const alertInfo = (message) => ({type: "ALERT_INFO", message: message});
const alertSuccess = (message) => ({type: "ALERT_SUCCESS", message: message});
const alertWarning = (message) => ({type: "ALERT_WARNING", message: message});
const alertDanger = (message) => ({type: "ALERT_DANGER", message: message});
const dismissAlert = () => ({type: "DISMISS_ALERT"});

export {alertInfo, alertSuccess, alertWarning, alertDanger, dismissAlert};