import React from "react";
import { connect } from "react-redux";
import { store } from "../app";

export default function withReducer(reducer, mapStateToProps, mapDispatchToProps) {
  return WrappedComponent => {
    const ConnectedWrappedComponent = connect(
      mapStateToProps,
      mapDispatchToProps
    )(WrappedComponent);

    class ReducerInjector extends React.Component {
      constructor(props) {
        super(props);
        this.injectReducer();
      }

      injectReducer() {
        if (typeof window === "object") {
          store.injectReducer(reducer);
        } else {
          console.error(
            `Could not inject reducer because the store is invalid.`
          );
        }
      }

      render() {
        return <ConnectedWrappedComponent {...this.props} />;
      }
    }

    return ReducerInjector;
  };
}
