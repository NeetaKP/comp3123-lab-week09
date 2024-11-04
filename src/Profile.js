import React from "react";

class Profile extends React.Component{
    render()
    {
        return(
            <div>
                <h1>{this.props.text.message}</h1>
                <h2>{this.props.title}</h2>
                <h3>{this.props.studentId}</h3>
                <h4>{this.props.name}</h4>
                <h5>{this.props.collegeName}</h5>
            </div>
        )
    }
}
export default Profile;