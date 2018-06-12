import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function requireAuth(ComposedComponent) {
    class Authenticate extends Component {
        /* componentWillMount() {
            if(!this.props.isAuthenticated) {
                this.context.router.push('/login')
            }
        }

        componentDidUpdate(nextProps) {
            if(!nextProps.isAuthenticated) {
                this.context.router.push('/')
            }
        } */

        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    const mapStateToProps = state => {
        return {
            isAuthenticated: state.reducer.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate);
}
