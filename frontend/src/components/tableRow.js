import React from "react";

class TableRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        console.log(this.props.task)
        return (
            <div style={
                {
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    border: "solid #eadcdc",
                    borderWidth: "thin"
                }
            } key={this.props.task._id}>
                <div style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        flex: 0.5,
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }>#</div>

                <div style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        flex: 6,
                        padding: "5px"
                    }
                }>
                    <div style={
                        {
                            display: "flex",
                            flexDirection: "row",
                            flex: 1,
                            fontWeight: "bold",
                            fontSize: "15px"
                        }
                    }>{this.props.task.title}</div>
                    <div style={
                        {
                            display: "flex",
                            flexDirection: "row",
                            flex: 2,
                            fontSize: "14px",
                            color: "#5a5757"
                        }
                    }>{this.props.task.body + ' ' + this.props.task.body + ' ' + this.props.task.body + ' ' + this.props.task.body + ' ' + this.props.task.body + ' ' + this.props.task.body + ' ' + this.props.task.body + ' ' + this.props.task.body + ' ' + this.props.task.body}</div>
                </div>

                {/* <div style={
                    {
                    display: "flex",
                    flexDirection: "column",
                    flex: 2,
                    }
                }>
                    {this.props.task.approvedby}
                </div> */}

                <div style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        flex: 3,
                        textAlignLast: "right"
                    }
                }>
                    {this.props.task.createdBy}
                </div>
            </div>

        )
    }
}

export default TableRow;