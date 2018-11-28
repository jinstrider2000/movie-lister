const signIn = (userInfo) => ({type: "SIGN_IN", payload: userInfo});
const signOut = () => ({type: "SIGN_OUT"});

export {signIn, signOut};