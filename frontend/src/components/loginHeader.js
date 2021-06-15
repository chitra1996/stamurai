import React from "react";

const headerStyle = { 
    backgroundColor: "#353A4E", 
    height: "100%", 
    justifyContent: "center", 
    alignItems: "center", 
    display: "flex", 
    flexDirection: "column" 
}

class LoginHeader extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", height: "10vh" }}>
                <div style={headerStyle}>
                    <h3 style={{ color: "#ffffff" }}>TASK MANAGEMENT SYSTEM</h3>
                </div>
            </div>
        )
    }
}

export default LoginHeader