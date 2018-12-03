export default (state = {available: false, message: "", bsStyle: "info"}, action) => {
  switch (action.type) {
    case "ALERT_INFO":
      return {available: true, message: action.message, bsStyle: "info"};
    case "ALERT_SUCCESS":
      return {available: true, message: action.message, bsStyle: "success"};
    case "ALERT_WARNING":
      return {available: true, message: action.message, bsStyle: "warning"};
    case "ALERT_DANGER":
      return {available: true, message: action.message, bsStyle: "danger"};
    case "DISMISS_ALERT":
      return {available: false, message: "", bsStyle: "info"};
    default:
     return state;
  }
}