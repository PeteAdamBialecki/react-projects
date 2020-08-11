import React from 'react';

export default ({ context }) => {
    const authUser = context.authenticatedUser;
    return (
        <div className="bounds">
            <div className="grid-100">
                <h1>{authUser.name} has been authenticated!</h1>
                <p>Hello {authUser.username}, thanks for stopping by..</p>
            </div>
        </div>
    );
}